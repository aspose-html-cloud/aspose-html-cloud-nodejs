/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="DiscUsage.js">
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
    root.Asposehtmlcloud.DiscUsage = factory(root.Asposehtmlcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DiscUsage model module.
   * @module model/DiscUsage
   * @version 22.12.1
   */

  /**
   * Constructs a new <code>DiscUsage</code>.
   * @alias module:model/DiscUsage
   * @class
   * @param usedSize {Number} 
   * @param totalSize {Number} 
   */
  var exports = function(usedSize, totalSize) {
    var _this = this;

    _this['usedSize'] = usedSize;
    _this['totalSize'] = totalSize;
  };

  /**
   * Constructs a <code>DiscUsage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DiscUsage} obj Optional instance to populate.
   * @return {module:model/DiscUsage} The populated <code>DiscUsage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('usedSize')) {
        obj['usedSize'] = ApiClient.convertToType(data['usedSize'], 'Number');
      }
      if (data.hasOwnProperty('totalSize')) {
        obj['totalSize'] = ApiClient.convertToType(data['totalSize'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} usedSize
   */
  exports.prototype['usedSize'] = undefined;
  /**
   * @member {Number} totalSize
   */
  exports.prototype['totalSize'] = undefined;

  return exports;
}));


