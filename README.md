# Wearable Recording Glasses Survey Website

Static website files for the public survey page.

## Files

- `index.html`
- `styles.css`
- `script.js`
- `site-assets/`

## Footer logo links

- CCA logo → https://cca.arct.cam.ac.uk/
- NeuroCivitas logo → https://neurocivitas.group.cam.ac.uk/

## Survey links

Qualtrics survey links are set in `script.js` (`surveyLinks`) and mirrored as the default link in `index.html`:

- Arabic
- English
- French
- Chinese
- Dutch

Spanish and German are not yet available — add them to `surveyLinks` in `script.js` (and as `<option>`s in the language `<select>` elements in `index.html`) if those translations go live.

The page can be hosted as a static site, including with GitHub Pages.
