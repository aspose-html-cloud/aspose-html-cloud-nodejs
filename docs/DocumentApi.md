# Asposehtmlcloud.DocumentApi

All URIs are relative to *https://api.aspose.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetDocument**](DocumentApi.md#GetDocument) | **GET** /html/{name} | Return the HTML document by the name from default or specified storage.
[**GetDocumentFragmentByXPath**](DocumentApi.md#GetDocumentFragmentByXPath) | **GET** /html/{name}/fragments/{outFormat} | Return list of HTML fragments matching the specified XPath query. 
[**GetDocumentFragmentByXPathByUrl**](DocumentApi.md#GetDocumentFragmentByXPathByUrl) | **GET** /html/fragments/{outFormat} | Return list of HTML fragments matching the specified XPath query by the source page URL.
[**GetDocumentImages**](DocumentApi.md#GetDocumentImages) | **GET** /html/{name}/images/all | Return all HTML document images packaged as a ZIP archive.
[**GetDocumentImagesByUrl**](DocumentApi.md#GetDocumentImagesByUrl) | **GET** /html/images/all | Return all HTML page images packaged as a ZIP archive by the source page URL.


<a name="GetDocument"></a>
# **GetDocument**
> File GetDocument(name, opts)

Return the HTML document by the name from default or specified storage.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.DocumentApi();

var name = "name_example"; // String | The document name.

var opts = { 
  'storage': "storage_example", // String | The document folder
  'folder': "folder_example" // String | The document folder.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetDocument(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The document name. | 
 **storage** | **String**| The document folder | [optional] 
 **folder** | **String**| The document folder. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data, application/zip

<a name="GetDocumentFragmentByXPath"></a>
# **GetDocumentFragmentByXPath**
> File GetDocumentFragmentByXPath(name, xPath, outFormat, opts)

Return list of HTML fragments matching the specified XPath query. 

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.DocumentApi();

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
 **name** | **String**| The document name. | 
 **xPath** | **String**| XPath query string. | 
 **outFormat** | **String**| Output format. Possible values: &#39;plain&#39; and &#39;json&#39;. | 
 **storage** | **String**| The document storage. | [optional] 
 **folder** | **String**| The document folder. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="GetDocumentFragmentByXPathByUrl"></a>
# **GetDocumentFragmentByXPathByUrl**
> File GetDocumentFragmentByXPathByUrl(sourceUrl, xPath, outFormat)

Return list of HTML fragments matching the specified XPath query by the source page URL.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.DocumentApi();

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

<a name="GetDocumentImages"></a>
# **GetDocumentImages**
> File GetDocumentImages(name, opts)

Return all HTML document images packaged as a ZIP archive.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.DocumentApi();

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
 **name** | **String**| The document name. | 
 **folder** | **String**| The document folder. | [optional] 
 **storage** | **String**| The document storage. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/zip

<a name="GetDocumentImagesByUrl"></a>
# **GetDocumentImagesByUrl**
> File GetDocumentImagesByUrl(sourceUrl)

Return all HTML page images packaged as a ZIP archive by the source page URL.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.DocumentApi();

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

