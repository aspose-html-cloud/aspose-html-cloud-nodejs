/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="ConversionEpubApi.spec.js">
*   Copyright (c) 2019 Aspose.HTML for Cloud
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
    var fs;
    var local_src_folder, local_dst_folder;

    before(function (done) {
        this.timeout(200000);
        instance = new Asposehtmlcloud.ConversionApi(helper.conf);
        storage_api = new Asposehtmlcloud.StorageApi(helper.conf);
        fs = require('fs');
        local_src_folder = __dirname + "/../testdata/";
        local_dst_folder = __dirname + "/../testresult/";

        var name = "georgia.epub";

        // Upload test data to server
        helper.uploadFile(name, null, function (err, data, res) {
            expect(200).to.be(res.status);
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

    describe('ConversionEpubApi', function () {
        this.timeout(1200000);

        describe('GetConvertEpubToImage', function () {
            it('should call GetConvertDocumentToImage successfully (epub)', function (done) {

                var name = "georgia.epub";
                var outFormat = "bmp";
                var opts = {
                    'width': null,
                    'height': null,
                    'leftMargin': null,
                    'rightMargin': null,
                    'topMargin': null,
                    'bottomMargin': null,
                    'xResolution': null,
                    'yResolution': null,
                    'folder': helper.conf['remoteFolder'],
                    'storage': null
                };

                instance.GetConvertDocumentToImage(name, outFormat, opts, function (err, data, res) {
                    // err - error, data - Buffer, res - {"ok":true, "status":200, "type":"image/bmp...}
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    var len = helper.saveToTestFolder('EpubToBmp.bmp', data);
                    expect(data.length).to.equal(len);
                    done();
                });
            });
        });
        describe('GetConvertEpubToPdf', function () {
            it('should call GetConvertDocumentToPdf successfully (epub)', function (done) {

                var name = "georgia.epub";
                var opts = {
                    'width': null,
                    'height': null,
                    'leftMargin': null,
                    'rightMargin': null,
                    'topMargin': null,
                    'bottomMargin': null,
                    'folder': helper.conf['remoteFolder'],
                    'storage': null
                };

                instance.GetConvertDocumentToPdf(name, opts, function (err, data, res) {
                    if (err || res.status !== 200) throw err;
                    expect(200).to.be(res.status);

                    //Save file to test directory, return file size
                    var len = helper.saveToTestFolder('EpubToPdf.pdf', data);
                    expect(data.length).to.equal(len);
                    done();
                });
            });
        });
        describe('GetConvertEpubToXps', function () {
            it('should call GetConvertDocumentToXps successfully (epub)', function (done) {

                var name = "georgia.epub";
                var opts = {
                    'width': null,
                    'height': null,
                    'leftMargin': null,
                    'rightMargin': null,
                    'topMargin': null,
                    'bottomMargin': null,
                    'folder': helper.conf['remoteFolder'],
                    'storage': null
                };

                instance.GetConvertDocumentToXps(name, opts, function (err, data, res) {
                    if (err || res.status !== 200) throw err;
                    expect(200).to.be(res.status);

                    //Save file to test directory, return file size
                    var len = helper.saveToTestFolder('EpubToXps.xps', data);
                    expect(data.length).to.equal(len);
                    done();
                });
            });
        });
        describe('PutConvertEpubInRequestToImage', function () {
            it('should call PutConvertDocumentInRequestToImage successfully (epub)', function (done) {

                var outPath = "HtmlTestDoc/putEpubToImgInReqJS.bmp";
                var outFormat = "bmp";
                var file = local_src_folder + "georgia.epub";
                var opts = {
                    'width': 800,
                    'height': 1000,
                    'leftMargin': 50,
                    'rightMargin': 100,
                    'topMargin': 40,
                    'bottomMargin': 80,
                    'resolution': 300
                };

                instance.PutConvertDocumentInRequestToImage(outPath, outFormat, file, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'versionId': null,
                        'storage': null
                    };

                    //Download result from storage
                    storage_api.getDownload(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "putEpubToImgInReqJS.bmp";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PutConvertEpubInRequestToPdf', function () {
            it('should call PutConvertDocumentInRequestToPdf successfully (epub)', function (done) {
                var outPath = "HtmlTestDoc/putEpubToPdfInReqJS.pdf";
                var file = local_src_folder + "georgia.epub";
                var opts = {
                    'width': 800,
                    'height': 1000,
                    'leftMargin': 50,
                    'rightMargin': 100,
                    'topMargin': 40,
                    'bottomMargin': 80
                };

                instance.PutConvertDocumentInRequestToPdf(outPath, file, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'versionId': null,
                        'storage': null
                    };

                    //Download result from storage
                    storage_api.getDownload(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "putEpubToPdfInReqJS.pdf";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PutConvertEpubInRequestToXps', function () {
            it('should call PutConvertDocumentInRequestToXps successfully (epub)', function (done) {
                var outPath = "HtmlTestDoc/putEpubToXpsInReqJS.xps";
                var file = local_src_folder + "georgia.epub";
                var opts = {
                    'width': 800,
                    'height': 1000,
                    'leftMargin': 50,
                    'rightMargin': 100,
                    'topMargin': 40,
                    'bottomMargin': 80
                };

                instance.PutConvertDocumentInRequestToXps(outPath, file, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'versionId': null,
                        'storage': null
                    };

                    //Download result from storage
                    storage_api.getDownload(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "putEpubToXpsInReqJS.xps";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PutConvertEpubToImage', function () {
            it('should call PutConvertDocumentToImage successfully (epub)', function (done) {

                //Already in storage
                var name = "georgia.epub";

                var outPath = "HtmlTestDoc/putEpubToImgJS.tiff";
                var outFormat = "tiff";
                var opts = {
                    'width': 800,
                    'height': 1000,
                    'leftMargin': 50,
                    'rightMargin': 100,
                    'topMargin': 40,
                    'bottomMargin': 80,
                    'resolution': 300,
                    'folder': "HtmlTestDoc",
                    'storage': null
                };

                instance.PutConvertDocumentToImage(name, outPath, outFormat, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'versionId': null,
                        'storage': null
                    };

                    //Download result from storage
                    storage_api.getDownload(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "putEpubToImgJS.tiff";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PutEpubToPdf', function () {
            it('should call PutConvertDocumentToPdf successfully (epub)', function (done) {

                //Already in storage
                var name = "georgia.epub";

                var outPath = "HtmlTestDoc/putEpubToPdfJS.pdf";
                var opts = {
                    'width': 800,
                    'height': 1000,
                    'leftMargin': 50,
                    'rightMargin': 100,
                    'topMargin': 40,
                    'bottomMargin': 80,
                    'folder': "HtmlTestDoc",
                    'storage': null
                };

                instance.PutConvertDocumentToPdf(name, outPath, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'versionId': null,
                        'storage': null
                    };

                    //Download result from storage
                    storage_api.getDownload(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "putEpubToPdfJS.pdf";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });

        describe('PutEpubToXps', function () {
            it('should call PutConvertDocumentToXps successfully (epub)', function (done) {

                //Already in storage
                var name = "georgia.epub";

                var outPath = "HtmlTestDoc/putEpubToXpsJS.xps";
                var opts = {
                    'width': 800,
                    'height': 1000,
                    'leftMargin': 50,
                    'rightMargin': 100,
                    'topMargin': 40,
                    'bottomMargin': 80,
                    'folder': "HtmlTestDoc",
                    'storage': null
                };

                instance.PutConvertDocumentToXps(name, outPath, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'versionId': null,
                        'storage': null
                    };

                    //Download result from storage
                    storage_api.getDownload(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "putEpubToXpsJS.xps";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
    });
}));
