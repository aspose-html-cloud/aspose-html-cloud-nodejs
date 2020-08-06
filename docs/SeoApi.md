<a name="SeoApi"></a>
# Asposehtmlcloud.SeoApi

All URIs are relative to *https://api.aspose.cloud/v3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetSeoWarning**](SeoApi.md#GetSeoWarning) | **GET** /html/seo | Page analysis and return SEO warnings in json format.
[**GetHtmlWarning**](SeoApi.md#GetHtmlWarning) | **GET** /html/validator | Checks the markup validity of Web documents in HTML, XHTML, etc.and return in json format.


<a name="GetSeoWarning"></a>
# **GetSeoWarning**
> File GetSeoWarning(addr)

Page analysis and return SEO warnings in json format.

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

var apiInstance = new Asposehtmlcloud.SeoApi(conf);

var addr = "url_example"; // String | URL for analysis.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetSeoWarning(addr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addr** | **String**| Source url. | 


### Return type

**Blob**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](SeoApi.md#SeoApi)


<a name="GetHtmlWarning"></a>
# **GetHtmlWarning**
> File GetHtmlWarning(url)

Checks the markup validity of Web documents in HTML, XHTML, etc.and return in json format.


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

var apiInstance = new Asposehtmlcloud.SeoApi(conf);

var url = "url_example"; // String | URL for analysis.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetHtmlWarning(addr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **String**| Source url. | 


### Return type

**Blob**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](SeoApi.md#SeoApi)

