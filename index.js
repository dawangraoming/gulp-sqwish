/**
 * @author DaWangRaoMing
 * @date 16/4/10
 */
"use strict";

var sqwish = require("sqwish");
var Stream = require("stream");

module.exports = function (useStrict) {
    var stream = new Stream.Transform({objectMode: true});
    stream._transform = function (file, encoding, callback) {
        var content = file.contents.toString();
        file.contents = new Buffer(sqwish.minify(content, !!useStrict));
        callback(null, file);
    };
    return stream;
};