/**
 * @author DaWangRaoMing
 * @date 16/4/10
 */
"use strict";

var sqwish = require("sqwish");
var Stream = require("stream");

/**
 * gulp-sqwish
 * @param [opt] options.
 */
module.exports = function (opt) {
    if (typeof opt !== "object" || !opt.hasOwnProperty("strict")) opt = {strict: false};
    var stream = new Stream.Transform({objectMode: true});
    stream._transform = function (file, encoding, callback) {
        var content = file.contents.toString();
        file.contents = new Buffer(sqwish.minify(content, !!opt.strict));
        callback(null, file);
    };
    return stream;
};