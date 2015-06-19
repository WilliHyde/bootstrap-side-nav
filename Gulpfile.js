var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed',
			errLogToConsole: true
		}))
		.pipe(rename(function(path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('default',function() {
	gulp.watch('sass/**/*.scss',['styles']);
});