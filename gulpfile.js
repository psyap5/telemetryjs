var gulp = require("gulp"),
    cleanCss = require("gulp-clean-css"),
    less = require("gulp-less");

gulp.task("less", function () {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(cleanCss({ compatibility:  'ie8' }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', function() {
    gulp.watch('./less/*.less', gulp.series('less'));
});