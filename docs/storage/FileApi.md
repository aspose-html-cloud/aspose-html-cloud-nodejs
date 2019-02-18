# File API

All URIs are relative to *https://api.aspose.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_file**](FileApi.md#delete_file) | **DELETE** /storage/file | Remove a specific file 
[**get_download**](FileApi.md#get_download) | **GET** /storage/file | Download a specific file 
[**post_move_file**](FileApi.md#post_move_file) | **POST** /storage/file | Move a specific file 
[**put_create**](FileApi.md#put_create) | **PUT** /storage/file | Upload a specific file 


# **delete_file**
> RemoveFileResponse delete_file(path, opts)

Remove a specific file 

### Example
```ruby
# load the gem
require 'aspose_html'

CONFIG = {
    "basePath":"https://api.aspose.cloud/v1.1",
    "authPath":"https://api.aspose.cloud/oauth2/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "debug":true
}

api_instance = AsposeHtml::StorageApi.new CONFIG

path = "path_example" # String | Path of the file including file name and extension e.g. /Folder1/file.ext

opts = { 
  version_id: "version_id_example", # String | File's version
  storage: "storage_example" # String | User's storage name
}

begin
  #Remove a specific file 
  result = api_instance.delete_file(path, opts)
  p result
rescue AsposeStorage::ApiError => e
  puts "Exception when calling FileApi->delete_file: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Path of the file including file name and extension e.g. /Folder1/file.ext | 
 **version_id** | **String**| File&#39;s version | [optional] 
 **storage** | **String**| User&#39;s storage name | [optional] 

### Return type

[**RemoveFileResponse**](RemoveFileResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_download**
> File get_download(path, opts)

Download a specific file 

### Example
```ruby
# load the gem
require 'aspose_html'

CONFIG = {
    "basePath":"https://api.aspose.cloud/v1.1",
    "authPath":"https://api.aspose.cloud/oauth2/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "debug":true
}

api_instance = AsposeHtml::StorageApi.new CONFIG

path = "path_example" # String | Path of the file including the file name and extension e.g. /file.ext

opts = { 
  version_id: "version_id_example", # String | File's version
  storage: "storage_example" # String | User's storage name
}

begin
  #Download a specific file 
  result = api_instance.get_download(path, opts)
  p result
rescue AsposeStorage::ApiError => e
  puts "Exception when calling FileApi->get_download: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Path of the file including the file name and extension e.g. /file.ext | 
 **version_id** | **String**| File&#39;s version | [optional] 
 **storage** | **String**| User&#39;s storage name | [optional] 

### Return type

**{file: path_to_tmp_file, code: 200, status: 'OK'}**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data



# **post_move_file**
> MoveFileResponse post_move_file(src, dest, opts)

Move a specific file 

### Example
```ruby
# load the gem
require 'aspose_html'

CONFIG = {
    "basePath":"https://api.aspose.cloud/v1.1",
    "authPath":"https://api.aspose.cloud/oauth2/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "debug":true
}

api_instance = AsposeHtml::StorageApi.new CONFIG

src = "src_example" # String | Source file path e.g. /fileSource.ext

dest = "dest_example" # String | Destination file path e.g. /fileDestination.ext

opts = { 
  version_id: "version_id_example", # String | Source file's version,
  storage: "storage_example", # String | User's source storage name
  dest_storage: "dest_storage_example" # String | User's destination storage name
}

begin
  #Move a specific file 
  result = api_instance.post_move_file(src, dest, opts)
  p result
rescue AsposeStorage::ApiError => e
  puts "Exception when calling FileApi->post_move_file: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **src** | **String**| Source file path e.g. /fileSource.ext | 
 **dest** | **String**| Destination file path e.g. /fileDestination.ext | 
 **version_id** | **String**| Source file&#39;s version, | [optional] 
 **storage** | **String**| User&#39;s source storage name | [optional] 
 **dest_storage** | **String**| User&#39;s destination storage name | [optional] 

### Return type

[**MoveFileResponse**](MoveFileResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



# **put_create**
> File put_create(path, file, opts)

Upload a specific file 

### Example
```ruby
# load the gem
require 'aspose_html'

CONFIG = {
    "basePath":"https://api.aspose.cloud/v1.1",
    "authPath":"https://api.aspose.cloud/oauth2/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "debug":true
}

api_instance = AsposeHtml::StorageApi.new CONFIG

path = "path_example" # String | Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext

file = File.new("/path/to/file.txt") # File | File to upload

opts = { 
  version_id: "version_id_example", # String | Source file's version
  storage: "storage_example" # String | User's storage name
}

begin
  #Upload a specific file 
  result = api_instance.put_create(path, file, opts)
  p result
rescue AsposeStorage::ApiError => e
  puts "Exception when calling FileApi->put_create: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext | 
 **file** | **File**| File to upload | 
 **version_id** | **String**| Source file&#39;s version | [optional] 
 **storage** | **String**| User&#39;s storage name | [optional] 

### Return type

[**MessageResponse**](MessageResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



