# gulp basic template
this is a litle basic gulp template you can use to create wonderfull things :smile: :scream:
### map structure *[(download this repository)](https://github.com/KarelVerhulst/gulp_basic_template/archive/master.zip)*
```
├── app
│   ├── dist
│   │   ├── css
│   │   ├── js
│   ├── scripts
│   ├── styles
│   ├── index.html
├── node_modules
├── gulpfile.js
```
### install gulp
##### global *as a dependency:*
```
$ npm install gulp -g
```

##### local *as a development dependency:*
```
npm install --save-dev gulp-install
```

### install gulp packages
##### **CSS**
* [gulp-clean-css] (https://www.npmjs.com/package/gulp-clean-css)
* [gulp-csslint] (https://www.npmjs.com/package/gulp-csslint)
* [gulp-sourcemaps] (https://www.npmjs.com/package/gulp-sourcemaps)

##### **JS**
* [gulp-jshint] (https://github.com/spalger/gulp-jshint)
* [jshint-stylish] (https://www.npmjs.com/package/jshint-stylish)
* [gulp-uglify] (https://www.npmjs.com/package/gulp-uglify)
* [gulp-concat] (https://www.npmjs.com/package/gulp-concat)

##### **BOTH**
* [gulp-notify] (https://www.npmjs.com/package/gulp-notify)
* [gulp-rename] (https://www.npmjs.com/package/gulp-rename)

##### To install all the packages use this in your command
```
$ npm install gulp-clean-css --save-dev --save-dev gulp-csslint gulp-sourcemaps jshint gulp-jshint --save-dev --save-dev jshint-stylish gulp-uglify gulp-concat gulp-notify gulp-rename 
```

> in your command typ 'gulp' and thats it (you can always edit the gulpfile.js)
