
# StorageApi

All URIs are relative to *https://api.aspose.cloud/v4.0*

| Method                              | Description                    |
|-------------------------------------|--------------------------------|
| [**getDiscUsage**](#getdiscusage)   | Get disc usage                 |
| [**objectExists**](#objectexists)   | Check if file or folder exists |
| [**storageExists**](#storageexists) | Check if storage exists        |

## getDiscUsage
> DiscUsage getDiscUsage(opts)

Get disc usage

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
apiInstance.getDiscUsage(opts, callback);
```

### Parameters

| Name            | Type       | Description  | Notes      |
|-----------------|------------|--------------|------------|
| **storageName** | **String** | Storage name | [optional] |

### Return type

[**DiscUsage**](DiscUsage.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](#storageapi)

## objectExists
> ObjectExist objectExists(path, opts)

Check if file or folder exists

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

var path = "path_example"; // String | File or folder path e.g. '/file.ext' or '/folder'

var opts = { 
  'storageName': "storageName_example", // String | Storage name
  'versionId': "versionId_example" // String | File version ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.objectExists(path, opts, callback);
```

### Parameters

| Name            | Type       | Description                                                       | Notes      |
|-----------------|------------|-------------------------------------------------------------------|------------|
| **path**        | **String** | File or folder path e.g. &#39;/file.ext&#39; or &#39;/folder&#39; |            |
| **storageName** | **String** | Storage name                                                      | [optional] |
| **versionId**   | **String** | File version ID                                                   | [optional] |

### Return type

[**ObjectExist**](ObjectExist.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](#storageapi)

## storageExists
> StorageExist storageExists(storageName)

Check if storage exists

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

var storageName = "storageName_example"; // String | Storage name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storageExists(storageName, callback);
```

### Parameters

| Name            | Type       | Description  | Notes |
|-----------------|------------|--------------|-------|
| **storageName** | **String** | Storage name |       |

### Return type

[**StorageExist**](StorageExist.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](#storageapi)
