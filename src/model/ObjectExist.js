/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="ObjectExist.js">
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
    root.Asposehtmlcloud.ObjectExist = factory(root.Asposehtmlcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ObjectExist model module.
   * @module model/ObjectExist
   * @version 22.11.2
   */

  /**
   * Constructs a new <code>ObjectExist</code>.
   * Object exists
   * @alias module:model/ObjectExist
   * @class
   * @param exists {Boolean} Indicates that the file or folder exists.
   * @param isFolder {Boolean} True if it is a folder, false if it is a file.
   */
  var exports = function(exists, isFolder) {
    var _this = this;

    _this['exists'] = exists;
    _this['isFolder'] = isFolder;
  };

  /**
   * Constructs a <code>ObjectExist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ObjectExist} obj Optional instance to populate.
   * @return {module:model/ObjectExist} The populated <code>ObjectExist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('exists')) {
        obj['exists'] = ApiClient.convertToType(data['exists'], 'Boolean');
      }
      if (data.hasOwnProperty('isFolder')) {
        obj['isFolder'] = ApiClient.convertToType(data['isFolder'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Indicates that the file or folder exists.
   * @member {Boolean} exists
   */
  exports.prototype['exists'] = undefined;
  /**
   * True if it is a folder, false if it is a file.
   * @member {Boolean} isFolder
   */
  exports.prototype['isFolder'] = undefined;

  return exports;
}));
