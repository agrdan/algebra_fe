const gulp = require("gulp");
const babel = require("gulp-babel");
const cssnano = require("gulp-cssnano");
const sass = require("gulp-dart-sass");
const uglify = require("gulp-uglify");


gulp.task('js', function(){
    return gulp.src('js/script.js')
		.pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(gulp.dest('js/min'));
});

gulp.task('sass', function(){
    return gulp.src('css/style.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
    gulp.watch('js/*.js', gulp.series('js'));  
    gulp.watch('css/*.scss', gulp.series('sass'));  
});

exports.default = gulp.series('js', 'sass', 'watch');