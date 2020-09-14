import * as camera from "@nativescript/camera";
import { Frame, ImageSource, isAndroid, Observable } from "@nativescript/core";
import { ImageCropper, OptionsAndroid } from "nativescript-imagecropper";
import * as permissions from "nativescript-permissions";


export class ImageCropperModel extends Observable {
    private imageCropper: ImageCropper;
    private croppedImage;

    constructor() {
        super();

        this.imageCropper = new ImageCropper();

        setTimeout(() => {
            this.croppedImage = Frame.topmost().getViewById("croppedImage");
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
                    console.log('passing isFreeStyleCropEnabled as true');
                    this.cropImage({ lockSquare: true }, <OptionsAndroid>{
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
                    });
                })
                .catch(function() {
                    // When user denies permission
                    console.log("User denied permissions");
                });
            } else {
                this.cropImage({ lockSquare: true });
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

    tapCameraActionCircular = function () {
        if (camera.isAvailable()) {
            if (isAndroid) {
                permissions
                .requestPermission([
                    android.Manifest.permission.CAMERA,
                    android.Manifest.permission.WRITE_EXTERNAL_STORAGE
                ])
                .then(() => {
                    this.cropImage({ width: 300, height: 300, lockSquare: true, circularCrop: true });
                })
                .catch(function() {
                    // When user denies permission
                    console.log("User denied permissions");
                });
            } else {
                this.cropImage({ width: 300, height: 300, lockSquare: true, circularCrop: true });
            }
        } else {
            if (!isAndroid) {
                // to make it work in iOS emulator
                this.cropImage({ lockSquare: true, circularCrop: true });
            }
        }
    };

    cropImage(options, androidOptions) {
        camera
            .takePicture({
                width: 800,
                keepAspectRatio: true,
                saveToGallery: false,
                cameraFacing: 'rear'
            })
            .then(imageAsset => {
                ImageSource.fromAsset(imageAsset).then(source => {
                    setTimeout(async () => {
                        this.imageCropper
                        .show(source, options, androidOptions)
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
                    }, isAndroid ? 0 : 1000);
                });
            })
            .catch(err => {
                console.log("Error -> " + err.message);
            });
    }
}
