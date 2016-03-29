import * as imageSource from 'image-source';
import {OptionsCommon} from './interfaces';
import {Result} from './interfaces';

var _options:OptionsCommon;

export class ImageCropper{
    public show(image:imageSource.ImageSource, options?:OptionsCommon):Thenable<Result>{
      console.log("ImageCropper.show");
      return new Promise<Result>((resolve,reject) => {
        _options = options;
        if(image.android){
          resolve({
            response:"Success",
            image:null
          });
        }
        else{
          reject({
            response:"Error",
            image:null
          });
        }
      });
    }
  }
