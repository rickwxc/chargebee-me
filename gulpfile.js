const gulp = require('gulp');
const run = require('gulp-run');

gulp.task('watch', () => gulp.watch(['src/**/*.js', 'tests/**/*.js'], gulp.series('test')));

gulp.task('test', () => run('npm test').exec());

gulp.task('default', gulp.series('watch'));

