/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="TranslationApi.spec.js">
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
  'use strict';

  var instance;

  before(function(done) {
    this.timeout(400000);

    instance = new Asposehtmlcloud.TranslationApi(helper.conf);
    var name = "test_en.html";

    // Upload test data to server
    helper.uploadFileToStorage(name, null, function(err, data, res){
      expect(200).to.be(res.status);
      done();
    });
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  };

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  };

  describe('TranslationApi', function() {
    this.timeout(400000);

    describe('GetTranslateDocument', function() {
      it('should call GetTranslateDocument successfully', function(done) {

        var name = "test_en.html";
        var srcLang = "en";
        var resLang = "de";

        var opts = {
          'folder': helper.conf['remoteFolder'],
          'storage': null
        };

        instance.GetTranslateDocument(name, srcLang, resLang, opts, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);
          helper.saveToTestFolder('GetTranslateDoc.html', data);
          done();
        });
      });
    });

    describe('GetTranslateDocumentByUrl', function() {
      it('should call GetTranslateDocumentByUrl successfully', function(done) {

        var sourceUrl = "https://www.le.ac.uk/oerresources/bdra/html/page_02.htm";
        var srcLang = "en";
        var resLang = "fr";

        instance.GetTranslateDocumentByUrl(sourceUrl, srcLang, resLang,function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);
          helper.saveToTestFolder('GetTranslateDocUrl.zip', data);
          done();
        });
      });
    });
  });

}));
