/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="FileUploadResult.js">
*   Copyright (c) 2022 Aspose.HTML for Cloud
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
    define(['ApiClient', 'model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'));
  } else {
    // Browser globals (root is window)
    if (!root.Asposehtmlcloud) {
      root.Asposehtmlcloud = {};
    }
    root.Asposehtmlcloud.FilesUploadResult = factory(root.Asposehtmlcloud.ApiClient, root.Asposehtmlcloud.Error);
  }
}(this, function(ApiClient, Error) {
  'use strict';

  /**
   * The FilesUploadResult model module.
   * @module model/FilesUploadResult
   * @version 22.9.1
   */

  /**
   * Constructs a new <code>FilesUploadResult</code>.
   * File upload result
   * @alias module:model/FilesUploadResult
   */
  var exports = function() {
    var _this = this;
  };

  /**
   * Constructs a <code>FilesUploadResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FilesUploadResult} obj Optional instance to populate.
   * @return {module:model/FilesUploadResult} The populated <code>FilesUploadResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uploaded')) {
        obj['uploaded'] = ApiClient.convertToType(data['uploaded'], ['String']);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
      }
    }
    return obj;
  }

  /**
   * List of uploaded file names
   * @member {Array.<String>} uploaded
   */
  exports.prototype['uploaded'] = undefined;
  /**
   * List of errors.
   * @member {Array.<module:model/Error>} errors
   */
  exports.prototype['errors'] = undefined;

  return exports;
}));
