
/**
 * Created by Karel on 29/09/15.
 */

var gulp = require("gulp"),
	// ---- CSS --------
	csslint =  require("gulp-csslint"),
  cssMinifier = require("gulp-clean-css"),
  sourcemaps = require("gulp-sourcemaps"),

    // ------ JS -------
  jshint = require("gulp-jshint"),
  jsStylish = require("jshint-stylish"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),

    //IMAGE
  imagemin = require('gulp-imagemin'),

    // ----- BOTH ------
  notify = require("gulp-notify"),
	rename = require("gulp-rename");
    
    

gulp.task("default", function () {
	var cssWatcher = gulp.watch('./app/source/styles/**/*.css', ['css-build']);
	cssWatcher.on('change', function(event){
		console.log("File: " + event.path + " was " + event.typed);
	});

	var jsWatcher = gulp.watch('./app/source/scripts/**/*.js', ['js-build']);
	jsWatcher.on('change', function(event){
		console.log("File: " + event.path + " was " + event.typed);
	});
});

gulp.task("js-build", function(){
  gulp.src("./app/source/scripts/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter(jsStylish))
    .pipe(sourcemaps.init())
    .pipe(concat("app.js")) // voegt alle js files in 1 javascript file 
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("./app/dist/js"))
    .pipe(notify({message: 'js build'}));
});

gulp.task("css-build", function(){
  gulp.src("./app/source/styles/*.css")
    .pipe(csslint({
      'ids': false
    }))
    .pipe(csslint.formatter('text'))
    .pipe(sourcemaps.init())
    .pipe(cssMinifier())
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("./app/dist/css"))
    .pipe(notify({message: 'css build'}));
});


// in terminal type => gulp img-built to active this task
gulp.task('img-built', function() {
    gulp.src('./app/source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./app/dist/images'))
        .pipe(notify({message: 'img build'}));
});