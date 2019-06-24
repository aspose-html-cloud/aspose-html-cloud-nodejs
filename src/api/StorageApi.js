/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="StorageApi.js">
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(
        ['ApiClient',
        //Storage
        'model/DiscUsageResponse',
        'model/FileExistResponse',
        'model/FileVersionsResponse',
        'model/StorageExistResponse',
        'model/FileDetail',
         //File
        'model/MoveFileResponse',
        'model/RemoveFileResponse',
        'model/MessageResponse',
         //Folder
        'model/MoveFolderResponse',
        'model/RemoveFolderResponse',
        'model/FileDetailsResponse'
        ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
        require('../ApiClient'),
        //Storage
        require('../model/DiscUsageResponse'),
        require('../model/FileExistResponse'),
        require('../model/FileVersionsResponse'),
        require('../model/StorageExistResponse'),
        require('../model/FileDetail'),
        // File
        require('../model/MoveFileResponse'),
        require('../model/RemoveFileResponse'),
        require('../model/MessageResponse'),
        //Folder
        require('../model/MoveFolderResponse'),
        require('../model/RemoveFolderResponse'),
        require('../model/FileDetailsResponse')
    );
  } else {
    // Browser globals (root is window)
    if (!root.Asposehtmlcloud) {
      root.Asposehtmlcloud = {};
    }
    root.Asposehtmlcloud.StorageApi = factory(
        //Storage
        root.Asposehtmlcloud.ApiClient,
        root.Asposehtmlcloud.DiscUsageResponse,
        root.Asposehtmlcloud.FileExistResponse,
        root.Asposehtmlcloud.FileVersionsResponse,
        root.Asposehtmlcloud.StorageExistResponse,
        root.Asposehtmlcloud.FileDetail,
        //File
        root.Asposehtmlcloud.MoveFileResponse,
        root.Asposehtmlcloud.RemoveFileResponse,
        root.Asposehtmlcloud.MessageResponse,
        //Folder
        root.Asposehtmlcloud.MoveFolderResponse,
        root.Asposehtmlcloud.RemoveFolderResponse,
        root.Asposehtmlcloud.FileDetailsResponse

    );
  }
}(this, function(ApiClient,
                 //Storage
                 DiscUsageResponse,
                 FileExistResponse,
                 FileVersionsResponse,
                 StorageExistResponse,
                 FileDetail,
                 //File
                 MoveFileResponse,
                 RemoveFileResponse,
                 MessageResponse,
                 //Folder
                 MoveFolderResponse,
                 RemoveFolderResponse,
                 FileDetailsResponse
) {
  'use strict';

  /**
   * Storage service.
   * @module api/StorageApi
   * @version 1.0.3
   */

  /**
   * Constructs a new StorageApi. 
   * @alias module:api/StorageApi
   * @class
   * @param {conf}  API client configuration implementation to use,
   */
  var exports = function(conf) {
    this.apiClient = ApiClient.instance;
    this.apiClient.setConfig(conf);

    // STORAGE API

    /**
     * Callback function to receive the result of the getDiscUsage operation.
     * @callback module:api/StorageApi~getDiscUsageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DiscUsageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check the disk usage of the current account 
     * @param {Object} opts Optional parameters
     * @param {String} opts.storage User&#39;s storage name
     * @param {module:api/StorageApi~getDiscUsageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DiscUsageResponse}
     */
    this.getDiscUsage = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'storage': opts['storage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DiscUsageResponse;

      return this.apiClient.callApi(
        '/storage/disc', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getIsExist operation.
     * @callback module:api/StorageApi~getIsExistCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileExistResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if a specific file or folder exists
     * @param {String} path File or folder path e.g. /file.ext or /Folder1
     * @param {Object} opts Optional parameters
     * @param {String} opts.versionId File&#39;s version
     * @param {String} opts.storage User&#39;s storage name
     * @param {module:api/StorageApi~getIsExistCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileExistResponse}
     */
    this.getIsExist = function(path, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling getIsExist");
      }


      var pathParams = {
      };
      var queryParams = {
        'path': path,
        'versionId': opts['versionId'],
        'storage': opts['storage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FileExistResponse;

      return this.apiClient.callApi(
        '/storage/exist', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getIsStorageExist operation.
     * @callback module:api/StorageApi~getIsStorageExistCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StorageExistResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if storage exists 
     * @param {String} name Storage name
     * @param {module:api/StorageApi~getIsStorageExistCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StorageExistResponse}
     */
    this.getIsStorageExist = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getIsStorageExist");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StorageExistResponse;

      return this.apiClient.callApi(
        '/storage/{name}/exist', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getListFileVersions operation.
     * @callback module:api/StorageApi~getListFileVersionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileVersionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the file&#39;s versions list 
     * @param {String} path File path e.g. /file.ext or /Folder1/file.ext
     * @param {Object} opts Optional parameters
     * @param {String} opts.storage User&#39;s storage name
     * @param {module:api/StorageApi~getListFileVersionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileVersionsResponse}
     */
    this.getListFileVersions = function(path, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling getListFileVersions");
      }


      var pathParams = {
      };
      var queryParams = {
        'path': path,
        'storage': opts['storage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FileVersionsResponse;

      return this.apiClient.callApi(
        '/storage/version', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };

    // FILE API
         /**
     * Callback function to receive the result of the deleteFile operation.
     * @callback module:api/FileApi~deleteFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemoveFileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a specific file
     * @param {String} path Path of the file including file name and extension e.g. /Folder1/file.ext
     * @param {Object} opts Optional parameters
     * @param {String} opts.versionId File&#39;s version
     * @param {String} opts.storage User&#39;s storage name
     * @param {module:api/FileApi~deleteFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemoveFileResponse}
     */
    this.deleteFile = function(path, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling deleteFile");
      }


      var pathParams = {
      };
      var queryParams = {
        'path': path,
        'versionId': opts['versionId'],
        'storage': opts['storage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RemoveFileResponse;

      return this.apiClient.callApi(
        '/storage/file', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getDownload operation.
     * @callback module:api/FileApi~getDownloadCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download a specific file
     * @param {String} path Path of the file including the file name and extension e.g. /file.ext
     * @param {Object} opts Optional parameters
     * @param {String} opts.versionId File&#39;s version
     * @param {String} opts.storage User&#39;s storage name
     * @param {module:api/FileApi~getDownloadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.getDownload = function(path, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling getDownload");
      }


      var pathParams = {
      };
      var queryParams = {
        'path': path,
        'versionId': opts['versionId'],
        'storage': opts['storage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['multipart/form-data'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/storage/file', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the postMoveFile operation.
     * @callback module:api/FileApi~postMoveFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MoveFileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move a specific file
     * @param {String} src Source file path e.g. /fileSource.ext
     * @param {String} dest Destination file path e.g. /fileDestination.ext
     * @param {Object} opts Optional parameters
     * @param {String} opts.versionId Source file&#39;s version,
     * @param {String} opts.storage User&#39;s source storage name
     * @param {String} opts.destStorage User&#39;s destination storage name
     * @param {module:api/FileApi~postMoveFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MoveFileResponse}
     */
    this.postMoveFile = function(src, dest, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'src' is set
      if (src === undefined || src === null) {
        throw new Error("Missing the required parameter 'src' when calling postMoveFile");
      }

      // verify the required parameter 'dest' is set
      if (dest === undefined || dest === null) {
        throw new Error("Missing the required parameter 'dest' when calling postMoveFile");
      }


      var pathParams = {
      };
      var queryParams = {
        'src': src,
        'dest': dest,
        'versionId': opts['versionId'],
        'storage': opts['storage'],
        'destStorage': opts['destStorage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = MoveFileResponse;

      return this.apiClient.callApi(
        '/storage/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the putCreate operation.
     * @callback module:api/FileApi~putCreateCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a specific file
     * @param {String} path Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext
     * @param {File} file File to upload
     * @param {Object} opts Optional parameters
     * @param {String} opts.versionId Source file&#39;s version
     * @param {String} opts.storage User&#39;s storage name
     * @param {module:api/FileApi~putCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.putCreate = function(path, file, opts, callback) {
      opts = opts || {};
      var postBody = require('fs').readFileSync(file);

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling putCreate");
      }

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling putCreate");
      }


      var pathParams = {
      };
      var queryParams = {
        'path': path,
        'versionId': opts['versionId'],
        'storage': opts['storage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
     //   'File': file
      };

      var contentTypes = ['application/octet-stream'];
      var accepts = ['application/json'];
      var returnType = MessageResponse;

      return this.apiClient.callApi(
        '/storage/file', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };

    // FOLDER API
     /**
     * Callback function to receive the result of the deleteFolder operation.
     * @callback module:api/FolderApi~deleteFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemoveFolderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a specific folder
     * @param {String} path Folder path e.g. /Folder1
     * @param {Object} opts Optional parameters
     * @param {String} opts.storage User&#39;s storage name
     * @param {Boolean} opts.recursive Remove recursivelly inner folder/files. If false and folder contains data than exception is raised. (default to false)
     * @param {module:api/FolderApi~deleteFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemoveFolderResponse}
     */
    this.deleteFolder = function(path, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling deleteFolder");
      }


      var pathParams = {
      };
      var queryParams = {
        'path': path,
        'storage': opts['storage'],
        'recursive': opts['recursive'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RemoveFolderResponse;

      return this.apiClient.callApi(
        '/storage/folder', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getListFiles operation.
     * @callback module:api/FolderApi~getListFilesCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the file listing of a specific folder
     * @param {Object} opts Optional parameters
     * @param {String} opts.path Start with name of storage e.g. root folder &#39;/&#39;or some folder &#39;/folder1/..&#39; (default to /)
     * @param {String} opts.storage User&#39;s storage name
     * @param {module:api/FolderApi~getListFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileDetailsResponse}
     */
    this.getListFiles = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'path': opts['path'],
        'storage': opts['storage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FileDetailsResponse;

      return this.apiClient.callApi(
        '/storage/folder', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the postMoveFolder operation.
     * @callback module:api/FolderApi~postMoveFolderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MoveFolderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move a specific folder
     * @param {String} src Source folder path e.g. /Folder1
     * @param {String} dest Destination folder path e.g. /Folder2
     * @param {Object} opts Optional parameters
     * @param {String} opts.storage User&#39;s source storage name
     * @param {String} opts.destStorage User&#39;s destination storage name
     * @param {module:api/FolderApi~postMoveFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MoveFolderResponse}
     */
    this.postMoveFolder = function(src, dest, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'src' is set
      if (src === undefined || src === null) {
        throw new Error("Missing the required parameter 'src' when calling postMoveFolder");
      }

      // verify the required parameter 'dest' is set
      if (dest === undefined || dest === null) {
        throw new Error("Missing the required parameter 'dest' when calling postMoveFolder");
      }


      var pathParams = {
      };
      var queryParams = {
        'src': src,
        'dest': dest,
        'storage': opts['storage'],
        'destStorage': opts['destStorage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = MoveFolderResponse;

      return this.apiClient.callApi(
        '/storage/folder', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the putCreateFolder operation.
     * @callback module:api/FolderApi~putCreateFolderCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create the folder
     * @param {String} path Target folder&#39;s path e.g. Folder1/Folder2/. The folders will be created recursively
     * @param {Object} opts Optional parameters
     * @param {String} opts.storage User&#39;s source storage name
     * @param {String} opts.destStorage User&#39;s destination storage name
     * @param {module:api/FolderApi~putCreateFolderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.putCreateFolder = function(path, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling putCreateFolder");
      }


      var pathParams = {
      };
      var queryParams = {
        'path': path,
        'storage': opts['storage'],
        'destStorage': opts['destStorage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = MessageResponse;

      return this.apiClient.callApi(
        '/storage/folder', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
