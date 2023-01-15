# Source files and assets for lilley.io

This is the folder you will need to modify in order to make changes to the website.

Notes:
- You should first run `npm run gulp` before you start to code - this watches for file changes
- You can view the result of your coding by running `npm run vite` which launches a dev server with hot reloading

## JS

- Create and modify files inside `js/services`
- Files in `js/services` are automatically concatenated into a single file `scripts.js` which is then called in `index.html`

## CSS

- Create and modify files inside of `scss`
- `scss/styles.scss` is the "mother ship" scss file
- Files in `scss` are automatically compiled into a single file `css/styles.css` which is then called in `index.html`

## HTML

- Modify the template tags to change the structure of the pages
- The templates are populated using data from `js/data.js`
