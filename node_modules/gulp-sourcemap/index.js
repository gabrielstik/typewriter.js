var through = require('through2');
// var applySourceMap = require('vinyl-sourcemaps-apply');
var path = require('path')
var fs = require('fs')
var UglifyJS = require("uglify-js")
var gutil = require('gulp-util');

var PluginError = gutil.PluginError;

var PLUGIN_NAME = 'gulp-sourcemap'

module.exports = function(options) {
        
    options = options || {};

    function minify(file, encoding, callback) {
        // ignore empty files
        if (file.isNull()) {
          cb();
          return;
        }
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME,  'Streaming not supported'));
            cb();
            return;
        }

        if(!options.outSourceMap) options.outSourceMap = file.relative;
        if(!options.write) options.write = file.base;

        var appInfo = require(process.cwd().toString() + '/package');

        if(appInfo&&appInfo.version){
            options.version = appInfo.version
        }
        // console.log("appInfo:",appInfo.version)
        // console.log("appInfo:",process.cwd().toString())

        var result = UglifyJS.minify([file.path],options);
        var map = JSON.parse(result.map);
        var arr = map.sources;
        arr.forEach(function(item,idx){
            arr.splice(idx,1, item.toString().replace(process.cwd().toString(),''))
        });
        map.sources = arr;
        write(options.write + options.outSourceMap,JSON.stringify(map))
        
        this.push(file);
        callback(null,file);
    }

    return through.obj(minify);
};

//写文件
function write(filepath, content) {
    mkdirsSync(path.dirname(filepath));
    return fs.writeFileSync(filepath, content);
};

// 同步循环创建所有目录 resolvePath
function mkdirsSync(dirpath, mode) {
    if(fs.existsSync(dirpath)){
        return true;
    }else{
        if(mkdirsSync(path.dirname(dirpath), mode)){
            fs.mkdirSync(dirpath, mode);
            return true;
        }
    }
};