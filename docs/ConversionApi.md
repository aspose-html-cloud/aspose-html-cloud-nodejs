<a name="ConversionApi"></a>
# Asposehtmlcloud.ConversionApi

All URIs are relative to *https://api.aspose.cloud/v3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetConvertDocumentToImage**](ConversionApi.md#GetConvertDocumentToImage) | **GET** /html/{name}/convert/image/{outFormat} | Convert the HTML document from the storage by its name to the specified image format.
[**GetConvertDocumentToImageByUrl**](ConversionApi.md#GetConvertDocumentToImageByUrl) | **GET** /html/convert/image/{outFormat} | Convert the HTML page from the web by its URL to the specified image format.
[**GetConvertDocumentToPdf**](ConversionApi.md#GetConvertDocumentToPdf) | **GET** /html/{name}/convert/pdf | Convert the HTML document from the storage by its name to PDF.
[**GetConvertDocumentToPdfByUrl**](ConversionApi.md#GetConvertDocumentToPdfByUrl) | **GET** /html/convert/pdf | Convert the HTML page from the web by its URL to PDF.
[**GetConvertDocumentToXps**](ConversionApi.md#GetConvertDocumentToXps) | **GET** /html/{name}/convert/xps | Convert the HTML document from the storage by its name to XPS.
[**GetConvertDocumentToXpsByUrl**](ConversionApi.md#GetConvertDocumentToXpsByUrl) | **GET** /html/convert/xps | Convert the HTML page from the web by its URL to XPS.
[**PostConvertDocumentInRequestToImage**](ConversionApi.md#PostConvertDocumentInRequestToImage) | **POST** /html/convert/image/{outFormat} | Converts the HTML document (in request content) to the specified image format and uploads resulting file to storage.
[**PostConvertDocumentInRequestToPdf**](ConversionApi.md#PostConvertDocumentInRequestToPdf) | **POST** /html/convert/pdf | Converts the HTML document (in request content) to PDF and uploads resulting file to storage.
[**PostConvertDocumentInRequestToXps**](ConversionApi.md#PostConvertDocumentInRequestToXps) | **POST** /html/convert/xps | Converts the HTML document (in request content) to XPS and uploads resulting file to storage.
[**PutConvertDocumentToImage**](ConversionApi.md#PutConvertDocumentToImage) | **PUT** /html/{name}/convert/image/{outFormat} | Converts the HTML document (located on storage) to the specified image format and uploads resulting file to storage.
[**PutConvertDocumentToPdf**](ConversionApi.md#PutConvertDocumentToPdf) | **PUT** /html/{name}/convert/pdf | Converts the HTML document (located on storage) to PDF and uploads resulting file to storage.
[**PutConvertDocumentToXps**](ConversionApi.md#PutConvertDocumentToXps) | **PUT** /html/{name}/convert/xps | Converts the HTML document (located on storage) to XPS and uploads resulting file to storage.
[**GetConvertDocumentToMHTMLByUrl**](ConversionApi.md#GetConvertDocumentToMHTMLByUrl) | **GET** /html/convert/mhtml | Converts the HTML page from Web by its URL to MHTML returns resulting file in response content.
[**GetConvertDocumentToMarkdown**](ConversionApi.md#GetConvertDocumentToMarkdown) | **GET** /html/{name}/convert/md | Converts the HTML document (located on storage) to Markdown and returns resulting file in response content.
[**PostConvertDocumentInRequestToMarkdown**](ConversionApi.md#PostConvertDocumentInRequestToMarkdown) | **POST** /html/convert/md | Converts the HTML document (in request content) to Markdown and uploads resulting file to storage by specified path.
[**PutConvertDocumentToMarkdown**](ConversionApi.md#PutConvertDocumentToMarkdown) | **PUT** /html/{name}/convert/md | Converts the HTML document (located on storage) to Markdown and uploads resulting file to storage by specified path.

<a name="GetConvertDocumentToImage"></a>
# **GetConvertDocumentToImage**
> File GetConvertDocumentToImage(name, outFormat, opts)

Convert the HTML document from the storage by its name to the specified image format.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var name = "name_example"; // String | Document name.

var outFormat = "outFormat_example"; // String | Resulting image format.

var opts = { 
  'width': 800, // Number | Resulting image width. 
  'height': 1000, // Number | Resulting image height. 
  'leftMargin': 50, // Number | Left resulting image margin.
  'rightMargin': 50, // Number | Right resulting image margin.
  'topMargin': 50, // Number | Top resulting image margin.
  'bottomMargin': 50, // Number | Bottom resulting image margin.
  'resolution': 300, // Number | Resolution of resulting image.
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
 **resolution** | **Number**| Resolution of resulting image. | [optional] 
 **folder** | **String**| The source document folder. | [optional] 
 **storage** | **String**| The source document storage. | [optional] 

### Return type

**Blob**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

[&#8593;UP&#8593;](ConversionApi.md#ConversionApi)

<a name="GetConvertDocumentToImageByUrl"></a>
# **GetConvertDocumentToImageByUrl**
> File GetConvertDocumentToImageByUrl(sourceUrl, outFormat, opts)

Convert the HTML page from the web by its URL to the specified image format.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var sourceUrl = "sourceUrl_example"; // String | Source page URL.

var outFormat = "outFormat_example"; // String | Resulting image format.

var opts = { 
  'width': 800, // Number | Resulting image width. 
  'height': 1000, // Number | Resulting image height. 
  'leftMargin': 50, // Number | Left resulting image margin.
  'rightMargin': 50, // Number | Right resulting image margin.
  'topMargin': 50, // Number | Top resulting image margin.
  'bottomMargin': 50, // Number | Bottom resulting image margin.
  'resolution': 150, // Number | Resolution of resulting image.
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
 **resolution** | **Number**| Resolution of resulting image. | [optional] 
 **folder** | **String**| The document folder. | [optional] 
 **storage** | **String**| The document storage. | [optional] 

### Return type

**Blob**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

[&#8593;UP&#8593;](ConversionApi.md#ConversionApi)

<a name="GetConvertDocumentToPdf"></a>
# **GetConvertDocumentToPdf**
> File GetConvertDocumentToPdf(name, opts)

Convert the HTML document from the storage by its name to PDF.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var name = "name_example"; // String | Document name.

var opts = { 
  'width': 800, // Number | Resulting image width. 
  'height': 600, // Number | Resulting image height. 
  'leftMargin': 50, // Number | Left resulting image margin.
  'rightMargin': 50, // Number | Right resulting image margin.
  'topMargin': 50, // Number | Top resulting image margin.
  'bottomMargin': 50, // Number | Bottom resulting image margin.
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

**Blob**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

[&#8593;UP&#8593;](ConversionApi.md#ConversionApi)

<a name="GetConvertDocumentToPdfByUrl"></a>
# **GetConvertDocumentToPdfByUrl**
> File GetConvertDocumentToPdfByUrl(sourceUrl, opts)

Convert the HTML page from the web by its URL to PDF.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var sourceUrl = "sourceUrl_example"; // String | Source page URL.

var opts = { 
  'width': 800, // Number | Resulting image width. 
  'height': 1000, // Number | Resulting image height. 
  'leftMargin': 50, // Number | Left resulting image margin.
  'rightMargin': 50, // Number | Right resulting image margin.
  'topMargin': 50, // Number | Top resulting image margin.
  'bottomMargin': 50, // Number | Bottom resulting image margin.
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

**Blob**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

[&#8593;UP&#8593;](ConversionApi.md#ConversionApi)

<a name="GetConvertDocumentToXps"></a>
# **GetConvertDocumentToXps**
> File GetConvertDocumentToXps(name, opts)

Convert the HTML document from the storage by its name to XPS.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var name = "name_example"; // String | Document name.

var opts = { 
  'width': 800, // Number | Resulting image width. 
  'height': 1000, // Number | Resulting image height. 
  'leftMargin': 50, // Number | Left resulting image margin.
  'rightMargin': 50, // Number | Right resulting image margin.
  'topMargin': 50, // Number | Top resulting image margin.
  'bottomMargin': 50, // Number | Bottom resulting image margin.
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

**Blob**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

[&#8593;UP&#8593;](ConversionApi.md#ConversionApi)

<a name="GetConvertDocumentToXpsByUrl"></a>
# **GetConvertDocumentToXpsByUrl**
> File GetConvertDocumentToXpsByUrl(sourceUrl, opts)

Convert the HTML page from the web by its URL to XPS.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var sourceUrl = "sourceUrl_example"; // String | Source page URL.

var opts = { 
  'width': 800, // Number | Resulting image width. 
  'height': 600, // Number | Resulting image height. 
  'leftMargin': 50, // Number | Left resulting image margin.
  'rightMargin': 50, // Number | Right resulting image margin.
  'topMargin': 50, // Number | Top resulting image margin.
  'bottomMargin': 50, // Number | Bottom resulting image margin.
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

**Blob**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data
 
[&#8593;UP&#8593;](ConversionApi.md#ConversionApi)
 
<a name="PostConvertDocumentInRequestToImage"></a>
# **PostConvertDocumentInRequestToImage**
> File PostConvertDocumentInRequestToImage(outPath, outFormat, file, opts)

Converts the HTML document (in request content) to the specified image format and uploads resulting file to storage.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');
var path = require('path');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var outPath = "outPath_example"; // String | Full resulting filename in the storage (ex. /folder1/folder2/result.jpg)

var outFormat = "outFormat_example"; // String | 

var file = fs.createReadStream(path.normalize('/path/to/file.txt')); // File | A file to be converted.

var opts = { 
  'width': 800, // Number | Resulting document page width in points (1/96 inch).
  'height': 1000, // Number | Resulting document page height in points (1/96 inch).
  'leftMargin': 50, // Number | Left resulting document page margin in points (1/96 inch).
  'rightMargin': 50, // Number | Right resulting document page margin in points (1/96 inch).
  'topMargin': 50, // Number | Top resulting document page margin in points (1/96 inch).
  'bottomMargin': 50, // Number | Bottom resulting document page margin in points (1/96 inch).
  'resolution': 50 // Number | Resolution of resulting image. Default is 96 dpi.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.PostConvertDocumentInRequestToImage(outPath, outFormat, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **outPath** | **String**| Full resulting filename (ex. /folder1/folder2/result.jpg) | 
 **outFormat** | **String**|  | 
 **file** | **String**| A file to be converted. | 
 **width** | **Number**| Resulting document page width in points (1/96 inch). | [optional] 
 **height** | **Number**| Resulting document page height in points (1/96 inch). | [optional] 
 **leftMargin** | **Number**| Left resulting document page margin in points (1/96 inch). | [optional] 
 **rightMargin** | **Number**| Right resulting document page margin in points (1/96 inch). | [optional] 
 **topMargin** | **Number**| Top resulting document page margin in points (1/96 inch). | [optional] 
 **bottomMargin** | **Number**| Bottom resulting document page margin in points (1/96 inch). | [optional] 
 **resolution** | **Number**| Resolution of resulting image. Default is 96 dpi. | [optional] 

### Return type

**Empty**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[&#8593;UP&#8593;](ConversionApi.md#ConversionApi)

<a name="PostConvertDocumentInRequestToPdf"></a>
# **PostConvertDocumentInRequestToPdf**
> File PostConvertDocumentInRequestToPdf(outPath, file, opts)

Converts the HTML document (in request content) to PDF and uploads resulting file to storage.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');
var path = require('path');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var outPath = "outPath_example"; // String | Full resulting filename in the storage (ex. /folder1/folder2/result.jpg)

var outFormat = "outFormat_example"; // String | 

var file = fs.createReadStream(path.normalize('/path/to/file.txt')); // File | A file to be converted.

var opts = { 
  'width': 800, // Number | Resulting document page width in points (1/96 inch).
  'height': 1000, // Number | Resulting document page height in points (1/96 inch).
  'leftMargin': 50, // Number | Left resulting document page margin in points (1/96 inch).
  'rightMargin': 50, // Number | Right resulting document page margin in points (1/96 inch).
  'topMargin': 50, // Number | Top resulting document page margin in points (1/96 inch).
  'bottomMargin': 50 // Number | Bottom resulting document page margin in points (1/96 inch).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.PostConvertDocumentInRequestToPdf(outPath, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **outPath** | **String**| Full resulting filename (ex. /folder1/folder2/result.pdf) | 
 **file** | **String**| A file to be converted. | 
 **width** | **Number**| Resulting document page width in points (1/96 inch). | [optional] 
 **height** | **Number**| Resulting document page height in points (1/96 inch). | [optional] 
 **leftMargin** | **Number**| Left resulting document page margin in points (1/96 inch). | [optional] 
 **rightMargin** | **Number**| Right resulting document page margin in points (1/96 inch). | [optional] 
 **topMargin** | **Number**| Top resulting document page margin in points (1/96 inch). | [optional] 
 **bottomMargin** | **Number**| Bottom resulting document page margin in points (1/96 inch). | [optional] 

### Return type

**Empty**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[&#8593;UP&#8593;](ConversionApi.md#ConversionApi)

<a name="PostConvertDocumentInRequestToXps"></a>
# **PostConvertDocumentInRequestToXps**
> File PostConvertDocumentInRequestToXps(outPath, file, opts)

Converts the HTML document (in request content) to XPS and uploads resulting file to storage.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');
var path = require('path');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var outPath = "outPath_example"; // String | Full resulting filename in the storage (ex. /folder1/folder2/result.jpg)

var outFormat = "outFormat_example"; // String | 

var file = fs.createReadStream(path.normalize('/path/to/file.txt')); // File | A file to be converted.

var opts = { 
  'width': 800, // Number | Resulting document page width in points (1/96 inch).
  'height': 1000, // Number | Resulting document page height in points (1/96 inch).
  'leftMargin': 50, // Number | Left resulting document page margin in points (1/96 inch).
  'rightMargin': 50, // Number | Right resulting document page margin in points (1/96 inch).
  'topMargin': 50, // Number | Top resulting document page margin in points (1/96 inch).
  'bottomMargin': 50 // Number | Bottom resulting document page margin in points (1/96 inch).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.PostConvertDocumentInRequestToXps(outPath, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **outPath** | **String**| Full resulting filename (ex. /folder1/folder2/result.xps) | 
 **file** | **String**| A file to be converted. | 
 **width** | **Number**| Resulting document page width in points (1/96 inch). | [optional] 
 **height** | **Number**| Resulting document page height in points (1/96 inch). | [optional] 
 **leftMargin** | **Number**| Left resulting document page margin in points (1/96 inch). | [optional] 
 **rightMargin** | **Number**| Right resulting document page margin in points (1/96 inch). | [optional] 
 **topMargin** | **Number**| Top resulting document page margin in points (1/96 inch). | [optional] 
 **bottomMargin** | **Number**| Bottom resulting document page margin in points (1/96 inch). | [optional] 

### Return type

**Empty**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[&#8593;UP&#8593;](ConversionApi.md#ConversionApi)

<a name="PutConvertDocumentToImage"></a>
# **PutConvertDocumentToImage**
> File PutConvertDocumentToImage(name, outPath, outFormat, opts)

Converts the HTML document (located on storage) to the specified image format and uploads resulting file to storage.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var name = "name_example"; // String | Document name.

var outPath = "outPath_example"; // String | Full resulting filename (ex. /folder1/folder2/result.jpg)

var outFormat = "outFormat_example"; // String | 

var opts = { 
  'width': 800, // Number | Resulting document page width in points (1/96 inch).
  'height': 1000, // Number | Resulting document page height in points (1/96 inch).
  'leftMargin': 50, // Number | Left resulting document page margin in points (1/96 inch).
  'rightMargin': 50, // Number | Right resulting document page margin in points (1/96 inch).
  'topMargin': 50, // Number | Top resulting document page margin in points (1/96 inch).
  'bottomMargin': 50, // Number | Bottom resulting document page margin in points (1/96 inch).
  'resolution': 50, // Number | Resolution of resulting image. Default is 96 dpi.
  'folder': "folder_example", // String | The source document folder.
  'storage': "storage_example" // String | The source and resulting document storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.PutConvertDocumentToImage(name, outPath, outFormat, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Document name. | 
 **outPath** | **String**| Full resulting filename (ex. /folder1/folder2/result.jpg) | 
 **outFormat** | **String**|  | 
 **width** | **Number**| Resulting document page width in points (1/96 inch). | [optional] 
 **height** | **Number**| Resulting document page height in points (1/96 inch). | [optional] 
 **leftMargin** | **Number**| Left resulting document page margin in points (1/96 inch). | [optional] 
 **rightMargin** | **Number**| Right resulting document page margin in points (1/96 inch). | [optional] 
 **topMargin** | **Number**| Top resulting document page margin in points (1/96 inch). | [optional] 
 **bottomMargin** | **Number**| Bottom resulting document page margin in points (1/96 inch). | [optional] 
 **resolution** | **Number**| Resolution of resulting image. Default is 96 dpi. | [optional] 
 **folder** | **String**| The source document folder. | [optional] 
 **storage** | **String**| The source and resulting document storage. | [optional] 

### Return type

**Empty**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](ConversionApi.md#ConversionApi)

<a name="PutConvertDocumentToPdf"></a>
# **PutConvertDocumentToPdf**
> File PutConvertDocumentToPdf(name, outPath, opts)

Converts the HTML document (located on storage) to PDF and uploads resulting file to storage.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var name = "name_example"; // String | Document name.

var outPath = "outPath_example"; // String | Full resulting filename (ex. /folder1/folder2/result.pdf)

var opts = { 
  'width': 800, // Number | Resulting document page width in points (1/96 inch).
  'height': 1000, // Number | Resulting document page height in points (1/96 inch).
  'leftMargin': 50, // Number | Left resulting document page margin in points (1/96 inch).
  'rightMargin': 50, // Number | Right resulting document page margin in points (1/96 inch).
  'topMargin': 50, // Number | Top resulting document page margin in points (1/96 inch).
  'bottomMargin': 50, // Number | Bottom resulting document page margin in points (1/96 inch).
  'folder': "folder_example", // String | The source document folder.
  'storage': "storage_example" // String | The source and resulting document storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.PutConvertDocumentToPdf(name, outPath, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Document name. | 
 **outPath** | **String**| Full resulting filename (ex. /folder1/folder2/result.pdf) | 
 **width** | **Number**| Resulting document page width in points (1/96 inch). | [optional] 
 **height** | **Number**| Resulting document page height in points (1/96 inch). | [optional] 
 **leftMargin** | **Number**| Left resulting document page margin in points (1/96 inch). | [optional] 
 **rightMargin** | **Number**| Right resulting document page margin in points (1/96 inch). | [optional] 
 **topMargin** | **Number**| Top resulting document page margin in points (1/96 inch). | [optional] 
 **bottomMargin** | **Number**| Bottom resulting document page margin in points (1/96 inch). | [optional] 
 **folder** | **String**| The source document folder. | [optional] 
 **storage** | **String**| The source and resulting document storage. | [optional] 

### Return type

**Empty**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](ConversionApi.md#ConversionApi)

<a name="PutConvertDocumentToXps"></a>
# **PutConvertDocumentToXps**
> File PutConvertDocumentToXps(name, outPath, opts)

Converts the HTML document (located on storage) to XPS and uploads resulting file to storage.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var name = "name_example"; // String | Document name.

var outPath = "outPath_example"; // String | Full resulting filename (ex. /folder1/folder2/result.xps)

var opts = { 
  'width': 800, // Number | Resulting document page width in points (1/96 inch).
  'height': 1000, // Number | Resulting document page height in points (1/96 inch).
  'leftMargin': 50, // Number | Left resulting document page margin in points (1/96 inch).
  'rightMargin': 50, // Number | Right resulting document page margin in points (1/96 inch).
  'topMargin': 50, // Number | Top resulting document page margin in points (1/96 inch).
  'bottomMargin': 50, // Number | Bottom resulting document page margin in points (1/96 inch).
  'folder': "folder_example", // String | The source document folder.
  'storage': "storage_example" // String | The source and resulting document storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.PutConvertDocumentToXps(name, outPath, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Document name. | 
 **outPath** | **String**| Full resulting filename (ex. /folder1/folder2/result.xps) | 
 **width** | **Number**| Resulting document page width in points (1/96 inch). | [optional] 
 **height** | **Number**| Resulting document page height in points (1/96 inch). | [optional] 
 **leftMargin** | **Number**| Left resulting document page margin in points (1/96 inch). | [optional] 
 **rightMargin** | **Number**| Right resulting document page margin in points (1/96 inch). | [optional] 
 **topMargin** | **Number**| Top resulting document page margin in points (1/96 inch). | [optional] 
 **bottomMargin** | **Number**| Bottom resulting document page margin in points (1/96 inch). | [optional] 
 **folder** | **String**| The source document folder. | [optional] 
 **storage** | **String**| The source and resulting document storage. | [optional] 

### Return type

**Empty**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](ConversionApi.md#ConversionApi)
 
<a name="GetConvertDocumentToMHTMLByUrl"></a>
# **GetConvertDocumentToMHTMLByUrl**
> File GetConvertDocumentToMHTMLByUrl(sourceUrl)

Converts the HTML page from Web by its URL to MHTML returns resulting file in response content.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var sourceUrl = "sourceUrl_example"; // String | Source page URL.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetConvertDocumentToMHTMLByUrl(sourceUrl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceUrl** | **String**| Source page URL. | 

### Return type

**Blob**


### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data
 
 [&#8593;UP&#8593;](ConversionApi.md#ConversionApi)
 
<a name="GetConvertDocumentToMarkdown"></a>
# **GetConvertDocumentToMarkdown**
> File GetConvertDocumentToMarkdown(name, opts)

Converts the HTML document (located on storage) to Markdown and returns resulting file in response content.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var name = "name_example"; // String | Document name.

var opts = { 
  'useGit': false, // Boolean | Use Git Markdown flavor to save.
  'folder': "folder_example", // String | Source document folder.
  'storage': "storage_example" // String | Source document storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetConvertDocumentToMarkdown(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Document name. | 
 **useGit** | **Boolean**| Use Git Markdown flavor to save. | [optional] [default to false]
 **folder** | **String**| Source document folder. | [optional] 
 **storage** | **String**| Source document storage. | [optional] 

### Return type

**Blob**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

[&#8593;UP&#8593;](ConversionApi.md#ConversionApi)
 
<a name="PostConvertDocumentInRequestToMarkdown"></a>
# **PostConvertDocumentInRequestToMarkdown**
> File PostConvertDocumentInRequestToMarkdown(outPath, file, opts)

Converts the HTML document (in request content) to Markdown and uploads resulting file to storage by specified path.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');
var path = require('path');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var outPath = "outPath_example"; // String | Full resulting filename in the storage (ex. /folder1/folder2/result.jpg)

var file = fs.createReadStream(path.normalize('/path/to/file.txt')); // File | A file to be converted.

var opts = { 
  'useGit': false, // Boolean | Use Git Markdown flavor to save.
  'folder': "folder_example", // String | The source document folder.
  'storage': "storage_example" // String | The source and resulting document storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.PostConvertDocumentInRequestToMarkdown(outPath, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **outPath** | **String**| Full resulting file path in the storage (ex. /folder1/folder2/result.md) | 
 **file** | **File**| A file to be converted. | 
 **useGit** | **Boolean**| Use Git Markdown flavor to save. | [optional] [default to false]
 **folder** | **String**| The source document folder. | [optional] 
 **storage** | **String**| The source and resulting document storage. | [optional] 

### Return type

**Empty**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[&#8593;UP&#8593;](ConversionApi.md#ConversionApi)

<a name="PutConvertDocumentToMarkdown"></a>
# **PutConvertDocumentToMarkdown**
> File PutConvertDocumentToMarkdown(name, outPath, opts)

Converts the HTML document (located on storage) to Markdown and uploads resulting file to storage by specified path.

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

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

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var name = "name_example"; // String | Document name.

var outPath = "outPath_example"; // String | Full resulting file path in the storage (ex. /folder1/folder2/result.md)

var opts = { 
  'useGit': false, // Boolean | Use Git Markdown flavor to save.
  'folder': "folder_example", // String | The source document folder.
  'storage': "storage_example" // String | The source and resulting document storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.PutConvertDocumentToMarkdown(name, outPath, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Document name. | 
 **outPath** | **String**| Full resulting file path in the storage (ex. /folder1/folder2/result.md) | 
 **useGit** | **Boolean**| Use Git Markdown flavor to save. | [optional] [default to false]
 **folder** | **String**| The source document folder. | [optional] 
 **storage** | **String**| The source and resulting document storage. | [optional] 

### Return type

**Empty**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
 
[&#8593;UP&#8593;](ConversionApi.md#ConversionApi)