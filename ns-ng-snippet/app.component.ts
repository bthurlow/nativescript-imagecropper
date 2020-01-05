import { Component, OnInit, ViewChild } from "@angular/core";

import { ImageCropper, OptionsAndroid } from '@proplugins/nativescript-imagecropper';
import * as camera from "nativescript-camera";
import * as permissions from "nativescript-permissions";
import { Image } from "@nativescript/core/ui/image";
import * as imageSource from '@nativescript/core/image-source';
import { isAndroid } from "@nativescript/core/platform";

declare var android: any;
@Component({
  selector: "my-app",
  templateUrl:"./app.component.html"
})


export class AppComponent implements OnInit {
  // Your TypeScript logic goes here


  private imageCropper: ImageCropper;
  private imageSource: imageSource.ImageSource;
  public imageUrl: any;
  //private image ="~/images/img.jpg";

  ngOnInit() {
    this.imageCropper = new ImageCropper();
    this.imageUrl = null;
  }

  takePhoto () {
    const options = { lockSquare: true };
    const androidOptions = <OptionsAndroid>{
      isFreeStyleCropEnabled: true,
      statusBarColor: 'black',
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
    };

    if (camera.isAvailable()) {
      permissions.requestPermission([android.Manifest.permission.CAMERA, android.Manifest.permission.WRITE_EXTERNAL_STORAGE])
        .then(() => {
          camera.takePicture({
            width: 800,
            keepAspectRatio: true,
            saveToGallery: false,
            cameraFacing: 'rear'
          })
            .then((imageAsset) => {
                let source = new imageSource.ImageSource();
                source.fromAsset(imageAsset).then((source) => {
                  setTimeout(async () => {
                    this.imageCropper
                    .show(source, options, androidOptions)
                    .then(args => {
                        if (args.image !== null) {
                          this.imageUrl = args.image;
                        }
                    })
                    .catch(function(e) {
                        console.dir(e);
                    });
                  }, isAndroid ? 0 : 1000);                   
                });
            }).catch((err) => {
                console.log("Error -> " + err.message);
            });
        })
        .catch(function () {
            // When user denies permission
            console.log("User denied permissions");
        });
    }
  };



  resizePhoto () {
    const options = { width: 300, height: 300, lockSquare: true };
  
    if (camera.isAvailable()) {
      permissions.requestPermission([android.Manifest.permission.CAMERA, android.Manifest.permission.WRITE_EXTERNAL_STORAGE])
        .then(() => {
          camera.takePicture({
            width: 800,
            keepAspectRatio: true,
            saveToGallery: false,
            cameraFacing: 'rear'
          })
            .then((imageAsset) => {
                let source = new imageSource.ImageSource();
                source.fromAsset(imageAsset).then((source) => {
                  setTimeout(async () => {
                    this.imageCropper
                    .show(source, options)
                    .then(args => {
                        if (args.image !== null) {
                          this.imageUrl = args.image;
                        }
                    })
                    .catch(function(e) {
                        console.dir(e);
                    });
                  }, isAndroid ? 0 : 1000);
                });
            }).catch((err) => {
                console.log("Error -> " + err.message);
            });
          })
          .catch(function () {
              // When user denies permission
              console.log("User denied permissions");
          });
      }
  };
}