/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="StorageApi.js">
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(
        ['ApiClient',
        'model/DiscUsage',
        'model/FileVersions',
        'model/ObjectExist',
        'model/StorageExist',
        'model/FilesUploadResult',
        'model/FilesList'
        ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
        require('../ApiClient'),
        require('../model/DiscUsage'),
        require('../model/FileVersions'),
        require('../model/ObjectExist'),
        require('../model/StorageExist'),
        require('../model/FilesUploadResult'),
        require('../model/FilesList')
    );
  } else {
    // Browser globals (root is window)
    if (!root.Asposehtmlcloud) {
      root.Asposehtmlcloud = {};
    }
    root.Asposehtmlcloud.StorageApi = factory(
        root.Asposehtmlcloud.ApiClient,
        root.Asposehtmlcloud.DiscUsage,
        root.Asposehtmlcloud.FileVersions,
        root.Asposehtmlcloud.ObjectExist,
        root.Asposehtmlcloud.StorageExist,
        root.Asposehtmlcloud.FilesUploadResult,
        root.Asposehtmlcloud.FilesList
    );
  }
}(this, function(ApiClient,
                DiscUsage,
                FileVersions,
                ObjectExist,
                StorageExist,
                FilesUploadResult,
                FilesList
) {
  'use strict';

  /**
   * Storage service.
   * @module api/StorageApi
   * @version 22.10.1
   */

  /**
   * Constructs a new StorageApi.
   * @alias module:api/StorageApi
   * @class
   * @param {Object} conf API client configuration implementation to use,
   */
  var exports = function(conf) {
    this.apiClient = ApiClient.instance;
    this.apiClient.setConfig(conf);

    // STORAGE API
    /**
     * Callback function to receive the result of the getDiscUsage operation.
     * @callback module:api/StorageApi~getDiscUsageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DiscUsage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get disc usage
     * @param {Object} opts Optional parameters
     * @param {String} opts.storageName Storage name
     * @param {module:api/StorageApi~getDiscUsageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DiscUsage}
     */
    this.getDiscUsage = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {};
      var queryParams = {
        'storageName': opts['storageName']
      };
      var headerParams = {};
      var formParams = {};

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DiscUsage;

      return this.apiClient.callApi(
          '/html/storage/disc/usage', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the objectExists operation.
     * @callback module:api/StorageApi~objectExistsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ObjectExist} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if file or folder exists
     * @param {String} path File or folder path e.g. &#39;/file.ext&#39; or &#39;/folder&#39;
     * @param {Object} opts Optional parameters
     * @param {String} opts.storageName Storage name
     * @param {String} opts.versionId File version ID
     * @param {module:api/StorageApi~objectExistsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ObjectExist}
     */
    this.objectExists = function(path, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw "Missing the required parameter 'path' when calling objectExists";
      }

      var pathParams = {};

      var queryParams = {
        'path': path,
        'storageName': opts['storageName'],
        'versionId': opts['versionId']
      };
      var headerParams = {};
      var formParams = {};

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ObjectExist;

      return this.apiClient.callApi(
          '/html/storage/exist', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the storageExists operation.
     * @callback module:api/StorageApi~storageExistsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StorageExist} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if storage exists
     * @param {String} storageName Storage name
     * @param {module:api/StorageApi~storageExistsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StorageExist}
     */
    this.storageExists = function(storageName, callback) {
      var postBody = null;

      // verify the required parameter 'storageName' is set
      if (storageName === undefined || storageName === null) {
        throw "Missing the required parameter 'storageName' when calling storageExists";
      }

      var pathParams = {};
      var queryParams = {
        'storageName': storageName
      };
      var headerParams = {};
      var formParams = {};

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StorageExist;

      return this.apiClient.callApi(
          '/html/storage/exist/storage', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          contentTypes, accepts, returnType, callback
      );
    };

    //FILE API
    /**
     * Callback function to receive the result of the deleteFile operation.
     * @callback module:api/FileApi~deleteFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete file
     * @param {String} path File path e.g. &#39;/folder/file.ext&#39;
     * @param {Object} opts Optional parameters
     * @param {String} opts.storageName Storage name
     * @param {String} opts.versionId File version ID to delete
     * @param {module:api/FileApi~deleteFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFile = function(path, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw "Missing the required parameter 'path' when calling deleteFile";
      }

      var pathParams = {};
      var queryParams = {
        'path': path,
        'storageName': opts['storageName'],
        'versionId': opts['versionId']
      };
      var headerParams = {};
      var formParams = {};

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
          '/html/file', 'DELETE',
          pathParams, queryParams, headerParams, formParams, postBody,
          contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the downloadFile operation.
     * @callback module:api/FileApi~downloadFileCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download file
     * @param {String} path File path e.g. &#39;/folder/file.ext&#39;
     * @param {Object} opts Optional parameters
     * @param {String} opts.storageName Storage name
     * @param {String} opts.versionId File version ID to download
     * @param {module:api/FileApi~downloadFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.downloadFile = function(path, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw "Missing the required parameter 'path' when calling downloadFile";
      }

      var pathParams = {};
      var queryParams = {
        'path': path,
        'storageName': opts['storageName'],
        'versionId': opts['versionId']
      };
      var headerParams = {};
      var formParams = {};

      var contentTypes = ['application/json'];
      var accepts = ['multipart/form-data'];
      var returnType = "Blob";

      return this.apiClient.callApi(
          '/html/file', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the uploadFile operation.
     * @callback module:api/FileApi~uploadFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FilesUploadResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload file
     * @param {String} path Path where to upload excluding filename e.g. / or /Folder.
     * @param {File} file File to upload
     * @param {Object} opts Optional parameters
     * @param {String} opts.storageName Storage name
     * @param {module:api/FileApi~uploadFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FilesUploadResult}
     */
    this.uploadFile = function(path, file, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw "Missing the required parameter 'path' when calling uploadFile";
      }

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw "Missing the required parameter 'file' when calling uploadFile";
      }

      var pathParams = {
      };
      var queryParams = {
        'path': path,
        'storageName': opts['storageName']
      };
      var headerParams = {};
      var formParams = {
        'File': file
      };

      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = 'FilesUploadResult';

      return this.apiClient.callApi(
          '/html/file', 'POST',
          pathParams, queryParams, headerParams, formParams, postBody,
          contentTypes, accepts, returnType, callback
      );
    };

    // FOLDER API

    /**
     * Callback function to receive the result of the createFolder operation.
     * @callback module:api/FolderApi~createFolderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create the folder
     * @param {String} path Folder path to create e.g. &#39;folder_1/folder_2/&#39;
     * @param {Object} opts Optional parameters
     * @param {String} opts.storageName Storage name
     * @param {module:api/FolderApi~createFolderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createFolder = function(path, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw "Missing the required parameter 'path' when calling createFolder";
      }

      var pathParams = {};
      var queryParams = {
        'path': path,
        'storageName': opts['storageName']
      };
      var headerParams = {};
      var formParams = {};

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
          '/html/folder', 'POST',
          pathParams, queryParams, headerParams, formParams, postBody,
          contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteFolder operation.
     * @callback module:api/FolderApi~deleteFolderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete folder
     * @param {String} path Folder path e.g. &#39;/folder&#39;
     * @param {Object} opts Optional parameters
     * @param {String} opts.storageName Storage name
     * @param {Boolean} opts.recursive Enable to delete folders, subfolders and files (default to false)
     * @param {module:api/FolderApi~deleteFolderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFolder = function(path, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw "Missing the required parameter 'path' when calling deleteFolder";
      }

      var pathParams = {};
      var queryParams = {
        'path': path,
        'storageName': opts['storageName'],
        'recursive': opts['recursive']
      };
      var headerParams = {};
      var formParams = {};

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
          '/html/folder', 'DELETE',
          pathParams, queryParams, headerParams, formParams, postBody,
          contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getFilesList operation.
     * @callback module:api/FolderApi~getFilesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FilesList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all files and folders within a folder
     * @param {String} path Folder path e.g. &#39;/folder&#39;
     * @param {Object} opts Optional parameters
     * @param {String} opts.storageName Storage name
     * @param {module:api/FolderApi~getFilesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FilesList}
     */
    this.getFilesList = function(path, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw "Missing the required parameter 'path' when calling getFilesList";
      }

      var pathParams = { };
      var queryParams = {
        'path': path,
        'storageName': opts['storageName']
      };
      var headerParams = {};
      var formParams = {};

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FilesList;

      return this.apiClient.callApi(
          '/html/folder', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
