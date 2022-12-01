var gulp = require('gulp'),
webpack = require('webpack'),
webpackConfig = require('../../webpack.config.js');

gulp.task('scripts', function(cb) {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig, (err, stats) => {
            if (err) {
                return reject(err);
            }
            if (stats.hasErrors()) {
                return reject(new Error(stats.compilation.errors.join('\n')));
            }
            resolve();
        });
    });
});

gulp.task('scripts-final', gulp.series('modernizr', 'scripts'));