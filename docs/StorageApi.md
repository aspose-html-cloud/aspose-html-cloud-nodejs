# Asposehtmlcloud.StorageApi

All URIs are relative to *https://api.aspose.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDiscUsage**](StorageApi.md#getDiscUsage) | **GET** /storage/disc | Check the disk usage of the current account 
[**getIsExist**](StorageApi.md#getIsExist) | **GET** /storage/exist | Check if a specific file or folder exists
[**getIsStorageExist**](StorageApi.md#getIsStorageExist) | **GET** /storage/{name}/exist | Check if storage exists 
[**getListFileVersions**](StorageApi.md#getListFileVersions) | **GET** /storage/version | Get the file&#39;s versions list 


<a name="getDiscUsage"></a>
# **getDiscUsage**
> DiscUsageResponse getDiscUsage(opts)

Check the disk usage of the current account 

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

var apiInstance = new Asposehtmlcloud.StorageApi(conf);

var opts = { 
  'storage': "storage_example" // String | User's storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiscUsage(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage** | **String**| User&#39;s storage name | [optional] 

### Return type

[**DiscUsageResponse**](DiscUsageResponse.md)


### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIsExist"></a>
# **getIsExist**
> FileExistResponse getIsExist(path, opts)

Check if a specific file or folder exists

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

var apiInstance = new Asposehtmlcloud.StorageApi(conf);

var path = "path_example"; // String | File or folder path e.g. /file.ext or /Folder1

var opts = { 
  'versionId': "versionId_example", // String | File's version
  'storage': "storage_example" // String | User's storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIsExist(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| File or folder path e.g. /file.ext or /Folder1 | 
 **versionId** | **String**| File&#39;s version | [optional] 
 **storage** | **String**| User&#39;s storage name | [optional] 

### Return type

[**FileExistResponse**](FileExistResponse.md)


### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIsStorageExist"></a>
# **getIsStorageExist**
> StorageExistResponse getIsStorageExist(name)

Check if storage exists 

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

var apiInstance = new Asposehtmlcloud.StorageApi(conf);

var name = "name_example"; // String | Storage name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIsStorageExist(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Storage name | 

### Return type

[**StorageExistResponse**](StorageExistResponse.md)


### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getListFileVersions"></a>
# **getListFileVersions**
> FileVersionsResponse getListFileVersions(path, opts)

Get the file&#39;s versions list 

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

var apiInstance = new Asposehtmlcloud.StorageApi(conf);

var path = "path_example"; // String | File path e.g. /file.ext or /Folder1/file.ext

var opts = { 
  'storage': "storage_example" // String | User's storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListFileVersions(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| File path e.g. /file.ext or /Folder1/file.ext | 
 **storage** | **String**| User&#39;s storage name | [optional] 

### Return type

[**FileVersionsResponse**](FileVersionsResponse.md)


### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

