/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="FolderApi.spec.js">
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

  describe('FolderApi', function() {
    this.timeout(400000);

    describe('createFolder', function() {
      it('should call createFolder successfully', function(done) {
        var path = "HtmlTestDoc/New_Folder";
        var opts = { 'storageName': null };

        //Create folder
        instance.createFolder(path, opts, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);
          done();
        });
      });
    });

    describe('deleteFolder', function() {
      it('should call deleteFolder successfully', function(done) {
        var path = "HtmlTestDoc/New_Folder";
        var opts = { 'storageName': null };

       // Delete  folder which created above
        instance.deleteFolder(path, opts, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);
          done();
        });
      });
    });

    describe('getFilesList', function() {
      it('should call getFilesList successfully', function(done) {
        var path = "HtmlTestDoc";
        var opts = { 'storageName': null };
        instance.getFilesList(path, opts, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);
          console.log(data);
          done();
        });
      });
    });

    describe('copyFolder', function() {
      it('should call copyFolder successfully', function(done) {
        var srcPath = "HtmlTestDoc/Copy_Folder";
        var destPath = "HtmlTestDoc/Copied_Folder"
        var opts = { 'storageName': null };

        //Create folder
        instance.createFolder( srcPath, opts, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);

          // Copy folder
          var opts_copy = {
            'srcStorageName': null,
            'destStorageName': null
          };
          instance.copyFolder(srcPath, destPath, opts_copy, function(err, data, res){
            if(err) throw err;
            expect(200).to.be(res.status);
            done();
          });
        });
      });
    });

    describe('moveFolder', function() {
      it('should call moveFolder successfully', function(done) {
        var srcPath = "HtmlTestDoc/New_Folder";
        var destPath = "HtmlTestDoc/Moved_Folder"
        var opts = { 'storageName': null };

        //Create folder
        instance.createFolder( srcPath, opts, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);

          // Move folder
          var opts_move = {
            'srcStorageName': null,
            'destStorageName': null
          };
          instance.moveFolder(srcPath, destPath, opts_move, function(err, data, res){
            if(err) throw err;
            expect(200).to.be(res.status);
            done();
          });
        });
      });
    });
 });

}));
