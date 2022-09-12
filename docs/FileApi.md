<a id="fileapi"></a>
# FileApi

All URIs are relative to *https://api.aspose.cloud/v4.0*

| Method                                      | Description   |
|---------------------------------------------|---------------|
| [**deleteFile**](FileApi.md#deletefile)     | Delete file   |
| [**downloadFile**](FileApi.md#downloadfile) | Download file |
| [**uploadFile**](FileApi.md#uploadfile)     | Upload file   |


## deleteFile
> deleteFile(path, opts)

Delete file

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.StorageApi(conf);

var path = "path_example"; // String | File path e.g. '/folder/file.ext'

var opts = { 
  'storageName': "storageName_example", // String | Storage name
  'versionId': "versionId_example" // String | File version ID to delete
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFile(path, opts, callback);
```

### Parameters

| Name            | Type       | Description                               | Notes      |
|-----------------|------------|-------------------------------------------|------------|
| **path**        | **String** | File path e.g. &#39;/folder/file.ext&#39; |            |
| **storageName** | **String** | Storage name                              | [optional] |
| **versionId**   | **String** | File version ID to delete                 | [optional] |

### Return type

null (empty response body)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](#fileapi)

## downloadFile
> File downloadFile(path, opts)

Download file

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.StorageApi(conf);

var path = "path_example"; // String | File path e.g. '/folder/file.ext'

var opts = { 
  'storageName': "storageName_example", // String | Storage name
  'versionId': "versionId_example" // String | File version ID to download
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadFile(path, opts, callback);
```

### Parameters

| Name            | Type       | Description                               | Notes      |
|-----------------|------------|-------------------------------------------|------------|
| **path**        | **String** | File path e.g. &#39;/folder/file.ext&#39; |            |
| **storageName** | **String** | Storage name                              | [optional] |
| **versionId**   | **String** | File version ID to download               | [optional] |

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

[&#8593;UP&#8593;](#fileapi)


# **uploadFile**
> FilesUploadResult uploadFile(path, file, opts)

Upload file

### Example
```javascript
var Asposehtmlcloud = require('@asposecloud/aspose-html-cloud');

    // Get keys from aspose site.
    // There is free quota available. 
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v4.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "defaultUserAgent":"Webkit"
};

var apiInstance = new Asposehtmlcloud.StorageApi(conf);

var folder = "folderInStorage"; // String | Folder where to upload e.g. / or /Folder.             
var fs = require('fs');
var path = require('path');
var file = fs.createReadStream(path.normalize("/path/to/file.txt"));
var opts = { 
  'storageName': null // String | Storage name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadFile(folder, file, opts, callback);
```

### Parameters

| Name       | Type       | Description                                               | Notes      |
|------------|------------|-----------------------------------------------------------|------------|
| **folder** | **String** | Path where to upload excluding filename e.g. / or /Folder |            |
| **file**   | **File**   | File to upload                                            |            |
| **opts**   | **Object** | Options with storage name                                 | [optional] |

### Return type

[**FilesUploadResult**](FilesUploadResult.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[&#8593;UP&#8593;](#fileapi)