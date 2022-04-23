# [lilley.io](https://lilley.io/)

I built this portfolio website in 2016.

After spending a lot of time in the AngularJS world, I decided that I wanted to go back to basics for a bit and so made this site with pure HTML, CSS and JavaScript.

Use this `dev` branch when you want to make changes to lilley.io - the live code lives in the `master` branch.

This project uses [gulp](https://gulpjs.com/) as the build tool.

## Getting started

After you clone the repo, you will need to:

- [Install gulp](https://gulpjs.com/docs/en/getting-started/quick-start). This should be a simple as doing `npm install --global gulp-cli` on the command line.
- run `npm install` to install the gulp dependencies and http-server
- run `gulp` to start watching for file changes

You are now ready to start coding - head over to the `src` folder where you'll find the website source code and assets.

**Notes: This site was originally made using node v12.10.0 and Gulp CLI version: 2.3.0 and Gulp
Local version: 4.0.2**

## Build site

- Run `gulp build`
- You will then find a new folder called `build` inside of which is the processed and minified code and assets ready for deployment.
