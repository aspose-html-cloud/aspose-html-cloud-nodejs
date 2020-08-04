/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="ImportApi.spec.js">
*   Copyright (c) 2020 Aspose.HTML for Cloud
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

    var instance, storage_api;
    var fs, path;
    var local_src_folder, local_dst_folder;

    before(function (done) {
        this.timeout(200000);
        instance = new Asposehtmlcloud.ImportApi(helper.conf);
        storage_api = new Asposehtmlcloud.StorageApi(helper.conf);
        fs = require('fs');
        path = require('path');
        local_src_folder = __dirname + "/../testdata/";
        local_dst_folder = __dirname + "/../testresult/";

        var name = "testpage1.md";

        // Upload test data to server
        helper.uploadFileToStorage(name, null, function (err, data, res) {
            expect(200).to.be(res.status);
            console.log(data);
            done();
        });
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

    describe('ImportApi', function () {
        this.timeout(1800000);

        describe('GetConvertMarkdownToHtmlTest', function () {
            it('should call GetConvertMarkdownToHtmlTest successfully', function (done) {

                //Already in storage
                var name = "testpage1.md";
                var opts = {
                    'folder': helper.conf['remoteFolder'],
                    'storage': null
                };

                instance.GetConvertMarkdownToHtml(name, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    //Save file to test directory, return file size
                    var len = helper.saveToTestFolder('GetMarkdownToHtmlJS.html', data);
                    expect(data.length).to.equal(len);
                    done();
                });
            });
        });
        describe('PutMarkdownToHtmlTest', function () {
            it('should call PutMarkdownToHtmlTest successfully', function (done) {

                //Already in storage
                var name = "testpage1.md";
                var outPath = "HtmlTestDoc/PutMarkdownToHtmlJS.html";
                var opts = {
                    'folder': helper.conf['remoteFolder'],
                    'storage': null
                };

                instance.PutConvertMarkdownToHtml(name, outPath, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "PutMarkdownToHtml.html";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PostMarkdownInRequestToHtml', function () {
            it('should call PostMarkdownInRequestToHtml successfully', function (done) {

                var outPath = "HtmlTestDoc/PostMarkdownInRequestToHtml.html";
                var file = fs.createReadStream(path.normalize(local_src_folder + "testpage1.md"));
                var opts = {
                    'storage': null
                };

                instance.PostConvertMarkdownInRequestToHtml(outPath, file, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "PostMarkdownInRequestToHtml.html";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
    });
}));
