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

    describe('ConversionSVGApi', function () {
        this.timeout(1800000);

        describe('SVGLocalToLocal', function () {
            it('should call convert local to local file successfully (svg)', function (done) {

                var src = local_src_folder + "testpage1.svg";
                var dst = local_dst_folder + "SVGLocalToLocal.jpeg";
                var opts = {
                    'width': 600,
                    'height': 800,
                    'leftMargin': 10,
                    'rightMargin': 20,
                    'topMargin': 30,
                    'bottomMargin': 40
                };

                convert_api.convertLocalToLocal(src, dst, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    expect(fs.existsSync(data.file)).to.be(true);
                    done();
                });
            });
        });

        describe('SVGLocalToStorage', function () {
            it('should call convert local to storage file successfully (svg)', function (done) {

                var src = local_src_folder + "testpage1.svg";
                var dst = "FolderInStorage/SVGLocalToStorage.tif";
                var opts = {
                    'width': 600,
                    'height': 800,
                    'leftMargin': 10,
                    'rightMargin': 20,
                    'topMargin': 30,
                    'bottomMargin': 40
                };

                convert_api.convertLocalToStorage(src, dst, "", opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    opts = {
                        'versionId': null,
                        'storageName': null
                    };

                    storage_api.objectExists(data.file, opts, (err, data, resp) => {
                        expect(200).to.be(resp.status);
                        expect(data.exists).to.be.ok();
                        expect(data.isFolder).to.not.be.ok();
                        done();
                    });
                });
            });
        });

        describe('SVGStorageToLocal', function () {
            it('should call convert storage to local file successfully (svg)', function (done) {

                var toUpload = local_src_folder + "testpage1.svg";
                var src = "FolderInStorage/testpage1.svg";
                var dst = local_dst_folder + "SVGStorageToLocal.jpeg";
                var opts = {
                    'width': 600,
                    'height': 800,
                    'leftMargin': 10,
                    'rightMargin': 20,
                    'topMargin': 30,
                    'bottomMargin': 40
                };
                var file = fs.createReadStream(path.normalize(toUpload));

                storage_api.uploadFile("FolderInStorage", file, { 'storageName': null }, function(err, data, res) {
                    if (err) throw err;

                    expect(200).to.be(res.status);
                    expect(0).to.be(data.errors.length);
                    expect(1).to.be(data.uploaded.length);

                    convert_api.convertStorageToLocal(src, dst, "", opts, function (err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);
                        expect(fs.existsSync(data.file)).to.be(true);
                        done();
                    });
                });
            });
        });

        describe('SVGStorageToStorage', function () {
            it('should call convert storage to storage file successfully (svg)', function (done) {

                var toUpload = local_src_folder + "testpage1.svg";
                var src = "FolderInStorage/testpage1.svg";
                var dst = "FolderInStorage/StorageToStorage.pdf";
                var opts_A4 = {
                    'width': 8.3,
                    'height': 11.7,
                    'leftMargin': 0.2,
                    'rightMargin': 0.2,
                    'topMargin': 0.2,
                    'bottomMargin': 0.2
                };

                var file = fs.createReadStream(path.normalize(toUpload));

                storage_api.uploadFile("FolderInStorage", file, { 'storageName': null }, function(err, data, res) {
                    if (err) throw err;

                    expect(200).to.be(res.status);
                    expect(0).to.be(data.errors.length);
                    expect(1).to.be(data.uploaded.length);

                    convert_api.convertStorageToStorage(src, dst, "", opts_A4, function (err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);
                        var opts = {
                            'versionId': null,
                            'storageName': null
                        };

                        storage_api.objectExists(dst, opts, (err, data, resp) => {
                            expect(200).to.be(resp.status);
                            expect(data.exists).to.be.ok();
                            expect(data.isFolder).to.not.be.ok();
                            done();
                        });
                    });
                });
            });
        });

        describe('convertSVG', function () {
            it('should call convert successfully (svg)', function (done) {

                var src = local_src_folder + "testpage1.svg";
                var dst = local_dst_folder + "GeneralConvert.jpeg";
                var storage = null;
                var opts = {
                    'width': 600,
                    'height': 800,
                    'leftMargin': 10,
                    'rightMargin': 20,
                    'topMargin': 30,
                    'bottomMargin': 40
                };

                convert_api.convert(src, dst, true, true, false, opts, storage, function (err, data, res) {
                    // err - error, data - Buffer, res - {"ok":true, "status":200, "type":"image/bmp...}
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    expect(fs.existsSync(data.file)).to.be(true);
                    done();
                });
            });
        });

    });
}));
