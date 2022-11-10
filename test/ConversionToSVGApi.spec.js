/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="ConversionHtmlApi.spec.js">
*   Copyright (c) 2022 Aspose.HTML for Cloud
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

var helper = require('./helper');

(function (root, factory) {
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
}(this, function (expect, Asposehtmlcloud) {
    'use strict';

    var convert_api, storage_api;
    var fs, path;
    var local_src_folder, local_dst_folder;

    before(function (done) {
        this.timeout(200000);
        convert_api = new Asposehtmlcloud.ConversionApi(helper.conf);
        storage_api = new Asposehtmlcloud.StorageApi(helper.conf);
        fs = require('fs');
        path = require('path');
        local_src_folder = __dirname + "/../testdata/";
        local_dst_folder = __dirname + "/../testresult/";
        done();
    });

    var getProperty = function (object, getter, property) {
        // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function')
            return object[getter]();
        else
            return object[property];
    };

    var setProperty = function (object, setter, property, value) {
        // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function')
            object[setter](value);
        else
            object[property] = value;
    };

    describe('ConversionToSVGApi', function () {
        this.timeout(1800000);
        var formats = ["jpg", "png", "tiff", "bmp", "gif"]
        var inputFile = "car."

        formats.forEach((f)=> {

            describe('ToSVGLocalToLocal', function () {
                it('should call convert local to local file successfully (svg)', function (done) {
                    var src = local_src_folder + inputFile + f;
                    var dst = local_dst_folder + "SVG_" + f.toUpperCase() + ".svg";

                    convert_api.convertLocalToLocal(src, dst, null, function (err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);
                        expect(fs.existsSync(data.file)).to.be(true);
                        done();
                    });
                });
            });

            describe('ToSVGLocalToLocalWithOpts', function () {
                it('should call convert local to local file with opts successfully (svg)', function (done) {
                    var src = local_src_folder + inputFile + f;
                    var dst = local_dst_folder + "SVGWithOpts_" + f.toUpperCase() + ".svg";
                    var opts = {
                        'error_threshold': 1,
                        'max_iterations': 50,
                        'colors_limit': 2,
                        'line_width': 1,
                    }
                    convert_api.convertLocalToLocal(src, dst, opts, function (err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);
                        expect(fs.existsSync(data.file)).to.be(true);
                        done();
                    });
                });
            });
        });
    });
}));
