/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="OcrApi.js">
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
    root.Asposehtmlcloud.OcrApi = factory(root.Asposehtmlcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Ocr service.
   * @module api/OcrApi
   * @version 1.0.1
   */

  /**
   * Constructs a new OcrApi. 
   * @alias module:api/OcrApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the GetRecognizeAndImportToHtml operation.
     * @callback module:api/OcrApi~GetRecognizeAndImportToHtmlCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recognize text from the image file in the storage and import it to HTML format.
     * @param {String} name The image file name.
     * @param {Object} opts Optional parameters
     * @param {String} opts.ocrEngineLang OCR engine language - language  (default to en)
     * @param {String} opts.folder The source image folder.
     * @param {String} opts.storage The source image storage.
     * @param {module:api/OcrApi~GetRecognizeAndImportToHtmlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.GetRecognizeAndImportToHtml = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling GetRecognizeAndImportToHtml");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'ocrEngineLang': opts['ocrEngineLang'],
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
      var accepts = ['multipart/form-data'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/html/{name}/ocr/import', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the GetRecognizeAndTranslateToHtml operation.
     * @callback module:api/OcrApi~GetRecognizeAndTranslateToHtmlCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recognize text from the image file in the storage, import it to HTML format and translate to specified language.
     * @param {String} name The image file name.
     * @param {String} srcLang Source language - also supposed as the OCR engine language.
     * @param {String} resLang Result language.
     * @param {Object} opts Optional parameters
     * @param {String} opts.folder The source image folder.
     * @param {String} opts.storage The source image storage.
     * @param {module:api/OcrApi~GetRecognizeAndTranslateToHtmlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.GetRecognizeAndTranslateToHtml = function(name, srcLang, resLang, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling GetRecognizeAndTranslateToHtml");
      }

      // verify the required parameter 'srcLang' is set
      if (srcLang === undefined || srcLang === null) {
        throw new Error("Missing the required parameter 'srcLang' when calling GetRecognizeAndTranslateToHtml");
      }

      // verify the required parameter 'resLang' is set
      if (resLang === undefined || resLang === null) {
        throw new Error("Missing the required parameter 'resLang' when calling GetRecognizeAndTranslateToHtml");
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
      var accepts = ['multipart/form-data'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/html/{name}/ocr/translate/{srcLang}/{resLang}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
