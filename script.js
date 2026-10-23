/* =========================================================
   WAYFARE v2 – script.js (jQuery)
   1 Scroll behaviour   2 Smooth scrolling   3 Package filter
   4 Booking modal      5 Form validation    6 Image fallback
   ========================================================= */
$(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $nav = $(".site-nav"), $toTop = $("#toTop"), $links = $(".site-nav .nav-link");
  var $sections = $("main section[id]");

  /* 1. SCROLL BEHAVIOUR – navbar shadow, back-to-top, active link.
        Optimised: section positions are cached, and work runs once per animation frame. */
  var tops = [], ticking = false;
  function measure() {
    tops = $sections.map(function () { return { id: this.id, top: $(this).offset().top }; }).get();
  }
  function update() {
    var y = window.pageYOffset;
    $nav.toggleClass("scrolled", y > 20);
    $toTop.toggleClass("show", y > 600);
    var current = tops.length ? tops[0].id : "home";
    for (var i = 0; i < tops.length; i++) { if (y + 130 >= tops[i].top) current = tops[i].id; }
    $links.each(function () { $(this).toggleClass("active", $(this).attr("href") === "#" + current); });
    ticking = false;
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { measure(); onScroll(); });
  window.addEventListener("load", function () { measure(); update(); });   // images/fonts can shift layout
  measure(); update();

  /* 2. SMOOTH SCROLLING – offsets for the fixed navbar, respects reduced-motion, moves focus for keyboard users */
  function scrollToTarget($t) {
    var y = $t.offset().top - 70;
    if (reduceMotion) { window.scrollTo(0, y); }
    else { $("html, body").stop(true).animate({ scrollTop: y }, 600); }
    if ($t[0]) { $t.attr("tabindex", "-1"); $t[0].focus({ preventScroll: true }); }
  }
  $('a[href^="#"]').on("click", function (e) {
    var id = this.getAttribute("href");
    if (id.length < 2) { e.preventDefault(); return; }     // placeholder "#" links (social icons) do nothing
    var $t = $(id);
    if (!$t.length) return;
    e.preventDefault();
    scrollToTarget($t);
    var menu = document.getElementById("navMenu");
    if (menu && menu.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
  $toTop.on("click", function () { scrollToTarget($("#home")); });

  /* 3. PACKAGE FILTER – All / Domestic / International (also driven by "See packages" links) */
  var $items = $(".pkg-item");
  function filterPackages(type) {
    $(".btn-filter").each(function () {
      var on = $(this).data("filter") === type;
      $(this).toggleClass("active", on).attr("aria-pressed", on);
    });
    var shown = 0;
    $items.each(function () {
      var $i = $(this), show = type === "all" || $i.data("type") === type;
      $i.toggleClass("d-none", !show);
      if (show) { shown++; $i.addClass("pkg-enter"); }
    });
    setTimeout(function () { $items.removeClass("pkg-enter"); }, 500);
    $("#pkgCount").text("Showing " + shown + (shown === 1 ? " package" : " packages"));
  }
  $(".btn-filter").on("click", function () { filterPackages($(this).data("filter")); });
  $("[data-filter-jump]").on("click", function () { filterPackages($(this).data("filter-jump")); });

  /* 4. BOOKING MODAL – shows the chosen package name */
  var bookingEl = document.getElementById("bookingModal");
  var closeTimer = null;
  $(bookingEl).on("show.bs.modal", function (event) {
    var pkg = $(event.relatedTarget).data("package") || "your package";
    $("#modalPackage").text(pkg);
    $("#bPackage").val(pkg);
    clearTimeout(closeTimer);
    resetForm($("#bookingForm"), $("#bookingSuccess"));
  });

  /* 5. FORM VALIDATION – inline messages (no alert popups) */
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  var d = new Date();
  var today = d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());   // LOCAL date (not UTC)
  $('input[type="date"]').attr("min", today);

  function validField($f) {
    var v = String($f.val() || "").trim(), type = $f.attr("type");
    if ($f.prop("required") && !v) return false;
    if (!v) return true;
    if (type === "email")  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    if (type === "tel")    { var n = v.replace(/\D/g, ""); if (n.length === 12 && n.indexOf("91") === 0) n = n.slice(2); return /^[6-9]\d{9}$/.test(n); }
    if (type === "date")   return v >= today;
    if (type === "number") { var x = +v; return x >= +$f.attr("min") && x <= +$f.attr("max"); }
    return true;
  }
  function mark($f) {
    var ok = validField($f);
    $f.toggleClass("is-invalid", !ok).toggleClass("is-valid", ok && !!String($f.val() || "").trim());
  }
  function resetForm($form, $ok) {
    $form[0].reset();
    $form.find(".form-control, .form-select").removeClass("is-invalid is-valid");
    $ok.addClass("d-none");
  }
  function handleSubmit($form, $ok, onDone) {
    var good = true;
    $form.find("[required]").each(function () { mark($(this)); if (!validField($(this))) good = false; });
    if (!good) { $form.find(".is-invalid").first().trigger("focus"); return; }
    // Demo only. For a real backend: $.post("your-server-url", $form.serialize())
    $form[0].reset();
    $form.find(".form-control, .form-select").removeClass("is-valid");
    $ok.removeClass("d-none");
    if (onDone) onDone();
  }
  $("#enquiryForm").on("submit", function (e) { e.preventDefault(); handleSubmit($(this), $("#enquirySuccess")); });
  $("#bookingForm").on("submit", function (e) {
    e.preventDefault();
    handleSubmit($(this), $("#bookingSuccess"), function () {
      closeTimer = setTimeout(function () { bootstrap.Modal.getOrCreateInstance(bookingEl).hide(); }, 2200);
    });
  });
  $("form").on("blur change", "[required]", function () { mark($(this)); });
  $("form").on("input", ".is-invalid", function () { mark($(this)); });

  /* 6. IMAGE FALLBACK – if a photo can't load, hide it so the soft gradient + icon behind it shows */
  $("img.media-img").each(function () {
    var img = this;
    $(img).on("error", function () { $(img).addClass("is-broken"); });
    if (img.complete && img.naturalWidth === 0 && img.currentSrc) $(img).addClass("is-broken");
  });
});
