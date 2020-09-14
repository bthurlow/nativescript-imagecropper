import { Component, OnInit } from "@angular/core";
import { ImageSource, isAndroid } from "@nativescript/core";
import * as camera from "nativescript-camera";
import { ImageCropper, OptionsAndroid } from "nativescript-imagecropper";
import * as permissions from "nativescript-permissions";

declare var android: any;
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  // Your TypeScript logic goes here

  private imageCropper: ImageCropper;
  public imageUrl: any;
  // private image ="~/images/img.jpg";

  ngOnInit() {
    this.imageCropper = new ImageCropper();
    this.imageUrl = null;
  }

  takePhoto() {
    const options = { lockSquare: true };
    const androidOptions = <OptionsAndroid>{
      isFreeStyleCropEnabled: true,
      statusBarColor: "black",
      setAspectRatioOptions: {
        defaultIndex: 0,
        aspectRatios: [
          {
            aspectRatioTitle: "1:1",
            aspectRatioX: 1,
            aspectRatioY: 1,
          },
          {
            aspectRatioTitle: "16:9",
            aspectRatioX: 16,
            aspectRatioY: 9,
          },
          {
            aspectRatioTitle: "18:9",
            aspectRatioX: 18,
            aspectRatioY: 9,
          },
        ],
      },
    };

    if (camera.isAvailable()) {
      permissions
        .requestPermission([
          android.Manifest.permission.CAMERA,
          android.Manifest.permission.WRITE_EXTERNAL_STORAGE,
        ])
        .then(() => {
          camera
            .takePicture({
              width: 800,
              keepAspectRatio: true,
              saveToGallery: false,
              cameraFacing: "rear",
            })
            .then((imageAsset) => {
              ImageSource.fromAsset(imageAsset).then((source) => {
                setTimeout(
                  async () => {
                    this.imageCropper
                      .show(source, options, androidOptions)
                      .then((args) => {
                        if (args.image !== null) {
                          this.imageUrl = args.image;
                        }
                      })
                      .catch((e) => {
                        console.dir(e);
                      });
                  },
                  isAndroid ? 0 : 1000
                );
              });
            })
            .catch((err) => {
              console.log("Error -> " + err.message);
            });
        })
        .catch(() => {
          // When user denies permission
          console.log("User denied permissions");
        });
    }
  }

  resizePhoto() {
    const options = { width: 300, height: 300, lockSquare: true };

    if (camera.isAvailable()) {
      permissions
        .requestPermission([
          android.Manifest.permission.CAMERA,
          android.Manifest.permission.WRITE_EXTERNAL_STORAGE,
        ])
        .then(() => {
          camera
            .takePicture({
              width: 800,
              keepAspectRatio: true,
              saveToGallery: false,
              cameraFacing: "rear",
            })
            .then((imageAsset) => {
              ImageSource.fromAsset(imageAsset).then((source) => {
                setTimeout(
                  async () => {
                    this.imageCropper
                      .show(source, options)
                      .then((args) => {
                        if (args.image !== null) {
                          this.imageUrl = args.image;
                        }
                      })
                      .catch((e) => {
                        console.dir(e);
                      });
                  },
                  isAndroid ? 0 : 1000
                );
              });
            })
            .catch((err) => {
              console.log("Error -> " + err.message);
            });
        })
        .catch(() => {
          // When user denies permission
          console.log("User denied permissions");
        });
    }
  }
}
