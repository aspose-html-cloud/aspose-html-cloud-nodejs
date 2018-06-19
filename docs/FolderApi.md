# Asposehtmlcloud.FolderApi

All URIs are relative to *https://api.aspose.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteFolder**](FolderApi.md#deleteFolder) | **DELETE** /storage/folder | Remove a specific folder 
[**getListFiles**](FolderApi.md#getListFiles) | **GET** /storage/folder | Get the file listing of a specific folder 
[**postMoveFolder**](FolderApi.md#postMoveFolder) | **POST** /storage/folder | Move a specific folder 
[**putCreateFolder**](FolderApi.md#putCreateFolder) | **PUT** /storage/folder | Create the folder 


<a name="deleteFolder"></a>
# **deleteFolder**
> RemoveFolderResponse deleteFolder(path, opts)

Remove a specific folder 

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.FolderApi();

var path = "path_example"; // String | Folder path e.g. /Folder1

var opts = { 
  'storage': "storage_example", // String | User's storage name
  'recursive': false // Boolean | Remove recursivelly inner folder/files. If false and folder contains data than exception is raised.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteFolder(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Folder path e.g. /Folder1 | 
 **storage** | **String**| User&#39;s storage name | [optional] 
 **recursive** | **Boolean**| Remove recursivelly inner folder/files. If false and folder contains data than exception is raised. | [optional] [default to false]

### Return type

[**RemoveFolderResponse**](RemoveFolderResponse.md)


### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getListFiles"></a>
# **getListFiles**
> File getListFiles(opts)

Get the file listing of a specific folder 

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.FolderApi();

var opts = { 
  'path': "/", // String | Start with name of storage e.g. root folder '/'or some folder '/folder1/..'
  'storage': "storage_example" // String | User's storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListFiles(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Start with name of storage e.g. root folder &#39;/&#39;or some folder &#39;/folder1/..&#39; | [optional] [default to /]
 **storage** | **String**| User&#39;s storage name | [optional] 

### Return type

**FileDetailsResponse**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postMoveFolder"></a>
# **postMoveFolder**
> MoveFolderResponse postMoveFolder(src, dest, opts)

Move a specific folder 

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.FolderApi();

var src = "src_example"; // String | Source folder path e.g. /Folder1

var dest = "dest_example"; // String | Destination folder path e.g. /Folder2

var opts = { 
  'storage': "storage_example", // String | User's source storage name
  'destStorage': "destStorage_example" // String | User's destination storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postMoveFolder(src, dest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **src** | **String**| Source folder path e.g. /Folder1 | 
 **dest** | **String**| Destination folder path e.g. /Folder2 | 
 **storage** | **String**| User&#39;s source storage name | [optional] 
 **destStorage** | **String**| User&#39;s destination storage name | [optional] 

### Return type

[**MoveFolderResponse**](MoveFolderResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putCreateFolder"></a>
# **putCreateFolder**
> File putCreateFolder(path, opts)

Create the folder 

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.FolderApi();

var path = "path_example"; // String | Target folder's path e.g. Folder1/Folder2/. The folders will be created recursively

var opts = { 
  'storage': "storage_example", // String | User's source storage name
  'destStorage': "destStorage_example" // String | User's destination storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putCreateFolder(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Target folder&#39;s path e.g. Folder1/Folder2/. The folders will be created recursively | 
 **storage** | **String**| User&#39;s source storage name | [optional] 
 **destStorage** | **String**| User&#39;s destination storage name | [optional] 

### Return type

[**MessageResponse**](MessageResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

