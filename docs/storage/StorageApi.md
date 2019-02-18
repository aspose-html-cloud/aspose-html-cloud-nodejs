# Storage API

All URIs are relative to *https://api.aspose.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_disc_usage**](StorageApi.md#get_disc_usage) | **GET** /storage/disc | Check the disk usage of the current account 
[**get_is_exist**](StorageApi.md#get_is_exist) | **GET** /storage/exist | Check if a specific file or folder exists
[**get_is_storage_exist**](StorageApi.md#get_is_storage_exist) | **GET** /storage/{name}/exist | Check if storage exists 
[**get_list_file_versions**](StorageApi.md#get_list_file_versions) | **GET** /storage/version | Get the file&#39;s versions list 


# **get_disc_usage**
> DiscUsageResponse get_disc_usage(opts)

Check the disk usage of the current account 

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
  storage: "storage_example" # String | User's storage name
}

begin
  #Check the disk usage of the current account 
  result = api_instance.get_disc_usage(opts)
  p result
rescue AsposeStorage::ApiError => e
  puts "Exception when calling StorageApi->get_disc_usage: #{e}"
end
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


# **get_is_exist**
> FileExistResponse get_is_exist(path, opts)

Check if a specific file or folder exists

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

path = "path_example" # String | File or folder path e.g. /file.ext or /Folder1

opts = { 
  version_id: "version_id_example", # String | File's version
  storage: "storage_example" # String | User's storage name
}

begin
  #Check if a specific file or folder exists
  result = api_instance.get_is_exist(path, opts)
  p result
rescue AsposeStorage::ApiError => e
  puts "Exception when calling StorageApi->get_is_exist: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **String**| File or folder path e.g. /file.ext or /Folder1 | 
 **version_id** | **String**| File&#39;s version | [optional] 
 **storage** | **String**| User&#39;s storage name | [optional] 

### Return type

[**FileExistResponse**](FileExistResponse.md)


### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **get_is_storage_exist**
> StorageExistResponse get_is_storage_exist(name)

Check if storage exists 

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

name = "name_example" # String | Storage name


begin
  #Check if storage exists 
  result = api_instance.get_is_storage_exist(name)
  p result
rescue AsposeStorage::ApiError => e
  puts "Exception when calling StorageApi->get_is_storage_exist: #{e}"
end
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



# **get_list_file_versions**
> FileVersionsResponse get_list_file_versions(path, opts)

Get the file's versions list 

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

path = "path_example" # String | File path e.g. /file.ext or /Folder1/file.ext

opts = { 
  storage: "storage_example" # String | User's storage name
}

begin
  #Get the file's versions list 
  result = api_instance.get_list_file_versions(path, opts)
  p result
rescue AsposeStorage::ApiError => e
  puts "Exception when calling StorageApi->get_list_file_versions: #{e}"
end
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

