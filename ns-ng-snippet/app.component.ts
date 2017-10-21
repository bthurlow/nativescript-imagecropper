import { Component, OnInit, ViewChild } from "@angular/core";

import { ImageCropper } from 'nativescript-imagecropper';
import * as camera from "nativescript-camera";
import * as permissions from "nativescript-permissions";
import { Image } from "tns-core-modules/ui/image";
import * as imageSource from 'tns-core-modules/image-source';

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
    if (camera.isAvailable()) {
      permissions.requestPermission([android.Manifest.permission.CAMERA, android.Manifest.permission.WRITE_EXTERNAL_STORAGE])
        .then(() => {
          camera.takePicture({width:300,height:300,keepAspectRatio:true})
            .then((imageAsset) => {
                let source = new imageSource.ImageSource();
                source.fromAsset(imageAsset).then((source) => {
                  this.imageCropper.show(source).then((args) => {
                    if(args.image !== null){
                      this.imageUrl = args.image;
                    }
                  })
                  .catch(function(e){
                    console.log(e);
                  });                     
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
    if (camera.isAvailable()) {
      permissions.requestPermission([android.Manifest.permission.CAMERA, android.Manifest.permission.WRITE_EXTERNAL_STORAGE])
        .then(() => {
          camera.takePicture({width:300,height:300,keepAspectRatio:true})
            .then((imageAsset) => {
                let source = new imageSource.ImageSource();
                source.fromAsset(imageAsset).then((source) => {
                  this.imageCropper.show(source,{width:100,height:100}).then((args) => {
                    if(args.image !== null){
                      this.imageUrl = args.image;
                    }
                  })
                  .catch(function(e){
                    console.log(e);
                  });                     
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