var
	gulp = require('gulp'),
	rename = require('gulp-rename'),
	stylus = require('gulp-stylus'),
	autoprefixer = require('gulp-autoprefixer'),
	csso = require('gulp-csso');

gulp.task('css', function() {
	gulp.src('./src/extreset.styl')
		.pipe(stylus())
		.pipe(autoprefixer({ browsers: ['last 2 versions', 'ios >= 7','firefox >=4','safari >=7','IE >=8','android >=2'] }))
		.pipe(gulp.dest('./dist/'))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(csso())
		.pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['css']);
