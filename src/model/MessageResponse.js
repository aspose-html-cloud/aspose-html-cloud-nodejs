/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose" file="MessageResponse.js">
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
    root.Asposehtmlcloud.MessageResponse = factory(root.Asposehtmlcloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessageResponse model module.
   * @module model/MessageResponse
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>MessageResponse</code>.
   * @alias module:model/MessageResponse
   * @class
   * @param code {module:model/MessageResponse.CodeEnum} 
   */
  var exports = function(code) {
    var _this = this;

    _this['Code'] = code;

  };

  /**
   * Constructs a <code>MessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageResponse} obj Optional instance to populate.
   * @return {module:model/MessageResponse} The populated <code>MessageResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Code')) {
        obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MessageResponse.CodeEnum} Code
   */
  exports.prototype['Code'] = undefined;
  /**
   * @member {String} Status
   */
  exports.prototype['Status'] = undefined;


  /**
   * Allowed values for the <code>Code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CodeEnum = {
    /**
     * value: "Continue"
     * @const
     */
    "Continue": "Continue",
    /**
     * value: "SwitchingProtocols"
     * @const
     */
    "SwitchingProtocols": "SwitchingProtocols",
    /**
     * value: "OK"
     * @const
     */
    "OK": "OK",
    /**
     * value: "Created"
     * @const
     */
    "Created": "Created",
    /**
     * value: "Accepted"
     * @const
     */
    "Accepted": "Accepted",
    /**
     * value: "NonAuthoritativeInformation"
     * @const
     */
    "NonAuthoritativeInformation": "NonAuthoritativeInformation",
    /**
     * value: "NoContent"
     * @const
     */
    "NoContent": "NoContent",
    /**
     * value: "ResetContent"
     * @const
     */
    "ResetContent": "ResetContent",
    /**
     * value: "PartialContent"
     * @const
     */
    "PartialContent": "PartialContent",
    /**
     * value: "MultipleChoices"
     * @const
     */
    "MultipleChoices": "MultipleChoices",
    /**
     * value: "Ambiguous"
     * @const
     */
    "Ambiguous": "Ambiguous",
    /**
     * value: "MovedPermanently"
     * @const
     */
    "MovedPermanently": "MovedPermanently",
    /**
     * value: "Moved"
     * @const
     */
    "Moved": "Moved",
    /**
     * value: "Found"
     * @const
     */
    "Found": "Found",
    /**
     * value: "Redirect"
     * @const
     */
    "Redirect": "Redirect",
    /**
     * value: "SeeOther"
     * @const
     */
    "SeeOther": "SeeOther",
    /**
     * value: "RedirectMethod"
     * @const
     */
    "RedirectMethod": "RedirectMethod",
    /**
     * value: "NotModified"
     * @const
     */
    "NotModified": "NotModified",
    /**
     * value: "UseProxy"
     * @const
     */
    "UseProxy": "UseProxy",
    /**
     * value: "Unused"
     * @const
     */
    "Unused": "Unused",
    /**
     * value: "TemporaryRedirect"
     * @const
     */
    "TemporaryRedirect": "TemporaryRedirect",
    /**
     * value: "RedirectKeepVerb"
     * @const
     */
    "RedirectKeepVerb": "RedirectKeepVerb",
    /**
     * value: "BadRequest"
     * @const
     */
    "BadRequest": "BadRequest",
    /**
     * value: "Unauthorized"
     * @const
     */
    "Unauthorized": "Unauthorized",
    /**
     * value: "PaymentRequired"
     * @const
     */
    "PaymentRequired": "PaymentRequired",
    /**
     * value: "Forbidden"
     * @const
     */
    "Forbidden": "Forbidden",
    /**
     * value: "NotFound"
     * @const
     */
    "NotFound": "NotFound",
    /**
     * value: "MethodNotAllowed"
     * @const
     */
    "MethodNotAllowed": "MethodNotAllowed",
    /**
     * value: "NotAcceptable"
     * @const
     */
    "NotAcceptable": "NotAcceptable",
    /**
     * value: "ProxyAuthenticationRequired"
     * @const
     */
    "ProxyAuthenticationRequired": "ProxyAuthenticationRequired",
    /**
     * value: "RequestTimeout"
     * @const
     */
    "RequestTimeout": "RequestTimeout",
    /**
     * value: "Conflict"
     * @const
     */
    "Conflict": "Conflict",
    /**
     * value: "Gone"
     * @const
     */
    "Gone": "Gone",
    /**
     * value: "LengthRequired"
     * @const
     */
    "LengthRequired": "LengthRequired",
    /**
     * value: "PreconditionFailed"
     * @const
     */
    "PreconditionFailed": "PreconditionFailed",
    /**
     * value: "RequestEntityTooLarge"
     * @const
     */
    "RequestEntityTooLarge": "RequestEntityTooLarge",
    /**
     * value: "RequestUriTooLong"
     * @const
     */
    "RequestUriTooLong": "RequestUriTooLong",
    /**
     * value: "UnsupportedMediaType"
     * @const
     */
    "UnsupportedMediaType": "UnsupportedMediaType",
    /**
     * value: "RequestedRangeNotSatisfiable"
     * @const
     */
    "RequestedRangeNotSatisfiable": "RequestedRangeNotSatisfiable",
    /**
     * value: "ExpectationFailed"
     * @const
     */
    "ExpectationFailed": "ExpectationFailed",
    /**
     * value: "UpgradeRequired"
     * @const
     */
    "UpgradeRequired": "UpgradeRequired",
    /**
     * value: "InternalServerError"
     * @const
     */
    "InternalServerError": "InternalServerError",
    /**
     * value: "NotImplemented"
     * @const
     */
    "NotImplemented": "NotImplemented",
    /**
     * value: "BadGateway"
     * @const
     */
    "BadGateway": "BadGateway",
    /**
     * value: "ServiceUnavailable"
     * @const
     */
    "ServiceUnavailable": "ServiceUnavailable",
    /**
     * value: "GatewayTimeout"
     * @const
     */
    "GatewayTimeout": "GatewayTimeout",
    /**
     * value: "HttpVersionNotSupported"
     * @const
     */
    "HttpVersionNotSupported": "HttpVersionNotSupported"  };


  return exports;
}));


