# Asposehtmlcloud.FileApi

All URIs are relative to *https://api.aspose.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteFile**](FileApi.md#deleteFile) | **DELETE** /storage/file | Remove a specific file 
[**getDownload**](FileApi.md#getDownload) | **GET** /storage/file | Download a specific file 
[**postMoveFile**](FileApi.md#postMoveFile) | **POST** /storage/file | Move a specific file 
[**putCreate**](FileApi.md#putCreate) | **PUT** /storage/file | Upload a specific file 


<a name="deleteFile"></a>
# **deleteFile**
> RemoveFileResponse deleteFile(path, opts)

Remove a specific file 

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.FileApi();

var path = "path_example"; // String | Path of the file including file name and extension e.g. /Folder1/file.ext

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
apiInstance.deleteFile(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Path of the file including file name and extension e.g. /Folder1/file.ext | 
 **versionId** | **String**| File&#39;s version | [optional] 
 **storage** | **String**| User&#39;s storage name | [optional] 

### Return type

[**RemoveFileResponse**](RemoveFileResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDownload"></a>
# **getDownload**
> File getDownload(path, opts)

Download a specific file 

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.FileApi();

var path = "path_example"; // String | Path of the file including the file name and extension e.g. /file.ext

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
apiInstance.getDownload(path, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Path of the file including the file name and extension e.g. /file.ext | 
 **versionId** | **String**| File&#39;s version | [optional] 
 **storage** | **String**| User&#39;s storage name | [optional] 

### Return type

**Blob** See test in [../test/StorageApi.spec.js](../test/StorageApi.spec.js)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="postMoveFile"></a>
# **postMoveFile**
> MoveFileResponse postMoveFile(src, dest, opts)

Move a specific file 

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.FileApi();

var src = "src_example"; // String | Source file path e.g. /fileSource.ext

var dest = "dest_example"; // String | Destination file path e.g. /fileDestination.ext

var opts = { 
  'versionId': "versionId_example", // String | Source file's version,
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
apiInstance.postMoveFile(src, dest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **src** | **String**| Source file path e.g. /fileSource.ext | 
 **dest** | **String**| Destination file path e.g. /fileDestination.ext | 
 **versionId** | **String**| Source file&#39;s version, | [optional] 
 **storage** | **String**| User&#39;s source storage name | [optional] 
 **destStorage** | **String**| User&#39;s destination storage name | [optional] 

### Return type

[**MoveFileResponse**](MoveFileResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putCreate"></a>
# **putCreate**
> File putCreate(path, file, opts)

Upload a specific file 

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.FileApi();

var path = "path_example"; // String | Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext

var file = "/path/to/file.txt"; // File | File to upload

var opts = { 
  'versionId': "versionId_example", // String | Source file's version
  'storage': "storage_example" // String | User's storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putCreate(path, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext | 
 **file** | **String**| Upload file path| 
 **versionId** | **String**| Source file&#39;s version | [optional] 
 **storage** | **String**| User&#39;s storage name | [optional] 

### Return type

[**MessageResponse**](MessageResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

