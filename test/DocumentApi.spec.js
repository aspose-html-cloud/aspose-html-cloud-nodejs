/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="DocumentApi.spec.js">
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

    var instance;

    before(function (done) {
        this.timeout(200000);
        instance = new Asposehtmlcloud.DocumentApi(helper.conf);

        var name = "test_doc.zip";
        var name1 = "test_doc_images.zip";

        // Upload test document to server`
        helper.uploadFileToStorage(name, null, function (err, data, res) {
            expect(200).to.be(res.status);
            helper.uploadFileToStorage(name1, null, function (err, data, res) {
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


    describe('DocumentApi', function () {
        this.timeout(1200000);
        describe('GetDocumentByUrl', function () {
            it('should call GetDocumentByUrl successfully', function (done) {

                var sourceUrl = "https://lenta.ru/";

                instance.GetDocumentByUrl(sourceUrl, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    helper.saveToTestFolder('GetDocByUrl.zip', data);
                    done();
                });
            });
        });
        describe('GetDocumentFragmentByXPath', function () {
            it('should call GetDocumentFragmentByXPath successfully', function (done) {

                var name = "test_doc.zip";
                var xPath = ".//p";
                var outFormat = "plain";
                var opts = {
                    'storage': null,
                    'folder': helper.conf['remoteFolder']
                };

                instance.GetDocumentFragmentByXPath(name, xPath, outFormat, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    helper.saveToTestFolder('GetXPathDoc.html', data);
                    done();
                });
            });
        });
        describe('GetDocumentFragmentByXPathByUrl', function () {
            it('should call GetDocumentFragmentByXPathByUrl successfully', function (done) {

                var sourceUrl = "https://stallman.org/articles/anonymous-payments-thru-phones.html";
                var xPath = ".//p";
                var outFormat = "plain";

                instance.GetDocumentFragmentByXPathByUrl(sourceUrl, xPath, outFormat, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    helper.saveToTestFolder('GetXPathDocByUrl.html', data);
                    done();
                });
            });
        });
        describe('GetDocumentFragmentByXPathByUrl1', function () {
            it('should call GetDocumentFragmentByXPathByUrl1 successfully', function (done) {

                var sourceUrl = "https://google.com";
                var xPath = "//body";
                var outFormat = "json";

                instance.GetDocumentFragmentByXPathByUrl(sourceUrl, xPath, outFormat, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    helper.saveToTestFolder('GetXPathDocByUrl1.html', data);
                    done();
                });
            });
        });
        describe('GetDocumentFragmentsByCSSSelector', function () {
            it('should call GetDocumentFragmentsByCSSSelector successfully', function (done) {

                var name = "test_doc.zip";
                var selector = "div p";
                var outFormat = "plain";
                var opts = {
                    'folder': helper.conf['remoteFolder'],
                    'storage': null,
                };

                instance.GetDocumentFragmentsByCSSSelector(name, selector, outFormat, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    helper.saveToTestFolder('GetCSSDoc.html', data);
                    done();
                });
            });
        });
        describe('GetDocumentFragmentsByCSSSelectorByUrl', function () {
            it('should call GetDocumentFragmentsByCSSSelectorByUrl successfully', function (done) {

                var sourceUrl = "https://www.w3schools.com/cssref/css_selectors.asp";
                var selector = 'a[href$=".asp"]';
                var outFormat = "plain";

                instance.GetDocumentFragmentsByCSSSelectorByUrl(sourceUrl, selector, outFormat, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    helper.saveToTestFolder('GetCSSDocByUrl.html', data);
                    done();
                });
            });
        });
        describe('GetDocumentImages', function () {
            it('should call GetDocumentImages successfully', function (done) {

                var name = "test_doc_images.zip";

                var opts = {
                    'storage': null,
                    'folder': helper.conf['remoteFolder']
                };

                instance.GetDocumentImages(name, opts, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    helper.saveToTestFolder('GetDocImages.zip', data);
                    done();
                });
            });
        });
        describe('GetDocumentImagesByUrl', function () {
            it('should call GetDocumentImagesByUrl successfully', function (done) {

                var sourceUrl = "https://www.google.com/";

                instance.GetDocumentImagesByUrl(sourceUrl, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);
                    helper.saveToTestFolder('GetDocImagesByUrl.zip', data);
                    done();
                });
            });
        });
    });
}));
