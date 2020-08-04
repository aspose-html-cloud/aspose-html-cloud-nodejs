/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="SeoApi.spec.js">
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
        instance = new Asposehtmlcloud.SeoApi(helper.conf);
        done();
    });

    describe('SeoApi', function () {
        this.timeout(1800000);

        describe('GetSeoWarningTest', function () {
            it('should call GetSeoWarningTest successfully', function (done) {

                var addr = "https://edition.cnn.com/";

                instance.GetSeoWarning(addr, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    //Save file to test directory, return file size
                    var len = helper.saveToTestFolder('SeoWarnings.json', data);
                    expect(len > 0);
                    done();
                });
            });
        });

        describe('GetHtmlWarningTest', function () {
            it('should call GetHtmlWarningTest successfully', function (done) {

                var url = "https://edition.cnn.com/";

                instance.GetHtmlWarning(url, function (err, data, res) {
                    if (err) throw err;
                    expect(200).to.be(res.status);

                    //Save file to test directory, return file size
                    var len = helper.saveToTestFolder('HtmlValidation.json', data);
                    expect(len > 0);
                    done();
                });
            });
        });

    });
}));
