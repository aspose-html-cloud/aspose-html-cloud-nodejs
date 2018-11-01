# Asposehtmlcloud.TemplateMergeApi

All URIs are relative to *https://api.aspose.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetMergeHtmlTemplate**](TemplateMergeApi.md#GetMergeHtmlTemplate) | **GET** /html/{templateName}/merge | Populate HTML document template with data located as a file in the storage.
[**PutMergeHtmlTemplate**](TemplateMergeApi.md#PutMergeHtmlTemplate) | **PUT** /html/{templateName}/merge | Populate HTML document template with data from the request body. Result document will be saved to storage.


<a name="GetMergeHtmlTemplate"></a>
# **GetMergeHtmlTemplate**
> File GetMergeHtmlTemplate(templateName, dataPath, opts)

Populate HTML document template with data located as a file in the storage.

### Example

#### Template file HtmlTemplate.html

```html
<html>
     <head>
          <title>{{Title}}</title>
          <meta charset="utf-8" />
     </head>
     <body>
          <div>
               <p>Name: {{Name}} {{Surname}}</p>
               <p>Address: {{Address.Number}}, {{Address.Street}}, {{Address.City}}</p>
          </div>
      </body>
</html>
```

#### Data file XmlSourceData.xml
```xml
<?xml version="1.0" encoding="utf-8" ?>
<Data>
	<Title>Test</Title>
	<Person>
		<Name>John</Name>
		<Surname>Smith</Surname>
		<Address>
			<Number>200</Number>
			<Street>Austin rd.</Street>
			<City>Dallas</City>
		</Address>
	</Person>
	<Person>
		<Name>Jack</Name>
		<Surname>Fox</Surname>
		<Address>
			<Number>25</Number>
			<Street>Broadway</Street>
			<City>New York</City>
		</Address>
	</Person>
	<Person>
		<Name>Sherlock</Name>
		<Surname>Holmes</Surname>
		<Address>
			<Number>65</Number>
			<Street>Baker str.</Street>
			<City>London</City>
		</Address>
	</Person>
</Data>
```

```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.TemplateMergeApi();

var templateName = "templateName_example"; // String | Template document name. Template document is HTML or zipped HTML.

var dataPath = "dataPath_example"; // String | Data source file path in the storage. Supported data format: XML

var opts = { 
  'options': "options_example", // String | Template merge options: reserved for further implementation.
  'folder': "folder_example", // String | The template document folder.
  'storage': "storage_example" // String | The template document and data source storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.GetMergeHtmlTemplate(templateName, dataPath, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateName** | **String**| Template document name. Template document is HTML or zipped HTML. | 
 **dataPath** | **String**| Data source file path in the storage. Supported data format: XML | 
 **options** | **String**| Template merge options: reserved for further implementation. | [optional] 
 **folder** | **String**| The template document folder. | [optional] 
 **storage** | **String**| The template document and data source storage. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="PutMergeHtmlTemplate"></a>
# **PutMergeHtmlTemplate**
> File PutMergeHtmlTemplate(templateName, outPath, file, opts)

Populate HTML document template with data from the request body. Result document will be saved to storage.

### Example
```javascript
var Asposehtmlcloud = require('asposehtmlcloud');

var apiInstance = new Asposehtmlcloud.TemplateMergeApi();

var templateName = "templateName_example"; // String | Template document name. Template document is HTML or zipped HTML.

var outPath = "outPath_example"; // String | Result document path.

var file = "/path/to/file.xml"; // File | A data file to populate template.

var opts = { 
  'options': "options_example", // String | Template merge options: reserved for further implementation.
  'folder': "folder_example", // String | The template document folder.
  'storage': "storage_example" // String | The template document and data source storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.PutMergeHtmlTemplate(templateName, outPath, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateName** | **String**| Template document name. Template document is HTML or zipped HTML. | 
 **outPath** | **String**| Result document path. | 
 **file** | **File**| A data file to populate template. | 
 **options** | **String**| Template merge options: reserved for further implementation. | [optional] 
 **folder** | **String**| The template document folder. | [optional] 
 **storage** | **String**| The template document and data source storage. | [optional] 

### Return type

**File**

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json
