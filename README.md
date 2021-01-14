![](https://img.shields.io/badge/api-v3.0-lightgrey) ![npm (scoped)](https://img.shields.io/npm/v/@asposecloud/aspose-html-cloud) ![npm bundle size](https://img.shields.io/bundlephobia/min/@asposecloud/aspose-html-cloud) [![GitHub license](https://img.shields.io/github/license/aspose-html-cloud/aspose-html-cloud-nodejs)](LICENSE) ![GitHub last commit](https://img.shields.io/github/last-commit/Aspose-html-Cloud/aspose-html-cloud-nodejs)
# HTML Rendering & Conversion Node.js Cloud REST API
Aspose.HTML Cloud for Node.js is a programming SDK that allows software developers to manipulate and convert HTML documents from within their own applications. A Wrapper of RESTful APIs, Aspose.HTML Cloud for Node.js speeds up HTML programming and conversion.
This cloud SDK assists to develop cloud-based [HTML page rendering, processing, translation & conversion](https://products.aspose.cloud/html/nodejs) apps in Node.js via REST API.

## HTML Processing Features
- Fetch the HTML page along with its resources as a ZIP archive by providing the page URL.
- Based on page URL, retrieve all images of an HTML page as a ZIP package.
- Load data from a local file to populate the HTML document template.
- Use the request body to populate the HTML document template.
- Convert HTML page to numerous other file formats.

## Read & Write HTML Formats
HTML, XHTML, zipped HTML, zipped XHTML, MHTML, HTML containing SVG markup, Markdown, JSON

## Save HTML As
*Fixed Layout*: PDF, XPS
*Images*: TIFF, JPEG, PNG, BMP, GIF
*Other*: TXT, ZIP (images)

## Read HTML Formats
*eBook*: EPUB
*Other*: XML, SVG

## Enhancements Version 20.11

- New generation of Aspose.HTML Cloud SDK for .NET (C#) is provided.
- This version of SDK has been redesigned from scratch being based on the new Aspose.HTML Cloud REST API (v3.0).
- Currently, it provides only the conversion feature. Other features that are still available in the versions up to v.20.08 are planned to be implemented in this SDK later.
- Conversion interface provides a more flexible conversion parameters setup.
- Redesigned storage access is provided using SDK entry point HtmlApi.Storage.
- Availability of synchronous and asynchronous file upload and download methods.
- Asynchronous download provides the ability to get progress data for the longer downloads.

## Installation

## Aspose.HTML Cloud SDK for Node.js
This repository contains Aspose.HTML Cloud SDK for Node.js source code.
This SDK allows you to work with Aspose.HTML Cloud REST APIs in your Node.js applications quickly and easily.

See [API Reference](https://apireference.aspose.cloud/html/) for full API specification.

## How to use the SDK?
The complete source code is available in this repository folder, you can either directly use
it in your project via npm package manager.

### Prerequisites
To use Aspose HTML for Cloud Node.js SDK you need to register an account with [Aspose Cloud](https://www.aspose.cloud/) and lookup/create App Key and SID at [Cloud Dashboard](https://dashboard.aspose.cloud/#/apps). There is a free quota available. For more details, see [Aspose Cloud Pricing](https://purchase.aspose.cloud/pricing).

### Installation

#### Install Aspose.HTML Cloud
### For [Node.js](https://nodejs.org/)

#### npm
```shell
npm install @asposecloud/aspose-html-cloud --save
```

#### git
Install it via:
```shell
    npm install https://github.com/aspose-html-cloud/aspose-html-cloud-nodejs --save
```

## Getting Started

1. **Sign Up**. Before you begin, you need to sign up for an account on our [Dashboard](https://dashboard.aspose.cloud/) and retrieve your [credentials](https://dashboard.aspose.cloud/#/apps).
2. **Minimum requirements**. This SDK requires [Node.js 6.x and higher](https://nodejs.org/download/release/).
3. **Install Aspose.Html Cloud Node.js SDK**.

Please, add the following [nmp package](https://www.npmjs.com/package/@asposecloud/aspose-html-cloud) to your project.json as a dependency.
```json
{
  "dependencies": {
    "@asposecloud/aspose-html-cloud":"^20.8.1"
  }
}
```

Please follow the [installation](#installation) instruction and execute the following JS code:   

NOTE: Use the helper from /test/helper.js for an upload and save data.

```javascript

    // Get keys from aspose site.
    // There is free quota available.
    // For more details, see https://purchase.aspose.cloud/pricing

var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "testResult":"/testresult/",
    "testData":"/testdata/",
    "remoteFolder":"HtmlTestDoc",
    "defaultUserAgent":"Webkit"
};

//Create storage api for upload to server
var api = require('@asposecloud/aspose-html-cloud');
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
    var dst = local_dst_folder + "/" + "ResultConvertToPng.zip";
    var fd = fs.openSync(dst, 'w');
    var len = fs.writeSync(fd, data);
  }
};
conversionApi.GetConvertDocumentToImage(filename, outFormat, opts, callback);

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

Finally, switch to the directory you want to use your package from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('@asposecloud/aspose-html-cloud')` in javascript files from the directory you ran the last
command above from.


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
```javascript
var conf = {
    "basePath":"https://api.aspose.cloud/v3.0",
    "authPath":"https://api.aspose.cloud/connect/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "testResult":"/testresult/",
    "testData":"/testdata/",
    "remoteFolder":"HtmlTestDoc",
    "defaultUserAgent":"Webkit"
}
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
*Asposehtmlcloud.TemplateMergeApi* | [**GetMergeHtmlTemplate**](docs/TemplateMergeApi.md#GetMergeHtmlTemplate) | **GET** /html/{templateName}/merge | Populate HTML document template with data located as a file in the storage.
*Asposehtmlcloud.TemplateMergeApi* | [**PostMergeHtmlTemplate**](docs/TemplateMergeApi.md#PostMergeHtmlTemplate) | **POST** /html/{templateName}/merge | Populate HTML document template with data from the request body. Result document will be saved to storage.
*Asposehtmlcloud.SeoApi* | [**GetSeoWarning**](docs/SeoApi.md#GetSeoWarning) | **GET** /html/seo | Page analysis and return SEO warnings in json format.
*Asposehtmlcloud.SeoApi* | [**GetHtmlWarning**](docs/SeoApi.md#GetHtmlWarning) | **GET** /html/validator | Checks the markup validity of Web documents in HTML, XHTML, etc.and return in json format.


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

## Aspose.HTML Cloud SDKs in Popular Languages

| .NET | Java | PHP | Python | Ruby | Node.js | Android | Swift|C++|Go|
|---|---|---|---|---|---|---|--|--|--|
| [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-dotnet) | [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-java) | [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-php) | [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-python) | [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-ruby)  | [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-nodejs) | [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-android) | [GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-swift)|[GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-cpp) |[GitHub](https://github.com/aspose-html-cloud/aspose-html-cloud-go) |
| [NuGet](https://www.nuget.org/packages/Aspose.html-Cloud/) | [Maven](https://repository.aspose.cloud/webapp/#/artifacts/browse/tree/General/repo/com/aspose/aspose-html-cloud) | [Composer](https://packagist.org/packages/aspose/aspose-html-cloud-php) | [PIP](https://pypi.org/project/asposehtmlcloud/) | [GEM](https://rubygems.org/gems/aspose_html_cloud)  | [NPM](https://www.npmjs.com/package/@asposecloud/aspose-html-cloud) | [Maven](https://repository.aspose.cloud/webapp/#/artifacts/browse/tree/General/repo/com/aspose/aspose-html-cloud) | [Cocoapods](https://cocoapods.org/pods/AsposeHtmlCloud)|[NuGet](https://www.nuget.org/packages/Aspose.Html-Cloud.Cpp/) | [Go.Dev](#) |

[Product Page](https://products.aspose.cloud/html/nodejs) | [Documentation](https://docs.aspose.cloud/display/htmlcloud/Home) | [API Reference](https://apireference.aspose.cloud/html/) | [Code Samples](https://github.com/aspose-html-cloud/aspose-html-cloud-nodejs) | [Blog](https://blog.aspose.cloud/category/html/) | [Free Support](https://forum.aspose.cloud/c/html) | [Free Trial](https://dashboard.aspose.cloud/#/apps)
