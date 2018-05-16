# asposehtmlcloud

Asposehtmlcloud - JavaScript client for asposehtmlcloud

- API version: 1.0.1
- Package version: 1.0.1

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

Before fill all fields in /setting/config.json   

Example:   
```json
{
    "basePath":"https://api.aspose.cloud/v1.1",
    "authPath":"https://api.aspose.cloud/oauth2/token",
    "apiKey":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "appSID":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "testResult":"/testresult/",
    "testData":"/testdata/",
    "remoteFolder":"HtmlTestDoc/",
    "defaultUserAgent":"Webkit",
    "debugFile":"debug.log",
    "debug":false
}
```



## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:   

NOTE: Use the helper from /test/helper.js for upload and save data.

```javascript
// Load configurations data
var fs = require('fs');
var conf = JSON.parse(fs.readFileSync(__dirname + '/../setting/config.json', 'utf8'));

//Create storage api for upload to server
var StorageApi = require('asposestoragecloud');
var storageApi = new StorageApi({
  'baseURI':conf['basePath'],
  'appSid': conf['appSID'],
  'apiKey': conf['apiKey'] ,
  'debug':  conf['debug']});


// Setup local folder for source and result
var local_dst_folder = __dirname + "/../"+ conf['testResult'];
var local_src_folder = __dirname + "/../"+ conf['testData'];


var Asposehtmlcloud = require('../src/index');

// Create Conversion Api object
var api = new Asposehtmlcloud.ConversionApi();


var filename = "test_data.html"; // {String} Document name.

// Get upload folder from config (or write manually)
var folder = conf['remoteFolder'];
var versionId = null;
var storage=null;

var file = local_src_folder + "/" + filename;

//Upload file to storage
storageApi.PutCreate(folder + "/" + filename, versionId, storage, file, callback);

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
  'xResolution': 300, // {Number} Horizontal resolution of resulting image.
  'yResolution': 300, // {Number} Vertical resolution of resulting image.
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
api.GetConvertDocumentToImage(filename, outFormat, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.aspose.cloud/v1.1*

[Tests](./test/) contain various examples of using the Aspose.HTML SDK.


Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Asposehtmlcloud.ConversionApi* | [**GetConvertDocumentToImage**](docs/ConversionApi.md#GetConvertDocumentToImage) | **GET** /html/{name}/convert/image/{outFormat} | Convert the HTML document from the storage by its name to the specified image format.
*Asposehtmlcloud.ConversionApi* | [**GetConvertDocumentToImageByUrl**](docs/ConversionApi.md#GetConvertDocumentToImageByUrl) | **GET** /html/convert/image/{outFormat} | Convert the HTML page from the web by its URL to the specified image format.
*Asposehtmlcloud.ConversionApi* | [**GetConvertDocumentToPdf**](docs/ConversionApi.md#GetConvertDocumentToPdf) | **GET** /html/{name}/convert/pdf | Convert the HTML document from the storage by its name to PDF.
*Asposehtmlcloud.ConversionApi* | [**GetConvertDocumentToPdfByUrl**](docs/ConversionApi.md#GetConvertDocumentToPdfByUrl) | **GET** /html/convert/pdf | Convert the HTML page from the web by its URL to PDF.
*Asposehtmlcloud.ConversionApi* | [**GetConvertDocumentToXps**](docs/ConversionApi.md#GetConvertDocumentToXps) | **GET** /html/{name}/convert/xps | Convert the HTML document from the storage by its name to XPS.
*Asposehtmlcloud.ConversionApi* | [**GetConvertDocumentToXpsByUrl**](docs/ConversionApi.md#GetConvertDocumentToXpsByUrl) | **GET** /html/convert/xps | Convert the HTML page from the web by its URL to XPS.
*Asposehtmlcloud.DocumentApi* | [**GetDocument**](docs/DocumentApi.md#GetDocument) | **GET** /html/{name} | Return the HTML document by the name from default or specified storage.
*Asposehtmlcloud.DocumentApi* | [**GetDocumentFragmentByXPath**](docs/DocumentApi.md#GetDocumentFragmentByXPath) | **GET** /html/{name}/fragments/{outFormat} | Return list of HTML fragments matching the specified XPath query. 
*Asposehtmlcloud.DocumentApi* | [**GetDocumentImages**](docs/DocumentApi.md#GetDocumentImages) | **GET** /html/{name}/images/all | Return all HTML document images packaged as a ZIP archive.
*Asposehtmlcloud.OcrApi* | [**GetRecognizeAndImportToHtml**](docs/OcrApi.md#GetRecognizeAndImportToHtml) | **GET** /html/{name}/ocr/import | Recognize text from the image file in the storage and import it to HTML format.
*Asposehtmlcloud.OcrApi* | [**GetRecognizeAndTranslateToHtml**](docs/OcrApi.md#GetRecognizeAndTranslateToHtml) | **GET** /html/{name}/ocr/translate/{srcLang}/{resLang} | Recognize text from the image file in the storage, import it to HTML format and translate to specified language.
*Asposehtmlcloud.TranslationApi* | [**GetTranslateDocument**](docs/TranslationApi.md#GetTranslateDocument) | **GET** /html/{name}/translate/{srcLang}/{resLang} | Translate the HTML document specified by the name from default or specified storage. 
*Asposehtmlcloud.TranslationApi* | [**GetTranslateDocumentByUrl**](docs/TranslationApi.md#GetTranslateDocumentByUrl) | **GET** /html/translate/{srcLang}/{resLang} | Translate the HTML document from Web specified by its URL.

## Run tests
```shell
node.exe ./node_modules/mocha/bin/_mocha --ui bdd ./test
```


## Documentation for Authorization

Please follow the [installation](#installation) instruction for write config file:

[Authorization](https://docs.aspose.cloud/display/totalcloud/Authenticating+API+Requests)
