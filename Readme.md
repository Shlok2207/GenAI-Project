# Wayfare

## Live Demo

[🚀 Visit the live website](https://shlok2207.github.io/GenAI-Project/)

Wayfare is a front-end travel and tourism landing website concept for browsing domestic and international trips. It presents curated destinations, package deals, hotel suggestions, activities, and enquiry options in a polished travel brand style.

The project is built using plain HTML, CSS, and JavaScript, with Bootstrap for layout and UI components, and runs as a front-end website with no backend or database.

## Overview

Wayfare helps users:

- Explore destination cards across domestic and international categories
- Filter travel packages by trip type
- View featured hotel recommendations and add-on activities
- Submit demo enquiry and booking requests with client-side validation
- Navigate through a smooth, accessible single-page layout

This is a concept website designed for UI/UX demonstration and front-end prototyping, focused on showcasing frontend skills and a polished travel brand experience.

## Features

- 8 destination cards across domestic and international tabs
- 6 travel package cards with pricing and package filters
- Booking modal that displays the selected package name
- Enquiry form and booking form with inline validation
- Responsive layout optimized for mobile, tablet, and desktop screens
- Sticky navigation, smooth scroll, active section highlighting, and back-to-back button
- Keyboard-friendly interactions and skip-to-content support
- Reduced-motion support for users who prefer minimal animation
- Accessible labels, focus states, and status updates for assistive technologies
- Video section highlighting Rajasthan-inspired travel content
- Lightweight front-end setup with no build pipeline required

## Tech Stack

- HTML5
- CSS3
- JavaScript (jQuery)
- Bootstrap 5.3.3
- Font Awesome 6.5.2
- Google Fonts (Fraunces and Source Sans 3)

The site loads external assets via CDN, including Bootstrap, Font Awesome, fonts, and travel imagery.

## Project Structure

```text
GenAI-Project/
├── index.html
├── style.css
├── script.js
├── Readme.md
```

### File responsibilities

- `index.html` – page structure, destination/package content, form markup, modal, and embedded scripts/styles
- `style.css` – theme, layout, colors, responsive styling, cards, buttons, and animations
- `script.js` – navigation behavior, package filtering, modal logic, and client-side form validation
- `Readme.md` – project overview and usage instructions

## Deployment

This project is deployed on GitHub Pages at:

```text
https://shlok2207.github.io/GenAI-Project/
```

No install step or build process is required for the live deployment.

Note: an internet connection is required because the project uses CDN-hosted libraries, fonts, photos, and the video source.

## Functional Notes

- The enquiry and booking forms simulate successful submissions with front-end feedback only.
- No real data is stored or sent to a backend.
- Package filtering is handled client-side to demonstrate UI behavior.
- Navigation and forms are designed to work without a framework build process.

## Accessibility and UX Highlights

The project includes several front-end accessibility considerations:

- Semantic HTML landmarks and headings
- Skip-to-content link
- Visible keyboard focus styling
- Descriptive labels and form validation messages
- Reduced-motion detection for smoother interaction on motion-sensitive devices
- Live status messaging for filter results and form submission feedback

## Summary

Wayfare is a front-end travel website concept focused on showcasing destination browsing, package selection, and polished user interaction in a tourism brand style. It demonstrates how a travel brand can present curated journeys with a clean, responsive, and accessible browsing experience.
