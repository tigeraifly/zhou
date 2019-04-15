const gulp = require("gulp");
const fs = require("fs");
const server = require("gulp-webserver");
const uglify = require("gulp-uglify");


gulp.task("uglify", () => {
    return gulp.src("./src/js")
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})
gulp.task("uglify1", () => {
    return gulp.src("./src/css")
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})



gulp.task("we1", () => {
    return gulp.src(".")
        .pipe(server({
            prot: 8080,
            niddleware: (req, res) => {
                // const srcc = req.
                res.end("ijrb")
            }
        }))
})


gulp.task("we", ["we1", "uglify", "uglify1"])