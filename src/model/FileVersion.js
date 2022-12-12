/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="FileVersion.js">
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
    define(['ApiClient', 'module/StorageFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StorageFile'));
  } else {
    // Browser globals (root is window)
    if (!root.Asposehtmlcloud) {
      root.Asposehtmlcloud = {};
    }
    root.Asposehtmlcloud.FileVersion = factory(root.Asposehtmlcloud.ApiClient, root.Asposehtmlcloud.StorageFile);
  }
}(this, function(ApiClient, StorageFile) {
  'use strict';


  /**
   * The FileVersion model module.
   * @module model/FileVersion
   * @version 22.12.1
   */

  /**
   * Constructs a new <code>FileVersion</code>.
   * @alias module:model/FileVersion
   * @class
   * @extends module:model/StorageFile
   * @param isFolder {Boolean} 
   * @param modifiedDate {Date} 
   * @param size {Number} 
   * @param isDirectory {Boolean} 
   */
  var exports = function(isFolder, modifiedDate, size, isDirectory) {
    var _this = this;
    StorageFile.call(_this, isFolder, modifiedDate, size, isDirectory);
  };

  /**
   * Constructs a <code>FileVersion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileVersion} obj Optional instance to populate.
   * @return {module:model/FileVersion} The populated <code>FileVersion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      StorageFile.constructFromObject(data, obj);
      if (data.hasOwnProperty('versionId')) {
        obj['versionId'] = ApiClient.convertToType(data['versionId'], 'String');
      }
      if (data.hasOwnProperty('isLatest')) {
        obj['isLatest'] = ApiClient.convertToType(data['isLatest'], 'Boolean');
      }
    }
    return obj;
  };

//  exports.prototype = Object.create(File.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {String} versionId
   */
  exports.prototype['versionId'] = undefined;
  /**
   * @member {Boolean} isLatest
   */
  exports.prototype['isLatest'] = undefined;

  return exports;
}));
