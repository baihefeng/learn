/**
 * Created by neo.white on 2016/11/24.
 */
const g         = require('./library/getGlobal')(),
	  gulp      = require('gulp'),
      babel     = require('gulp-babel'),
	  less      = require('gulp-less'),
	  clean     = require('gulp-clean'),
      eslint    = require('gulp-eslint');

//eslint
gulp.task('lint',() => {
    return gulp.src(['./src/js/**/js','./src/lib/**/*.js'])
               .pipe(eslint())
               .pipe(eslint.format())
               .pipe(eslint.failAfterError());
});
//babel
gulp.task('2es5',() => {
    return gulp.src(['./src/js/**/*.js','./src/lib/**/*.js'])
               .pipe(babel({
		           presets: ['es2015']
               }))
               .pipe(gulp.dest('./dist'));
});
//less parsing
gulp.task('less',() => {
	return gulp.src(['./src/less/**/*.less'])
               .pipe(less())
	           .pipe(gulp.dest('./dist'));
});
//watch
gulp.task("up",() => {
	return gulp.watch(['./src/**/*.js','./src/**/.less','./src/**/*.html'],['lint','2es5','less']);
});
//clean dist
gulp.task("clean",() => {
	return gulp.src(['./dist/**/*'],{read: false})
	           .pipe(clean());
});

//default
gulp.task('start',['lint','2es5','less','up']);
