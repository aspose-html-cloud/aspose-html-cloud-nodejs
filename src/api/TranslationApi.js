/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="TranslationApi.js">
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
    root.Asposehtmlcloud.TranslationApi = factory(root.Asposehtmlcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Translation service.
   * @module api/TranslationApi
   * @version 19.6.2
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
     * Callback function to receive the result of the GetTranslateDocument operation.
     * @callback module:api/TranslationApi~GetTranslateDocumentCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Translate the HTML document specified by the name from default or specified storage. 
     * @param {String} name Document name.
     * @param {String} srcLang Source language.
     * @param {String} resLang Result language.
     * @param {Object} opts Optional parameters
     * @param {String} opts.storage The source document storage.
     * @param {String} opts.folder The source document folder.
     * @param {module:api/TranslationApi~GetTranslateDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.GetTranslateDocument = function(name, srcLang, resLang, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling GetTranslateDocument");
      }

      // verify the required parameter 'srcLang' is set
      if (srcLang === undefined || srcLang === null) {
        throw new Error("Missing the required parameter 'srcLang' when calling GetTranslateDocument");
      }

      // verify the required parameter 'resLang' is set
      if (resLang === undefined || resLang === null) {
        throw new Error("Missing the required parameter 'resLang' when calling GetTranslateDocument");
      }


      var pathParams = {
        'name': name,
        'srcLang': srcLang,
        'resLang': resLang
      };
      var queryParams = {
        'storage': opts['storage'],
        'folder': opts['folder'],
      };
      var headerParams = {};
      var formParams = {};

      var contentTypes = ['application/json'];
      var accepts = ['multipart/form-data'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/html/{name}/translate/{srcLang}/{resLang}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the GetTranslateDocumentByUrl operation.
     * @callback module:api/TranslationApi~GetTranslateDocumentByUrlCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Translate the HTML document from Web specified by its URL.
     * @param {String} sourceUrl Source document URL.
     * @param {String} srcLang Source language.
     * @param {String} resLang Result language.
     * @param {module:api/TranslationApi~GetTranslateDocumentByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.GetTranslateDocumentByUrl = function(sourceUrl, srcLang, resLang, callback) {
      var postBody = null;

      // verify the required parameter 'sourceUrl' is set
      if (sourceUrl === undefined || sourceUrl === null) {
        throw new Error("Missing the required parameter 'sourceUrl' when calling GetTranslateDocumentByUrl");
      }

      // verify the required parameter 'srcLang' is set
      if (srcLang === undefined || srcLang === null) {
        throw new Error("Missing the required parameter 'srcLang' when calling GetTranslateDocumentByUrl");
      }

      // verify the required parameter 'resLang' is set
      if (resLang === undefined || resLang === null) {
        throw new Error("Missing the required parameter 'resLang' when calling GetTranslateDocumentByUrl");
      }


      var pathParams = {
        'srcLang': srcLang,
        'resLang': resLang
      };
      var queryParams = {
        'sourceUrl': sourceUrl,
      };
      var headerParams = {};
      var formParams = {};

      var contentTypes = ['application/json'];
      var accepts = ['multipart/form-data'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/html/translate/{srcLang}/{resLang}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
