/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="helper.js">
*   Copyright (c) 2018 Aspose.HTML for Cloud
* </copyright>
* <summary>
*   Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the "Software"), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in all
*  copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*  SOFTWARE.
* </summary>
* --------------------------------------------------------------------------------------------------------------------
*/
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Asposehtmlcloud);
  }
}(this, function(expect, Asposehtmlcloud) {

'use strict'

var fs = require('fs');
var conf = JSON.parse(fs.readFileSync(__dirname + '/../setting/config.json', 'utf8'));
var local_dst_folder = __dirname + "/../"+ conf['testResult'];
var local_src_folder = __dirname + "/../"+ conf['testData'];

// Get all api
var api = new Asposehtmlcloud.StorageApi();

exports.conf = conf;

exports.saveToTestFolder = function (filename, buffer){

    var dst = local_dst_folder + "/" + filename;
    var fd = fs.openSync(dst, 'w');
    var len = fs.writeSync(fd, buffer);
    return len;
};

exports.uploadFile = function(filename, uploadFolder, callback){
    var folder = uploadFolder || conf['remoteFolder'];
    var opts = {
        versionId: null,
        storage: null
    };
    var file = local_src_folder + "/" + filename;
    api.putCreate(folder + "/" + filename, file, opts, callback);
};

exports.getFileSize = function(filename){
  var stats = fs.statSync(local_src_folder + "/" + filename);
  return stats.size;
};
}));