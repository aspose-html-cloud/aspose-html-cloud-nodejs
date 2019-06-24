/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="FolderApi.spec.js">
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

    describe('putCreateFolder', function() {
      it('should call putCreateFolder successfully', function(done) {
        var path = "HtmlTestDoc/New_Folder";
        var opts = {
          'storage': null,
          'destStorage': null
        };
        //Create folder
        instance.putCreateFolder(path, opts, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);
          console.log(data);
          done();
        });
      });
    });

    describe('deleteFolder', function() {
      it('should call deleteFolder successfully', function(done) {
        var path = "HtmlTestDoc/New_Folder";
        var opts = {
          'storage': null,
          'destStorage': null
        };
       // Delete  folder which created above
        instance.deleteFolder(path, opts, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);
          console.log(data);
          done();
        });
      });
    });

    describe('getListFiles', function() {
      it('should call getListFiles successfully', function(done) {
        var opts = {
          'path': "HtmlTestDoc",
          'storage': null
        };
        instance.getListFiles(opts, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);
          console.log(data);
          done();
        });
      });
    });

    describe('postMoveFolder', function() {
      it('should call postMoveFolder successfully', function(done) {
        var src = "HtmlTestDoc/New_Folder";
        var dest = "HtmlTestDoc/Moved_Folder"
        var opts = {
          'storage': null,
          'destStorage': null
        };
        //Create folder
        instance.putCreateFolder(src, opts, function(err, data, res) {
          if (err) throw err;
          expect(200).to.be(res.status);
          // Move folder
          instance.postMoveFolder(src, dest, opts, function(err, data, res){
            if(err) throw err;
            expect(200).to.be(res.status);
            console.log(data);
            done();
          });
        });
      });
    });
 });

}));
