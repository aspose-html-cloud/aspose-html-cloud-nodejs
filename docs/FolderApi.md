# FolderApi

All URIs are relative to *https://api.aspose.cloud/v4.0*

| Method                                        | Description                               |
|-----------------------------------------------|-------------------------------------------|
| [**createFolder**](FolderApi.md#createfolder) | Create the folder                         |
| [**deleteFolder**](FolderApi.md#deletefolder) | Delete folder                             |
| [**getFilesList**](FolderApi.md#getfileslist) | Get all files and folders within a folder |

<a name="createFolder"></a>
# **createFolder**
> createFolder(path, opts)

Create the folder

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

| Name            | Type       | Description                                             | Notes      |
|-----------------|------------|---------------------------------------------------------|------------|
| **path**        | **String** | Folder path to create e.g. &#39;folder_1/folder_2/&#39; |            |
| **storageName** | **String** | Storage name                                            | [optional] |

### Return type

null (empty response body)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](#folderapi)

<a name="deleteFolder"></a>
## deleteFolder
> deleteFolder(path, opts)

Delete folder

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

| Name            | Type        | Description                                    | Notes                         |
|-----------------|-------------|------------------------------------------------|-------------------------------|
| **path**        | **String**  | Folder path e.g. &#39;/folder&#39;             |                               |
| **storageName** | **String**  | Storage name                                   | [optional]                    |
| **recursive**   | **Boolean** | Enable to delete folders, subfolders and files | [optional] [default to false] |

### Return type

null (empty response body)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](#folderapi)

<a name="getFilesList"></a>
## getFilesList
> FilesList getFilesList(path, opts)

Get all files and folders within a folder

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

| Name            | Type       | Description                        | Notes      |
|-----------------|------------|------------------------------------|------------|
| **path**        | **String** | Folder path e.g. &#39;/folder&#39; |            |
| **storageName** | **String** | Storage name                       | [optional] |

### Return type

[**FilesList**](FilesList.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](#folderapi)

