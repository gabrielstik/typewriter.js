const gulp = require('gulp')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

gulp.task('minify', () => {
	return gulp.src('scripts/typewriter.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(rename('typewriter.min.js'))
		.pipe(gulp.dest('scripts/ù'))
})