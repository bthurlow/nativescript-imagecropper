import * as application from 'tns-core-modules/application';
import { ImageSource } from 'tns-core-modules/image-source';
import * as fs from "tns-core-modules/file-system";
import { OptionsCommon, Result } from './';

let _options: OptionsCommon;
let ctx: android.content.Context = application.android.context;

export class ImageCropper {
  public show(image: ImageSource, options?: OptionsCommon): Promise<Result> {
    return new Promise<Result>((resolve: (val: Result) => void, reject: (val: Result) => void) => {
      try {
        _options = options;
        if (image.android) {
          const sourcePathTemp: string = ImageCropper._storeImageSource(image);
          const folder: fs.Folder = fs.knownFolders.temp();
          const destinationPathTemp: string = fs.path.join(folder.path, "destTemp.jpeg");
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
              application.android.off(application.AndroidApplication.activityResultEvent, onResult);
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
              application.android.off(application.AndroidApplication.activityResultEvent, onResult);
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
              application.android.off(application.AndroidApplication.activityResultEvent, onResult);
              reject({
                response: "Error",
                image: null
              });
              return;
            }
          };

          application.android.on(application.AndroidApplication.activityResultEvent, onResult);

          if (_options && _options.width && _options.height) {
            const gcd = ImageCropper._gcd(_options.width, _options.height);
            // console.log("gcd:" + gcd.toString());

            com.yalantis.ucrop.UCrop.of(sourcePath, destinationPath)
              .withAspectRatio(_options.width / gcd, _options.height / gcd)
              .withMaxResultSize(_options.width, _options.height)
              .start(ImageCropper._getContext());
          }
          else {
            com.yalantis.ucrop.UCrop.of(sourcePath, destinationPath)
              // .useSourceImageAspectRatio()
              .start(ImageCropper._getContext());
          }
        }
        else {
          // application.android.off(application.AndroidApplication.activityResultEvent, this.onResult);
          reject({
            response: "Error",
            image: null
          });
        }
      } catch (e) {
        // application.android.off(application.AndroidApplication.activityResultEvent, this.onResult);
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
    const folder: fs.Folder = fs.knownFolders.temp();
    const path = fs.path.join(folder.path, "temp.jpeg");

    if (image.saveToFile(path, "jpeg", 100)) {
      return path;
    }
    else {
      return null;
    }
  }

  private static _cleanFiles(): void {
    // Clear Temp
    const folder: fs.Folder = fs.knownFolders.temp();
    folder.clear();
  }

  private static _getContext(): android.app.Activity {
    return application.android.foregroundActivity;
  }
}
