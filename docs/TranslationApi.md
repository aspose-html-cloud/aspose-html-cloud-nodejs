# Asposehtmlcloud.TranslationApi

All URIs are relative to *https://api.aspose.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetTranslateDocument**](TranslationApi.md#GetTranslateDocument) | **GET** /html/{name}/translate/{srcLang}/{resLang} | Translate the HTML document specified by the name from default or specified storage. 
[**GetTranslateDocumentByUrl**](TranslationApi.md#GetTranslateDocumentByUrl) | **GET** /html/translate/{srcLang}/{resLang} | Translate the HTML document from Web specified by its URL.


<a name="GetTranslateDocument"></a>
# **GetTranslateDocument**
> File GetTranslateDocument(name, srcLang, resLang, opts)

Translate the HTML document specified by the name from default or specified storage. 

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.TranslationApi();

var name = "name_example"; // String | Document name.

var srcLang = "srcLang_example"; // String | Source language.

var resLang = "resLang_example"; // String | Result language.

var opts = { 
  'storage': "storage_example", // String | The source document storage.
  'folder': "folder_example" // String | The source document folder.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetTranslateDocument(name, srcLang, resLang, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Document name. | 
 **srcLang** | **String**| Source language. | 
 **resLang** | **String**| Result language. | 
 **storage** | **String**| The source document storage. | [optional] 
 **folder** | **String**| The source document folder. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="GetTranslateDocumentByUrl"></a>
# **GetTranslateDocumentByUrl**
> File GetTranslateDocumentByUrl(sourceUrl, srcLang, resLang)

Translate the HTML document from Web specified by its URL.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.TranslationApi();

var sourceUrl = "sourceUrl_example"; // String | Source document URL.

var srcLang = "srcLang_example"; // String | Source language.

var resLang = "resLang_example"; // String | Result language.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetTranslateDocumentByUrl(sourceUrl, srcLang, resLang, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceUrl** | **String**| Source document URL. | 
 **srcLang** | **String**| Source language. | 
 **resLang** | **String**| Result language. | 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="translationPutTranslateDocument"></a>
# **translationPutTranslateDocument**
> File translationPutTranslateDocument(name, srcLang, resLang, opts)

Translate the HTML document specified by the name from default or specified storage. Result document will be saved into the default or specified storage; result path will be like /{folder}/{name}_{lang_pair}.{extension}.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.TranslationApi();

var name = "name_example"; // String | Document name.

var srcLang = "srcLang_example"; // String | Source language.

var resLang = "resLang_example"; // String | Result language.

var opts = { 
  'folder': "folder_example", // String | The source & result document folder.
  'storage': "storage_example" // String | The source & result document storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.translationPutTranslateDocument(name, srcLang, resLang, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Document name. | 
 **srcLang** | **String**| Source language. | 
 **resLang** | **String**| Result language. | 
 **folder** | **String**| The source &amp; result document folder. | [optional] 
 **storage** | **String**| The source &amp; result document storage. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
