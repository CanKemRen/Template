var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var config = {
    inputDir: './src/main/client',
    outputDir: './src/main/resources/static'
};


var sassOptions = {
    errLogToConsole: true,
    style: 'compressed',
    outputStyle: 'expanded',
    includePaths: [
        config.bowerDir + '/bootstrap-sass/assets/stylesheets'
    ]
};

gulp.task('sass', function () {
    return gulp.src(config.inputDir + '/scss/*.scss')
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(minifyCss({
            keepSpecialComments: 0,
            compatibility: 'ie8',
            keepBreaks: false
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(config.outputDir +'/css'));
});

gulp.task('watch', function() {
    gulp.watch(config.inputDir + '/scss/**/*.scss', ['sass']);
});

gulp.task('default', [
    'sass',
    'watch'
]);