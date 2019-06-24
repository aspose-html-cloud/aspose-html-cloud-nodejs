/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="FileExist.js">
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
    root.Asposehtmlcloud.FileExist = factory(root.Asposehtmlcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FileExist model module.
   * @module model/FileExist
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>FileExist</code>.
   * @alias module:model/FileExist
   * @class
   * @param isExist {Boolean} 
   * @param isFolder {Boolean} 
   */
  var exports = function(isExist, isFolder) {
    var _this = this;

    _this['IsExist'] = isExist;
    _this['IsFolder'] = isFolder;
  };

  /**
   * Constructs a <code>FileExist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileExist} obj Optional instance to populate.
   * @return {module:model/FileExist} The populated <code>FileExist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('IsExist')) {
        obj['IsExist'] = ApiClient.convertToType(data['IsExist'], 'Boolean');
      }
      if (data.hasOwnProperty('IsFolder')) {
        obj['IsFolder'] = ApiClient.convertToType(data['IsFolder'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} IsExist
   */
  exports.prototype['IsExist'] = undefined;
  /**
   * @member {Boolean} IsFolder
   */
  exports.prototype['IsFolder'] = undefined;



  return exports;
}));


