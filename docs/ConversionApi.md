# Asposehtmlcloud.ConversionApi

All URIs are relative to *https://api.aspose.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetConvertDocumentToImage**](ConversionApi.md#GetConvertDocumentToImage) | **GET** /html/{name}/convert/image/{outFormat} | Convert the HTML document from the storage by its name to the specified image format.
[**GetConvertDocumentToImageByUrl**](ConversionApi.md#GetConvertDocumentToImageByUrl) | **GET** /html/convert/image/{outFormat} | Convert the HTML page from the web by its URL to the specified image format.
[**GetConvertDocumentToPdf**](ConversionApi.md#GetConvertDocumentToPdf) | **GET** /html/{name}/convert/pdf | Convert the HTML document from the storage by its name to PDF.
[**GetConvertDocumentToPdfByUrl**](ConversionApi.md#GetConvertDocumentToPdfByUrl) | **GET** /html/convert/pdf | Convert the HTML page from the web by its URL to PDF.
[**GetConvertDocumentToXps**](ConversionApi.md#GetConvertDocumentToXps) | **GET** /html/{name}/convert/xps | Convert the HTML document from the storage by its name to XPS.
[**GetConvertDocumentToXpsByUrl**](ConversionApi.md#GetConvertDocumentToXpsByUrl) | **GET** /html/convert/xps | Convert the HTML page from the web by its URL to XPS.


<a name="GetConvertDocumentToImage"></a>
# **GetConvertDocumentToImage**
> File GetConvertDocumentToImage(name, outFormat, opts)

Convert the HTML document from the storage by its name to the specified image format.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.ConversionApi();

var name = "name_example"; // String | Document name.

var outFormat = "outFormat_example"; // String | Resulting image format.

var opts = { 
  'width': 56, // Number | Resulting image width. 
  'height': 56, // Number | Resulting image height. 
  'leftMargin': 56, // Number | Left resulting image margin.
  'rightMargin': 56, // Number | Right resulting image margin.
  'topMargin': 56, // Number | Top resulting image margin.
  'bottomMargin': 56, // Number | Bottom resulting image margin.
  'xResolution': 56, // Number | Horizontal resolution of resulting image.
  'yResolution': 56, // Number | Vertical resolution of resulting image.
  'folder': "folder_example", // String | The source document folder.
  'storage': "storage_example" // String | The source document storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetConvertDocumentToImage(name, outFormat, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Document name. | 
 **outFormat** | **String**| Resulting image format. | 
 **width** | **Number**| Resulting image width.  | [optional] 
 **height** | **Number**| Resulting image height.  | [optional] 
 **leftMargin** | **Number**| Left resulting image margin. | [optional] 
 **rightMargin** | **Number**| Right resulting image margin. | [optional] 
 **topMargin** | **Number**| Top resulting image margin. | [optional] 
 **bottomMargin** | **Number**| Bottom resulting image margin. | [optional] 
 **xResolution** | **Number**| Horizontal resolution of resulting image. | [optional] 
 **yResolution** | **Number**| Vertical resolution of resulting image. | [optional] 
 **folder** | **String**| The source document folder. | [optional] 
 **storage** | **String**| The source document storage. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="GetConvertDocumentToImageByUrl"></a>
# **GetConvertDocumentToImageByUrl**
> File GetConvertDocumentToImageByUrl(sourceUrl, outFormat, opts)

Convert the HTML page from the web by its URL to the specified image format.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.ConversionApi();

var sourceUrl = "sourceUrl_example"; // String | Source page URL.

var outFormat = "outFormat_example"; // String | Resulting image format.

var opts = { 
  'width': 56, // Number | Resulting image width. 
  'height': 56, // Number | Resulting image height. 
  'leftMargin': 56, // Number | Left resulting image margin.
  'rightMargin': 56, // Number | Right resulting image margin.
  'topMargin': 56, // Number | Top resulting image margin.
  'bottomMargin': 56, // Number | Bottom resulting image margin.
  'xResolution': 56, // Number | Horizontal resolution of resulting image.
  'yResolution': 56, // Number | Vertical resolution of resulting image.
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
apiInstance.GetConvertDocumentToImageByUrl(sourceUrl, outFormat, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceUrl** | **String**| Source page URL. | 
 **outFormat** | **String**| Resulting image format. | 
 **width** | **Number**| Resulting image width.  | [optional] 
 **height** | **Number**| Resulting image height.  | [optional] 
 **leftMargin** | **Number**| Left resulting image margin. | [optional] 
 **rightMargin** | **Number**| Right resulting image margin. | [optional] 
 **topMargin** | **Number**| Top resulting image margin. | [optional] 
 **bottomMargin** | **Number**| Bottom resulting image margin. | [optional] 
 **xResolution** | **Number**| Horizontal resolution of resulting image. | [optional] 
 **yResolution** | **Number**| Vertical resolution of resulting image. | [optional] 
 **folder** | **String**| The document folder. | [optional] 
 **storage** | **String**| The document storage. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="GetConvertDocumentToPdf"></a>
# **GetConvertDocumentToPdf**
> File GetConvertDocumentToPdf(name, opts)

Convert the HTML document from the storage by its name to PDF.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.ConversionApi();

var name = "name_example"; // String | Document name.

var opts = { 
  'width': 56, // Number | Resulting image width. 
  'height': 56, // Number | Resulting image height. 
  'leftMargin': 56, // Number | Left resulting image margin.
  'rightMargin': 56, // Number | Right resulting image margin.
  'topMargin': 56, // Number | Top resulting image margin.
  'bottomMargin': 56, // Number | Bottom resulting image margin.
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
apiInstance.GetConvertDocumentToPdf(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Document name. | 
 **width** | **Number**| Resulting image width.  | [optional] 
 **height** | **Number**| Resulting image height.  | [optional] 
 **leftMargin** | **Number**| Left resulting image margin. | [optional] 
 **rightMargin** | **Number**| Right resulting image margin. | [optional] 
 **topMargin** | **Number**| Top resulting image margin. | [optional] 
 **bottomMargin** | **Number**| Bottom resulting image margin. | [optional] 
 **folder** | **String**| The document folder. | [optional] 
 **storage** | **String**| The document storage. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="GetConvertDocumentToPdfByUrl"></a>
# **GetConvertDocumentToPdfByUrl**
> File GetConvertDocumentToPdfByUrl(sourceUrl, opts)

Convert the HTML page from the web by its URL to PDF.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.ConversionApi();

var sourceUrl = "sourceUrl_example"; // String | Source page URL.

var opts = { 
  'width': 56, // Number | Resulting image width. 
  'height': 56, // Number | Resulting image height. 
  'leftMargin': 56, // Number | Left resulting image margin.
  'rightMargin': 56, // Number | Right resulting image margin.
  'topMargin': 56, // Number | Top resulting image margin.
  'bottomMargin': 56, // Number | Bottom resulting image margin.
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
apiInstance.GetConvertDocumentToPdfByUrl(sourceUrl, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceUrl** | **String**| Source page URL. | 
 **width** | **Number**| Resulting image width.  | [optional] 
 **height** | **Number**| Resulting image height.  | [optional] 
 **leftMargin** | **Number**| Left resulting image margin. | [optional] 
 **rightMargin** | **Number**| Right resulting image margin. | [optional] 
 **topMargin** | **Number**| Top resulting image margin. | [optional] 
 **bottomMargin** | **Number**| Bottom resulting image margin. | [optional] 
 **folder** | **String**| The document folder. | [optional] 
 **storage** | **String**| The document storage. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="GetConvertDocumentToXps"></a>
# **GetConvertDocumentToXps**
> File GetConvertDocumentToXps(name, opts)

Convert the HTML document from the storage by its name to XPS.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.ConversionApi();

var name = "name_example"; // String | Document name.

var opts = { 
  'width': 56, // Number | Resulting image width. 
  'height': 56, // Number | Resulting image height. 
  'leftMargin': 56, // Number | Left resulting image margin.
  'rightMargin': 56, // Number | Right resulting image margin.
  'topMargin': 56, // Number | Top resulting image margin.
  'bottomMargin': 56, // Number | Bottom resulting image margin.
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
apiInstance.GetConvertDocumentToXps(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Document name. | 
 **width** | **Number**| Resulting image width.  | [optional] 
 **height** | **Number**| Resulting image height.  | [optional] 
 **leftMargin** | **Number**| Left resulting image margin. | [optional] 
 **rightMargin** | **Number**| Right resulting image margin. | [optional] 
 **topMargin** | **Number**| Top resulting image margin. | [optional] 
 **bottomMargin** | **Number**| Bottom resulting image margin. | [optional] 
 **folder** | **String**| The document folder. | [optional] 
 **storage** | **String**| The document storage. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="GetConvertDocumentToXpsByUrl"></a>
# **GetConvertDocumentToXpsByUrl**
> File GetConvertDocumentToXpsByUrl(sourceUrl, opts)

Convert the HTML page from the web by its URL to XPS.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.ConversionApi();

var sourceUrl = "sourceUrl_example"; // String | Source page URL.

var opts = { 
  'width': 56, // Number | Resulting image width. 
  'height': 56, // Number | Resulting image height. 
  'leftMargin': 56, // Number | Left resulting image margin.
  'rightMargin': 56, // Number | Right resulting image margin.
  'topMargin': 56, // Number | Top resulting image margin.
  'bottomMargin': 56, // Number | Bottom resulting image margin.
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
apiInstance.GetConvertDocumentToXpsByUrl(sourceUrl, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceUrl** | **String**| Source page URL. | 
 **width** | **Number**| Resulting image width.  | [optional] 
 **height** | **Number**| Resulting image height.  | [optional] 
 **leftMargin** | **Number**| Left resulting image margin. | [optional] 
 **rightMargin** | **Number**| Right resulting image margin. | [optional] 
 **topMargin** | **Number**| Top resulting image margin. | [optional] 
 **bottomMargin** | **Number**| Bottom resulting image margin. | [optional] 
 **folder** | **String**| The document folder. | [optional] 
 **storage** | **String**| The document storage. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data
