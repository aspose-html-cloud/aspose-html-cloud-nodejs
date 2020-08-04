/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="ConversionEpubApi.spec.js">
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
    var local_src_folder, local_dst_folder, name, folder;

    before(function (done) {
        this.timeout(200000);
        instance = new Asposehtmlcloud.ConversionApi(helper.conf);
        storage_api = new Asposehtmlcloud.StorageApi(helper.conf);
        fs = require('fs');
        path = require('path');
        local_src_folder = __dirname + "/../testdata/";
        local_dst_folder = __dirname + "/../testresult/";
        name = "georgia.epub";

        // Upload test data to server
        helper.uploadFileToStorage(name, null, function (err, data, res) {
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

                var outFormat = "bmp";
                var opts = {
                    'width': null,
                    'height': null,
                    'leftMargin': null,
                    'rightMargin': null,
                    'topMargin': null,
                    'bottomMargin': null,
                    'resolution': null,
                    'folder': helper.conf['remoteFolder'],
                    'storage': null
                };

                instance.GetConvertDocumentToImage(name, outFormat, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    var len = helper.saveToTestFolder('EpubToBmp.zip', data);
                    expect(data.length).to.equal(len);
                    done();
                });
            });
        });
        describe('GetConvertEpubToPdf', function () {
            it('should call GetConvertDocumentToPdf successfully (epub)', function (done) {

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
        describe('PostConvertEpubInRequestToImage', function () {
            it('should call PostConvertDocumentInRequestToImage successfully (epub)', function (done) {

                var outPath = helper.conf['remoteFolder'] + "/" + "postEpubToImgInReqJS.bmp";
                var outFormat = "bmp";
                var local_path = local_src_folder + name;
                var file = fs.createReadStream(path.normalize(local_path));
                var opts = {
                    'width': 800,
                    'height': 1000,
                    'leftMargin': 50,
                    'rightMargin': 100,
                    'topMargin': 40,
                    'bottomMargin': 80,
                    'resolution': 300
                };

                instance.PostConvertDocumentInRequestToImage(outPath, outFormat, file, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = { 'storageName': null };

                    //Download result from storage
                    storage_api.downloadFile(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "postEpubToImgInReqJS.zip";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PostConvertEpubInRequestToPdf', function () {
            it('should call PostConvertDocumentInRequestToPdf successfully (epub)', function (done) {
                var outPath = helper.conf['remoteFolder'] + "/" + "postEpubToPdfInReqJS.pdf";
                var local_path = local_src_folder + name;
                var file = fs.createReadStream(path.normalize(local_path));
                var opts = {
                    'width': 800,
                    'height': 1000,
                    'leftMargin': 50,
                    'rightMargin': 100,
                    'topMargin': 40,
                    'bottomMargin': 80
                };

                instance.PostConvertDocumentInRequestToPdf(outPath, file, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "postEpubToPdfInReqJS.pdf";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PostConvertEpubInRequestToXps', function () {
            it('should call PostConvertDocumentInRequestToXps successfully (epub)', function (done) {
                var outPath = helper.conf['remoteFolder'] + "/" + "postEpubToXpsInReqJS.xps";
                var local_path = local_src_folder + name;
                var file = fs.createReadStream(path.normalize(local_path));
                var opts = {
                    'width': 800,
                    'height': 1000,
                    'leftMargin': 50,
                    'rightMargin': 100,
                    'topMargin': 40,
                    'bottomMargin': 80
                };

                instance.PostConvertDocumentInRequestToXps(outPath, file, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "postEpubToXpsInReqJS.xps";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PutConvertEpubToImage', function () {
            it('should call PutConvertDocumentToImage successfully (epub)', function (done) {

                var outPath = helper.conf['remoteFolder'] + "/" + "putEpubToImgJS.zip";
                var outFormat = "tiff";
                var opts = {
                    'width': 800,
                    'height': 1000,
                    'leftMargin': 50,
                    'rightMargin': 100,
                    'topMargin': 40,
                    'bottomMargin': 80,
                    'resolution': 300,
                    'folder': helper.conf['remoteFolder'],
                    'storage': null
                };

                instance.PutConvertDocumentToImage(name, outPath, outFormat, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "putEpubToImgJSTiff.zip";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PutEpubToPdf', function () {
            it('should call PutConvertDocumentToPdf successfully (epub)', function (done) {

                var outPath = helper.conf['remoteFolder'] + "/" + "putEpubToPdfJS.pdf";
                var opts = {
                    'width': 800,
                    'height': 1000,
                    'leftMargin': 50,
                    'rightMargin': 100,
                    'topMargin': 40,
                    'bottomMargin': 80,
                    'folder': helper.conf['remoteFolder'],
                    'storage': null
                };

                instance.PutConvertDocumentToPdf(name, outPath, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, opts, function(err, data, res) {
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

                var outPath = helper.conf['remoteFolder'] + "/" + "putEpubToXpsJS.xps";
                var opts = {
                    'width': 800,
                    'height': 1000,
                    'leftMargin': 50,
                    'rightMargin': 100,
                    'topMargin': 40,
                    'bottomMargin': 80,
                    'folder': helper.conf['remoteFolder'],
                    'storage': null
                };

                instance.PutConvertDocumentToXps(name, outPath, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, opts, function(err, data, res) {
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
