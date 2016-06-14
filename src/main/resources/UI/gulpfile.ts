"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

const reload = browserSync.reload;

gulp.task('clean', (cb) => {
    return del(["../public"], cb);
});

gulp.task('tslint', () => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("../public"));
});

gulp.task('sass', function () {
  gulp.src(['src/**/*.scss', '!node_modules/**/*.*'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(function(file) {
            return file.base;
    }));
});

gulp.task("resources", () => {
    return gulp.src(["src/**/*", "!**/*.ts", "!**/*.scss"])
        .pipe(gulp.dest("../public"));
});

gulp.task("libs", () => {
    return gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**'
        ], {cwd: "node_modules/**"})
        .pipe(gulp.dest("../public/lib"));
});


gulp.task('browserSync', function () {
    browserSync.init({
        port: 8000,
        proxy: "http://localhost:8080"
    });

	function debounce(fn, delay) {
	  var timer = null;
	  return function () {
		var context = this, args = arguments;
		clearTimeout(timer);
		timer = setTimeout(function () {
		  fn.apply(context, args);
		}, delay);
	  };
	}

	//gulp.watch('../../../../target/**/*').on("change", debounce(reload, 2000));

    gulp.watch(["src/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
        reload();
    });
    gulp.watch(["src/**/*.html", "src/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
        reload();
    });
    gulp.watch('src/**/*.scss', ['sass', 'resources'], function(e){
        console.log('Sass file ' + e.path + ' has been changed. Updating.');
        reload();
    });
});


gulp.task('watch', function () {
    gulp.watch(["src/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["src/**/*.html", "src/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch('src/**/*.scss', ['sass', 'resources'], function(e){
        console.log('Sass file ' + e.path + ' has been changed. Updating.');
    });
});

gulp.task("build", ['compile', 'sass', 'resources', 'libs'], () => {
    console.log("Building the project ...");
});