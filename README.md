#gulp-sqwish

##Welcome
css compress plugin, based on [sqwish](https://github.com/ded/sqwish).


##Basic Usage
```javascript
var gulp = require("gulp")
var sqwish = require('gulp-sqwish');
 
gulp.task('css', function () {
  return gulp.src('./css/**/*.css')
    .pipe(sqwish())
    .pipe(gulp.dest('./css'));
});
```

```css
/* before */
main {
    width: 500px;
    height: 500px;
}
main {
    color: red;
}

/* after */
main{width:500px;height:500px}main{color:red}
```

###Strict Optimizations
You can also use the strict mode.
use `{strict:true}`, like this.

```javascript
var gulp = require("gulp")
var sqwish = require('gulp-sqwish');
 
gulp.task('css', function () {
  return gulp.src('./css/**/*.css')
    .pipe(sqwish({strict:true}))
    .pipe(gulp.dest('./css'));
});
```

```css
/* before */
main {
    width: 500px;
    height: 500px;
}
main {
    color: red;
}

/* after */
main{color:red;width:500px;height:500px}
```



##欢迎使用
基于[sqwish](https://github.com/ded/sqwish)编写的gulp插件，用于压缩css。

CSS压缩引擎质量与速度对比：
[css-minification-benchmark: A comparison of CSS minifiers for node.js](https://goalsmashers.github.io/css-minification-benchmark/)

