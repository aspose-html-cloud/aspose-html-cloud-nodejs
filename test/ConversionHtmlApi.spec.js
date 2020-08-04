/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="ConversionHtmlApi.spec.js">
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
        instance = new Asposehtmlcloud.ConversionApi(helper.conf);
        storage_api = new Asposehtmlcloud.StorageApi(helper.conf);
        fs = require('fs');
        path = require('path');
        local_src_folder = __dirname + "/../testdata/";
        local_dst_folder = __dirname + "/../testresult/";

        var name = "test_data.html";
        var name_md = "test_md.html";

        // Upload test data to server
        helper.uploadFileToStorage(name, null, function (err, data, res) {
            expect(200).to.be(res.status);
            console.log(data);
            helper.uploadFileToStorage(name_md, null, function (err, data, res) {
                expect(200).to.be(res.status);
                console.log(data);
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

    describe('ConversionHtmlApi', function () {
        this.timeout(1800000);

        describe('GetConvertHtmlToImage', function () {
            it('should call GetConvertDocumentToImage successfully (html)', function (done) {

                var name = "test_data.html";
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
                    // err - error, data - Buffer, res - {"ok":true, "status":200, "type":"image/bmp...}
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    var len = helper.saveToTestFolder('HtmlToBmp.zip', data);
                    expect(data.length).to.equal(len);
                    done();
                });
            });
        });
        describe('GetConvertHtmlToImageByUrl', function () {
            it('should call GetConvertDocumentToImageByUrl successfully (html)', function (done) {

                var source_url = "https://stallman.org/articles/anonymous-payments-thru-phones.html"
                var opts = {};

                instance.GetConvertDocumentToImageByUrl(source_url, 'jpeg', opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    //Save file to test directory, return file size
                    var len = helper.saveToTestFolder('HtmlToJpgFromUrl.zip', data);
                    expect(data.length).to.equal(len);
                    done();
                });
            });
        });

        describe('GetConvertHtmlToGifByUrl', function () {
            it('should call GetConvertDocumentToGifByUrl successfully (html)', function (done) {

                var source_url = "https://stallman.org/articles/anonymous-payments-thru-phones.html"
                var opts = {};

                instance.GetConvertDocumentToImageByUrl(source_url, 'gif', opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    //Save file to test directory, return file size
                    var len = helper.saveToTestFolder('HtmlToGifFromUrl.zip', data);
                    expect(data.length).to.equal(len);
                    done();
                });
            });
        });

        describe('GetConvertHtmlToPdf', function () {
            it('should call GetConvertDocumentToPdf successfully (html)', function (done) {

                var name = "test_data.html";
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
                    var len = helper.saveToTestFolder('HtmlToPdf.pdf', data);
                    expect(data.length).to.equal(len);
                    done();
                });
            });
        });
        describe('GetConvertHtmlToPdfByUrl', function () {
            it('should call GetConvertDocumentToPdfByUrl successfully (html)', function (done) {

                var source_url = "https://stallman.org/articles/anonymous-payments-thru-phones.html"
                var opts = {};

                instance.GetConvertDocumentToPdfByUrl(source_url, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    //Save file to test directory, return file size
                    var len = helper.saveToTestFolder('HtmlToPdfFromUrl.pdf', data);
                    expect(data.length).to.equal(len);
                    done();
                });
            });
        });
        describe('GetConvertHtmlToXps', function () {
            it('should call GetConvertDocumentToXps successfully (html)', function (done) {

                var name = "test_data.html";
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
                    var len = helper.saveToTestFolder('HtmlToXps.xps', data);
                    expect(data.length).to.equal(len);
                    done();
                });
            });
        });
        describe('GetConvertHtmlToXpsByUrl', function () {
            it('should call GetConvertDocumentToXpsByUrl successfully (html)', function (done) {

                var source_url = "https://stallman.org/articles/anonymous-payments-thru-phones.html"
                var opts = {};

                instance.GetConvertDocumentToXpsByUrl(source_url, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    //Save file to test directory, return file size
                    var len = helper.saveToTestFolder('HtmlToXpsFromUrl.xps', data);
                    expect(data.length).to.equal(len);
                    done();
                });
            });
        });
        describe('PostConvertHtmlInRequestToImage', function () {
            it('should call PostConvertDocumentInRequestToImage successfully (html)', function (done) {

                var outPath = "HtmlTestDoc/postConvertHtmlToImgJS.zip";
                var outFormat = "bmp";
                var file = fs.createReadStream(path.normalize(local_src_folder + "test_data.html"));
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

                    var options = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, options, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "postConvertHtmlToImgJS.zip";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PostConvertHtmlInRequestToPdf', function () {
            it('should call PostConvertDocumentInRequestToPdf successfully (html)', function (done) {
                var outPath = "HtmlTestDoc/postConvertHtmlToPdfJS.pdf";
                var file = fs.createReadStream(path.normalize(local_src_folder + "test_data.html"));
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

                        var dst = local_dst_folder + "postConvertHtmlToPdfJS.pdf";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PostConvertHtmlInRequestToXps', function () {
            it('should call PostConvertDocumentInRequestToXps successfully (html)', function (done) {
                var outPath = "HtmlTestDoc/postConvertHtmlToXpsJS.xps";
                var file = fs.createReadStream(path.normalize(local_src_folder + "test_data.html"));
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

                    var options = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, options, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "postConvertHtmlToXpsJS.xps";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PutConvertHtmlToImage', function () {
            it('should call PutConvertDocumentToImage successfully (html)', function (done) {

                //Already in storage
                var name = "test_data.html";

                var outPath = "HtmlTestDoc/putConvertHtmlToImgJS.zip";
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

                    var options = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, options, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "putConvertHtmlToImgJS.zip";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PutConvertHtmlToPdf', function () {
            it('should call PutConvertDocumentToPdf successfully (html)', function (done) {

                //Already in storage
                var name = "test_data.html";

                var outPath = "HtmlTestDoc/putConvertHtmlToPdfJS.pdf";
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

                    var options = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, options, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "putConvertHtmlToPdfJS.pdf";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });

        describe('PutConvertHtmlToXps', function () {
            it('should call PutConvertDocumentToXps successfully (html)', function (done) {

                //Already in storage
                var name = "test_data.html";

                var outPath = "HtmlTestDoc/putConvertHtmlToXpsJS.xps";
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

                    var options = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, options, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "putConvertHtmlToXpsJS.xps";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('GetConvertHtmlToMhtmlByUrl', function () {
            it('should call GetConvertDocumentToMHTMLByUrl successfully (html)', function (done) {

                var source_url = "https://www.yahoo.com";

                instance.GetConvertDocumentToMHTMLByUrl(source_url, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    //Save file to test directory, return file size
                    var len = helper.saveToTestFolder('HtmlToMhtmlFromUrl.mht', data);
                    expect(data.length).to.equal(len);
                    done();
                });
            });
        });
        describe('GetConvertDocumentToMarkdownGitTrue', function () {
            it('should call GetConvertDocumentToMarkdownGitTrue successfully', function (done) {

                //Already in storage
                var name = "test_md.html";
                var opts = {
                    'useGit': true,
                    'folder': helper.conf['remoteFolder'],
                    'storage': null
                };

                instance.GetConvertDocumentToMarkdown(name, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    //Save file to test directory, return file size
                    var len = helper.saveToTestFolder('getConvertDocToMarkdownJSGitTrue.md', data);
                    expect(data.length).to.equal(len);
                    done();
                });
            });
        });
        describe('GetConvertDocumentToMarkdownGitFalse', function () {
            it('should call GetConvertDocumentToMarkdownGitFalse successfully', function (done) {

                //Already in storage
                var name = "test_md.html";
                var opts = {
                    'useGit': false,
                    'folder': helper.conf['remoteFolder'],
                    'storage': null
                };

                instance.GetConvertDocumentToMarkdown(name, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    //Save file to test directory, return file size
                    var len = helper.saveToTestFolder('getConvertDocToMarkdownJSGitFalse.md', data);
                    expect(data.length).to.equal(len);
                    done();
                });
            });
        });
        describe('PutHtmlToMarkdownTestGitTrue', function () {
            it('should call PutHtmlToMarkdownTestGitTrue successfully', function (done) {

                //Already in storage
                var name = "test_md.html";
                var outPath = "HtmlTestDoc/PutHtmlToMarkdownJSGitTrue.md";
                var opts = {
                    'useGit': true,
                    'folder': helper.conf['remoteFolder'],
                    'storage': null
                };

                instance.PutConvertDocumentToMarkdown(name, outPath, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "PutHtmlToMarkdownJSGitTrue.md";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PutHtmlToMarkdownTestGITFalse', function () {
            it('should call PutHtmlToMarkdownTestGitFalse successfully', function (done) {

                //Already in storage
                var name = "test_md.html";
                var outPath = "HtmlTestDoc/PutHtmlToMarkdownJSGitFalse.md";
                var opts = {
                    'useGit': false,
                    'folder': helper.conf['remoteFolder'],
                    'storage': null
                };

                instance.PutConvertDocumentToMarkdown(name, outPath, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "PutHtmlToMarkdownJSGitFalse.md";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PostConvertDocumentInRequestToMarkdownGitTrue', function () {
            it('should call PostConvertDocumentInRequestToMarkdownGitTrue successfully', function (done) {

                var outPath = "HtmlTestDoc/PostConvertDocumentInRequestToMarkdownGitTrue.md";
                var file = fs.createReadStream(path.normalize(local_src_folder + "test_md.html"));
                var opts = {
                    'useGit': true
                };

                instance.PostConvertDocumentInRequestToMarkdown(outPath, file, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "PostConvertDocumentInRequestToMarkdownGitTrue.md";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
        describe('PostConvertDocumentInRequestToMarkdownGitFalse', function () {
            it('should call PostConvertDocumentInRequestToMarkdownGitFalse successfully', function (done) {

                var outPath = "HtmlTestDoc/PostConvertDocumentInRequestToMarkdownGitFalse.md";
                var file = fs.createReadStream(path.normalize(local_src_folder + "test_md.html"));
                var opts = {
                    'useGit': false
                };

                instance.PostConvertDocumentInRequestToMarkdown(outPath, file, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    var opts = {
                        'storageName': null
                    };

                    //Download result from storage
                    storage_api.downloadFile(outPath, opts, function(err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        var dst = local_dst_folder + "PostConvertDocumentInRequestToMarkdownGitFalse.md";
                        var fd = fs.openSync(dst, 'w');
                        fs.writeSync(fd, data);
                        done();
                    });
                });
            });
        });
    });
}));
