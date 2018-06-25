import { Observable } from "tns-core-modules/data/observable";
import { ImageCropper } from "nativescript-imagecropper";
import * as camera from "nativescript-camera";
import * as permissions from "nativescript-permissions";
import { Image } from "tns-core-modules/ui/image";
import * as frameModule from "tns-core-modules/ui/frame";
import * as imageSource from "tns-core-modules/image-source";
import { isAndroid } from "tns-core-modules/platform";

declare var android: any;

export class ImageCropperModel extends Observable {
    private imageCropper: ImageCropper;
    private imageSource: imageSource.ImageSource;
    private croppedImage;

    constructor() {
        super();

        this.imageCropper = new ImageCropper();

        setTimeout(() => {
            this.croppedImage = frameModule.topmost().getViewById("croppedImage");
        }, 1000);
    }

    tapCameraAction = function() {
        if (camera.isAvailable()) {
            if (isAndroid) {
                permissions
                .requestPermission([
                    android.Manifest.permission.CAMERA,
                    android.Manifest.permission.WRITE_EXTERNAL_STORAGE
                ])
                .then(() => {
                    this.cropImage({ lockSquare: true });
                })
                .catch(function() {
                    // When user denies permission
                    console.log("User denied permissions");
                });
            }
        } else {
            if (!isAndroid) {
                // to make it work in iOS emulator
                this.cropImage({ lockSquare: true });
            }
        }
    };

    tapCameraActionResize = function() {
        if (camera.isAvailable()) {
            if (isAndroid) {
                permissions
                .requestPermission([
                    android.Manifest.permission.CAMERA,
                    android.Manifest.permission.WRITE_EXTERNAL_STORAGE
                ])
                .then(() => {
                    this.cropImage({ width: 300, height: 300, lockSquare: true });
                })
                .catch(function() {
                    // When user denies permission
                    console.log("User denied permissions");
                });
            } else {
                this.cropImage({ width: 300, height: 300, lockSquare: true });
            }
        } else {
            if (!isAndroid) {
                // to make it work in iOS emulator
                this.cropImage({ lockSquare: true });
            }
        }
    };

    cropImage(options) {
        camera
            .takePicture({
                width: 500,
                height: 500,
                keepAspectRatio: true
            })
            .then(imageAsset => {
                let source = new imageSource.ImageSource();
                source.fromAsset(imageAsset).then(source => {
                    this.imageCropper
                        .show(source, options)
                        .then(args => {
                            console.dir(args);
                            if (args.image !== null) {
                                this.croppedImage.imageSource =
                                    args.image;
                            }
                        })
                        .catch(function(e) {
                            console.dir(e);
                        });
                });
            })
            .catch(err => {
                console.log("Error -> " + err.message);
            });
    }
}
