# VectorizationApi

All URIs are relative to *https://api.aspose.cloud/v4.0*

### Possible vectorization:
- JPEG, BMP, PNG, TIFF, GIF -> SVG


| Method                                                      | Description                                                   |
|-------------------------------------------------------------|---------------------------------------------------------------|
| [**vectorizeLocalToLocal**](#vectorizelocaltolocal)         | Vectorization an image from local disk to a local disk.       |
| [**vectorizeLocalToStorage**](#vectorizelocaltostorage)     | Vectorization an image from local disk to user's storage.     |
| [**vectorizeStorageToLocal**](#vectorizestoragetolocal)     | Vectorization an image from user's storage to local disk.     |
| [**vectorizeStorageToStorage**](#vectorizestoragetostorage) | Vectorization an image from user's storage to user's storage. |
| [**vectorize**](#vectorize)                                 | Vectorization an image to the specified format.               |

## VectorizationOptions

| Field               | Type   | Description                                                                                             | Note       |
|---------------------|--------|---------------------------------------------------------------------------------------------------------|------------|
| **error_threshold** | Number | This parameter defines maximum deviation of points to fitted curve. By default it is 30.                | [optional] |
| **max_iterations**  | Number | This parameter defines number of iteration for least-squares approximation method. By default it is 30. | [optional] |
| **colors_limit**    | Number | The maximum number of colors used to quantize an image. Default value is 25.                            | [optional] |
| **line_width**      | Number | The value of this parameter is affected by the graphics scale. Default value is 1.                      | [optional] |

## vectorizeLocalToLocal
> vectorizeLocalToLocal(src, dst, opts, function (err, data, res);

Vectorization an image from a local disk to a local disk.

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

var apiInstance = new Asposehtmlcloud.VectorizationApi(conf);

var src = "/path/to/source/source.bmp";
var dst = "/path/to/result/result.svg";
var opts = {
    'error_threshold': 1,
    'max_iterations': 50,
    'colors_limit': 10,
    'line_width': 1,
};

apiInstance.vectorizeLocalToLocal(src, dst, opts, function (err, data, res) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }});
```

### Parameters
| Name                | Type       | Description                                                                                             | Notes                     |
|---------------------|------------|---------------------------------------------------------------------------------------------------------|---------------------------|
| **src**             | **String** | Full path to the source file.                                                                           | bmp, jpeg, png, tiff, gif |
| **dst**             | **String** | Full path to the result file.                                                                           | svg                       |
| **options**         | **Object** | Option for vectorization.                                                                               | [optional]                |
| **error_threshold** | Number     | This parameter defines maximum deviation of points to fitted curve. By default it is 30.                | [optional]                |
| **max_iterations**  | Number     | This parameter defines number of iteration for least-squares approximation method. By default it is 30. | [optional]                |
| **colors_limit**    | Number     | The maximum number of colors used to quantize an image. Default value is 25.                            | [optional]                |
| **line_width**      | Number     | The value of this parameter is affected by the graphics scale. Default value is 1.                      | [optional]                |

### Return type

**(err, data, res)**

| Name     | Type                                      | Description                         |
|----------|-------------------------------------------|-------------------------------------|
| **err**  | **String**                                | Error if vectorization is failed    |
| **data** | **[OperationResult](OperationResult.md)** | Result of vectorization             |
| **res**  | **Object**                                | Http response for vectorization API |

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[&#8593;UP&#8593;](#vectorizationapi)


## vectorizeLocalToStorage
> vectorizeLocalToStorage(src, dst, storage, opts, function (err, data, res);

Vectorization an image from a local disk to a user's storage.

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

var apiInstance = new Asposehtmlcloud.VectorizationApi(conf);

var src = "/path/to/source/source.jpeg";
var dst = "/FolderInStorage/result.svg";
var opts = {
    'error_threshold': 1,
    'max_iterations': 50,
    'colors_limit': 10,
    'line_width': 1,
};

var storage = "";

apiInstance.vectorizeLocalToStorage(src, dst, storage, opts, function (err, data, res) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }});
```

### Parameters
| Name                | Type       | Description                                                                                             | Notes                     |
|---------------------|------------|---------------------------------------------------------------------------------------------------------|---------------------------|
| **src**             | **String** | Full path to the source file on the local disk.                                                         | bmp, jpeg, png, tiff, gif |
| **dst**             | **String** | Full path to the result file on the storage.                                                            | svg                       |
| **storage**         | **String** | Storage name. Empty string or null is default storage.                                                  |                           |
| **options**         | **Object** | Option for vectorization.                                                                               | [optional]                |
| **error_threshold** | Number     | This parameter defines maximum deviation of points to fitted curve. By default it is 30.                | [optional]                |
| **max_iterations**  | Number     | This parameter defines number of iteration for least-squares approximation method. By default it is 30. | [optional]                |
| **colors_limit**    | Number     | The maximum number of colors used to quantize an image. Default value is 25.                            | [optional]                |
| **line_width**      | Number     | The value of this parameter is affected by the graphics scale. Default value is 1.                      | [optional]                |

### Return type

**(err, data, res)**

| Name     | Type                                      | Description                         |
|----------|-------------------------------------------|-------------------------------------|
| **err**  | **String**                                | Error if vectorization is failed    |
| **data** | **[OperationResult](OperationResult.md)** | Result of vectorization             |
| **res**  | **Object**                                | Http response for vectorization API |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[&#8593;UP&#8593;](#vectorizationapi)


## vectorizeStorageToLocal
> vectorizeStorageToLocal(src, dst, storage, opts, function (err, data, res);

Vectorization an image from a user's storage to a local disk.

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

var apiInstance = new Asposehtmlcloud.VectorizationApi(conf);

var src = "/FolderInStorage/source.tiff";
var dst = "/localPath/result.svg";
var opts = {
    'error_threshold': 1,
    'max_iterations': 50,
    'colors_limit': 10,
    'line_width': 1,
};

var storage = "";

apiInstance.vectorizeStorageToLocal(src, dst, storage, opts, function (err, data, res) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }});
```

### Parameters
| Name                | Type       | Description                                                                                             | Notes                     |
|---------------------|------------|---------------------------------------------------------------------------------------------------------|---------------------------|
| **src**             | **String** | Full path to the source file on the storage.                                                            | bmp, jpeg, png, tiff, gif |
| **dst**             | **String** | Full path to the result file on the local disk.                                                         | svg                       |
| **storage**         | **String** | Storage name. Empty string or null is default storage.                                                  |                           |
| **options**         | **Object** | Option for vectorization.                                                                               | [optional]                |
| **error_threshold** | Number     | This parameter defines maximum deviation of points to fitted curve. By default it is 30.                | [optional]                |
| **max_iterations**  | Number     | This parameter defines number of iteration for least-squares approximation method. By default it is 30. | [optional]                |
| **colors_limit**    | Number     | The maximum number of colors used to quantize an image. Default value is 25.                            | [optional]                |
| **line_width**      | Number     | The value of this parameter is affected by the graphics scale. Default value is 1.                      | [optional]                |

### Return type

**(err, data, res)**

| Name     | Type                                      | Description                         |
|----------|-------------------------------------------|-------------------------------------|
| **err**  | **String**                                | Error if vectorization is failed    |
| **data** | **[OperationResult](OperationResult.md)** | Result of vectorization             |
| **res**  | **Object**                                | Http response for vectorization API |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[&#8593;UP&#8593;](#vectorizationapi)


## vectorizeStorageToStorage
> vectorizeStorageToStorage(src, dst, storage, opts, function (err, data, res);

Vectorization an image from a user's storage to a local disk.

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

var apiInstance = new Asposehtmlcloud.VectorizationApi(conf);

var src = "/FolderOnStorage/source.gif";
var dst = "/FolderOnStorage/result.svg";
var opts = {
    'error_threshold': 1,
    'max_iterations': 50,
    'colors_limit': 10,
    'line_width': 1,
};
var storage = "";

apiInstance.vectorizeStorageToStorage(src, dst, storage, opts, function (err, data, res) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }});
```

### Parameters
| Name                | Type       | Description                                                                                             | Notes                     |
|---------------------|------------|---------------------------------------------------------------------------------------------------------|---------------------------|
| **src**             | **String** | Full path to the source file on the storage.                                                            | bmp, jpeg, png, tiff, gif |
| **dst**             | **String** | Full path to the result file on the storage.                                                            | svg                       |
| **storage**         | **String** | Storage name. Empty string or null is default storage.                                                  |                           |
| **options**         | **Object** | Option for vectorization.                                                                               | [optional]                |
| **error_threshold** | Number     | This parameter defines maximum deviation of points to fitted curve. By default it is 30.                | [optional]                |
| **max_iterations**  | Number     | This parameter defines number of iteration for least-squares approximation method. By default it is 30. | [optional]                |
| **colors_limit**    | Number     | The maximum number of colors used to quantize an image. Default value is 25.                            | [optional]                |
| **line_width**      | Number     | The value of this parameter is affected by the graphics scale. Default value is 1.                      | [optional]                |

### Return type

**(err, data, res)**

| Name     | Type                                      | Description                         |
|----------|-------------------------------------------|-------------------------------------|
| **err**  | **String**                                | Error if vectorization is failed    |
| **data** | **[OperationResult](OperationResult.md)** | Result of vectorization             |
| **res**  | **Object**                                | Http response for vectorization API |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[&#8593;UP&#8593;](#vectorizationapi)

## vectorize
> vectorize(src, dst, srcInLocal, dstInLocal, isUrl, opts, storage, function (err, data, res);

General function for vectorization.

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

var apiInstance = new Asposehtmlcloud.VectorizationApi(conf);

var src = "/path/to/image.png";
var dst = "/FolderOnStorage/result.svg";
var opts = {
    'error_threshold': 1,
    'max_iterations': 50,
    'colors_limit': 10,
    'line_width': 1,
};
var storage = "";

apiInstance.vectorize(src, dst, true, false, opts, storage, function (err, data, res) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }});
```

### Parameters
| Name                | Type        | Description                                                                                             | Notes                     |
|---------------------|-------------|---------------------------------------------------------------------------------------------------------|---------------------------|
| **src**             | **String**  | Full path to the source.                                                                                | bmp, jpeg, png, tiff, gif |
| **dst**             | **String**  | Full path to the result.                                                                                | svg                       |
| **srcInLocal**      | **Boolean** | Source on the local disk.                                                                               |                           |
| **dstInLocal**      | **Boolean** | Save result on the local disk.                                                                          |                           |
| **options**         | **Object**  | Option for vectorization.                                                                               | [optional]                |
| **error_threshold** | Number      | This parameter defines maximum deviation of points to fitted curve. By default it is 30.                | [optional]                |
| **max_iterations**  | Number      | This parameter defines number of iteration for least-squares approximation method. By default it is 30. | [optional]                |
| **colors_limit**    | Number      | The maximum number of colors used to quantize an image. Default value is 25.                            | [optional]                |
| **line_width**      | Number      | The value of this parameter is affected by the graphics scale. Default value is 1.                      | [optional]                |
| **storage**         | **String**  | Storage name. Empty string or null is default storage.                                                  |                           |

### Return type

**(err, data, res)**

| Name     | Type                                      | Description                         |
|----------|-------------------------------------------|-------------------------------------|
| **err**  | **String**                                | Error if vectorization is failed    |
| **data** | **[OperationResult](OperationResult.md)** | Result of vectorization             |
| **res**  | **Object**                                | Http response for vectorization API |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[&#8593;UP&#8593;](#vectorizationapi)