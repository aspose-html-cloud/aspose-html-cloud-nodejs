/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="ConversionRequest.js">
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
    if (!root.AsposehtmlCloudApiReference) {
      root.AsposehtmlCloudApiReference = {};
    }
    root.AsposehtmlCloudApiReference.ConversionRequest = factory(root.AsposehtmlCloudApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConversionRequest model module.
   * @module model/ConversionRequest
   * @version 4.0
   */

  /**
   * Constructs a new <code>ConversionRequest</code>.
   * @alias module:model/ConversionRequest
   * @class
   * @extends Object
   * @param inputPath {String} 
   */
  var exports = function(inputPath) {
    this.inputPath = inputPath;
  };

  /**
   * Constructs a <code>ConversionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConversionRequest} obj Optional instance to populate.
   * @return {module:model/ConversionRequest} The populated <code>ConversionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Object');
      if (data.hasOwnProperty('inputPath'))
        obj.inputPath = ApiClient.convertToType(data['inputPath'], 'String');
      if (data.hasOwnProperty('storageName'))
        obj.storageName = ApiClient.convertToType(data['storageName'], 'String');
      if (data.hasOwnProperty('resources'))
        obj.resources = ApiClient.convertToType(data['resources'], ['String']);
      if (data.hasOwnProperty('outputFile'))
        obj.outputFile = ApiClient.convertToType(data['outputFile'], 'String');
      if (data.hasOwnProperty('options'))
        obj.options = ApiClient.convertToType(data['options'], {'String': 'String'});
    }
    return obj;
  }

  /**
   * @member {String} inputPath
   */
  exports.prototype.inputPath = undefined;

  /**
   * @member {String} storageName
   */
  exports.prototype.storageName = undefined;

  /**
   * @member {Array.<String>} resources
   */
  exports.prototype.resources = undefined;

  /**
   * @member {String} outputFile
   */
  exports.prototype.outputFile = undefined;

  /**
   * @member {Object.<String, String>} options
   */
  exports.prototype.options = undefined;

  exports.prototype.additionalProperties = new Map();

  return exports;

}));
