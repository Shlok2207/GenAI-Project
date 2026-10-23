# Wayfare

Wayfare is a front-end-only travel and tourism website concept for browsing domestic and international trips. It is built with HTML, CSS, and JavaScript and runs as a static site; it has no backend or data-storage component.

## Features

- Browse eight destinations across domestic and international tabs.
- Filter six travel packages by trip type and open a booking modal for a selected package.
- View featured hotels, suggested activities, and a Rajasthan travel video.
- Try enquiry and booking forms with client-side validation and demo success feedback.
- Responsive layout, keyboard-friendly navigation, and reduced-motion support.
- Smooth in-page navigation, active-section highlighting, and a back-to-top button.

## UI/UX principles

- **Responsive design:** Bootstrap's grid and responsive components adapt the layout to mobile, tablet, and desktop screens.
- **Clear visual hierarchy:** Distinct headings, readable type, consistent spacing, and a restrained warm-and-sage palette help visitors scan destinations and packages.
- **Consistent interactions:** Reusable buttons, cards, and section patterns make controls and content easier to recognize.
- **Accessible navigation:** Semantic landmarks, a skip-to-content link, visible keyboard focus, descriptive labels, and ARIA status updates support assistive technology and keyboard users.
- **Reduced motion:** Animations and smooth scrolling are minimized when the visitor's operating-system preference requests reduced motion.
- **Helpful feedback:** Package filters announce the number of results, and forms show inline validation rather than relying on alert pop-ups.
- **Perceived performance:** Images load lazily, reserve space to reduce layout shifts, and show a styled fallback if an image fails.

## Run locally

No build step or package installation is needed.

1. Clone or download this repository.
2. Open `index.html` in a browser, or serve the project folder with a local web server. For example:

   ```powershell
   py -m http.server 8000
   ```

3. Visit <http://localhost:8000>.

An internet connection is required to load the CDN-hosted libraries, fonts, destination photos, and video.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page content, destination and package data, forms, and booking modal |
| `style.css` | Theme, responsive layout, and component styling |
| `script.js` | Navigation, package filtering, modal setup, and form validation |

## Technology

- HTML5 and CSS3
- Bootstrap 5.3.3 (CSS and JavaScript bundle)
- jQuery 3.7.1
- Font Awesome 6.5.2
- Google Fonts: Fraunces and Source Sans 3

Dependencies are loaded from CDNs in `index.html`; this project does not currently use a package manager or build pipeline.

## Front-end scope

All interactions are implemented in the browser for demonstration. Enquiry and booking forms validate input and display a success message, but do not submit, send, or save data. Package, hotel, and contact details are sample content; no actual travel service or booking is provided.