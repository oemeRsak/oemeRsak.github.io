# Ömer Rasim Sak — portfolio

Personal portfolio site for Ömer Rasim Sak, deployed as a static GitHub Pages site.

## Structure

- `static/index.html` — page content and semantic structure
- `static/assets/css/bss-overrides.css` — responsive visual system
- `static/assets/js/index.js` — theme persistence and small progressive enhancements

The site intentionally stays dependency-light: fonts are loaded from Google Fonts, while the page itself is plain HTML, CSS, and vanilla JavaScript. It includes a light/dark theme toggle that remembers the visitor's preference. Deployment is handled by `.github/workflows/static.yml`.
