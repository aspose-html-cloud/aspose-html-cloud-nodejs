/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="DocumentApi.js">
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Asposehtmlcloud) {
      root.Asposehtmlcloud = {};
    }
    root.Asposehtmlcloud.DocumentApi = factory(root.Asposehtmlcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Document service.
   * @module api/DocumentApi
   * @version 1.0.1
   */

  /**
   * Constructs a new DocumentApi. 
   * @alias module:api/DocumentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the GetDocument operation.
     * @callback module:api/DocumentApi~GetDocumentCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the HTML document by the name from default or specified storage.
     * @param {String} name The document name.
     * @param {Object} opts Optional parameters
     * @param {String} opts.storage The document folder
     * @param {String} opts.folder The document folder.
     * @param {module:api/DocumentApi~GetDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.GetDocument = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling GetDocument");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'storage': opts['storage'],
        'folder': opts['folder'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['multipart/form-data', 'application/zip'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/html/{name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the GetDocumentFragmentByXPath operation.
     * @callback module:api/DocumentApi~GetDocumentFragmentByXPathCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return list of HTML fragments matching the specified XPath query. 
     * @param {String} name The document name.
     * @param {String} xPath XPath query string.
     * @param {String} outFormat Output format. Possible values: &#39;plain&#39; and &#39;json&#39;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.storage The document storage.
     * @param {String} opts.folder The document folder.
     * @param {module:api/DocumentApi~GetDocumentFragmentByXPathCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.GetDocumentFragmentByXPath = function(name, xPath, outFormat, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling GetDocumentFragmentByXPath");
      }

      // verify the required parameter 'xPath' is set
      if (xPath === undefined || xPath === null) {
        throw new Error("Missing the required parameter 'xPath' when calling GetDocumentFragmentByXPath");
      }

      // verify the required parameter 'outFormat' is set
      if (outFormat === undefined || outFormat === null) {
        throw new Error("Missing the required parameter 'outFormat' when calling GetDocumentFragmentByXPath");
      }


      var pathParams = {
        'name': name,
        'outFormat': outFormat
      };
      var queryParams = {
        'xPath': xPath,
        'storage': opts['storage'],
        'folder': opts['folder'],
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
        '/html/{name}/fragments/{outFormat}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the GetDocumentImages operation.
     * @callback module:api/DocumentApi~GetDocumentImagesCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return all HTML document images packaged as a ZIP archive.
     * @param {String} name The document name.
     * @param {Object} opts Optional parameters
     * @param {String} opts.folder The document folder.
     * @param {String} opts.storage The document storage.
     * @param {module:api/DocumentApi~GetDocumentImagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.GetDocumentImages = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling GetDocumentImages");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'folder': opts['folder'],
        'storage': opts['storage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/zip'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/html/{name}/images/all', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
