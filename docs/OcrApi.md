# Asposehtmlcloud.OcrApi

All URIs are relative to *https://api.aspose.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetRecognizeAndImportToHtml**](OcrApi.md#GetRecognizeAndImportToHtml) | **GET** /html/{name}/ocr/import | Recognize text from the image file in the storage and import it to HTML format.
[**GetRecognizeAndTranslateToHtml**](OcrApi.md#GetRecognizeAndTranslateToHtml) | **GET** /html/{name}/ocr/translate/{srcLang}/{resLang} | Recognize text from the image file in the storage, import it to HTML format and translate to specified language.


<a name="GetRecognizeAndImportToHtml"></a>
# **GetRecognizeAndImportToHtml**
> File GetRecognizeAndImportToHtml(name, opts)

Recognize text from the image file in the storage and import it to HTML format.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.OcrApi();

var name = "name_example"; // String | The image file name.

var opts = { 
  'ocrEngineLang': "en", // String | OCR engine language - language 
  'folder': "folder_example", // String | The source image folder.
  'storage': "storage_example" // String | The source image storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetRecognizeAndImportToHtml(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The image file name. | 
 **ocrEngineLang** | **String**| OCR engine language - language  | [optional] [default to en]
 **folder** | **String**| The source image folder. | [optional] 
 **storage** | **String**| The source image storage. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="GetRecognizeAndTranslateToHtml"></a>
# **GetRecognizeAndTranslateToHtml**
> File GetRecognizeAndTranslateToHtml(name, srcLang, resLang, opts)

Recognize text from the image file in the storage, import it to HTML format and translate to specified language.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.OcrApi();

var name = "name_example"; // String | The image file name.

var srcLang = "srcLang_example"; // String | Source language - also supposed as the OCR engine language.

var resLang = "resLang_example"; // String | Result language.

var opts = { 
  'folder': "folder_example", // String | The source image folder.
  'storage': "storage_example" // String | The source image storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetRecognizeAndTranslateToHtml(name, srcLang, resLang, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The image file name. | 
 **srcLang** | **String**| Source language - also supposed as the OCR engine language. | 
 **resLang** | **String**| Result language. | 
 **folder** | **String**| The source image folder. | [optional] 
 **storage** | **String**| The source image storage. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

