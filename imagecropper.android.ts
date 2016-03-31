import * as application from 'application';
import * as imageSource from 'image-source';
import * as fs from 'file-system';
import * as enums from 'ui/enums';
import {OptionsCommon} from './interfaces';
import {Result} from './interfaces';

declare module com{
  export module android {
    export module camera{
      export class CropImageIntentBuilder{
        public constructor(outputX:number,outputY:number,saveUri:any);
        public constructor(aspectX,aspectY,outputX,outputY,saveUri:any);
        public setBitmap(bitmap:any):CropImageIntentBuilder;
        public setOutlineColor(color:number):CropImageIntentBuilder;
        public getIntent(context:any):any;
        public setSourceImage(imageUri:any):CropImageIntentBuilder;
        public setOutputQuality(outputQuality:number):CropImageIntentBuilder;
        public setScale(scale:boolean):CropImageIntentBuilder;
        public setScaleUpIfNeeded(scaleUpIfNeeded:boolean):CropImageIntentBuilder;
      }
    }
  }
}

var _options:OptionsCommon;
var ctx:android.content.Context = application.android.context;

export class ImageCropper{
    public show(image:imageSource.ImageSource, options?:OptionsCommon):Thenable<Result>{
      return new Promise<Result>((resolve,reject) => {
        try{
          _options = options;
          if(image.android){
            var tempPath:string = this._storeImageSource(image),
              _that = this,
             REQUEST_CROP_PICTURE = 2,
             previousResult = application.android.onActivityResult,
             croppedImageFile:java.io.File = new java.io.File(ctx.getFilesDir(), "temp.jpg"),
             croppedImage:android.net.Uri = android.net.Uri.fromFile(croppedImageFile),
             cropImage;

             if(_options && _options.width && _options.height){
               cropImage = new com.android.camera.CropImageIntentBuilder(_options.width,_options.height,croppedImage);
             }
             else{
               var bmp:android.graphics.Bitmap = image.android;
               cropImage = new com.android.camera.CropImageIntentBuilder(bmp.getWidth(), bmp.getHeight(),croppedImage);
              }

            cropImage.setOutlineColor(0xFF03A9F4);

            if(tempPath == null){
              this._cleanFiles(null);
              reject({
                response:"Error",
                image:null
              });
            }

            var tempUri:android.net.Uri = android.net.Uri.parse("file://"+tempPath); //Fix our path that comes from {N} file-system.
            cropImage.setSourceImage(tempUri);

            application.android.onActivityResult = function(requestCode,resultCode,data){
              if((requestCode == REQUEST_CROP_PICTURE) && (resultCode == android.app.Activity.RESULT_OK)) {
                var is:imageSource.ImageSource = new imageSource.ImageSource();
                is.setNativeSource(android.graphics.BitmapFactory.decodeFile(croppedImageFile.getAbsolutePath()));

                _that._cleanFiles(croppedImageFile.getAbsolutePath());

                resolve({
                  response:"Success",
                  image:is
                });
              }
              else if((requestCode == REQUEST_CROP_PICTURE) && (resultCode == android.app.Activity.RESULT_CANCELED)) {
                _that._cleanFiles(null);

                resolve({
                  response:"Cancelled",
                  image:null
                });
              }
            }
            this._getContext().startActivityForResult(cropImage.getIntent(ctx), REQUEST_CROP_PICTURE);
          }
          else{
            reject({
              response:"Error",
              image:null
            });
          }
        } catch(e){
          reject({
            response:"Error",
            image:null
          });
        }
      });
    }

    private _storeImageSource(image:imageSource.ImageSource):string{
      var folder:fs.Folder = fs.knownFolders.temp();
      var path = fs.path.join(folder.path,"temp.jpg");

      if(image.saveToFile(path,enums.ImageFormat.jpeg,100)){
        return path;
      }
      else{
        return null;
      }
    }
    private _cleanFiles(croppedImageUri:string):void{
      //Remove Cropped Image
      if(croppedImageUri !== null){
        var file = fs.File.fromPath(croppedImageUri);
        file.remove();
      }
      //Clear Temp
      var folder:fs.Folder = fs.knownFolders.temp();
      folder.clear();
    }
    private _getContext():android.app.Activity{
      return application.android.foregroundActivity;
    }
  }
