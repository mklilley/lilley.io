# [lilley.io](https://lilley.io/)

I built this portfolio website in 2016.

After spending a lot of time in the AngularJS world, I decided that I wanted to go back to basics for a bit and so made this site with pure HTML, CSS and JavaScript.

Use the `dev` branch when you want to make changes to lilley.io - the live code lives in the `master` branch.

This project uses [gulp](https://gulpjs.com/) as the build tool. As of Jan 2023 I am in the process of refactoring the codebase to use vite.

## Getting started

**Notes: To build this site, you must be using node v18 and npm v8.**

After you clone the repo, you will need to checkout the `dev` branch and then:

- run `npm install` to install the gulp dependencies and vite
- run `npm run gulp` in one terminal to start watching for file changes
- run `npm run vite` in other terminal to launch a dev server with hot reloading

You are now ready to start coding - head over to the `src` folder where you'll find the website source code and assets.

## Build site

- Checkout the `dev` branch
- Run `npm run build`
- You will then find a new folder called `build` inside of which is the processed and minified code and assets ready for deployment.
