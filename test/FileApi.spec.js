/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="FileApi.spec.js">
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
  var fs, path;
  var local_src_folder, local_dst_folder;

  before(function(done) {
    this.timeout(200000);
    instance = new Asposehtmlcloud.StorageApi(helper.conf);
    fs = require('fs');
    path = require('path');
    local_src_folder = __dirname + "/../testdata/";
    local_dst_folder = __dirname + "/../testresult/";
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

  describe('FileApi', function() {
    this.timeout(400000);

     describe('uploadFile', function() {
      it('should call upload file successfully', function(done) {
        var name = 'test_put_create.png';
        var local_path = local_src_folder + "/" + name;
        var path_in_storage = "HtmlTestDoc/" +  name;
        var file = fs.createReadStream(path.normalize(local_path));
        var file_size = fs.statSync(local_path).size;
        var opts = { 'storageName': null };

        instance.uploadFile(path_in_storage, file, opts, function(err, data, res) {
          if (err) throw err;

          expect(200).to.be(res.status);
          expect(0).to.be(res.body.errors.length);
          expect(1).to.be(res.body.uploaded.length);

          //Download file for compare size
          var options = {
            'versionId' : null,
            'storageName': null
          };
          instance.downloadFile(path_in_storage, options, function(err, data, res) {
            if (err) throw err;
            expect(200).to.be(res.status);
            var dst = local_dst_folder + "test_put_create.png";
            var fd = fs.openSync(dst, 'w');
            var len = fs.writeSync(fd, data);
            expect(file_size).to.be(len);
            done();
          });
        });
      });
    });

    describe('deleteFile', function() {
      it('should call deleteFile successfully', function(done) {
        var name = "file_to_delete.html";
        var path_in_storage = "HtmlTestDoc/" + name;
        var file = fs.createReadStream(path.normalize(local_src_folder + "/" + name));
        var opts = { 'storageName': null };

        //Upload file to storage for test
        instance.uploadFile(path_in_storage, file, opts, function(err, data, res) {
          if (err) throw err;

          expect(200).to.be(res.status);
          expect(0).to.be(res.body.errors.length);
          expect(1).to.be(res.body.uploaded.length);

          var options = {
            'versionId': null,
            'storageName': null
          };

          //Delete file
          instance.deleteFile(path_in_storage, options, function (err, data, res) {
            if (err) throw err;
            expect(200).to.be(res.status);
            done();
          });
        });
      });
    });

    describe('downloadFile', function() {
      it('should call downloadFile successfully', function(done) {
        var name = 'test_get_download.jpg';
        var path_in_storage = "HtmlTestDoc/" +  name;
        var file = fs.createReadStream(path.normalize(local_src_folder + "/" + name));
        var opts = { 'storageName': null };
        var file_size = fs.statSync(local_src_folder + "/" + name).size;

        //Upload file for test
        instance.uploadFile(path_in_storage, file, opts, function(err, data, res) {
          if (err) throw err;

          expect(200).to.be(res.status);
          expect(0).to.be(res.body.errors.length);
          expect(1).to.be(res.body.uploaded.length);

          //Download file for compare size
          var options = {
            'versionId' : null,
            'storageName': null
          };
          instance.downloadFile(path_in_storage, options, function(err, data, res) {
            if (err) throw err;
            expect(200).to.be(res.status);
            var dst = local_dst_folder + "test_get_download.jpg";
            var fd = fs.openSync(dst, 'w');
            var len = fs.writeSync(fd, data);
            expect(file_size).to.be(len);
            done();
          });
        });
      });
    });

    describe('copyFile', function() {
      it('should call copyFile successfully', function(done) {
        var name = 'test_copy_file.html';
        var src = "HtmlTestDoc/" +  name;
        var dest = "HtmlTestDoc/copied_test_file.html";
        var file = fs.createReadStream(path.normalize(local_src_folder + "/" + name));
        var file_size = fs.statSync(local_src_folder + "/" + name).size;
        var opts = { 'storageName': null };

        //Upload file for test
        instance.uploadFile(src, file, opts, function(err, data, res) {
          if (err) throw err;

          expect(200).to.be(res.status);
          expect(0).to.be(res.body.errors.length);
          expect(1).to.be(res.body.uploaded.length);

          var options = {
            'versionId': null,
            'srcStorageName': null,
            'destStorageName': null
          };

          //Move file
          instance.copyFile(src, dest, options, function(err, data, res) {
            if (err) throw err;
            expect(200).to.be(res.status);

            var opts_download = {
              'versionId': null,
              'storageName': null
            };
            //Download moved file and compare size
            instance.downloadFile(dest, opts_download, function(err, data, res) {
              if (err) throw err;
              expect(200).to.be(res.status);
              var dst = local_dst_folder + "copied_test_file.html";
              var fd = fs.openSync(dst, 'w');
              var len = fs.writeSync(fd, data);
              expect(file_size).to.be(len);
              done();
            });
          });
        });
      });
    });

    describe('moveFile', function() {
      it('should call moveFile successfully', function(done) {
        var name = 'test_move_file.html';
        var src = "HtmlTestDoc/" +  name;
        var dest = "HtmlTestDoc/moved_test_file.html";
        var file = fs.createReadStream(path.normalize(local_src_folder + "/" + name));
        var file_size = fs.statSync(local_src_folder + "/" + name).size;
        var opts = { 'storageName': null };

        //Upload file for test
        instance.uploadFile(src, file, opts, function(err, data, res) {
          if (err) throw err;

          expect(200).to.be(res.status);
          expect(0).to.be(res.body.errors.length);
          expect(1).to.be(res.body.uploaded.length);

          var options = {
            'versionId': null,
            'srcStorageName': null,
            'destStorageName': null
          };

          //Move file
          instance.moveFile(src, dest, options, function(err, data, res) {
            if (err) throw err;
            expect(200).to.be(res.status);

            var opts_download = {
              'versionId': null,
              'storageName': null
            };
            //Download moved file and compare size
            instance.downloadFile(dest, opts_download, function(err, data, res) {
              if (err) throw err;
              expect(200).to.be(res.status);

              var dst = local_dst_folder + "moved_test_file.html";
              var fd = fs.openSync(dst, 'w');
              var len = fs.writeSync(fd, data);
              expect(file_size).to.be(len);
              done();
            });
          });
        });
      });
    });
 });

}));
