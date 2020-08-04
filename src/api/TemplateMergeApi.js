/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="TemplateMergeApi.js">
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
        define([
            'ApiClient',
            'model/MessageResponse'
        ], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(
            require('../ApiClient')
        );
    } else {
        // Browser globals (root is window)
        if (!root.Asposehtmlcloud) {
            root.Asposehtmlcloud = {};
        }
        root.Asposehtmlcloud.TemplateMergeApi = factory(
            root.Asposehtmlcloud.ApiClient
        );
    }
}(this, function (ApiClient, MessageResponse) {
    'use strict';

    /**
     * TemplateMerge service.
     * @module api/TemplateMergeApi
     * @version 20.8.1
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
         * Callback function to receive the result of the GetMergeHtmlTemplate operation.
         * @callback module:api/TemplateMergeApi~GetMergeHtmlTemplateCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Populate HTML document template with data located as a file in the storage.
         * @param {String} templateName Template document name. Template document is HTML or zipped HTML.
         * @param {String} dataPath Data source file path in the storage. Supported data format: XML
         * @param {Object} opts Optional parameters
         * @param {String} opts.options Template merge options: reserved for further implementation.
         * @param {String} opts.folder The template document folder.
         * @param {String} opts.storage The template document and data source storage.
         * @param {module:api/TemplateMergeApi~GetMergeHtmlTemplateCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.GetMergeHtmlTemplate = function (templateName, dataPath, opts, callback) {
            opts = opts || {};
            var postBody = null;
            // verify the required parameter 'templateName' is set
            if (templateName === undefined || templateName === null) {
                throw new Error("Missing the required parameter 'templateName' when calling GetMergeHtmlTemplate");
            }
            // verify the required parameter 'dataPath' is set
            if (dataPath === undefined || dataPath === null) {
                throw new Error("Missing the required parameter 'dataPath' when calling GetMergeHtmlTemplate");
            }
            var pathParams = {
                'templateName': templateName
            };
            var queryParams = {
                'dataPath': dataPath,
                'options': opts['options'],
                'folder': opts['folder'],
                'storage': opts['storage'],
            };
            var headerParams = {};
            var formParams = {};
            var contentTypes = ['multipart/form-data'];
            var accepts = ['application/json'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/{templateName}/merge', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

        /**
         * Callback function to receive the result of the PostMergeHtmlTemplate operation.
         * @callback module:api/TemplateMergeApi~PostMergeHtmlTemplateCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Populate HTML document template with data from the request body. Result document will be saved to storage.
         * @param {String} templateName Template document name. Template document is HTML or zipped HTML.
         * @param {String} outPath Result document path.
         * @param {File} file A data file to populate template.
         * @param {Object} opts Optional parameters
         * @param {String} opts.options Template merge options: reserved for further implementation.
         * @param {String} opts.folder The template document folder.
         * @param {String} opts.storage The template document and data source storage.
         * @param {module:api/TemplateMergeApi~PostMergeHtmlTemplateCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.PostMergeHtmlTemplate = function (templateName, outPath, file, opts, callback) {
            opts = opts || {};
            var postBody = null;
            // verify the required parameter 'templateName' is set
            if (templateName === undefined || templateName === null) {
                throw new Error("Missing the required parameter 'templateName' when calling PostMergeHtmlTemplate");
            }
            // verify the required parameter 'outPath' is set
            if (outPath === undefined || outPath === null) {
                throw new Error("Missing the required parameter 'outPath' when calling PostMergeHtmlTemplate");
            }
            // verify the required parameter 'file' is set
            if (file === undefined || file === null) {
                throw new Error("Missing the required parameter 'file' when calling PostMergeHtmlTemplate");
            }
            var pathParams = {
                'templateName': templateName
            };
            var queryParams = {
                'outPath': outPath,
                'options': opts['options'],
                'folder': opts['folder'],
                'storage': opts['storage'],
            };
            var headerParams = {};
            var formParams = {
                'file': file
            };

            var contentTypes = ['multipart/form-data'];
            var accepts = ['application/json'];
            var returnType = MessageResponse;

            return this.apiClient.callApi(
                '/html/{templateName}/merge', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };
    };

    return exports;
}));
