# Asposehtmlcloud.ImportApi

All URIs are relative to *https://api.aspose.cloud/v3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetConvertMarkdownToHtml**](ImportApi.md#GetConvertMarkdownToHtml) | **GET** /html/{name}/import/md | Converts the Markdown document (located on storage) to HTML and returns resulting file in response content.
[**PostConvertMarkdownInRequestToHtml**](ImportApi.md#PostConvertMarkdownInRequestToHtml) | **POST** /html/import/md | Converts the Markdown document (in request content) to HTML and uploads resulting file to storage by specified path.
[**PutConvertMarkdownToHtml**](ImportApi.md#PutConvertMarkdownToHtml) | **PUT** /html/{name}/import/md | Converts the Markdown document (located on storage) to HTML and uploads resulting file to storage by specified path.

<a name="GetConvertMarkdownToHtml"></a>
# **GetConvertMarkdownToHtml**
> File GetConvertMarkdownToHtml(name, opts)

Converts the Markdown document (located on storage) to HTML and returns resulting file in response content.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "testResult":"/testresult/",
    "testData":"/testdata/",
    "remoteFolder":"HtmlTestDoc/",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var name = "name_example"; // String | Document name.

var opts = { 
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
apiInstance.GetConvertMarkdownToHtml(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Document name. | 
 **folder** | **String**| Source document folder. | [optional] 
 **storage** | **String**| Source document storage. | [optional] 

### Return type

**Blob**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

 
<a name="PostConvertMarkdownInRequestToHtml"></a>
# **PostConvertMarkdownInRequestToHtml**
> File PostConvertMarkdownInRequestToHtml(outPath, file, opts)

Converts the Markdown document (in request content) to HTML and uploads resulting file to storage by specified path.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');
var path = require('path');

var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "testResult":"/testresult/",
    "testData":"/testdata/",
    "remoteFolder":"HtmlTestDoc/",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var outPath = "outPath_example"; // String | Full resulting filename in the storage (ex. /folder1/folder2/result.html)

var file = fs.createReadStream(path.normalize(/path/to/file.md)); // File | A file to be converted.

var opts = { 
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
apiInstance.PostConvertMarkdownInRequestToHtml(outPath, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **outPath** | **String**| Full resulting file path in the storage (ex. /folder1/folder2/result.md) | 
 **file** | **File**| A file to be converted. | 
 **folder** | **String**| Source document folder. | [optional] 
 **storage** | **String**| Source document storage. | [optional] 

### Return type

**Empty**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="PutConvertMarkdownToHtml"></a>
# **PutConvertMarkdownToHtml**
> File PutConvertMarkdownToHtml(name, outPath, opts)

Converts the Markdown document (located on storage) to HTML and uploads resulting file to storage by specified path.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "testResult":"/testresult/",
    "testData":"/testdata/",
    "remoteFolder":"HtmlTestDoc/",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.ConversionApi(conf);

var name = "name_example"; // String | Document name.

var outPath = "outPath_example"; // String | Full resulting file path in the storage (ex. /folder1/folder2/result.html)

var opts = { 
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
apiInstance.PutConvertMarkdownToHtml(name, outPath, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Document name. | 
 **outPath** | **String**| Full resulting file path in the storage (ex. /folder1/folder2/result.md) | 
 **folder** | **String**| The source document folder. | [optional] 
 **storage** | **String**| The source and resulting document storage. | [optional] 

### Return type

**Empty**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
