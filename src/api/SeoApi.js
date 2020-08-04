/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="SeoApi.js">
*   Copyright (c) 2020 Aspose.HTML for Cloud
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

(function (root, factory) {
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
        root.Asposehtmlcloud.SeoApi = factory(root.Asposehtmlcloud.ApiClient);
    }
}(this, function (ApiClient) {
    'use strict';

    /**
     * Conversion service.
     * @module api/SeoApi
     * @version 20.8.0
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

        /**
         * Callback function to receive the result of the GetSeoWarning operation.
         * @callback module:api/SeoApi~GetSeoWarningCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Page analysis and return SEO warnings in json format.
         * @param {String} addr Source page URL for analyses.
         * @param {module:api/SeoApi~GetSeoWarningCallback} callback The callback function, accepting three arguments: error, data, response.
         * data is of type: {@link File}
         */
        this.GetSeoWarning = function(addr, callback) {
            var postBody = null;

            // verify the required parameter 'addr' is set
            if (addr === undefined || addr === null) {
                throw "Missing the required parameter 'addr' when calling GetSeoWarning";
            }
            var pathParams = {};
            var queryParams = {
                'addr': addr
            };
            var headerParams = {};
            var formParams = {};
            var contentTypes = ['application/json'];
            var accepts = ['application/json'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/seo', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

        /**
         * Callback function to receive the result of the GetHtmlWarning operation.
         * @callback module:api/SeoApi~GetHtmlWarningCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Checks the markup validity of Web documents in HTML, XHTML, etc.and return in json format.
         * @param {String} url Source page URL for analyses.
         * @param {module:api/SeoApi~GetHtmlWarningCallback} callback The callback function, accepting three arguments: error, data, response.
         * data is of type: {@link File}
         */
        this.GetHtmlWarning = function(url, callback) {
            var postBody = null;

            // verify the required parameter 'url' is set
            if (url === undefined || url === null) {
                throw "Missing the required parameter 'url' when calling GetHtmlWarning";
            }
            var pathParams = {};
            var queryParams = {
                'url': url
            };
            var headerParams = {};
            var formParams = {};
            var contentTypes = ['application/json'];
            var accepts = ['application/json'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/validator', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

    };

    return exports;
}));
