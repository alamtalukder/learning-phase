Pin Matcher — small demo

This repository is a small demonstration app that generates a 4-digit PIN and lets the user type a PIN using an on-screen keypad.

What I changed

- Moved inline event handlers into `src/js/app.js` and used event delegation for the keypad.
- Moved styles into `src/css/styles.css` and updated `index.html` to reference these paths.
- Improved accessibility (labels, aria attributes) and ensured generated PIN is 4 digits.

How to run

Open `index.html` in a browser (no server required). The project uses only static assets.

Next suggested steps

- Add ESLint + Prettier and a small npm setup if you want to introduce toolchain.
- Add small unit tests with a headless browser or DOM testing library.
- Consider moving to a `src/` + `dist/` workflow and a bundler for larger projects.
