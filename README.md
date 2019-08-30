# asposehtmlcloud

Asposehtmlcloud - JavaScript client for asposehtmlcloud

- API version: 19.6.2
- Package version: 19.6.2

## Installation

# Aspose.HTML Cloud SDK for Node.js
This repository contains Aspose.HTML Cloud SDK for Node.js source code. 
This SDK allows you to work with Aspose.HTML Cloud REST APIs in your Node.js applications quickly and easily.

See [API Reference](https://apireference.aspose.cloud/html/) for full API specification.

## How to use the SDK?
The complete source code is available in this repository folder, you can either directly use 
it in your project via npm package manager.

### Prerequisites

To use Aspose HTML for Cloud Node.js SDK you need to register an account with [Aspose Cloud](https://www.aspose.cloud/) and lookup/create App Key and SID at [Cloud Dashboard](https://dashboard.aspose.cloud/#/apps). There is free quota available. For more details, see [Aspose Cloud Pricing](https://purchase.aspose.cloud/pricing).

### Installation

#### Install Aspose.HTML Cloud 
### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install asposehtmlcloud --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your asposehtmlcloud from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('asposehtmlcloud')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

### Sample usage

Before fill all fields in configuration object (see tests)   

Example:   
```json
var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "testResult":"/testresult/",
    "testData":"/testdata/",
    "remoteFolder":"HtmlTestDoc/",
    "defaultUserAgent":"Webkit"
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:   

NOTE: Use the helper from /test/helper.js for upload and save data.

```javascript
var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "testResult":"/testresult/",
    "testData":"/testdata/",
    "remoteFolder":"HtmlTestDoc/",
    "defaultUserAgent":"Webkit"
};

//Create storage api for upload to server
var api = require('asposehtmlcloud');
var fs = require('fs');
var storageApi = new api.StorageApi(conf);


// Setup local folder for source and result
var local_dst_folder = __dirname + "/../"+ conf['testResult'];
var local_src_folder = __dirname + "/../"+ conf['testData'];

// Create Conversion Api object
var conversionApi = new api.ConversionApi(conf);


var filename = "test_data.html"; // {String} Document name.

// Get upload folder from config (or write manually)
var folder = conf['remoteFolder'];
var versionId = null;
var storage=null;

var file = local_src_folder + "/" + filename;

//Upload file to storage
var opts = {versionId:versionId, storage:null};

storageApi.uploadFile(folder + "/" + filename, file, opts, callback);

//Setup output format
var outFormat = "png"; // {String} Resulting image format.

//Setup various option for result image
var opts = {
  'width': 800, // {Number} Resulting image width.
  'height': 1000, // {Number} Resulting image height.
  'leftMargin': 10, // {Number} Left resulting image margin.
  'rightMargin': 10, // {Number} Right resulting image margin.
  'topMargin': 20, // {Number} Top resulting image margin.
  'bottomMargin': 20, // {Number} Bottom resulting image margin.
  'resolution': 300, // {Number} Resolution of resulting image.
  'folder': folder, // {String} The source document folder.
  'storage': storage // {String} The source document storage.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    var dst = local_dst_folder + "/" + "ResultConvertToPng.png";
    var fd = fs.openSync(dst, 'w');
    var len = fs.writeSync(fd, data);
  }
};
conversionApi.GetConvertDocumentToImage(filename, outFormat, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.aspose.cloud/v3.0*

[Tests](./test/) contain various examples of using the Aspose.HTML SDK.

<a name="html_api"></a>
### HTML API

- For conversion to images allowed formats is jpeg, png, bmp, tiff, gif. Input formats are html, epub, svg.

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Asposehtmlcloud.ConversionApi* | [**GetConvertDocumentToImage**](docs/ConversionApi.md#GetConvertDocumentToImage) | **GET** /html/{name}/convert/image/{outFormat} | Convert the HTML document from the storage by its name to the specified image format.
*Asposehtmlcloud.ConversionApi* | [**GetConvertDocumentToImageByUrl**](docs/ConversionApi.md#GetConvertDocumentToImageByUrl) | **GET** /html/convert/image/{outFormat} | Convert the HTML page from the web by its URL to the specified image format.
*Asposehtmlcloud.ConversionApi* | [**GetConvertDocumentToPdf**](docs/ConversionApi.md#GetConvertDocumentToPdf) | **GET** /html/{name}/convert/pdf | Convert the HTML document from the storage by its name to PDF.
*Asposehtmlcloud.ConversionApi* | [**GetConvertDocumentToPdfByUrl**](docs/ConversionApi.md#GetConvertDocumentToPdfByUrl) | **GET** /html/convert/pdf | Convert the HTML page from the web by its URL to PDF.
*Asposehtmlcloud.ConversionApi* | [**GetConvertDocumentToXps**](docs/ConversionApi.md#GetConvertDocumentToXps) | **GET** /html/{name}/convert/xps | Convert the HTML document from the storage by its name to XPS.
*Asposehtmlcloud.ConversionApi* | [**GetConvertDocumentToXpsByUrl**](docs/ConversionApi.md#GetConvertDocumentToXpsByUrl) | **GET** /html/convert/xps | Convert the HTML page from the web by its URL to XPS.
*Asposehtmlcloud.ConversionApi* | [**PostConvertDocumentInRequestToImage**](docs/ConversionApi.md#PostConvertDocumentInRequestToImage) | **POST** /html/convert/image/{outFormat} | Converts the HTML document (in request content) to the specified image format and uploads resulting file to storage.
*Asposehtmlcloud.ConversionApi* | [**PostConvertDocumentInRequestToPdf**](docs/ConversionApi.md#PostConvertDocumentInRequestToPdf) | **POST** /html/convert/pdf | Converts the HTML document (in request content) to PDF and uploads resulting file to storage.
*Asposehtmlcloud.ConversionApi* | [**PostConvertDocumentInRequestToXps**](docs/ConversionApi.md#PostConvertDocumentInRequestToXps) | **POST** /html/convert/xps | Converts the HTML document (in request content) to XPS and uploads resulting file to storage.
*Asposehtmlcloud.ConversionApi* | [**PutConvertDocumentToImage**](docs/ConversionApi.md#PutConvertDocumentToImage) | **PUT** /html/{name}/convert/image/{outFormat} | Converts the HTML document (located on storage) to the specified image format and uploads resulting file to storage.
*Asposehtmlcloud.ConversionApi* | [**PutConvertDocumentToPdf**](docs/ConversionApi.md#PutConvertDocumentToPdf) | **PUT** /html/{name}/convert/pdf | Converts the HTML document (located on storage) to PDF and uploads resulting file to storage.
*Asposehtmlcloud.ConversionApi* | [**PutConvertDocumentToXps**](docs/ConversionApi.md#PutConvertDocumentToXps) | **PUT** /html/{name}/convert/xps | Converts the HTML document (located on storage) to XPS and uploads resulting file to storage.
*Asposehtmlcloud.ConversionApi* | [**GetConvertDocumentToMHTMLByUrl**](docs/ConversionApi.md#GetConvertDocumentToMHTMLByUrl) | **GET** /html/convert/mhtml | Converts the HTML page from Web by its URL to MHTML returns resulting file in response content.
*Asposehtmlcloud.ConversionApi* | [**GetConvertDocumentToMarkdown**](docs/ConversionApi.md#GetConvertDocumentToMarkdown) | **GET** /html/{name}/convert/md | Converts the HTML document (located on storage) to Markdown and returns resulting file in response content.
*Asposehtmlcloud.ConversionApi* | [**PostConvertDocumentInRequestToMarkdown**](docs/ConversionApi.md#PostConvertDocumentInRequestToMarkdown) | **POST** /html/convert/md | Converts the HTML document (in request content) to Markdown and uploads resulting file to storage by specified path.
*Asposehtmlcloud.ConversionApi* | [**PutConvertDocumentToMarkdown**](docs/ConversionApi.md#PutConvertDocumentToMarkdown) | **PUT** /html/{name}/convert/md | Converts the HTML document (located on storage) to Markdown and uploads resulting file to storage by specified path.
*Asposehtmlcloud.ImportApi* | [**GetConvertMarkdownToHtml**](docs/ImportApi.md#GetConvertMarkdownToHtml) | **GET** /html/{name}/import/md | Converts the Markdown document (located on storage) to HTML and returns resulting file in response content.
*Asposehtmlcloud.ImportApi* | [**PostConvertMarkdownInRequestToHtml**](docs/ImportApi.md#PostConvertMarkdownInRequestToHtml) | **POST** /html/import/md | Converts the Markdown document (in request content) to HTML and uploads resulting file to storage by specified path.
*Asposehtmlcloud.ImportApi* | [**PutConvertMarkdownToHtml**](docs/ImportApi.md#PutConvertMarkdownToHtml) | **PUT** /html/{name}/import/md | Converts the Markdown document (located on storage) to HTML and uploads resulting file to storage by specified path.
*Asposehtmlcloud.DocumentApi* | [**GetDocumentByUrl**](docs/DocumentApi.md#GetDocumentByUrl) | **GET** /html/download | Return all HTML page with linked resources packaged as a ZIP archive by the source page URL.
*Asposehtmlcloud.DocumentApi* | [**GetDocumentFragmentByXPath**](docs/DocumentApi.md#GetDocumentFragmentByXPath) | **GET** /html/{name}/fragments/{outFormat} | Return list of HTML fragments matching the specified XPath query. 
*Asposehtmlcloud.DocumentApi* | [**GetDocumentFragmentByXPathByUrl**](docs/DocumentApi.md#GetDocumentFragmentByXPathByUrl) | **GET** /html/fragments/{outFormat} | Return list of HTML fragments matching the specified XPath query by the source page URL.
*Asposehtmlcloud.DocumentApi* | [**GetDocumentFragmentsByCSSSelector**](docs/DocumentApi.md#GetDocumentFragmentsByCSSSelector) | **GET** /html/{name}/fragments/css/{outFormat} | Return list of HTML fragments matching the specified CSS selector.
*Asposehtmlcloud.DocumentApi* | [**GetDocumentFragmentsByCSSSelectorByUrl**](docs/DocumentApi.md#GetDocumentFragmentsByCSSSelectorByUrl) | **GET** /html/fragments/css/{outFormat} | Return list of HTML fragments matching the specified CSS selector by the source page URL.
*Asposehtmlcloud.DocumentApi* | [**GetDocumentImages**](docs/DocumentApi.md#GetDocumentImages) | **GET** /html/{name}/images/all | Return all HTML document images packaged as a ZIP archive.
*Asposehtmlcloud.DocumentApi* | [**GetDocumentImagesByUrl**](docs/DocumentApi.md#GetDocumentImagesByUrl) | **GET** /html/images/all | Return all HTML page images packaged as a ZIP archive by the source page URL.
*Asposehtmlcloud.OcrApi* | [**GetRecognizeAndImportToHtml**](docs/OcrApi.md#GetRecognizeAndImportToHtml) | **GET** /html/{name}/ocr/import | Recognize text from the image file in the storage and import it to HTML format.
*Asposehtmlcloud.OcrApi* | [**GetRecognizeAndTranslateToHtml**](docs/OcrApi.md#GetRecognizeAndTranslateToHtml) | **GET** /html/{name}/ocr/translate/{srcLang}/{resLang} | Recognize text from the image file in the storage, import it to HTML format and translate to specified language.
*Asposehtmlcloud.TranslationApi* | [**GetTranslateDocument**](docs/TranslationApi.md#GetTranslateDocument) | **GET** /html/{name}/translate/{srcLang}/{resLang} | Translate the HTML document specified by the name from default or specified storage. 
*Asposehtmlcloud.TranslationApi* | [**GetTranslateDocumentByUrl**](docs/TranslationApi.md#GetTranslateDocumentByUrl) | **GET** /html/translate/{srcLang}/{resLang} | Translate the HTML document from Web specified by its URL.
*Asposehtmlcloud.SummarizationApi* | [**GetDetectHtmlKeywords**](docs/SummarizationApi.md#GetDetectHtmlKeywords) | **GET** /html/{name}/summ/keywords | Get the HTML document keywords using the keyword detection service.
*Asposehtmlcloud.SummarizationApi* | [**GetDetectHtmlKeywordsByUrl**](docs/SummarizationApi.md#GetDetectHtmlKeywordsByUrl) | **GET** /html/summ/keywords | Get the keywords from HTML document from Web specified by its URL using the keyword detection service
*Asposehtmlcloud.TemplateMergeApi* | [**GetMergeHtmlTemplate**](docs/TemplateMergeApi.md#GetMergeHtmlTemplate) | **GET** /html/{templateName}/merge | Populate HTML document template with data located as a file in the storage.
*Asposehtmlcloud.TemplateMergeApi* | [**PostMergeHtmlTemplate**](docs/TemplateMergeApi.md#PostMergeHtmlTemplate) | **POST** /html/{templateName}/merge | Populate HTML document template with data from the request body. Result document will be saved to storage.

<a name="storage_api"></a>
### STORAGE API   

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Asposehtmlcloud.StorageApi* | [**copyFile**](docs/FileApi.md#copyFile) | **PUT** /html/storage/file/copy/{srcPath} | Copy file
*Asposehtmlcloud.StorageApi* | [**deleteFile**](docs/FileApi.md#deleteFile) | **DELETE** /html/storage/file/{path} | Delete file
*Asposehtmlcloud.StorageApi* | [**downloadFile**](docs/FileApi.md#downloadFile) | **GET** /html/storage/file/{path} | Download file
*Asposehtmlcloud.StorageApi* | [**moveFile**](docs/FileApi.md#moveFile) | **PUT** /html/storage/file/move/{srcPath} | Move file
*Asposehtmlcloud.StorageApi* | [**uploadFile**](docs/FileApi.md#uploadFile) | **PUT** /html/storage/file/{path} | Upload file
*Asposehtmlcloud.StorageApi* | [**copyFolder**](docs/FolderApi.md#copyFolder) | **PUT** /html/storage/folder/copy/{srcPath} | Copy folder
*Asposehtmlcloud.StorageApi* | [**createFolder**](docs/FolderApi.md#createFolder) | **PUT** /html/storage/folder/{path} | Create the folder
*Asposehtmlcloud.StorageApi* | [**deleteFolder**](docs/FolderApi.md#deleteFolder) | **DELETE** /html/storage/folder/{path} | Delete folder
*Asposehtmlcloud.StorageApi* | [**getFilesList**](docs/FolderApi.md#getFilesList) | **GET** /html/storage/folder/{path} | Get all files and folders within a folder
*Asposehtmlcloud.StorageApi* | [**moveFolder**](docs/FolderApi.md#moveFolder) | **PUT** /html/storage/folder/move/{srcPath} | Move folder
*Asposehtmlcloud.StorageApi* | [**getDiscUsage**](docs/StorageApi.md#getDiscUsage) | **GET** /html/storage/disc | Get disc usage
*Asposehtmlcloud.StorageApi* | [**getFileVersions**](docs/StorageApi.md#getFileVersions) | **GET** /html/storage/version/{path} | Get file versions
*Asposehtmlcloud.StorageApi* | [**objectExists**](docs/StorageApi.md#objectExists) | **GET** /html/storage/exist/{path} | Check if file or folder exists
*Asposehtmlcloud.StorageApi* | [**storageExists**](docs/StorageApi.md#storageExists) | **GET** /html/storage/{storageName}/exist | Check if storage exists

## Documentation for Models

 - [Asposehtmlcloud.DiscUsage](docs/DiscUsage.md)
 - [Asposehtmlcloud.Error](docs/Error.md)
 - [Asposehtmlcloud.ErrorDetails](docs/ErrorDetails.md)
 - [Asposehtmlcloud.FileVersion](docs/FileVersion.md)
 - [Asposehtmlcloud.FileVersions](docs/FileVersions.md)
 - [Asposehtmlcloud.FilesList](docs/FilesList.md)
 - [Asposehtmlcloud.FilesUploadResult](docs/FilesUploadResult.md)
 - [Asposehtmlcloud.ObjectExist](docs/ObjectExist.md)
 - [Asposehtmlcloud.StorageExist](docs/StorageExist.md)
 - [Asposehtmlcloud.StorageFile](docs/StorageFile.md)

## Run tests
```shell
node.exe ./node_modules/mocha/bin/_mocha --ui bdd ./test
```


## Documentation for Authorization

Please follow the [installation](#installation) instruction for write config file:
