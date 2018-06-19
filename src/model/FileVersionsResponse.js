/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="FileVersionResponse.js">
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
    define(['ApiClient', 'model/FileVersion', 'model/MessageResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FileVersion'), require('./MessageResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Asposehtmlcloud) {
      root.Asposehtmlcloud = {};
    }
    root.Asposehtmlcloud.FileVersionsResponse = factory(root.Asposehtmlcloud.ApiClient, root.Asposehtmlcloud.FileVersion, root.Asposehtmlcloud.MessageResponse);
  }
}(this, function(ApiClient, FileVersion, MessageResponse) {
  'use strict';




  /**
   * The FileVersionsResponse model module.
   * @module model/FileVersionsResponse
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>FileVersionsResponse</code>.
   * @alias module:model/FileVersionsResponse
   * @class
   * @extends module:model/MessageResponse
   * @param code {module:model/MessageResponse.CodeEnum} 
   */
  var exports = function(code) {
    var _this = this;
    MessageResponse.call(_this, code);

  };

  /**
   * Constructs a <code>FileVersionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileVersionsResponse} obj Optional instance to populate.
   * @return {module:model/FileVersionsResponse} The populated <code>FileVersionsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      MessageResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('FileVersions')) {
        obj['FileVersions'] = ApiClient.convertToType(data['FileVersions'], [FileVersion]);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(MessageResponse.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {Array.<module:model/FileVersion>} FileVersions
   */
  exports.prototype['FileVersions'] = undefined;



  return exports;
}));


