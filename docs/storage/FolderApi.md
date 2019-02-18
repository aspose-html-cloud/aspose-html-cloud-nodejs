# Folder API

All URIs are relative to *https://api.aspose.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_folder**](FolderApi.md#delete_folder) | **DELETE** /storage/folder | Remove a specific folder 
[**get_list_files**](FolderApi.md#get_list_files) | **GET** /storage/folder | Get the file listing of a specific folder 
[**post_move_folder**](FolderApi.md#post_move_folder) | **POST** /storage/folder | Move a specific folder 
[**put_create_folder**](FolderApi.md#put_create_folder) | **PUT** /storage/folder | Create the folder 


# **delete_folder**
> RemoveFolderResponse delete_folder(path, opts)

Remove a specific folder 

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

path = "path_example" # String | Folder path e.g. /Folder1

opts = { 
  storage: "storage_example", # String | User's storage name
  recursive: false # BOOLEAN | Remove recursivelly inner folder/files. If false and folder contains data than exception is raised.
}

begin
  #Remove a specific folder 
  result = api_instance.delete_folder(path, opts)
  p result
rescue AsposeStorage::ApiError => e
  puts "Exception when calling FolderApi->delete_folder: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Folder path e.g. /Folder1 | 
 **storage** | **String**| User&#39;s storage name | [optional] 
 **recursive** | **BOOLEAN**| Remove recursivelly inner folder/files. If false and folder contains data than exception is raised. | [optional] [default to false]

### Return type

[**RemoveFolderResponse**](RemoveFolderResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_list_files**
> File get_list_files(opts)

Get the file listing of a specific folder 

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

opts = { 
  path: "/", # String | Start with name of storage e.g. root folder '/'or some folder '/folder1/..'
  storage: "storage_example" # String | User's storage name
}

begin
  #Get the file listing of a specific folder 
  result = api_instance.get_list_files(opts)
  p result
rescue AsposeStorage::ApiError => e
  puts "Exception when calling FolderApi->get_list_files: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Start with name of storage e.g. root folder &#39;/&#39;or some folder &#39;/folder1/..&#39; | [optional] [default to /]
 **storage** | **String**| User&#39;s storage name | [optional] 

### Return type

[**FileDetailsResponse**](FileDetailsResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **post_move_folder**
> MoveFolderResponse post_move_folder(src, dest, opts)

Move a specific folder 

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

src = "src_example" # String | Source folder path e.g. /Folder1

dest = "dest_example" # String | Destination folder path e.g. /Folder2

opts = { 
  storage: "storage_example", # String | User's source storage name
  dest_storage: "dest_storage_example" # String | User's destination storage name
}

begin
  #Move a specific folder 
  result = api_instance.post_move_folder(src, dest, opts)
  p result
rescue AsposeStorage::ApiError => e
  puts "Exception when calling FolderApi->post_move_folder: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **src** | **String**| Source folder path e.g. /Folder1 | 
 **dest** | **String**| Destination folder path e.g. /Folder2 | 
 **storage** | **String**| User&#39;s source storage name | [optional] 
 **dest_storage** | **String**| User&#39;s destination storage name | [optional] 

### Return type

[**MoveFolderResponse**](MoveFolderResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **put_create_folder**
> File put_create_folder(path, opts)

Create the folder 

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

path = "path_example" # String | Target folder's path e.g. Folder1/Folder2/. The folders will be created recursively

opts = { 
  storage: "storage_example", # String | User's source storage name
  dest_storage: "dest_storage_example" # String | User's destination storage name
}

begin
  #Create the folder 
  result = api_instance.put_create_folder(path, opts)
  p result
rescue AsposeStorage::ApiError => e
  puts "Exception when calling FolderApi->put_create_folder: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| Target folder&#39;s path e.g. Folder1/Folder2/. The folders will be created recursively | 
 **storage** | **String**| User&#39;s source storage name | [optional] 
 **dest_storage** | **String**| User&#39;s destination storage name | [optional] 

### Return type

[**MessageResponse**](MessageResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
