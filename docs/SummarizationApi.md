# Asposehtmlcloud.SummarizationApi

All URIs are relative to *https://api.aspose.cloud/v1.1*

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

var apiInstance = new Asposehtmlcloud.SummarizationApi();

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
 **name** | **String**| Document name. | 
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

var apiInstance = new Asposehtmlcloud.SummarizationApi();

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

