var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){

    browserSync.init({
        notify: true,
        server: {
            baseDir: "app"
        }
    });

    gulp.watch("./app/*.html").on('change', browserSync.reload);

    gulp.watch('./app/assets/styles/**/*.css', gulp.series('cssInject'));

    gulp.watch('./app/assets/scripts/**/*.js', gulp.series('scripts', javascriptRefresh));
    
});

gulp.task('cssInject', gulp.series('styles', function() {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
}));

function javascriptRefresh(cb) {
    //reload browser
    browserSync.reload();
    console.log("Scripts Refreshed!");
    cb();
  }