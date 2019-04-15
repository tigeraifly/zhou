const gulp = require("gulp");
const fs = require("fs");
const server = require("gulp-webserver");
const uglify = require("gulp-uglify");

//压缩js文件
gulp.task("uglify", () => {
        return gulp.src("./src/js")
            .pipe(uglify())
            .pipe(gulp.dest('./dist'))
    })
    //压缩css文件
gulp.task("uglify1", () => {
    return gulp.src("./src/css")
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})



//gulp其服务
gulp.task("we1", () => {
    return gulp.src(".")
        .pipe(server({
            prot: 8080, //端口号8080
            niddleware: (req, res) => {
                res.end("qoi")
            }
        }))
})



gulp.task("we", ["we1", "uglify", "uglify1"])