import { Observable } from 'tns-core-modules/data/observable';
import { ImageCropper } from 'nativescript-imagecropper';
import * as camera from "nativescript-camera";
import * as permissions from "nativescript-permissions";
import { Image } from "tns-core-modules/ui/image";
import * as frameModule from "tns-core-modules/ui/frame";

declare var android: any;

export class ImageCropperModel extends Observable {
  private imageCropper: ImageCropper;
  private imageSource: any;

  constructor() {
    super();

    this.imageCropper = new ImageCropper();
  }

  tapCameraAction = function() {
    if (camera.isAvailable()) {
      permissions.requestPermission([android.Manifest.permission.CAMERA, android.Manifest.permission.WRITE_EXTERNAL_STORAGE])
        .then(() => {
          camera.takePicture({width:300,height:300,keepAspectRatio:true})
            .then((imageAsset) => {

                console.log("Got the image asset");
                this.imageCropper.show(imageAsset).then((args) => {
                  console.dir(args);
                  if(args.image !== null){
                    this.imageSource = args.image;
                  }
                })
                .catch(function(e){
                  console.dir(e);
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

  tapCameraActionResize = function() {
    if (camera.isAvailable()) {
      permissions.requestPermission([android.Manifest.permission.CAMERA, android.Manifest.permission.WRITE_EXTERNAL_STORAGE])
        .then(() => {
          camera.takePicture({width:300,height:300,keepAspectRatio:true})
            .then((imageAsset) => {
                console.log("Got the image asset");
                this.imageCropper.show(imageAsset,{width:100,height:100}).then((args) => {
                  console.dir(args);
                  if(args.image !== null){
                    this.imageSource = args.image;
                  }
                })
                .catch(function(e){
                  console.dir(e);
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
