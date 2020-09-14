<!--
@Author: Brian Thurlow <bthurlow>
@Date:   03/29/2016 03:41:05 PM
@Last modified by:   MultiShiv19
@Last modified time: 01/06/2020 10:00:19 AM
-->

# A {N} Image Cropping Plugin

[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](http://choosealicense.com/licenses/mit/)
[![npm](https://img.shields.io/npm/v/nativescript-imagecropper.svg)](https://www.npmjs.com/package/nativescript-imagecropper) [![npm](https://img.shields.io/npm/dt/nativescript-imagecropper.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-imagecropper) [![GitHub release](https://img.shields.io/github/release/bthurlow/nativescript-imagecropper.svg)](https://github.com/bthurlow/nativescript-imagecropper)

## Notes

iOS 8+

Android 17+

v2.0.0+ the version of Android Lib has changed and the cropper looks different now,
hence the breaking change

### Based on

[TOCropViewController](https://github.com/TimOliver/TOCropViewController) for iOS

[uCrop](https://github.com/Yalantis/uCrop) for Android

## Installation

### NativeScript 7+:
Run `ns plugin add nativescript-imagecropper`

### NativeScript below 7:
Run `tns plugin add nativescript-imagecropper@3.0.0`

## Screenshots

### Cropper UI & End result (android)
<img src="https://github.com/shiv19/nativescript-imagecropper/blob/master/assets/cropperuiandroid.jpeg?raw=true" height="320" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/shiv19/nativescript-imagecropper/blob/master/assets/cropperresultandroid.jpeg?raw=true" height="320" > 

### Cropper UI (iOS)
<img src="https://github.com/shiv19/nativescript-imagecropper/blob/master/assets/cropperuiios.png?raw=true" height="320" > 

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
        // recommend using setTimeout like this
        setTimeout(() => {
          // on iOS we want a timeout of 1second as it takes time before
          // the imageSource is ready to be read by the plugin
        }, isAndroid ? 0 : 1000);             
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
circularCrop | boolean | Pass this as true, to crop a circular image on iOS, on android, this options shows a circular mask while cropping, but returns a rectangular image.

### Android Config

```ts
export interface OptionsAndroid {
  isFreeStyleCropEnabled?: boolean; // set to true to let user resize crop bounds (disabled by default)
  toolbarTitle?: string; // default 'Crop Image'
  toolbarTextColor?: string; // desired resolved color of Toolbar text and buttons (default is darker orange)
  toolbarColor?: string; // desired resolved color of the toolbar
  rootViewBackgroundColor?: string; // desired background color that should be applied to the root view
  logoColor?: string; // desired resolved color of logo fill (default is darker grey)
  statusBarColor?: string; // Set statusbar color
  showCropGrid?: boolean; // set to true if you want to see a crop grid/guidelines on top of an image
  showCropFrame?: boolean; // set to true if you want to see a crop frame rectangle on top of an image
  cropFrameStrokeWidth?: number; // desired width of crop frame line in pixels
  cropGridStrokeWidth?: number; // desired width of crop grid lines in pixels
  cropGridColor?: string; // desired color of crop grid/guidelines
  cropFrameColor?: string; // desired color of crop frame
  cropGridRowCount?: number; // crop grid rows count
  cropGridColumnCount?: number; // crop grid columns count
  hideBottomControls?: boolean; // set to true to hide the bottom controls (shown by default)
  compressionQuality?: number; // Set compression quality [0-100] that will be used to save resulting Bitmap
  dimmedLayerColor?: string; // desired color of dimmed area around the crop bounds
  setAspectRatioOptions?: AspectRatioOptions; // Pass an ordered list of desired aspect ratios that should be available for a user.
  toolbarCropDrawable?: any; // Android Drawable (pass native drawable object ONLY)
  toolbarCancelDrawable?: any; // Android Drawable (pass native drawable object ONLY)
}

export interface AspectRatio {
  aspectRatioTitle: string,
  aspectRatioX: number,
  aspectRatioY: number;
}

export interface AspectRatioOptions {
  defaultIndex: number;
  aspectRatios: AspectRatio[]
}

// example aspectRatio options
setAspectRatioOptions: {
    defaultIndex: 0,
    aspectRatios: [
        {
            aspectRatioTitle: '1:1',
            aspectRatioX: 1,
            aspectRatioY: 1
        },
        {
            aspectRatioTitle: '16:9',
            aspectRatioX: 16,
            aspectRatioY: 9
        },
        {
            aspectRatioTitle: '18:9',
            aspectRatioX: 18,
            aspectRatioY: 9
        }
    ]
}
```

### Additional notes for Android

You can override library colors just specifying colors with the same names in your colors.xml file.
For example:

```xml
<color name="ucrop_color_toolbar">#000000</color>
```

This will make toolbar color black if specified inside your `App_Resources/Android/values/colors.xml` file.

#### Android styles to customize the cropper activity/styles

``` xml
   <!--uCrop Activity-->
    <color name="ucrop_color_toolbar">#FF6E40</color>
    <color name="ucrop_color_statusbar">#CC5833</color>
    <color name="ucrop_color_toolbar_widget">#fff</color>
    <color name="ucrop_color_widget">#000</color>
    <color name="ucrop_color_widget_active">#FF6E40</color>
    <color name="ucrop_color_widget_background">#fff</color>
    <color name="ucrop_color_widget_text">#000</color>
    <color name="ucrop_color_progress_wheel_line">#808080</color>
    <color name="ucrop_color_crop_background">#000</color>

    <!--Crop View-->
    <color name="ucrop_color_default_crop_grid">#80ffffff</color>
    <color name="ucrop_color_default_crop_frame">#ffffff</color>
    <color name="ucrop_color_default_dimmed">#8c000000</color>
    <color name="ucrop_color_default_logo">#4f212121</color>
```

### Returned Result Arguments

Argument | Type        | Result(s)
-------- | ----------- | --------------------------------------------------------------------------
response | string      | Success<br/>Cancelled<br/>Error
image    | ImageSource | `null` if there was an error or was cancelled<br/>`ImageSource` on success

### Bonus: Snippet for using with nativescript-imagepicker 6.x

```js
const context = imagepickerModule.create({
    mode: 'single' // allow choosing single image
});
context
    .authorize()
    .then(function() {
        return context.present();
    })
    .then(function(selection) {
        selection.forEach(function(selected) {
            selected.getImageAsync(source => {
              if (source) {
                const selectedImgSource = imageSource.fromNativeSource(source);
                imageCropper
                    .show(selectedImgSource, { width: 500, height: 500 })
                    .then(args => {
                        if (args.image !== null) {
                          // Use args.image
                        }
                    })
                    .catch(function(e) {
                        console.log(e);
                    });
              }
            });
        });
    })
    .catch(function(e) {
        console.log(e);
    });
```
