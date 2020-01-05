import { Application, Color, Folder, ImageSource, knownFolders, path } from '@nativescript/core';
import { AndroidApplication } from '@nativescript/core/application'
import { OptionsAndroid, OptionsCommon, Result } from './';

let _options: OptionsCommon;
let ctx: android.content.Context = Application.android.context;
declare var com: any;

export class ImageCropper {
  public show(image: ImageSource, options: OptionsCommon = {}, androidOptions: OptionsAndroid = {}): Promise<Result> {
    return new Promise<Result>((resolve: (val: Result) => void, reject: (val: Result) => void) => {
      try {
        _options = options;
        if (image.android) {
          const sourcePathTemp: string = ImageCropper._storeImageSource(image);
          const folder: Folder = knownFolders.temp();
          const destinationPathTemp: string = path.join(folder.path, "destTemp.jpeg");
          if (sourcePathTemp == null) {
            ImageCropper._cleanFiles();
            reject({
              response: "Error",
              image: null
            });
          }

          const sourcePath: android.net.Uri = android.net.Uri.parse("file://" + sourcePathTemp); // Fix our path that comes from {N} file-system.
          const destinationPath: android.net.Uri = android.net.Uri.parse("file://" + destinationPathTemp); // Fix our path that comes from {N} file-system.

          const onResult = function(args) {
            const requestCode = args.requestCode;
            const resultCode = args.resultCode;
            const data = args.intent;
            // var _that = this;

            if (resultCode === android.app.Activity.RESULT_OK && requestCode === com.yalantis.ucrop.UCrop.REQUEST_CROP) {
              const resultUri: android.net.Uri = com.yalantis.ucrop.UCrop.getOutput(data);
              const is: ImageSource = new ImageSource();
              try {
                is.setNativeSource(android.graphics.BitmapFactory.decodeFile(resultUri.getPath()));
              } catch (e) {
                console.error(e);
              }
              ImageCropper._cleanFiles();
              Application.android.off(AndroidApplication.activityResultEvent, onResult);
              if (is.android) {
                resolve({
                  response: "Success",
                  image: is,
                });
              } else {
                reject({
                  response: "Error",
                  image: null
                });
              }
              return;
            }
            else if (resultCode === android.app.Activity.RESULT_CANCELED && requestCode === com.yalantis.ucrop.UCrop.REQUEST_CROP) {
              ImageCropper._cleanFiles();
              Application.android.off(AndroidApplication.activityResultEvent, onResult);
              resolve({
                response: "Cancelled",
                image: null
              });
              return;
            }
            else if (resultCode === com.yalantis.ucrop.UCrop.RESULT_ERROR) {
              ImageCropper._cleanFiles();
              const cropError: java.lang.Throwable = com.yalantis.ucrop.UCrop.getError(data);
              console.log(cropError.getMessage());
              Application.android.off(AndroidApplication.activityResultEvent, onResult);
              reject({
                response: "Error",
                image: null
              });
              return;
            }
          };

          Application.android.on(AndroidApplication.activityResultEvent, onResult);

          const options = new com.yalantis.ucrop.UCrop.Options();
          options.setCircleDimmedLayer(!!_options.circularCrop);
          options.setFreeStyleCropEnabled(!!androidOptions.isFreeStyleCropEnabled);
          if (typeof androidOptions.isFreeStyleCropEnabled === 'boolean') {
            options.setShowCropGrid(androidOptions.isFreeStyleCropEnabled);
          }
          if (typeof androidOptions.showCropFrame === 'boolean') {
            options.setShowCropFrame(androidOptions.showCropFrame);
          }
          if (typeof androidOptions.hideBottomControls === 'boolean') {
            options.setHideBottomControls(androidOptions.hideBottomControls);
          }
          options.setToolbarTitle(androidOptions.toolbarTitle ? androidOptions.toolbarTitle : 'Crop Image');

          if (typeof androidOptions.toolbarTextColor === 'string') {
            options.setToolbarWidgetColor(new Color(androidOptions.toolbarTextColor).android);
          }
          if (typeof androidOptions.toolbarColor === 'string') {
            options.setToolbarColor(new Color(androidOptions.toolbarColor).android);
          }
          if (typeof androidOptions.rootViewBackgroundColor === 'string') {
            options.setRootViewBackgroundColor(new Color(androidOptions.rootViewBackgroundColor).android);
          }
          if (typeof androidOptions.logoColor === 'string') {
            options.setLogoColor(new Color(androidOptions.logoColor).android);
          }
          if (typeof androidOptions.statusBarColor === 'string') {
            options.setStatusBarColor(new Color(androidOptions.statusBarColor).android);
          }
          if (typeof androidOptions.cropGridColor === 'string') {
            options.setCropGridColor(new Color(androidOptions.cropGridColor).android);
          }
          if (typeof androidOptions.cropFrameColor === 'string') {
            options.setCropFrameColor(new Color(androidOptions.cropFrameColor).android);
          }
          if (typeof androidOptions.dimmedLayerColor === 'string') {
            options.setDimmedLayerColor(new Color(androidOptions.dimmedLayerColor).android);
          }
          if (typeof androidOptions.cropGridRowCount === 'number') {
            options.setCropGridRowCount(androidOptions.cropGridRowCount);
          }
          if (typeof androidOptions.cropGridColumnCount === 'number') {
            options.setCropGridColumnCount(androidOptions.cropGridColumnCount);
          }
          if (typeof androidOptions.cropFrameStrokeWidth === 'number') {
            options.setCropFrameStrokeWidth(androidOptions.cropFrameStrokeWidth);
          }
          if (typeof androidOptions.cropGridStrokeWidth === 'number') {
            options.setCropGridStrokeWidth(androidOptions.cropGridStrokeWidth);
          }
          if (typeof androidOptions.compressionQuality === 'number' && androidOptions.compressionQuality >= 0
            && androidOptions.compressionQuality <= 100) {
            options.setCompressionQuality(androidOptions.compressionQuality);
          }
          if (typeof androidOptions.toolbarCropDrawable !== 'undefined') {
            options.setToolbarCropDrawable(androidOptions.toolbarCropDrawable);
          }
          if (typeof androidOptions.toolbarCancelDrawable !== 'undefined') {
            options.setToolbarCancelDrawable(androidOptions.toolbarCancelDrawable);
          }
          if (typeof androidOptions.setAspectRatioOptions !== 'undefined') {
            const aspectRatios = [];
            androidOptions.setAspectRatioOptions.aspectRatios.forEach(ratio => {
              aspectRatios.push(new com.yalantis.ucrop.model.AspectRatio(
                  ratio.aspectRatioTitle,
                  ratio.aspectRatioX,
                  ratio.aspectRatioY
                ));
            });
            options.setAspectRatioOptions(androidOptions.setAspectRatioOptions.defaultIndex, aspectRatios);
          }

          if (_options && _options.width && _options.height) {
            const gcd = ImageCropper._gcd(_options.width, _options.height);
            // console.log("gcd:" + gcd.toString());

            com.yalantis.ucrop.UCrop.of(sourcePath, destinationPath)
              .withAspectRatio(_options.width / gcd, _options.height / gcd)
              .withMaxResultSize(_options.width, _options.height)
              .withOptions(options)
              .start(ImageCropper._getContext());
          }
          else {
            com.yalantis.ucrop.UCrop.of(sourcePath, destinationPath)
              .withOptions(options)
              .start(ImageCropper._getContext());
          }
        }
        else {
          // Application.android.off(AndroidApplication.activityResultEvent, this.onResult);
          reject({
            response: "Error",
            image: null
          });
        }
      } catch (e) {
        console.log(e);
        // Application.android.off(AndroidApplication.activityResultEvent, this.onResult);
        reject({
          response: "Error",
          image: null
        });
      }
    });
  }

  private static _gcd(width: number, height: number): number {
    if (height === 0) {
      return width;
    } else {
      return ImageCropper._gcd(height, width % height);
    }
  }

  private static _storeImageSource(image: ImageSource): string {
    const folder: Folder = knownFolders.temp();
    const savePath = path.join(folder.path, "temp.jpeg");

    if (image.saveToFile(savePath, "jpeg", 100)) {
      return savePath;
    }
    else {
      return null;
    }
  }

  private static _cleanFiles(): void {
    // Clear Temp
    const folder: Folder = knownFolders.temp();
    folder.clear();
  }

  private static _getContext(): android.app.Activity {
    return Application.android.foregroundActivity;
  }
}
