var gulp = require("gulp");
var sass = require("gulp-sass");
var mincss = require("gulp-clean-css");
var minjs = require("gulp-uglify");
var minhtml = require("gulp-htmlmin");
var sequence = require("gulp-sequence");
var clean = require("gulp-clean");
var data = require("./src/json/data.json");
var server = require("gulp-webserver");


gulp.task("clean", function() {
    return gulp.src("dist")
        .pipe(clean())
})

gulp.task("mincss", function() {
    return gulp.src("src/css/*")
        .pipe(sass())
        .pipe(mincss())
        .pipe(gulp.dest("dist/css"))
})

gulp.task("minjs", function() {
    return gulp.src("src/js/*.js")
        .pipe(minjs())
        .pipe(gulp.dest("dist/js"))
})

gulp.task("oimg", function() {
    return gulp.src("src/img/*.jpg")
        .pipe(gulp.dest("dist/img"))
})
gulp.task("ico", function() {
    return gulp.src("src/fonts/*")
        .pipe(gulp.dest("dist/fonts"))
})

var options = {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: true,
    minifyCSS: true
}
gulp.task("minhtml", ["mincss", "minjs", "oimg"], function() {
    return gulp.src("src/*.html")
        .pipe(minhtml(options))
        .pipe(gulp.dest("dist"))
})
gulp.task("watch", function() {
    gulp.watch("src/css/*", ["mincss", "minhtml"])
    gulp.watch("src/img/*.jpg", ["oimg", "minhtml"])
    gulp.watch("src/fonts/*", ["ico", "minhtml"])
    gulp.watch("src/js/*.js", ["minjs", "minhtml"])
    gulp.watch("src/*.html", ["minhtml"])
})
gulp.task("server", function() {
    gulp.src("dist")
        .pipe(server({
            port: 3356,
            open: true,
            livereload: true,
            host: "localhost",
            middleware: function(req, res, next) {
                if (/\/getdata/g.test(req.url)) {
                    res.end(JSON.stringify(data))
                }


                next();
            }

        }))
})

gulp.task("default", function(cd) {
    sequence("clean", ["mincss", "minjs", "oimg", "ico"], "minhtml", "watch", "server", cd)
})