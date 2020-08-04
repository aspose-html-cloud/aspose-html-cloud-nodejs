/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="ImportApi.js">
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
        root.Asposehtmlcloud.ImportApi = factory(root.Asposehtmlcloud.ApiClient);
    }
}(this, function (ApiClient) {
    'use strict';

    /**
     * Conversion service.
     * @module api/ImportApi
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
         * Callback function to receive the result of the GetConvertMarkdownToHtml operation.
         * @callback module:api/ImportApi~GetConvertMarkdownToHtmlCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converts the Markdown document (located on storage) to HTML and returns resulting file in response content.
         * @param {String} name Document name.
         * @param {Object} opts Optional parameters
         * @param {String} opts.folder Source document folder.
         * @param {String} opts.storage Source document storage.
         * @param {module:api/ImportApi~GetConvertMarkdownToHtmlCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.GetConvertMarkdownToHtml = function(name, opts, callback) {
            opts = opts || {};
            var postBody = null;
            // verify the required parameter 'name' is set
            if (name === undefined || name === null) {
                throw "Missing the required parameter 'name' when calling GetConvertMarkdownToHtml";
            }
            var pathParams = {
                'name': name
            };
            var queryParams = {
                'folder': opts['folder'],
                'storage': opts['storage']
            };
            var headerParams = {};
            var formParams = {};
            var contentTypes = ['application/json'];
            var accepts = ['multipart/form-data'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/{name}/import/md', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

        /**
         * Callback function to receive the result of the PostConvertMarkdownInRequestToHtml operation.
         * @callback module:api/ImportApi~PostConvertMarkdownInRequestToHtmlCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converts the Markdown document (in request content) to HTML and uploads resulting file to storage by specified path.
         * @param {String} outPath Full resulting file path in the storage (ex. /folder1/folder2/result.html)
         * @param {File} file A file to be converted.
         * @param {Object} opts Optional parameters
         * @param {String} opts.folder Source document folder.
         * @param {String} opts.storage Source document storage.
         * @param {module:api/ImportApi~PostConvertMarkdownInRequestToHtmlCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.PostConvertMarkdownInRequestToHtml = function(outPath, file, opts, callback) {
            opts = opts || {};
            var postBody = null;
            // verify the required parameter 'outPath' is set
            if (outPath === undefined || outPath === null) {
                throw "Missing the required parameter 'outPath' when calling PostConvertMarkdownInRequestToHtml";
            }
            // verify the required parameter 'file' is set
            if (file === undefined || file === null) {
                throw "Missing the required parameter 'file' when calling PostConvertMarkdownInRequestToHtml";
            }
            var pathParams = {};
            var queryParams = {
                'outPath': outPath,
                'folder': opts['folder'],
                'storage': opts['storage']
            };
            var headerParams = {};
            var formParams = {
                'file': file
            };
            var contentTypes = ['multipart/form-data'];
            var accepts = ['application/json'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/import/md', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

        /**
         * Callback function to receive the result of the PutConvertMarkdownToHtml operation.
         * @callback module:api/ImportApi~PutConvertMarkdownToHtmlCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converts the Markdown document (located on storage) to HTML and uploads resulting file to storage by specified path.
         * @param {String} name Document name.
         * @param {String} outPath Full resulting file path in the storage (ex. /folder1/folder2/result.html)
         * @param {Object} opts Optional parameters
         * @param {String} opts.folder The source document folder.
         * @param {String} opts.storage The source and resulting document storage.
         * @param {module:api/ImportApi~PutConvertMarkdownToHtmlCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.PutConvertMarkdownToHtml = function(name, outPath, opts, callback) {
            opts = opts || {};
            var postBody = null;
            // verify the required parameter 'name' is set
            if (name === undefined || name === null) {
                throw "Missing the required parameter 'name' when calling PutConvertMarkdownToHtml";
            }
            // verify the required parameter 'outPath' is set
            if (outPath === undefined || outPath === null) {
                throw "Missing the required parameter 'outPath' when calling PutConvertMarkdownToHtml";
            }
            var pathParams = {
                'name': name
            };
            var queryParams = {
                'outPath': outPath,
                'folder': opts['folder'],
                'storage': opts['storage']
            };
            var headerParams = {};
            var formParams = {};
            var contentTypes = ['application/json'];
            var accepts = ['application/json'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/{name}/import/md', 'PUT',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

    };

    return exports;
}));
