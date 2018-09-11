/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="TranslationApi.js">
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
    root.Asposehtmlcloud.TranslationApi = factory(root.Asposehtmlcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Translation service.
   * @module api/TranslationApi
   * @version 1.0.1
   */

  /**
   * Constructs a new TranslationApi. 
   * @alias module:api/TranslationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


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
        '/html/{name}/translate/{srcLang}/{resLang}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    }

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
        '/html/translate/{srcLang}/{resLang}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the translationPutTranslateDocument operation.
     * @callback module:api/TranslationApi~translationPutTranslateDocumentCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Translate the HTML document specified by the name from default or specified storage. Result document will be saved into the default or specified storage; result path will be like /{folder}/{name}_{lang_pair}.{extension}.
     * @param {String} name Document name.
     * @param {String} srcLang Source language.
     * @param {String} resLang Result language.
     * @param {Object} opts Optional parameters
     * @param {String} opts.folder The source &amp; result document folder.
     * @param {String} opts.storage The source &amp; result document storage.
     * @param {module:api/TranslationApi~translationPutTranslateDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.translationPutTranslateDocument = function(name, srcLang, resLang, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling translationPutTranslateDocument");
      }

      // verify the required parameter 'srcLang' is set
      if (srcLang === undefined || srcLang === null) {
        throw new Error("Missing the required parameter 'srcLang' when calling translationPutTranslateDocument");
      }

      // verify the required parameter 'resLang' is set
      if (resLang === undefined || resLang === null) {
        throw new Error("Missing the required parameter 'resLang' when calling translationPutTranslateDocument");
      }


      var pathParams = {
        'name': name,
        'srcLang': srcLang,
        'resLang': resLang
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
      var accepts = ['application/json'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/html/{name}/translate/{srcLang}/{resLang}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the translationPutTranslateDocumentByUrl operation.
     * @callback module:api/TranslationApi~translationPutTranslateDocumentByUrlCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Translate the HTML document from Web specified by its URL.  Result document will be saved into the default or specified storage; result path will be like /{folder}/{name}_{lang_pair}.{extension}.
     * @param {String} sourceUrl Source document URL.
     * @param {String} srcLang Source language.
     * @param {String} resLang Result language.
     * @param {Object} opts Optional parameters
     * @param {String} opts.folder The result document folder
     * @param {String} opts.storage The result document storage
     * @param {module:api/TranslationApi~translationPutTranslateDocumentByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.translationPutTranslateDocumentByUrl = function(sourceUrl, srcLang, resLang, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sourceUrl' is set
      if (sourceUrl === undefined || sourceUrl === null) {
        throw new Error("Missing the required parameter 'sourceUrl' when calling translationPutTranslateDocumentByUrl");
      }

      // verify the required parameter 'srcLang' is set
      if (srcLang === undefined || srcLang === null) {
        throw new Error("Missing the required parameter 'srcLang' when calling translationPutTranslateDocumentByUrl");
      }

      // verify the required parameter 'resLang' is set
      if (resLang === undefined || resLang === null) {
        throw new Error("Missing the required parameter 'resLang' when calling translationPutTranslateDocumentByUrl");
      }


      var pathParams = {
        'srcLang': srcLang,
        'resLang': resLang
      };
      var queryParams = {
        'sourceUrl': sourceUrl,
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
      var accepts = ['application/json'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/html/translate/{srcLang}/{resLang}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));