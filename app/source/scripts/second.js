function installGulpPackages(){
	var cssdata = ["gulp-clean-css --save-dev", "--save-dev gulp-csslint", "gulp-sourcemaps"],
		jsdata = ["jshint gulp-jshint --save-dev", "--save-dev jshint-stylish", "gulp-uglify", "gulp-concat"],
		bothdata = ["gulp-notify", "gulp-rename"],
		oneArray = cssdata.concat(jsdata);

	oneArray = oneArray.concat(bothdata);

	var installInTerminal = "npm install ";
	for (var i = 0; i < oneArray.length; i++) {
		if (i === oneArray.length) {
			installInTerminal += oneArray[i];
		}else{
			installInTerminal += oneArray[i] + " ";
		}
		
	}

	return installInTerminal;
}