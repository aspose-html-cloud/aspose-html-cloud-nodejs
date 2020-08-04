<a name="FolderApi"></a>
# Asposehtmlcloud.FolderApi

All URIs are relative to *https://api.aspose.cloud/v3.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyFolder**](FolderApi.md#copyFolder) | **PUT** /html/storage/folder/copy/{srcPath} | Copy folder
[**createFolder**](FolderApi.md#createFolder) | **PUT** /html/storage/folder/{path} | Create the folder
[**deleteFolder**](FolderApi.md#deleteFolder) | **DELETE** /html/storage/folder/{path} | Delete folder
[**getFilesList**](FolderApi.md#getFilesList) | **GET** /html/storage/folder/{path} | Get all files and folders within a folder
[**moveFolder**](FolderApi.md#moveFolder) | **PUT** /html/storage/folder/move/{srcPath} | Move folder


<a name="copyFolder"></a>
# **copyFolder**
> copyFolder(srcPath, destPath, opts)

Copy folder

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

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

var apiInstance = new Asposehtmlcloud.StorageApi(conf);

var srcPath = "srcPath_example"; // String | Source folder path e.g. '/src'

var destPath = "destPath_example"; // String | Destination folder path e.g. '/dst'

var opts = { 
  'srcStorageName': "srcStorageName_example", // String | Source storage name
  'destStorageName': "destStorageName_example" // String | Destination storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.copyFolder(srcPath, destPath, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **srcPath** | **String**| Source folder path e.g. &#39;/src&#39; | 
 **destPath** | **String**| Destination folder path e.g. &#39;/dst&#39; | 
 **srcStorageName** | **String**| Source storage name | [optional] 
 **destStorageName** | **String**| Destination storage name | [optional] 

### Return type

null (empty response body)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](FolderApi.md#FolderApi)

<a name="createFolder"></a>
# **createFolder**
> createFolder(path, opts)

Create the folder

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "testResult":"/testresult/",
    "testData":"/testdata/",
    "remoteFolder":"HtmlTestDoc",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.StorageApi(conf);

var path = "path_example"; // String | Folder path to create e.g. 'folder_1/folder_2/'

var opts = { 
  'storageName': "storageName_example" // String | Storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createFolder(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Folder path to create e.g. &#39;folder_1/folder_2/&#39; | 
 **storageName** | **String**| Storage name | [optional] 

### Return type

null (empty response body)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](FolderApi.md#FolderApi)

<a name="deleteFolder"></a>
# **deleteFolder**
> deleteFolder(path, opts)

Delete folder

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

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

var apiInstance = new Asposehtmlcloud.StorageApi(conf);

var path = "path_example"; // String | Folder path e.g. '/folder'

var opts = { 
  'storageName': "storageName_example", // String | Storage name
  'recursive': false // Boolean | Enable to delete folders, subfolders and files
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFolder(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Folder path e.g. &#39;/folder&#39; | 
 **storageName** | **String**| Storage name | [optional] 
 **recursive** | **Boolean**| Enable to delete folders, subfolders and files | [optional] [default to false]

### Return type

null (empty response body)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](FolderApi.md#FolderApi)

<a name="getFilesList"></a>
# **getFilesList**
> FilesList getFilesList(path, opts)

Get all files and folders within a folder

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

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

var apiInstance = new Asposehtmlcloud.StorageApi(conf);

var path = "path_example"; // String | Folder path e.g. '/folder'

var opts = { 
  'storageName': "storageName_example" // String | Storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFilesList(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Folder path e.g. &#39;/folder&#39; | 
 **storageName** | **String**| Storage name | [optional] 

### Return type

[**FilesList**](FilesList.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](FolderApi.md#FolderApi)

<a name="moveFolder"></a>
# **moveFolder**
> moveFolder(srcPath, destPath, opts)

Move folder

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

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

var apiInstance = new Asposehtmlcloud.StorageApi(conf);

var srcPath = "srcPath_example"; // String | Folder path to move e.g. '/folder'

var destPath = "destPath_example"; // String | Destination folder path to move to e.g '/dst'

var opts = { 
  'srcStorageName': "srcStorageName_example", // String | Source storage name
  'destStorageName': "destStorageName_example" // String | Destination storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.moveFolder(srcPath, destPath, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **srcPath** | **String**| Folder path to move e.g. &#39;/folder&#39; | 
 **destPath** | **String**| Destination folder path to move to e.g &#39;/dst&#39; | 
 **srcStorageName** | **String**| Source storage name | [optional] 
 **destStorageName** | **String**| Destination storage name | [optional] 

### Return type

null (empty response body)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
 
[&#8593;UP&#8593;](FolderApi.md#FolderApi)
