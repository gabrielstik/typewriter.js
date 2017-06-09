# gulp-sourcemap

Source map support for `Gulp.js`.  
Write inline source maps.  
Inline source maps are embedded in the source file.  


## Usage

Example:

```js
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemap');
gulp.src('dist/JSLite.js')
    .pipe(sourcemap({
        outSourceMap:'JSLite.js.map',
        sourceRoot:"http://jslite.io",
        write:'./build/'
    }))
    .pipe(gulp.dest('./build/'));
```

## Options



`sourceRoot` root: the sourceRoot property (see the spec)  
`outSourceMap` The inSourceMap is only used if you also request outSourceMap (it makes no sense otherwise).
