/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="StorageFile.js">
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Asposehtmlcloud) {
      root.Asposehtmlcloud = {};
    }
    root.Asposehtmlcloud.StorageFile = factory(root.Asposehtmlcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StorageFile model module.
   * @module model/StorageFile
   * @version 22.12.1
   */

  /**
   * Constructs a new <code>StorageFile</code>.
   * File or folder information
   * @alias module:model/StorageFile
   * @class
   * @param isFolder {Boolean} True if it is a folder.
   * @param size {Integer} File or folder size.
   */
  var exports = function(isFolder, size) {
    var _this = this;
    _this['isFolder'] = isFolder;
    _this['size'] = size;
  };

  /**
   * Constructs a <code>StorageFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StorageFile} obj Optional instance to populate.
   * @return {module:model/StorageFile} The populated <code>StorageFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('isFolder')) {
        obj['isFolder'] = ApiClient.convertToType(data['isFolder'], 'Boolean');
      }
      if (data.hasOwnProperty('modifiedDate')) {
        obj['modifiedDate'] = ApiClient.convertToType(data['modifiedDate'], 'Date');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Integer');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
    }
    return obj;
  }

  /**
   * File or folder name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * True if it is a folder.
   * @member {Boolean} isFolder
   */
  exports.prototype['isFolder'] = undefined;
  /**
   * File or folder last modified DateTime.
   * @member {Date} modifiedDate
   */
  exports.prototype['modifiedDate'] = undefined;
  /**
   * File or folder size.
   * @member {Integer} size
   */
  exports.prototype['size'] = undefined;
  /**
   * File or folder path.
   * @member {String} path
   */
  exports.prototype['path'] = undefined;

  return exports;
}));
