const gulp = require("gulp"),
  concat = require("gulp-concat"),
  sass = require("gulp-sass"),
  cleanCSS = require("gulp-clean-css"),
  minify = require("gulp-minify");

///// Watch for changes /////

async function watch() {
  gulp.watch("src/js/services/**/*.js", gulp.series(concatJS));
  gulp.watch("src/scss/**/*.scss", gulp.series(compileSASS));
}

/////// CSS ///////

function compileSASS(done) {
  gulp
    .src("src/scss/styles.scss")
    .pipe(
      sass({
        errLogToConsole: true
      })
    )
    .pipe(gulp.dest("src/css"))
    .on("end", done);
}

function minifyCSS() {
  return gulp
    .src("src/css/styles.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("src/css/minified/"));
}

/// JS ///

function concatJS() {
  return gulp
    .src(["src/js/services/**/*.js"])
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest("src/js"));
}

function minifyJS() {
  return gulp
    .src("src/js/scripts.js")
    .pipe(
      minify({
        noSource: true,
        ext: ".js"
      })
    )
    .on("error", function(e) {
      console.log(e);
    })
    .pipe(gulp.dest("src/js/minified"));
}

///// Build deployment files for /////
async function copyFilesToBuild() {
  gulp
    .src([
      "src/index.html",
      "src/404.html",
      "src/manifest.json",
      "src/manifest.json",
      "src/browserconfig.xml",
      "src/robots.txt"
    ])
    .pipe(gulp.dest("build/"));
  gulp.src("src/img/**/*").pipe(gulp.dest("build/img/"));
  gulp.src("src/css/minified/styles.css").pipe(gulp.dest("build/css/"));
  gulp.src("src/css/fonts/**/*").pipe(gulp.dest("build/css/fonts/"));
  gulp.src("src/js/minified/scripts.js").pipe(gulp.dest("build/js/"));
  gulp.src("src/js/data.js").pipe(gulp.dest("build/js/"));
}

exports.js = gulp.series(concatJS, minifyJS);
exports.css = gulp.series(compileSASS, minifyCSS);
exports.build = gulp.series(
  gulp.series(compileSASS, minifyCSS),
  gulp.series(concatJS, minifyJS),
  copyFilesToBuild
);
exports.default = gulp.series(concatJS, compileSASS, watch);
