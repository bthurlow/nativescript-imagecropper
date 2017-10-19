import * as application from 'tns-core-modules/application';
import * as imageSource from 'tns-core-modules/image-source';
import * as fs from "tns-core-modules/file-system";
import { OptionsCommon } from './interfaces';
import { Result } from './interfaces';

declare module com {
  export module yalantis {
    export module ucrop {
      export class UCrop {
        public static REQUEST_CROP;
        public static RESULT_ERROR;
        public static of(source: android.net.Uri, destination: android.net.Uri): UCrop;
        public withAspectRatio(x: number, y: number): UCrop;
        public useSourceImageAspectRatio(): UCrop;
        public withMaxResultSize(width: number, height: number): UCrop;
        public start(activity: android.app.Activity): void;
        public static getOutput(intent: android.content.Intent): android.net.Uri;
        public static getError(intent: android.content.Intent): java.lang.Throwable;
      }
    }
  }
}

var _options: OptionsCommon;
var ctx: android.content.Context = application.android.context;
var UCrop = com.yalantis.ucrop.UCrop;

export class ImageCropper {
  public show(image: imageSource.ImageSource, options?: OptionsCommon): Promise<Result> {
    return new Promise<Result>((resolve, reject) => {
      try {
        _options = options;
        if (image.android) {
          var _that = this;
          var sourcePathTemp: string = this._storeImageSource(image);
          var folder: fs.Folder = fs.knownFolders.temp();
          var destinationPathTemp: string = fs.path.join(folder.path, "destTemp.jpeg");
          if (sourcePathTemp == null) {         
            this._cleanFiles();
            reject({
              response: "Error",
              image: null
            });
          }

          var sourcePath: android.net.Uri = android.net.Uri.parse("file://" + sourcePathTemp); //Fix our path that comes from {N} file-system.
          var destinationPath: android.net.Uri = android.net.Uri.parse("file://" + destinationPathTemp); //Fix our path that comes from {N} file-system.

          var onResult = function(args) {
            var requestCode = args.requestCode;
            var resultCode = args.resultCode;
            var data = args.intent;
            // var _that = this;

            if (resultCode == android.app.Activity.RESULT_OK && requestCode == UCrop.REQUEST_CROP) {
              var resultUri: android.net.Uri = UCrop.getOutput(data);
              var is: imageSource.ImageSource = new imageSource.ImageSource();
              is.setNativeSource(android.graphics.BitmapFactory.decodeFile(resultUri.getPath()));
              _that._cleanFiles();
              application.android.off(application.AndroidApplication.activityResultEvent, onResult);
              resolve({
                response: "Success",
                image: is
              });
              return;
            }
            else if (resultCode == android.app.Activity.RESULT_CANCELED && requestCode == UCrop.REQUEST_CROP) {
              _that._cleanFiles();
              application.android.off(application.AndroidApplication.activityResultEvent, onResult);
              resolve({
                response: "Cancelled",
                image: null
              });
              return;
            }
            else if (resultCode == UCrop.RESULT_ERROR) {
              _that._cleanFiles();
              var cropError: java.lang.Throwable = UCrop.getError(data);
              console.log(cropError.getMessage());
              application.android.off(application.AndroidApplication.activityResultEvent, onResult);
              reject({
                response: "Error",
                image: image.android
              });
              return;
            }
          };

          application.android.on(application.AndroidApplication.activityResultEvent, onResult);

          if (_options && _options.width && _options.height) {
            var gcd = this._gcd(_options.width, _options.height);
            // console.log("gcd:" + gcd.toString());

            UCrop.of(sourcePath, destinationPath)
              .withAspectRatio(_options.width / gcd, _options.height / gcd)
              .withMaxResultSize(_options.width, _options.height)
              .start(this._getContext());
          }
          else {
            UCrop.of(sourcePath, destinationPath)
              // .useSourceImageAspectRatio()
              .start(this._getContext());
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

  private _gcd(width: number, height: number): number {
    if (height == 0) {
      return width;
    } else {
      return this._gcd(height, width % height);
    }
  }

  private _storeImageSource(image: imageSource.ImageSource): string {
    var folder: fs.Folder = fs.knownFolders.temp();
    var path = fs.path.join(folder.path, "temp.jpeg");

    if (image.saveToFile(path, "jpeg", 100)) {
      return path;
    }
    else {
      return null;
    }
  }

  private _cleanFiles(): void {
    //Clear Temp
    var folder: fs.Folder = fs.knownFolders.temp();
    folder.clear();
  }

  private _getContext(): android.app.Activity {
    return application.android.foregroundActivity;
  }
}
