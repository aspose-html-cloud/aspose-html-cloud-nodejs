# Asposehtmlcloud.SummarizationApi

All URIs are relative to *https://api.aspose.cloud/v3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetDetectHtmlKeywords**](SummarizationApi.md#GetDetectHtmlKeywords) | **GET** /html/{name}/summ/keywords | Get the HTML document keywords using the keyword detection service.
[**GetDetectHtmlKeywordsByUrl**](SummarizationApi.md#GetDetectHtmlKeywordsByUrl) | **GET** /html/summ/keywords | Get the keywords from HTML document from Web specified by its URL using the keyword detection service


<a name="GetDetectHtmlKeywords"></a>
# **GetDetectHtmlKeywords**
> File GetDetectHtmlKeywords(name, opts)

Get the HTML document keywords using the keyword detection service.

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

var apiInstance = new Asposehtmlcloud.SummarizationApi(conf);

var name = "name_example"; // String | Document name.

var opts = { 
  'folder': "folder_example", // String | Document folder.
  'storage': "storage_example" // String | Document storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetDetectHtmlKeywords(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Document name. | Html file in the storage.
 **folder** | **String**| Document folder. | [optional] 
 **storage** | **String**| Document storage. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="GetDetectHtmlKeywordsByUrl"></a>
# **GetDetectHtmlKeywordsByUrl**
> File GetDetectHtmlKeywordsByUrl(sourceUrl)

Get the keywords from HTML document from Web specified by its URL using the keyword detection service

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
<<<<<<< HEAD

var apiInstance = new Asposehtmlcloud.SummarizationApi(conf);
=======
>>>>>>> multipart

var apiInstance = new Asposehtmlcloud.SummarizationApi(conf);

var sourceUrl = "sourceUrl_example"; // String | Source document URL.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetDetectHtmlKeywordsByUrl(sourceUrl, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceUrl** | **String**| Source document URL. | 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

