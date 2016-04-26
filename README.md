<!--
@Author: Brian Thurlow <bthurlow>
@Date:   03/29/2016 03:41:05 PM
@Last modified by:   Brian Thurlow
@Last modified time: 04/01/2016 11:52:29 AM
-->

# A {N} Image Cropping Plugin

[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](http://choosealicense.com/licenses/mit/) [![npm](https://img.shields.io/npm/v/nativescript-imagecropper.svg)](https://www.npmjs.com/package/nativescript-imagecropper) [![npm](https://img.shields.io/npm/dt/nativescript-imagecropper.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-imagecropper) [![GitHub release](https://img.shields.io/github/release/bthurlow/nativescript-imagecropper.svg)](https://github.com/bthurlow/nativescript-imagecropper)

## Notes

iOS 8+

Android 17+

### Based on

[TOCropViewController](https://github.com/TimOliver/TOCropViewController) for iOS

[uCrop](https://github.com/Yalantis/uCrop) for Android

## Installation

Run `tns plugin add nativescript-imagecropper`

### Android Install Notes

This plugin is designed according to {N} 2.0 Specs. For Android, you will need to modify the AndroidManifest.xml file.

Add the following to the AndroidManifest.xml

```xml
<manifest>
  <application>
    <activity android:name="com.yalantis.ucrop.UCropActivity" android:screenOrientation="portrait"/>
  </application>
</manifest>
```

### Usage

To use the image cropping module you must first require it.

```js
var icModule = require("nativescript-imagecropper");
```

### Methods

`show(ImageSource)`: Returns a cropped ImageSource

```js
var cropper = new icModule.ImageCropper();
cropper.show(picture).then(function(args){
  console.log(JSON.stringify(args));
})
.catch(function(e){
  console.log(e);
});
```

`show(ImageSource,Options)`: Returns a cropped and resized ImageSource

```js
var cropper = new icModule.ImageCropper();
cropper.show(picture,{width:300,height:300}).then(function(args){
  console.log(JSON.stringify(args));
})
.catch(function(e){
  console.log(e);
});
```

### Options

Option | Type   | Description
------ | ------ | ------------------------------------------------
width  | number | The width of the image you would like returned.
height | number | The height of the image you would like returned.

### Returned Result Arguments

Argument | Type        | Result(s)
-------- | ----------- | --------------------------------------------------------------------------
response | string      | Success<br/>Cancelled<br/>Error
image    | ImageSource | `null` if there was an error or was cancelled<br/>`ImageSource` on success
