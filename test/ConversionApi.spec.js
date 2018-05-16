/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="ConversionApi.spec.js">
*   Copyright (c) 2018 Aspose.HTML for Cloud
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
      this.timeout(200000);
      instance = new Asposehtmlcloud.ConversionApi();

      var name = "test_data.html";

      // Upload test data to server
      helper.uploadFile(name, null, function(res){
        expect(200).to.be(res.code);
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

  describe('ConversionApi', function() {
    this.timeout(200000);

    describe('GetConvertDocumentToImage', function() {
      it('should call GetConvertDocumentToImage successfully', function(done) {

        var name = "test_data.html";
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

        instance.GetConvertDocumentToImage(name, outFormat, opts, function(err, data, res) {
          // err - error, data - Buffer, res - {"ok":true, "status":200, "type":"image/bmp...}
          if (err) throw err;
          expect(200).to.be(res.status);
          var len = helper.saveToTestFolder('DocToBmp.bmp', data);
          expect(data.length).to.equal(len);
          done();
        });
      });
    });
    describe('GetConvertDocumentToImageByUrl', function() {
      it('should call GetConvertDocumentToImageByUrl successfully', function(done) {

        var source_url = "https://stallman.org/articles/anonymous-payments-thru-phones.html"
        var opts = {};

        instance.GetConvertDocumentToImageByUrl(source_url, 'jpeg', opts, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);

          //Save file to test directory, return file size
          var len = helper.saveToTestFolder('DocToJpgFromUrl.jpg', data);
          expect(data.length).to.equal(len);
          done();
        });
      });
    });
    describe('GetConvertDocumentToPdf', function() {
      it('should call GetConvertDocumentToPdf successfully', function(done) {

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

        instance.GetConvertDocumentToPdf(name, opts, function(err, data, res) {
          if (err || res.status !== 200) throw err;
          expect(200).to.be(res.status);

          //Save file to test directory, return file size
          var len = helper.saveToTestFolder('DocToPdf.pdf', data);
          expect(data.length).to.equal(len);
          done();
        });
      });
    });
    describe('GetConvertDocumentToPdfByUrl', function() {
      it('should call GetConvertDocumentToPdfByUrl successfully', function(done) {

        var source_url = "https://stallman.org/articles/anonymous-payments-thru-phones.html"
        var opts = {};

        instance.GetConvertDocumentToPdfByUrl(source_url, opts, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);

          //Save file to test directory, return file size
          var len = helper.saveToTestFolder('DocToPdfFromUrl.pdf', data);
          expect(data.length).to.equal(len);
          done();
        });
      });
    });
    describe('GetConvertDocumentToXps', function() {
      it('should call GetConvertDocumentToXps successfully', function(done) {

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

        instance.GetConvertDocumentToXps(name, opts, function(err, data, res) {
          if (err || res.status !== 200) throw err;
          expect(200).to.be(res.status);

          //Save file to test directory, return file size
          var len = helper.saveToTestFolder('DocToXps.xps', data);
          expect(data.length).to.equal(len);
          done();
        });
      });
    });
    describe('GetConvertDocumentToXpsByUrl', function() {
      it('should call GetConvertDocumentToXpsByUrl successfully', function(done) {

        var source_url = "https://stallman.org/articles/anonymous-payments-thru-phones.html"
        var opts = {};

        instance.GetConvertDocumentToXpsByUrl(source_url, opts, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);

          //Save file to test directory, return file size
          var len = helper.saveToTestFolder('DocToXpsFromUrl.xps', data);
          expect(data.length).to.equal(len);
          done();
        });
      });
    });
  });
}));
