  import * as frame from 'ui/frame';
  import * as imageSource from 'image-source';
  import {OptionsCommon} from './interfaces';
  import {Result} from './interfaces';

declare class TOCropView{
  aspectRatioLocked:boolean;
  public setAspectLockEnabledWithAspectRatioAnimated(aspectRatio:CGSize,animated:boolean):void;
}
declare class TOCropToolbar extends UIView{
  clampButtonHidden:boolean;
  clampButtonGlowing:boolean;
  rotateButtonHidden:boolean;
  rotateButton:UIButton;
  public setRotateClockwiseButtonHidden(rotateClockwiseButtonHidden:boolean):void;
}
declare class TOCropViewController extends UIViewController{
  static alloc(): TOCropViewController;
  public initWithImage(image:UIImage):TOCropViewController;
  delegate: any;
  cropView: TOCropView;
  toolbar: TOCropToolbar;
  public setAspectRatioLocked(aspectRatioLocked:boolean):void;
  public setRotateButtonHidden(rotateButtonHidden:boolean):void;
  public setRotateClockwiseButtonHidden(rotateClockwiseButtonHidden:boolean):void;
}
declare var TOCropViewControllerDelegate;

var _options:OptionsCommon;

class TOCropViewControllerDelegateImpl extends NSObject {
    private _resolve: any;
    private _reject: any;
    private _owner: WeakRef<TOCropViewController>;

    public static ObjCProtocols = [TOCropViewControllerDelegate];

    public static initWithOwner(owner: WeakRef<TOCropViewController>) : TOCropViewControllerDelegateImpl {
      // console.log("TOCropViewControllerDelegateImpl.initWithOwner");
      let handler = <TOCropViewControllerDelegateImpl>TOCropViewControllerDelegateImpl.new();
      handler._owner = owner;
      return handler;
    }

    public initResolveReject(resolve:any,reject:any):void{
      // console.log("TOCropViewControllerDelegateImpl.initResolveReject");
      this._resolve = resolve;
      this._reject = reject;
    }

    public cropViewControllerDidCropToImageWithRectAngle(cropViewController:TOCropViewController, image:UIImage, cropRect:CGRect, angle:number) : void{
      // console.log("TOCropViewControllerDelegateImpl.cropViewControllerDidCropToImageWithRectAngle");
      cropViewController.dismissViewControllerAnimatedCompletion(true,null);
      if(image){
        var imgSrc = new imageSource.ImageSource();
        if(_options && _options.width && _options.height){
          //Resize Image
          var rect:CGRect = CGRectMake(0,0,_options.width,_options.height);
          UIGraphicsBeginImageContext(rect.size);
          image.drawInRect(rect);
          var resizedImage = UIGraphicsGetImageFromCurrentImageContext();
          UIGraphicsEndImageContext();

          if(imgSrc.setNativeSource(resizedImage)){
            this._resolve({
              response:"Success",
              image:imgSrc
            });
          }
          else{
            this._reject({
              response:"Error",
              image:null
            });
          }
        }
        else{
          //Use Cropped Image w/o Resize
          if(imgSrc.setNativeSource(image)){
            this._resolve({
              response:"Success",
              image:imgSrc
            });
          }
          else{
            this._reject({
              response:"Error",
              image:null
            });
          }
        }
      }
      CFRelease(cropViewController.delegate);
      // return;
    }

    public cropViewControllerDidFinishCancelled(cropViewController:TOCropViewController,cancelled:boolean) : void{ //Promise<Result>
      // console.log("TOCropViewControllerDelegateImpl.cropViewControllerDidFinishCancelled");
      cropViewController.dismissViewControllerAnimatedCompletion(true,null);
      this._resolve({
        response:"Cancelled",
        image:null
      });
      CFRelease(cropViewController.delegate);
      // return;
    }
}

export class ImageCropper{
    public show(image:imageSource.ImageSource, options?:OptionsCommon):Thenable<Result>{
      // console.log("ImageCropper.show");
      let _that = this;
      return new Promise<Result>((resolve,reject) => {
        _options = options;
        if(image.ios){
          var viewController = TOCropViewController.alloc().initWithImage(image.ios);
          var delegate = TOCropViewControllerDelegateImpl.initWithOwner(new WeakRef(viewController));

          delegate.initResolveReject(resolve,reject);

          CFRetain(delegate);
          viewController.delegate =  delegate;

          var page = frame.topmost().ios.controller;
          page.presentViewControllerAnimatedCompletion(viewController,true,function(){
            //Set Fixed Crop Size
            if(_options && _options.width && _options.height){
              var gcd = _that._gcd(_options.width,_options.height);

              viewController.toolbar.clampButtonHidden = true;
              // viewController.toolbar.setNeedsLayout();
              viewController.cropView.setAspectLockEnabledWithAspectRatioAnimated(CGSizeMake(_options.width/gcd,_options.height/gcd),false);
            }
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
    private _gcd(width:number, height:number):number{
      if(height == 0){
        return width;
      }else{
        return this._gcd(height, width % height);
      }
    }
}
