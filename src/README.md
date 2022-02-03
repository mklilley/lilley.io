# Source files and assets for lilley.io

This is the folder you will need to modify in order to make changes to the website.

Notes:
- You should first run `gulp` before you start to code - this watches for file changes
- You can view the result of your coding by running `http-server -c-1` inside of this `src` folder

## JS

- Create and modify files inside `js/services`
- Files in `js/services` are automatically concatenated into a single file `scripts.js` which is then called in `index.html`

## CSS

- Create and modify files inside of `scss`
- `scss/styles.scss` is the "mother ship" scss file
- Files in `scss` are automatically compiled into a single file `css/styles.css` which is then called in `index.html`

## HTML

- The only thing you need to remember when in local development mode is to comment out the `<base>` tag on `line 30` so that the router doesn't give an error
