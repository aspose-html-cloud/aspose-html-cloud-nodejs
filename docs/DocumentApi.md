<a name="DocumentApi"></a>
# Asposehtmlcloud.DocumentApi

All URIs are relative to *https://api.aspose.cloud/v3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetDocumentByUrl**](DocumentApi.md#GetDocumentByUrl) | **GET** /html/download | Return all HTML page with linked resources packaged as a ZIP archive by the source page URL.
[**GetDocumentFragmentByXPath**](DocumentApi.md#GetDocumentFragmentByXPath) | **GET** /html/{name}/fragments/{outFormat} | Return list of HTML fragments matching the specified XPath query. 
[**GetDocumentFragmentByXPathByUrl**](DocumentApi.md#GetDocumentFragmentByXPathByUrl) | **GET** /html/fragments/{outFormat} | Return list of HTML fragments matching the specified XPath query by the source page URL.
[**GetDocumentFragmentsByCSSSelector**](DocumentApi.md#GetDocumentFragmentsByCSSSelector) | **GET** /html/{name}/fragments/css/{outFormat} | Return list of HTML fragments matching the specified CSS selector.
[**GetDocumentFragmentsByCSSSelectorByUrl**](DocumentApi.md#GetDocumentFragmentsByCSSSelectorByUrl) | **GET** /html/fragments/css/{outFormat} | Return list of HTML fragments matching the specified CSS selector by the source page URL.
[**GetDocumentImages**](DocumentApi.md#GetDocumentImages) | **GET** /html/{name}/images/all | Return all HTML document images packaged as a ZIP archive.
[**GetDocumentImagesByUrl**](DocumentApi.md#GetDocumentImagesByUrl) | **GET** /html/images/all | Return all HTML page images packaged as a ZIP archive by the source page URL.


<a name="GetDocumentByUrl"></a>
# **GetDocumentByUrl**
> File GetDocumentByUrl(sourceUrl)

Return all HTML page with linked resources packaged as a ZIP archive by the source page URL.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.DocumentApi(conf);

var sourceUrl = "sourceUrl_example"; // String | Source page URL.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetDocumentByUrl(sourceUrl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceUrl** | **String**| Source page URL. |

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/zip

[&#8593;UP&#8593;](DocumentApi.md#DocumentApi)

<a name="GetDocumentFragmentByXPath"></a>
# **GetDocumentFragmentByXPath**
> File GetDocumentFragmentByXPath(name, xPath, outFormat, opts)

Return list of HTML fragments matching the specified XPath query. 

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.DocumentApi(conf);

var name = "name_example"; // String | The document name.

var xPath = "xPath_example"; // String | XPath query string.

var outFormat = "outFormat_example"; // String | Output format. Possible values: 'plain' and 'json'.

var opts = { 
  'storage': "storage_example", // String | The document storage.
  'folder': "folder_example" // String | The document folder.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetDocumentFragmentByXPath(name, xPath, outFormat, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The document name. | Presented as zip archive with one html file in the root or html file.
 **xPath** | **String**| XPath query string. | 
 **outFormat** | **String**| Output format. Possible values: &#39;plain&#39; and &#39;json&#39;. | 
 **storage** | **String**| The document storage. | [optional] 
 **folder** | **String**| The document folder. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

[&#8593;UP&#8593;](DocumentApi.md#DocumentApi)

<a name="GetDocumentFragmentByXPathByUrl"></a>
# **GetDocumentFragmentByXPathByUrl**
> File GetDocumentFragmentByXPathByUrl(sourceUrl, xPath, outFormat)

Return list of HTML fragments matching the specified XPath query by the source page URL.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.DocumentApi(conf);

var sourceUrl = "sourceUrl_example"; // String | Source page URL.

var xPath = "xPath_example"; // String | XPath query string.

var outFormat = "outFormat_example"; // String | Output format. Possible values: 'plain' and 'json'.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetDocumentFragmentByXPathByUrl(sourceUrl, xPath, outFormat, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceUrl** | **String**| Source page URL. | 
 **xPath** | **String**| XPath query string. | 
 **outFormat** | **String**| Output format. Possible values: &#39;plain&#39; and &#39;json&#39;. | 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

[&#8593;UP&#8593;](DocumentApi.md#DocumentApi)

<a name="GetDocumentFragmentsByCSSSelector"></a>
# **GetDocumentFragmentsByCSSSelector**
> File GetDocumentFragmentsByCSSSelector(name, selector, outFormat, opts)

Return list of HTML fragments matching the specified CSS selector.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.DocumentApi(conf);

var name = "name_example"; // String | The document name.

var selector = "selector_example"; // String | CSS selector string.

var outFormat = "outFormat_example"; // String | Output format. Possible values: 'plain' and 'json'.

var opts = { 
  'folder': "folder_example", // String | The document folder.
  'storage': "storage_example" // String | The document storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetDocumentFragmentsByCSSSelector(name, selector, outFormat, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The document name. | Presented as zip archive with one html file in the root or html file.
 **selector** | **String**| CSS selector string. | 
 **outFormat** | **String**| Output format. Possible values: &#39;plain&#39; and &#39;json&#39;. | 
 **folder** | **String**| The document folder. | [optional] 
 **storage** | **String**| The document storage. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

[&#8593;UP&#8593;](DocumentApi.md#DocumentApi)

<a name="GetDocumentFragmentsByCSSSelectorByUrl"></a>
# **GetDocumentFragmentsByCSSSelectorByUrl**
> File GetDocumentFragmentsByCSSSelectorByUrl(sourceUrl, selector, outFormat)

Return list of HTML fragments matching the specified CSS selector by the source page URL.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.DocumentApi(conf);

var sourceUrl = "sourceUrl_example"; // String | Source page URL.

var selector = "selector_example"; // String | CSS selector string.

var outFormat = "outFormat_example"; // String | Output format. Possible values: 'plain' and 'json'.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetDocumentFragmentsByCSSSelectorByUrl(sourceUrl, selector, outFormat, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceUrl** | **String**| Source page URL. | 
 **selector** | **String**| CSS selector string. | 
 **outFormat** | **String**| Output format. Possible values: &#39;plain&#39; and &#39;json&#39;. | 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

[&#8593;UP&#8593;](DocumentApi.md#DocumentApi)

<a name="GetDocumentImages"></a>
# **GetDocumentImages**
> File GetDocumentImages(name, opts)

Return all HTML document images packaged as a ZIP archive.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.DocumentApi(conf);

var name = "name_example"; // String | The document name.

var opts = { 
  'folder': "folder_example", // String | The document folder.
  'storage': "storage_example" // String | The document storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetDocumentImages(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The document name. | Presented as zip archive with one html file in the root.
 **folder** | **String**| The document folder. | [optional] 
 **storage** | **String**| The document storage. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/zip

[&#8593;UP&#8593;](DocumentApi.md#DocumentApi)

<a name="GetDocumentImagesByUrl"></a>
# **GetDocumentImagesByUrl**
> File GetDocumentImagesByUrl(sourceUrl)

Return all HTML page images packaged as a ZIP archive by the source page URL.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.DocumentApi(conf);

var sourceUrl = "sourceUrl_example"; // String | Source page URL.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetDocumentImagesByUrl(sourceUrl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceUrl** | **String**| Source page URL. | 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/zip

[&#8593;UP&#8593;](DocumentApi.md#DocumentApi)