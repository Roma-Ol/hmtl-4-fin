const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-compile', function(){
    return gulp.src('./scss/**/*.scss')     //вказуємо, де галп шукатиме наш файли для компіляції
    .pipe(sourcemaps.init())    //підключаємо соурсмапс модуль
    .pipe(sass().on('error', sass.logError))    //запускаємо сас і відображаємо помилки
    .pipe(sourcemaps.write('./'))   //вказуємо, куди будемо записувати дані
    .pipe(gulp.dest('./css/')); //вказуємо, куди будуть лягати скомпільовані файли
});

gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'));
});