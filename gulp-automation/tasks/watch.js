var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){

    browserSync.init({
        //notify: false,
        server: {
            baseDir: "app"
        }
    });

    gulp.watch("./app/*.html").on('change', browserSync.reload);

    gulp.watch('./app/assets/scripts/**/*.js', gulp.series('scriptsRefresh'));

    gulp.watch('./app/assets/styles/**/*.css', gulp.series('cssInject'));

    return
});

gulp.task('scriptsRefresh', gulp.series('scripts', function() {
    return browserSync.reload();
}));

gulp.task('cssInject', gulp.series('styles', function() {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
}));