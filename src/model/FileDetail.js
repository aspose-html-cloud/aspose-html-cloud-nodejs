/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="FileDetail.js">
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
    root.Asposehtmlcloud.File = factory(root.Asposehtmlcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FileDetail model module.
   * @module model/FileDetail
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>FileDetail</code>.
   * @alias module:model/FileDetail
   * @class
   * @param isFolder {Boolean} 
   * @param modifiedDate {Date} 
   * @param size {Number} 
   * @param isDirectory {Boolean} 
   */
  var exports = function(isFolder, modifiedDate, size, isDirectory) {
    var _this = this;


    _this['IsFolder'] = isFolder;
    _this['ModifiedDate'] = modifiedDate;
    _this['Size'] = size;

    _this['IsDirectory'] = isDirectory;
  };

  /**
   * Constructs a <code>FileDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileDetail} obj Optional instance to populate.
   * @return {module:model/FileDetail} The populated <code>FileDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('IsFolder')) {
        obj['IsFolder'] = ApiClient.convertToType(data['IsFolder'], 'Boolean');
      }
      if (data.hasOwnProperty('ModifiedDate')) {
        obj['ModifiedDate'] = ApiClient.convertToType(data['ModifiedDate'], 'Date');
      }
      if (data.hasOwnProperty('Size')) {
        obj['Size'] = ApiClient.convertToType(data['Size'], 'Number');
      }
      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('IsDirectory')) {
        obj['IsDirectory'] = ApiClient.convertToType(data['IsDirectory'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Boolean} IsFolder
   */
  exports.prototype['IsFolder'] = undefined;
  /**
   * @member {Date} ModifiedDate
   */
  exports.prototype['ModifiedDate'] = undefined;
  /**
   * @member {Number} Size
   */
  exports.prototype['Size'] = undefined;
  /**
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * @member {Boolean} IsDirectory
   */
  exports.prototype['IsDirectory'] = undefined;



  return exports;
}));


