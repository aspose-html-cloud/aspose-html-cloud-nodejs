/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="ConversionApi.js">
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
        root.Asposehtmlcloud.ConversionApi = factory(root.Asposehtmlcloud.ApiClient);
    }
}(this, function (ApiClient) {
    'use strict';

    /**
     * Conversion service.
     * @module api/ConversionApi
     * @version 1.0.1
     */

    /**
     * Constructs a new ConversionApi.
     * @alias module:api/ConversionApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    var exports = function (apiClient) {
        this.apiClient = apiClient || ApiClient.instance;


        /**
         * Callback function to receive the result of the GetConvertDocumentToImage operation.
         * @callback module:api/ConversionApi~GetConvertDocumentToImageCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Convert the HTML document from the storage by its name to the specified image format.
         * @param {String} name Document name.
         * @param {String} outFormat Resulting image format.
         * @param {Object} opts Optional parameters
         * @param {Number} opts.width Resulting image width.
         * @param {Number} opts.height Resulting image height.
         * @param {Number} opts.leftMargin Left resulting image margin.
         * @param {Number} opts.rightMargin Right resulting image margin.
         * @param {Number} opts.topMargin Top resulting image margin.
         * @param {Number} opts.bottomMargin Bottom resulting image margin.
         * @param {Number} opts.xResolution Horizontal resolution of resulting image.
         * @param {Number} opts.yResolution Vertical resolution of resulting image.
         * @param {String} opts.folder The source document folder.
         * @param {String} opts.storage The source document storage.
         * @param {module:api/ConversionApi~GetConvertDocumentToImageCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.GetConvertDocumentToImage = function (name, outFormat, opts, callback) {
            opts = opts || {};
            var postBody = null;

            // verify the required parameter 'name' is set
            if (name === undefined || name === null) {
                throw new Error("Missing the required parameter 'name' when calling GetConvertDocumentToImage");
            }

            // verify the required parameter 'outFormat' is set
            if (outFormat === undefined || outFormat === null) {
                throw new Error("Missing the required parameter 'outFormat' when calling GetConvertDocumentToImage");
            }


            var pathParams = {
                'name': name,
                'outFormat': outFormat
            };
            var queryParams = {
                'width': opts['width'],
                'height': opts['height'],
                'leftMargin': opts['leftMargin'],
                'rightMargin': opts['rightMargin'],
                'topMargin': opts['topMargin'],
                'bottomMargin': opts['bottomMargin'],
                'xResolution': opts['xResolution'],
                'yResolution': opts['yResolution'],
                'folder': opts['folder'],
                'storage': opts['storage'],
            };
            var collectionQueryParams = {};
            var headerParams = {};
            var formParams = {};

            var contentTypes = ['application/json'];
            var accepts = ['multipart/form-data'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/{name}/convert/image/{outFormat}', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

        /**
         * Callback function to receive the result of the GetConvertDocumentToImageByUrl operation.
         * @callback module:api/ConversionApi~GetConvertDocumentToImageByUrlCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Convert the HTML page from the web by its URL to the specified image format.
         * @param {String} sourceUrl Source page URL.
         * @param {String} outFormat Resulting image format.
         * @param {Object} opts Optional parameters
         * @param {Number} opts.width Resulting image width.
         * @param {Number} opts.height Resulting image height.
         * @param {Number} opts.leftMargin Left resulting image margin.
         * @param {Number} opts.rightMargin Right resulting image margin.
         * @param {Number} opts.topMargin Top resulting image margin.
         * @param {Number} opts.bottomMargin Bottom resulting image margin.
         * @param {Number} opts.xResolution Horizontal resolution of resulting image.
         * @param {Number} opts.yResolution Vertical resolution of resulting image.
         * @param {String} opts.folder The document folder.
         * @param {String} opts.storage The document storage.
         * @param {module:api/ConversionApi~GetConvertDocumentToImageByUrlCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.GetConvertDocumentToImageByUrl = function (sourceUrl, outFormat, opts, callback) {
            opts = opts || {};
            var postBody = null;

            // verify the required parameter 'sourceUrl' is set
            if (sourceUrl === undefined || sourceUrl === null) {
                throw new Error("Missing the required parameter 'sourceUrl' when calling GetConvertDocumentToImageByUrl");
            }

            // verify the required parameter 'outFormat' is set
            if (outFormat === undefined || outFormat === null) {
                throw new Error("Missing the required parameter 'outFormat' when calling GetConvertDocumentToImageByUrl");
            }


            var pathParams = {
                'outFormat': outFormat
            };
            var queryParams = {
                'sourceUrl': sourceUrl,
                'width': opts['width'],
                'height': opts['height'],
                'leftMargin': opts['leftMargin'],
                'rightMargin': opts['rightMargin'],
                'topMargin': opts['topMargin'],
                'bottomMargin': opts['bottomMargin'],
                'xResolution': opts['xResolution'],
                'yResolution': opts['yResolution'],
                'folder': opts['folder'],
                'storage': opts['storage'],
            };
            var collectionQueryParams = {};
            var headerParams = {};
            var formParams = {};

            var contentTypes = ['application/json'];
            var accepts = ['multipart/form-data'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/convert/image/{outFormat}', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

        /**
         * Callback function to receive the result of the GetConvertDocumentToPdf operation.
         * @callback module:api/ConversionApi~GetConvertDocumentToPdfCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Convert the HTML document from the storage by its name to PDF.
         * @param {String} name Document name.
         * @param {Object} opts Optional parameters
         * @param {Number} opts.width Resulting image width.
         * @param {Number} opts.height Resulting image height.
         * @param {Number} opts.leftMargin Left resulting image margin.
         * @param {Number} opts.rightMargin Right resulting image margin.
         * @param {Number} opts.topMargin Top resulting image margin.
         * @param {Number} opts.bottomMargin Bottom resulting image margin.
         * @param {String} opts.folder The document folder.
         * @param {String} opts.storage The document storage.
         * @param {module:api/ConversionApi~GetConvertDocumentToPdfCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.GetConvertDocumentToPdf = function (name, opts, callback) {
            opts = opts || {};
            var postBody = null;

            // verify the required parameter 'name' is set
            if (name === undefined || name === null) {
                throw new Error("Missing the required parameter 'name' when calling GetConvertDocumentToPdf");
            }


            var pathParams = {
                'name': name
            };
            var queryParams = {
                'width': opts['width'],
                'height': opts['height'],
                'leftMargin': opts['leftMargin'],
                'rightMargin': opts['rightMargin'],
                'topMargin': opts['topMargin'],
                'bottomMargin': opts['bottomMargin'],
                'folder': opts['folder'],
                'storage': opts['storage'],
            };
            var collectionQueryParams = {};
            var headerParams = {};
            var formParams = {};

            var contentTypes = ['application/json'];
            var accepts = ['multipart/form-data'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/{name}/convert/pdf', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

        /**
         * Callback function to receive the result of the GetConvertDocumentToPdfByUrl operation.
         * @callback module:api/ConversionApi~GetConvertDocumentToPdfByUrlCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Convert the HTML page from the web by its URL to PDF.
         * @param {String} sourceUrl Source page URL.
         * @param {Object} opts Optional parameters
         * @param {Number} opts.width Resulting image width.
         * @param {Number} opts.height Resulting image height.
         * @param {Number} opts.leftMargin Left resulting image margin.
         * @param {Number} opts.rightMargin Right resulting image margin.
         * @param {Number} opts.topMargin Top resulting image margin.
         * @param {Number} opts.bottomMargin Bottom resulting image margin.
         * @param {String} opts.folder The document folder.
         * @param {String} opts.storage The document storage.
         * @param {module:api/ConversionApi~GetConvertDocumentToPdfByUrlCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.GetConvertDocumentToPdfByUrl = function (sourceUrl, opts, callback) {
            opts = opts || {};
            var postBody = null;

            // verify the required parameter 'sourceUrl' is set
            if (sourceUrl === undefined || sourceUrl === null) {
                throw new Error("Missing the required parameter 'sourceUrl' when calling GetConvertDocumentToPdfByUrl");
            }


            var pathParams = {};
            var queryParams = {
                'sourceUrl': sourceUrl,
                'width': opts['width'],
                'height': opts['height'],
                'leftMargin': opts['leftMargin'],
                'rightMargin': opts['rightMargin'],
                'topMargin': opts['topMargin'],
                'bottomMargin': opts['bottomMargin'],
                'folder': opts['folder'],
                'storage': opts['storage']
            };
            var collectionQueryParams = {};
            var headerParams = {};
            var formParams = {};

            var contentTypes = ['application/json'];
            var accepts = ['multipart/form-data'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/convert/pdf', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

        /**
         * Callback function to receive the result of the GetConvertDocumentToXps operation.
         * @callback module:api/ConversionApi~GetConvertDocumentToXpsCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Convert the HTML document from the storage by its name to XPS.
         * @param {String} name Document name.
         * @param {Object} opts Optional parameters
         * @param {Number} opts.width Resulting image width.
         * @param {Number} opts.height Resulting image height.
         * @param {Number} opts.leftMargin Left resulting image margin.
         * @param {Number} opts.rightMargin Right resulting image margin.
         * @param {Number} opts.topMargin Top resulting image margin.
         * @param {Number} opts.bottomMargin Bottom resulting image margin.
         * @param {String} opts.folder The document folder.
         * @param {String} opts.storage The document storage.
         * @param {module:api/ConversionApi~GetConvertDocumentToXpsCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.GetConvertDocumentToXps = function (name, opts, callback) {
            opts = opts || {};
            var postBody = null;

            // verify the required parameter 'name' is set
            if (name === undefined || name === null) {
                throw new Error("Missing the required parameter 'name' when calling GetConvertDocumentToXps");
            }


            var pathParams = {
                'name': name
            };
            var queryParams = {
                'width': opts['width'],
                'height': opts['height'],
                'leftMargin': opts['leftMargin'],
                'rightMargin': opts['rightMargin'],
                'topMargin': opts['topMargin'],
                'bottomMargin': opts['bottomMargin'],
                'folder': opts['folder'],
                'storage': opts['storage'],
            };
            var collectionQueryParams = {};
            var headerParams = {};
            var formParams = {};

            var contentTypes = ['application/json'];
            var accepts = ['multipart/form-data'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/{name}/convert/xps', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

        /**
         * Callback function to receive the result of the GetConvertDocumentToXpsByUrl operation.
         * @callback module:api/ConversionApi~GetConvertDocumentToXpsByUrlCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Convert the HTML page from the web by its URL to XPS.
         * @param {String} sourceUrl Source page URL.
         * @param {Object} opts Optional parameters
         * @param {Number} opts.width Resulting image width.
         * @param {Number} opts.height Resulting image height.
         * @param {Number} opts.leftMargin Left resulting image margin.
         * @param {Number} opts.rightMargin Right resulting image margin.
         * @param {Number} opts.topMargin Top resulting image margin.
         * @param {Number} opts.bottomMargin Bottom resulting image margin.
         * @param {String} opts.folder The document folder.
         * @param {String} opts.storage The document storage.
         * @param {module:api/ConversionApi~GetConvertDocumentToXpsByUrlCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.GetConvertDocumentToXpsByUrl = function (sourceUrl, opts, callback) {
            opts = opts || {};
            var postBody = null;

            // verify the required parameter 'sourceUrl' is set
            if (sourceUrl === undefined || sourceUrl === null) {
                throw new Error("Missing the required parameter 'sourceUrl' when calling GetConvertDocumentToXpsByUrl");
            }


            var pathParams = {};
            var queryParams = {
                'sourceUrl': sourceUrl,
                'width': opts['width'],
                'height': opts['height'],
                'leftMargin': opts['leftMargin'],
                'rightMargin': opts['rightMargin'],
                'topMargin': opts['topMargin'],
                'bottomMargin': opts['bottomMargin'],
                'folder': opts['folder'],
                'storage': opts['storage'],
            };
            var collectionQueryParams = {};
            var headerParams = {};
            var formParams = {};

            var contentTypes = ['application/json'];
            var accepts = ['multipart/form-data'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/convert/xps', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

        /**
         * Callback function to receive the result of the PutConvertDocumentInRequestToImage operation.
         * @callback module:api/ConversionApi~PutConvertDocumentInRequestToImageCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converts the HTML document (in request content) to the specified image format and uploads resulting file to storage.
         * @param {String} outPath Full resulting filename (ex. /folder1/folder2/result.jpg)
         * @param {String} outFormat
         * @param {String} File path to be converted.
         * @param {Object} opts Optional parameters
         * @param {Number} opts.width Resulting document page width in points (1/96 inch).
         * @param {Number} opts.height Resulting document page height in points (1/96 inch).
         * @param {Number} opts.leftMargin Left resulting document page margin in points (1/96 inch).
         * @param {Number} opts.rightMargin Right resulting document page margin in points (1/96 inch).
         * @param {Number} opts.topMargin Top resulting document page margin in points (1/96 inch).
         * @param {Number} opts.bottomMargin Bottom resulting document page margin in points (1/96 inch).
         * @param {Number} opts.resolution Resolution of resulting image. Default is 96 dpi.
         * @param {module:api/ConversionApi~PutConvertDocumentInRequestToImageCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.PutConvertDocumentInRequestToImage = function (outPath, outFormat, file, opts, callback) {
            opts = opts || {};
            var postBody = require('fs').readFileSync(file);

            // verify the required parameter 'outPath' is set
            if (outPath === undefined || outPath === null) {
                throw new Error("Missing the required parameter 'outPath' when calling PutConvertDocumentInRequestToImage");
            }

            // verify the required parameter 'outFormat' is set
            if (outFormat === undefined || outFormat === null) {
                throw new Error("Missing the required parameter 'outFormat' when calling PutConvertDocumentInRequestToImage");
            }

            // verify the required parameter 'file' is set
            if (file === undefined || file === null) {
                throw new Error("Missing the required parameter 'file' when calling PutConvertDocumentInRequestToImage");
            }


            var pathParams = {
                'outFormat': outFormat
            };
            var queryParams = {
                'outPath': outPath,
                'width': opts['width'],
                'height': opts['height'],
                'leftMargin': opts['leftMargin'],
                'rightMargin': opts['rightMargin'],
                'topMargin': opts['topMargin'],
                'bottomMargin': opts['bottomMargin'],
                'resolution': opts['resolution'],
            };
            var collectionQueryParams = {};
            var headerParams = {};
            var formParams = {
            //    'file': file
            };

            var contentTypes = ['application/octet-stream'];
            var accepts = ['application/json'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/convert/image/{outFormat}', 'PUT',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

        /**
         * Callback function to receive the result of the PutConvertDocumentInRequestToPdf operation.
         * @callback module:api/ConversionApi~PutConvertDocumentInRequestToPdfCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converts the HTML document (in request content) to PDF and uploads resulting file to storage.
         * @param {String} outPath Full resulting filename (ex. /folder1/folder2/result.pdf)
         * @param {String} File path to be converted.
         * @param {Object} opts Optional parameters
         * @param {Number} opts.width Resulting document page width in points (1/96 inch).
         * @param {Number} opts.height Resulting document page height in points (1/96 inch).
         * @param {Number} opts.leftMargin Left resulting document page margin in points (1/96 inch).
         * @param {Number} opts.rightMargin Right resulting document page margin in points (1/96 inch).
         * @param {Number} opts.topMargin Top resulting document page margin in points (1/96 inch).
         * @param {Number} opts.bottomMargin Bottom resulting document page margin in points (1/96 inch).
         * @param {module:api/ConversionApi~PutConvertDocumentInRequestToPdfCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.PutConvertDocumentInRequestToPdf = function (outPath, file, opts, callback) {
            opts = opts || {};
            var postBody = require('fs').readFileSync(file);

            // verify the required parameter 'outPath' is set
            if (outPath === undefined || outPath === null) {
                throw new Error("Missing the required parameter 'outPath' when calling PutConvertDocumentInRequestToPdf");
            }

            // verify the required parameter 'file' is set
            if (file === undefined || file === null) {
                throw new Error("Missing the required parameter 'file' when calling PutConvertDocumentInRequestToPdf");
            }


            var pathParams = {};
            var queryParams = {
                'outPath': outPath,
                'width': opts['width'],
                'height': opts['height'],
                'leftMargin': opts['leftMargin'],
                'rightMargin': opts['rightMargin'],
                'topMargin': opts['topMargin'],
                'bottomMargin': opts['bottomMargin'],
            };
            var collectionQueryParams = {};
            var headerParams = {};
            var formParams = {
            //    'file': file
            };

            var contentTypes = ['application/octet-stream'];
            var accepts = ['application/json'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/convert/pdf', 'PUT',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

        /**
         * Callback function to receive the result of the PutConvertDocumentInRequestToXps operation.
         * @callback module:api/ConversionApi~PutConvertDocumentInRequestToXpsCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converts the HTML document (in request content) to XPS and uploads resulting file to storage.
         * @param {String} outPath Full resulting filename (ex. /folder1/folder2/result.xps)
         * @param {String} File path to be converted.
         * @param {Object} opts Optional parameters
         * @param {Number} opts.width Resulting document page width in points (1/96 inch).
         * @param {Number} opts.height Resulting document page height in points (1/96 inch).
         * @param {Number} opts.leftMargin Left resulting document page margin in points (1/96 inch).
         * @param {Number} opts.rightMargin Right resulting document page margin in points (1/96 inch).
         * @param {Number} opts.topMargin Top resulting document page margin in points (1/96 inch).
         * @param {Number} opts.bottomMargin Bottom resulting document page margin in points (1/96 inch).
         * @param {module:api/ConversionApi~PutConvertDocumentInRequestToXpsCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.PutConvertDocumentInRequestToXps = function (outPath, file, opts, callback) {
            opts = opts || {};
            var postBody = require('fs').readFileSync(file);

            // verify the required parameter 'outPath' is set
            if (outPath === undefined || outPath === null) {
                throw new Error("Missing the required parameter 'outPath' when calling PutConvertDocumentInRequestToXps");
            }

            // verify the required parameter 'file' is set
            if (file === undefined || file === null) {
                throw new Error("Missing the required parameter 'file' when calling PutConvertDocumentInRequestToXps");
            }


            var pathParams = {};
            var queryParams = {
                'outPath': outPath,
                'width': opts['width'],
                'height': opts['height'],
                'leftMargin': opts['leftMargin'],
                'rightMargin': opts['rightMargin'],
                'topMargin': opts['topMargin'],
                'bottomMargin': opts['bottomMargin'],
            };
            var collectionQueryParams = {};
            var headerParams = {};
            var formParams = {
           //     'file': file
            };

            var contentTypes = ['application/octet-stream'];
            var accepts = ['application/json'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/convert/xps', 'PUT',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

        /**
         * Callback function to receive the result of the PutConvertDocumentToImage operation.
         * @callback module:api/ConversionApi~PutConvertDocumentToImageCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converts the HTML document (located on storage) to the specified image format and uploads resulting file to storage.
         * @param {String} name Document name.
         * @param {String} outPath Full resulting filename (ex. /folder1/folder2/result.jpg)
         * @param {String} outFormat
         * @param {Object} opts Optional parameters
         * @param {Number} opts.width Resulting document page width in points (1/96 inch).
         * @param {Number} opts.height Resulting document page height in points (1/96 inch).
         * @param {Number} opts.leftMargin Left resulting document page margin in points (1/96 inch).
         * @param {Number} opts.rightMargin Right resulting document page margin in points (1/96 inch).
         * @param {Number} opts.topMargin Top resulting document page margin in points (1/96 inch).
         * @param {Number} opts.bottomMargin Bottom resulting document page margin in points (1/96 inch).
         * @param {Number} opts.resolution Resolution of resulting image. Default is 96 dpi.
         * @param {String} opts.folder The source document folder.
         * @param {String} opts.storage The source and resulting document storage.
         * @param {module:api/ConversionApi~PutConvertDocumentToImageCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.PutConvertDocumentToImage = function (name, outPath, outFormat, opts, callback) {
            opts = opts || {};
            var postBody = null;

            // verify the required parameter 'name' is set
            if (name === undefined || name === null) {
                throw new Error("Missing the required parameter 'name' when calling PutConvertDocumentToImage");
            }

            // verify the required parameter 'outPath' is set
            if (outPath === undefined || outPath === null) {
                throw new Error("Missing the required parameter 'outPath' when calling PutConvertDocumentToImage");
            }

            // verify the required parameter 'outFormat' is set
            if (outFormat === undefined || outFormat === null) {
                throw new Error("Missing the required parameter 'outFormat' when calling PutConvertDocumentToImage");
            }


            var pathParams = {
                'name': name,
                'outFormat': outFormat
            };
            var queryParams = {
                'outPath': outPath,
                'width': opts['width'],
                'height': opts['height'],
                'leftMargin': opts['leftMargin'],
                'rightMargin': opts['rightMargin'],
                'topMargin': opts['topMargin'],
                'bottomMargin': opts['bottomMargin'],
                'resolution': opts['resolution'],
                'folder': opts['folder'],
                'storage': opts['storage'],
            };
            var collectionQueryParams = {};
            var headerParams = {};
            var formParams = {};

            var contentTypes = ['application/json'];
            var accepts = ['application/json'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/{name}/convert/image/{outFormat}', 'PUT',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

        /**
         * Callback function to receive the result of the PutConvertDocumentToPdf operation.
         * @callback module:api/ConversionApi~PutConvertDocumentToPdfCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converts the HTML document (located on storage) to PDF and uploads resulting file to storage.
         * @param {String} name Document name.
         * @param {String} outPath Full resulting filename (ex. /folder1/folder2/result.pdf)
         * @param {Object} opts Optional parameters
         * @param {Number} opts.width Resulting document page width in points (1/96 inch).
         * @param {Number} opts.height Resulting document page height in points (1/96 inch).
         * @param {Number} opts.leftMargin Left resulting document page margin in points (1/96 inch).
         * @param {Number} opts.rightMargin Right resulting document page margin in points (1/96 inch).
         * @param {Number} opts.topMargin Top resulting document page margin in points (1/96 inch).
         * @param {Number} opts.bottomMargin Bottom resulting document page margin in points (1/96 inch).
         * @param {String} opts.folder The source document folder.
         * @param {String} opts.storage The source and resulting document storage.
         * @param {module:api/ConversionApi~PutConvertDocumentToPdfCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.PutConvertDocumentToPdf = function (name, outPath, opts, callback) {
            opts = opts || {};
            var postBody = null;

            // verify the required parameter 'name' is set
            if (name === undefined || name === null) {
                throw new Error("Missing the required parameter 'name' when calling PutConvertDocumentToPdf");
            }

            // verify the required parameter 'outPath' is set
            if (outPath === undefined || outPath === null) {
                throw new Error("Missing the required parameter 'outPath' when calling PutConvertDocumentToPdf");
            }


            var pathParams = {
                'name': name
            };
            var queryParams = {
                'outPath': outPath,
                'width': opts['width'],
                'height': opts['height'],
                'leftMargin': opts['leftMargin'],
                'rightMargin': opts['rightMargin'],
                'topMargin': opts['topMargin'],
                'bottomMargin': opts['bottomMargin'],
                'folder': opts['folder'],
                'storage': opts['storage'],
            };
            var collectionQueryParams = {};
            var headerParams = {};
            var formParams = {};

            var contentTypes = ['application/json'];
            var accepts = ['application/json'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/{name}/convert/pdf', 'PUT',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        };

        /**
         * Callback function to receive the result of the PutConvertDocumentToXps operation.
         * @callback module:api/ConversionApi~PutConvertDocumentToXpsCallback
         * @param {String} error Error message, if any.
         * @param {File} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Converts the HTML document (located on storage) to XPS and uploads resulting file to storage.
         * @param {String} name Document name.
         * @param {String} outPath Full resulting filename (ex. /folder1/folder2/result.xps)
         * @param {Object} opts Optional parameters
         * @param {Number} opts.width Resulting document page width in points (1/96 inch).
         * @param {Number} opts.height Resulting document page height in points (1/96 inch).
         * @param {Number} opts.leftMargin Left resulting document page margin in points (1/96 inch).
         * @param {Number} opts.rightMargin Right resulting document page margin in points (1/96 inch).
         * @param {Number} opts.topMargin Top resulting document page margin in points (1/96 inch).
         * @param {Number} opts.bottomMargin Bottom resulting document page margin in points (1/96 inch).
         * @param {String} opts.folder The source document folder.
         * @param {String} opts.storage The source and resulting document storage.
         * @param {module:api/ConversionApi~PutConvertDocumentToXpsCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link File}
         */
        this.PutConvertDocumentToXps = function (name, outPath, opts, callback) {
            opts = opts || {};
            var postBody = null;

            // verify the required parameter 'name' is set
            if (name === undefined || name === null) {
                throw new Error("Missing the required parameter 'name' when calling PutConvertDocumentToXps");
            }

            // verify the required parameter 'outPath' is set
            if (outPath === undefined || outPath === null) {
                throw new Error("Missing the required parameter 'outPath' when calling PutConvertDocumentToXps");
            }


            var pathParams = {
                'name': name
            };
            var queryParams = {
                'outPath': outPath,
                'width': opts['width'],
                'height': opts['height'],
                'leftMargin': opts['leftMargin'],
                'rightMargin': opts['rightMargin'],
                'topMargin': opts['topMargin'],
                'bottomMargin': opts['bottomMargin'],
                'folder': opts['folder'],
                'storage': opts['storage'],
            };
            var collectionQueryParams = {};
            var headerParams = {};
            var formParams = {};

            var contentTypes = ['application/json'];
            var accepts = ['application/json'];
            var returnType = 'Blob';

            return this.apiClient.callApi(
                '/html/{name}/convert/xps', 'PUT',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, callback
            );
        }
    };

    return exports;
}));
