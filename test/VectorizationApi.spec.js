/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="VectorizationApi.spec.js">
*   Copyright (c) 2022 Aspose.HTML for Cloud
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

    var vectorization_api, storage_api;
    var fs, path, test_file;
    var local_src_folder, local_dst_folder;

    before(function (done) {
        this.timeout(200000);
        vectorization_api = new Asposehtmlcloud.VectorizationApi(helper.conf);
        storage_api = new Asposehtmlcloud.StorageApi(helper.conf);
        fs = require('fs');
        path = require('path');

        local_src_folder = __dirname + "/../testdata/";
        local_dst_folder = __dirname + "/../testresult/";
        test_file = 'car.'
        done();
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

    describe('VectorizationApi', function () {
        this.timeout(1800000);
        var formats = ["jpg", "png", "tiff", "bmp", "gif"]

        formats.forEach((f)=> {
            describe('vectorizeLocalToLocal', function () {
                it('should call vectorize local to local file successfully', function (done) {

                    var src = local_src_folder + test_file + f;
                    var dst = local_dst_folder + "vectorizeLocalToLocalFrom" + f.toUpperCase() + ".svg";
                    var opts = {};

                    vectorization_api.vectorizeLocalToLocal(src, dst, opts, function (err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);
                        expect(fs.existsSync(data.file)).to.be(true);
                        done();
                    });
                });
            });

            describe('vectorizeLocalToLocalWithOpts', function () {
                it('should call vectorize local to local file successfully', function (done) {

                    var src = local_src_folder + test_file + f;
                    var dst = local_dst_folder + "vectorizeLocalToLocalWithOptsFrom" + f.toUpperCase() + ".svg";
                    var opts = {
                        'error_threshold': 1,
                        'max_iterations': 50,
                        'colors_limit': 2,
                        'line_width': 1,
                    };

                    vectorization_api.vectorizeLocalToLocal(src, dst, opts, function (err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);
                        expect(fs.existsSync(data.file)).to.be(true);
                        done();
                    });
                });
            });

            describe('vectorizeLocalToStorage', function () {
                it('should call vectorize local to storage file successfully', function (done) {

                    var src = local_src_folder + test_file + f;
                    var dst = "FolderInStorage/" + "vectorizeLocalToStorageFrom" + f.toUpperCase() + ".svg";
                    var opts = { };

                    vectorization_api.vectorizeLocalToStorage(src, dst, "", opts, function (err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        opts = {
                            'versionId': null,
                            'storageName': null
                        };

                        storage_api.objectExists(data.file, opts, (err, data, resp) => {
                            expect(200).to.be(resp.status);
                            expect(data.exists).to.be.ok();
                            expect(data.isFolder).to.not.be.ok();
                            done();
                        });
                    });
                });
            });

            describe('vectorizeLocalToStorageWithOpts', function () {
                it('should call vectorize local to storage with opts file successfully', function (done) {

                    var src = local_src_folder + test_file + f;
                    var dst = "FolderInStorage/" + "vectorizeLocalToStorageWithOptsFrom" + f.toUpperCase() + ".svg";
                    var opts = {
                        'error_threshold': 1,
                        'max_iterations': 50,
                        'colors_limit': 2,
                        'line_width': 1,
                    };

                    vectorization_api.vectorizeLocalToStorage(src, dst, "", opts, function (err, data, res) {
                        if (err) throw err;
                        expect(200).to.be(res.status);

                        opts = {
                            'versionId': null,
                            'storageName': null
                        };

                        storage_api.objectExists(data.file, opts, (err, data, resp) => {
                            expect(200).to.be(resp.status);
                            expect(data.exists).to.be.ok();
                            expect(data.isFolder).to.not.be.ok();
                            done();
                        });
                    });
                });
            });

            describe('vectorizeStorageToLocal', function () {
                it('should call vectorize storage to local file successfully', function (done) {

                    var toUpload = local_src_folder + test_file + f;
                    var src = "FolderInStorage/" + test_file + f;
                    var dst = local_dst_folder + "vectorizeStorageToLocalFrom"+ f.toUpperCase() + ".svg";
                    var opts = {};
                    var file = fs.createReadStream(path.normalize(toUpload));

                    storage_api.uploadFile("FolderInStorage", file, { 'storageName': null }, function(err, data, res) {
                        if (err) throw err;

                        expect(200).to.be(res.status);
                        expect(0).to.be(data.errors.length);
                        expect(1).to.be(data.uploaded.length);

                        vectorization_api.vectorizeStorageToLocal(src, dst, "", opts, function (err, data, res) {
                            if (err) throw err;
                            expect(200).to.be(res.status);
                            expect(fs.existsSync(data.file)).to.be(true);
                            done();
                        });
                    });
                });
            });

            describe('vectorizeStorageToLocalWithOpts', function () {
                it('should call vectorize storage to local with opts successfully', function (done) {

                    var toUpload = local_src_folder + test_file + f;
                    var src = "FolderInStorage/" + test_file + f;
                    var dst = local_dst_folder + "vectorizeStorageToLocalWithOptsFrom"+ f.toUpperCase() + ".svg";
                    var opts = {
                        'error_threshold': 1,
                        'max_iterations': 50,
                        'colors_limit': 2,
                        'line_width': 1,
                    };

                    var file = fs.createReadStream(path.normalize(toUpload));

                    storage_api.uploadFile("FolderInStorage", file, { 'storageName': null }, function(err, data, res) {
                        if (err) throw err;

                        expect(200).to.be(res.status);
                        expect(0).to.be(data.errors.length);
                        expect(1).to.be(data.uploaded.length);

                        vectorization_api.vectorizeStorageToLocal(src, dst, "", opts, function (err, data, res) {
                            if (err) throw err;
                            expect(200).to.be(res.status);
                            expect(fs.existsSync(data.file)).to.be(true);
                            done();
                        });
                    });
                });
            });


            describe('vectorizeStorageToStorage', function () {
                it('should call vectorize storage to storage successfully', function (done) {

                    var toUpload = local_src_folder + test_file + f;
                    var src = "FolderInStorage/" + test_file + f;
                    var dst = "FolderInStorage/" + "vectorizeStorageToStorageFrom"+ f.toUpperCase() + ".svg";
                    var opts = {};

                    var file = fs.createReadStream(path.normalize(toUpload));

                    storage_api.uploadFile("FolderInStorage", file, { 'storageName': null }, function(err, data, res) {
                        if (err) throw err;

                        expect(200).to.be(res.status);
                        expect(0).to.be(data.errors.length);
                        expect(1).to.be(data.uploaded.length);

                        vectorization_api.vectorizeStorageToStorage(src, dst, "", opts, function (err, data, res) {
                            if (err) throw err;
                            expect(200).to.be(res.status);
                            var file_opts = {
                                'versionId': null,
                                'storageName': null
                            };

                            storage_api.objectExists(dst, file_opts, (err, data, resp) => {
                                expect(200).to.be(resp.status);
                                expect(data.exists).to.be.ok();
                                expect(data.isFolder).to.not.be.ok();
                                done();
                            });
                        });
                    });
                });
            });

            describe('vectorizeStorageToStorageWithOpts', function () {
                it('should call vectorize storage to storage with opts successfully', function (done) {

                    var toUpload = local_src_folder + test_file + f;
                    var src = "FolderInStorage/" + test_file + f;
                    var dst = "FolderInStorage/" + "vectorizeStorageToStorageWithOptsFrom"+ f.toUpperCase() + ".svg";
                    var opts = {
                        'error_threshold': 1,
                        'max_iterations': 50,
                        'colors_limit': 2,
                        'line_width': 1,
                    };

                    var file = fs.createReadStream(path.normalize(toUpload));

                    storage_api.uploadFile("FolderInStorage", file, { 'storageName': null }, function(err, data, res) {
                        if (err) throw err;

                        expect(200).to.be(res.status);
                        expect(0).to.be(data.errors.length);
                        expect(1).to.be(data.uploaded.length);

                        vectorization_api.vectorizeStorageToStorage(src, dst, "", opts, function (err, data, res) {
                            if (err) throw err;
                            expect(200).to.be(res.status);
                            var file_opts = {
                                'versionId': null,
                                'storageName': null
                            };

                            storage_api.objectExists(dst, file_opts, (err, data, resp) => {
                                expect(200).to.be(resp.status);
                                expect(data.exists).to.be.ok();
                                expect(data.isFolder).to.not.be.ok();
                                done();
                            });
                        });
                    });
                });
            });

            describe('vectorize', function () {
                it('should call vectorize successfully', function (done) {

                    var src = local_src_folder + test_file + f;
                    var dst = local_dst_folder + "GeneralVectorizeLocalToLocalFrom" + f.toUpperCase() + ".svg";
                    var storage = null;
                    var opts = {
                        'error_threshold': 1,
                        'max_iterations': 50,
                        'colors_limit': 10,
                        'line_width': 1,
                    };

                    vectorization_api.vectorize(src, dst, true, true, opts, storage, function (err, data, res) {
                        // err - error, data - Buffer, res - {"ok":true, "status":200, "type":"image/bmp...}
                        if (err) throw err;
                        expect(200).to.be(res.status);
                        expect(fs.existsSync(data.file)).to.be(true);
                        done();
                    });
                });
            });
        });
    });
}));
