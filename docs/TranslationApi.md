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
Allowed values for language pairs is en-de, en-fr, en-ru, de-en, ru-en, en-zh, zh-en. 

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var conf = {
    "basePath":"https://api.aspose.cloud/v1.1",
    "authPath":"https://api.aspose.cloud/oauth2/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "testResult":"/testresult/",
    "testData":"/testdata/",
    "remoteFolder":"HtmlTestDoc/",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.TranslationApi(conf);

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
 **name** | **String**| Document name. | Html file in the storage.
 **srcLang** | **String**| Source language. | Allowed values is "en" (alias "eng", "english"), "de" (alias "deu", "deutsch", "german"), "fr" (alias "fra", "french"), "ru" (alias "rus", "russian"), "zh", alias ("chinese").
 **resLang** | **String**| Result language. | Allowed values is "en" (alias "eng", "english"), "de" (alias "deu", "deutsch", "german"), "fr" (alias "fra", "french"), "ru" (alias "rus", "russian"), "zh", alias ("chinese").
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
Allowed values for language pairs is en-de, en-fr, en-ru, de-en, ru-en, en-zh, zh-en.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var conf = {
    "basePath":"https://api.aspose.cloud/v1.1",
    "authPath":"https://api.aspose.cloud/oauth2/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "testResult":"/testresult/",
    "testData":"/testdata/",
    "remoteFolder":"HtmlTestDoc/",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.TranslationApi(conf);

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
 **srcLang** | **String**| Source language. | Allowed values is "en" (alias "eng", "english"), "de" (alias "deu", "deutsch", "german"), "fr" (alias "fra", "french"), "ru" (alias "rus", "russian"), "zh", alias ("chinese").
 **resLang** | **String**| Result language. | Allowed values is "en" (alias "eng", "english"), "de" (alias "deu", "deutsch", "german"), "fr" (alias "fra", "french"), "ru" (alias "rus", "russian"), "zh", alias ("chinese").

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data
