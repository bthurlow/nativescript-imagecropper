<!--
@Author: Brian Thurlow <bthurlow>
@Date:   03/29/2016 03:41:05 PM
@Last modified by:   MultiShiv19
@Last modified time: 10/20/2017 04:03:29 AM
-->

# A {N} Image Cropping Plugin

[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](http://choosealicense.com/licenses/mit/)
[![npm](https://img.shields.io/npm/v/nativescript-imagecropper.svg)](https://www.npmjs.com/package/nativescript-imagecropper) [![npm](https://img.shields.io/npm/dt/nativescript-imagecropper.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-imagecropper) [![GitHub release](https://img.shields.io/github/release/bthurlow/nativescript-imagecropper.svg)](https://github.com/bthurlow/nativescript-imagecropper)

## Notes

iOS 8+

Android 17+

### Based on

[TOCropViewController](https://github.com/TimOliver/TOCropViewController) for iOS

[uCrop](https://github.com/Yalantis/uCrop) for Android

## Installation

Run `tns plugin add nativescript-imagecropper`

## Screenshots

### Cropper UI & End result (android)
<img src="https://github.com/shiv19/nativescript-imagecropper/blob/master/assets/cropperuiandroid.jpeg?raw=true" height="320" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/shiv19/nativescript-imagecropper/blob/master/assets/cropperresultandroid.jpeg?raw=true" height="320" > 

### Usage (for TS demo, please see the demo folder)

To use the image cropping module you must first require it.

```js
var ImageCropper = require("nativescript-imagecropper").ImageCropper;
```

### How to get the image source, from nativescript-camera plugin
```js
var camera = require("nativescript-camera");

// You might want to request camera permissions first
// check demo folder for sample implementation

camera.takePicture({width:300,height:300,keepAspectRatio:true})
  .then((imageAsset) => {
      let source = new imageSource.ImageSource();
      source.fromAsset(imageAsset).then((source) => {
        // now you have the image source    
        // pass it to the cropper                
      });
  }).catch((err) => {
      console.log("Error -> " + err.message);
  });
```

### Methods

`show(ImageSource)`: Returns a cropped ImageSource

```js
var imageCropper = new ImageCropper();
imageCropper.show(imageSource).then((args) => {
  console.dir(args);
  if(args.image !== null){
    imageView.imageSource = args.image;
  }
})
.catch(function(e){
  console.dir(e);
});
```

`show(ImageSource,Options)`: Returns a cropped and resized ImageSource

```js
var imageCropper = new ImageCropper();
imageCropper.show(imageSource,{width:300,height:300}).then((args) => {
  console.dir(args);
  if(args.image !== null){
    imageView.imageSource = args.image;
  }
})
.catch(function(e){
  console.dir(e);
});
```

### Options

Option | Type   | Description
------ | ------ | ------------------------------------------------
width  | number | The width of the image you would like returned.
height | number | The height of the image you would like returned.
lockSquare | boolean | Pass this as true, to lock square aspect ratio on iOS, on android, this option doesn't make any difference.

### Additional notes for Android
You can override library colors just specifying colors with the same names in your colors.xml file.
For example:

```xml
<color name="ucrop_color_toolbar">#000000</color>
```

This will make toolbar color black if specified inside your `App_Resources/Android/values/colors.xml` file.

(thanks to @chrispoket99 for mentioning this)

### Returned Result Arguments

Argument | Type        | Result(s)
-------- | ----------- | --------------------------------------------------------------------------
response | string      | Success<br/>Cancelled<br/>Error
image    | ImageSource | `null` if there was an error or was cancelled<br/>`ImageSource` on success
