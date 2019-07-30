/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="SummarizationApi.js">
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
    root.Asposehtmlcloud.SummarizationApi = factory(root.Asposehtmlcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Summarization service.
   * @module api/SummarizationApi
   * @version 19.6.0
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
     * Callback function to receive the result of the GetDetectHtmlKeywords operation.
     * @callback module:api/SummarizationApi~GetDetectHtmlKeywordsCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the HTML document keywords using the keyword detection service.
     * @param {String} name Document name.
     * @param {Object} opts Optional parameters
     * @param {String} opts.folder Document folder.
     * @param {String} opts.storage Document storage.
     * @param {module:api/SummarizationApi~GetDetectHtmlKeywordsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.GetDetectHtmlKeywords = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling GetDetectHtmlKeywords");
      }
      var pathParams = {'name': name};
      var queryParams = {
        'folder': opts['folder'],
        'storage': opts['storage'],
      };
      var headerParams = {};
      var formParams = {};
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/html/{name}/summ/keywords', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the GetDetectHtmlKeywordsByUrl operation.
     * @callback module:api/SummarizationApi~GetDetectHtmlKeywordsByUrlCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the keywords from HTML document from Web specified by its URL using the keyword detection service
     * @param {String} sourceUrl Source document URL.
     * @param {module:api/SummarizationApi~GetDetectHtmlKeywordsByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.GetDetectHtmlKeywordsByUrl = function(sourceUrl, callback) {
      var postBody = null;
      // verify the required parameter 'sourceUrl' is set
      if (sourceUrl === undefined || sourceUrl === null) {
        throw new Error("Missing the required parameter 'sourceUrl' when calling GetDetectHtmlKeywordsByUrl");
      }
      var pathParams = {};
      var queryParams = {
        'sourceUrl': sourceUrl,
      };
      var headerParams = {};
      var formParams = {};
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/html/summ/keywords', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
