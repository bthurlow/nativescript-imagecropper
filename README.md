<!--
@Author: Brian Thurlow <bthurlow>
@Date:   03/29/2016 03:41:05 PM
@Last modified by:   bthurlow
@Last modified time: 03/29/2016 04:13:29 PM
-->



# A {N} Image Cropping Plugin

## Notes

iOS 8+
Android 17+??

###Based on
[TOCropViewController](https://github.com/TimOliver/TOCropViewController) for iOS
xx for Android

## Installation

Run `tns plugin add nativescript-imagecropper`

### Usage

To use the image cropping module you must first require it.
```js
var icModule = require("nativescript-imagecropper");
```
### Methods

show(ImageSource): Returns a cropped imageSource
```js
var cropper = new icModule.ImageCropper();
cropper.show(picture).then(function(args){
  console.log(JSON.stringify(args));
})
.catch(function(e){
  console.log(e);
});
```

show(ImageSource,Options): Returns a cropped and resized imageSource
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
* width:<number> The width of the image you would like returned.
* height:<number> The height of the image you would like returned.

### Returned Result Arguments
response:<string>;
..* Success
..* Cancelled
..* Error
image:<imageSource.ImageSource>;
..* Returns null if there was an error or was cancelled.
