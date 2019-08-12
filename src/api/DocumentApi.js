/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="DocumentApi.js">
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
   * @version 19.6.1
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


      /**
       * Callback function to receive the result of the GetDocumentByUrl operation.
       * @callback module:api/DocumentApi~GetDocumentByUrlCallback
       * @param {String} error Error message, if any.
       * @param {File} data The data returned by the service call.
       * @param {String} response The complete HTTP response.
       */

      /**
       * Return all HTML page with linked resources packaged as a ZIP archive by the source page URL.
       * @param {String} sourceUrl Source page URL.
       * @param {module:api/DocumentApi~GetDocumentByUrlCallback} callback The callback function, accepting three arguments: error, data, response
       * data is of type: {@link File}
       */
      this.GetDocumentByUrl = function(sourceUrl, callback) {
          var postBody = null;

          // verify the required parameter 'sourceUrl' is set
          if (sourceUrl == undefined || sourceUrl == null) {
              throw "Missing the required parameter 'sourceUrl' when calling GetDocumentByUrl";
          }


          var pathParams = {};
          var queryParams = {
              'sourceUrl': sourceUrl
          };
          var headerParams = {};
          var formParams = {};

          var contentTypes = ['application/json'];
          var accepts = ['application/zip'];
          var returnType = 'Blob';

          return this.apiClient.callApi(
              '/html/download', 'GET',
              pathParams, queryParams, headerParams, formParams, postBody,
              contentTypes, accepts, returnType, callback
          );
      };

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
      var headerParams = {};
      var formParams = {};

      var contentTypes = ['application/json'];
      var accepts = ['multipart/form-data'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/html/{name}/fragments/{outFormat}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };

    
    /**
     * Callback function to receive the result of the GetDocumentFragmentByXPathByUrl operation.
     * @callback module:api/DocumentApi~GetDocumentFragmentByXPathByUrlCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return list of HTML fragments matching the specified XPath query by the source page URL.
     * @param {String} sourceUrl Source page URL.
     * @param {String} xPath XPath query string.
     * @param {String} outFormat Output format. Possible values: &#39;plain&#39; and &#39;json&#39;.
     * @param {module:api/DocumentApi~GetDocumentFragmentByXPathByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.GetDocumentFragmentByXPathByUrl = function(sourceUrl, xPath, outFormat, callback) {
      var postBody = null;

      // verify the required parameter 'sourceUrl' is set
      if (sourceUrl === undefined || sourceUrl === null) {
        throw new Error("Missing the required parameter 'sourceUrl' when calling GetDocumentFragmentByXPathByUrl");
      }

      // verify the required parameter 'xPath' is set
      if (xPath === undefined || xPath === null) {
        throw new Error("Missing the required parameter 'xPath' when calling GetDocumentFragmentByXPathByUrl");
      }

      // verify the required parameter 'outFormat' is set
      if (outFormat === undefined || outFormat === null) {
        throw new Error("Missing the required parameter 'outFormat' when calling GetDocumentFragmentByXPathByUrl");
      }


      var pathParams = {
        'outFormat': outFormat
      };
      var queryParams = {
        'sourceUrl': sourceUrl,
        'xPath': xPath,
      };
      var headerParams = {};
      var formParams = {};

      var contentTypes = ['application/json'];
      var accepts = ['multipart/form-data'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/html/fragments/{outFormat}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };


      /**
       * Callback function to receive the result of the GetDocumentFragmentsByCSSSelector operation.
       * @callback module:api/DocumentApi~GetDocumentFragmentsByCSSSelectorCallback
       * @param {String} error Error message, if any.
       * @param {File} data The data returned by the service call.
       * @param {String} response The complete HTTP response.
       */

      /**
       * Return list of HTML fragments matching the specified CSS selector.
       * @param {String} name The document name.
       * @param {String} selector CSS selector string.
       * @param {String} outFormat Output format. Possible values: &#39;plain&#39; and &#39;json&#39;.
       * @param {Object} opts Optional parameters
       * @param {String} opts.folder The document folder.
       * @param {String} opts.storage The document storage.
       * @param {module:api/DocumentApi~GetDocumentFragmentsByCSSSelectorCallback} callback The callback function, accepting three arguments: error, data, response
       * data is of type: {@link File}
       */
      this.GetDocumentFragmentsByCSSSelector = function(name, selector, outFormat, opts, callback) {
          opts = opts || {};
          var postBody = null;

          // verify the required parameter 'name' is set
          if (name === undefined || name === null) {
              throw new Error("Missing the required parameter 'name' when calling GetDocumentFragmentsByCSSSelector");
          }

          // verify the required parameter 'selector' is set
          if (selector === undefined || selector === null) {
              throw new Error("Missing the required parameter 'selector' when calling GetDocumentFragmentsByCSSSelector");
          }

          // verify the required parameter 'outFormat' is set
          if (outFormat === undefined || outFormat === null) {
              throw new Error("Missing the required parameter 'outFormat' when calling GetDocumentFragmentsByCSSSelector");
          }


          var pathParams = {
              'name': name,
              'outFormat': outFormat
          };
          var queryParams = {
              'selector': selector,
              'folder': opts['folder'],
              'storage': opts['storage'],
          };
          var headerParams = {};
          var formParams = {};

          var contentTypes = ['application/json'];
          var accepts = ['multipart/form-data'];
          var returnType = 'Blob';

          return this.apiClient.callApi(
              '/html/{name}/fragments/css/{outFormat}', 'GET',
              pathParams, queryParams, headerParams, formParams, postBody,
              contentTypes, accepts, returnType, callback
          );
      };

      /**
       * Callback function to receive the result of the GetDocumentFragmentsByCSSSelectorByUrl operation.
       * @callback module:api/DocumentApi~GetDocumentFragmentsByCSSSelectorByUrlCallback
       * @param {String} error Error message, if any.
       * @param {File} data The data returned by the service call.
       * @param {String} response The complete HTTP response.
       */

      /**
       * Return list of HTML fragments matching the specified CSS selector by the source page URL.
       * @param {String} sourceUrl Source page URL.
       * @param {String} selector CSS selector string.
       * @param {String} outFormat Output format. Possible values: &#39;plain&#39; and &#39;json&#39;.
       * @param {module:api/DocumentApi~GetDocumentFragmentsByCSSSelectorByUrlCallback} callback The callback function, accepting three arguments: error, data, response
       * data is of type: {@link File}
       */
      this.GetDocumentFragmentsByCSSSelectorByUrl = function(sourceUrl, selector, outFormat, callback) {
          var postBody = null;

          // verify the required parameter 'sourceUrl' is set
          if (sourceUrl === undefined || sourceUrl === null) {
              throw new Error("Missing the required parameter 'sourceUrl' when calling GetDocumentFragmentsByCSSSelectorByUrl");
          }

          // verify the required parameter 'selector' is set
          if (selector === undefined || selector === null) {
              throw new Error("Missing the required parameter 'selector' when calling GetDocumentFragmentsByCSSSelectorByUrl");
          }

          // verify the required parameter 'outFormat' is set
          if (outFormat === undefined || outFormat === null) {
              throw new Error("Missing the required parameter 'outFormat' when calling GetDocumentFragmentsByCSSSelectorByUrl");
          }

          var pathParams = {
              'outFormat': outFormat
          };
          var queryParams = {
              'sourceUrl': sourceUrl,
              'selector': selector,
          };
          var headerParams = {};
          var formParams = {};

          var contentTypes = ['application/json'];
          var accepts = ['multipart/form-data'];
          var returnType = 'Blob';

          return this.apiClient.callApi(
              '/html/fragments/css/{outFormat}', 'GET',
              pathParams, queryParams, headerParams, formParams, postBody,
              contentTypes, accepts, returnType, callback
          );
      };

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
      var headerParams = {};
      var formParams = {};

      var contentTypes = ['application/json'];
      var accepts = ['application/zip'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/html/{name}/images/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };
    
        /**
     * Callback function to receive the result of the GetDocumentImagesByUrl operation.
     * @callback module:api/DocumentApi~GetDocumentImagesByUrlCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return all HTML page images packaged as a ZIP archive by the source page URL.
     * @param {String} sourceUrl Source page URL.
     * @param {module:api/DocumentApi~GetDocumentImagesByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.GetDocumentImagesByUrl = function(sourceUrl, callback) {
      var postBody = null;

      // verify the required parameter 'sourceUrl' is set
      if (sourceUrl === undefined || sourceUrl === null) {
        throw new Error("Missing the required parameter 'sourceUrl' when calling GetDocumentImagesByUrl");
      }


      var pathParams = {};
      var queryParams = {
        'sourceUrl': sourceUrl,
      };
      var headerParams = {};
      var formParams = {};

      var contentTypes = ['application/json'];
      var accepts = ['multipart/form-data'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/html/images/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
