/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="StorageApi.spec.js">
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

    instance = new Asposehtmlcloud.StorageApi(helper.conf);
    done();
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

  describe('StorageApi', function() {
    this.timeout(400000);

    describe('getDiscUsage', function() {
      it('should call getDiscUsage successfully', function(done) {
        var opts ={'storageName': null};
        instance.getDiscUsage(opts, function(err, data, res) {
          if (err) throw err;

          expect(200).to.be(res.status);
          expect(res.body.totalSize > 0).to.be.ok();
          expect(res.body.usedSize > 0).be.ok();
          console.log(data);
          done();
        });
      });
    });

    describe('objectExists', function() {
      it('should call objectExists successfully', function(done) {
        var path_exist = "HtmlTestDoc";
        var path_non_exist = "NonExistFolder"
        var opts = {
          'versionId': null,
          'storageName': null
        };
        instance.objectExists(path_exist, opts, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);
          expect(res.body.exists).to.be.ok();
          expect(res.body.isFolder).to.be.ok();

          instance.objectExists(path_non_exist, opts, function(err, data, res){
            expect(200).to.be(res.status);
            expect(res.body.exists).to.not.be.ok();
            expect(res.body.isFolder).to.not.be.ok();
            done();
          });
        });
      });
    });

    describe('storageExists', function() {
      it('should call storageExists successfully', function(done) {
        var name_exist = "/";
        var name_not_exist = "not_exist_storage";

        instance.storageExists(name_not_exist, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);

          console.log("Exist storage");
          console.log(data);

          instance.storageExists(name_not_exist, function(err, data, res){
            if(err) throw err;
            expect(200).to.be(res.status);

            console.log("Not exist storage");
            console.log(data);
            done();
          });
        });
      });
    });

    describe('getFileVersions', function() {
      it('should call getFileVersions successfully', function(done) {
        var path = "HtmlTestDoc/test_en.html";
        var opts = {'storageName': null };

        instance.getFileVersions(path, opts, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);
          console.log(data);
          done();
        });
      });
    });
  });

}));
