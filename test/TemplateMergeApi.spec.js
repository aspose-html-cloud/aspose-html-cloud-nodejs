/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="TemplateMergeApi.spec.js">
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
    var local_src_folder, local_dst_folder, folder;
    var templateName, dataName;

    before(function (done) {
        this.timeout(200000);
        instance = new Asposehtmlcloud.TemplateMergeApi(helper.conf);
        storage_api = new Asposehtmlcloud.StorageApi(helper.conf);
        fs = require('fs');
        path = require('path');
        local_src_folder = __dirname + "/../testdata/";
        local_dst_folder = __dirname + "/../testresult/";

        folder = helper.conf['remoteFolder'];
        templateName = "HtmlTemplate.html";
        dataName = "XmlSourceData.xml";

        // Upload test data to server
        helper.uploadFileToStorage(templateName, null, function (err, data, res) {
            expect(200).to.be(res.status);
            helper.uploadFileToStorage(dataName, null, function (err, data, res) {
                expect(200).to.be(res.status);
                done();
            });
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

    describe('TemplateMergeApi', function () {
        this.timeout(200000);
        describe('GetMergeHtmlTemplate', function () {
            it('should call GetMergeHtmlTemplate successfully', function (done) {

                var dataPath = folder + "/" + dataName;
                var opts = {
                    options: "",
                    folder: folder,
                    storage: null
                };

                instance.GetMergeHtmlTemplate(templateName, dataPath, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    helper.saveToTestFolder('GetMergeHtmlTemplate.html', data);
                    done();
                });
            });
        });
        describe('PostMergeHtmlTemplate', function () {
            it('should call PostMergeHtmlTemplate successfully', function (done) {

                var resultName = "PostMergeHtmlTemplate.html";
                var outPath = folder + "/" + resultName;
                var file = fs.createReadStream(path.normalize(local_src_folder + dataName));
                var opts = {
                    options: "",
                    folder: folder,
                    storage: null
                };

                instance.PostMergeHtmlTemplate(templateName, outPath, file, opts, function(err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, opts, function (err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + resultName;
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
    });

}));
