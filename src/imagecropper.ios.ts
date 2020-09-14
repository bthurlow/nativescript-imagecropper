import { Frame, ImageSource } from '@nativescript/core';
import { OptionsAndroid, OptionsCommon, Result } from './';

let _options: OptionsCommon;

@NativeClass()
class TOCropViewControllerDelegateImpl extends NSObject {
  private _resolve: (val: Result) => void;
  private _reject: (val: Result) => void;
  private _owner: WeakRef<TOCropViewController>;

  public static ObjCProtocols = [TOCropViewControllerDelegate];

  public static initWithOwner(owner: WeakRef<TOCropViewController>): TOCropViewControllerDelegateImpl {
    // console.log("TOCropViewControllerDelegateImpl.initWithOwner");
    const handler = <TOCropViewControllerDelegateImpl>TOCropViewControllerDelegateImpl.new();
    handler._owner = owner;
    return handler;
  }

  public initResolveReject(resolve: (val: Result) => void, reject: (val: Result) => void): void {
    // console.log("TOCropViewControllerDelegateImpl.initResolveReject");
    this._resolve = resolve;
    this._reject = reject;
  }

  public cropViewControllerDidCropToCircularImageWithRectAngle(cropViewController: TOCropViewController, image: UIImage, cropRect: CGRect, angle: number): void {
    this.cropViewControllerDidCropToImageWithRectAngle(cropViewController, image, cropRect, angle);
  }

  public cropViewControllerDidCropToImageWithRectAngle(cropViewController: TOCropViewController, image: UIImage, cropRect: CGRect, angle: number): void {
    // console.log("TOCropViewControllerDelegateImpl.cropViewControllerDidCropToImageWithRectAngle");
    cropViewController.dismissViewControllerAnimatedCompletion(true, null);
    if (image) {
      const imgSrc = new ImageSource();
      if (_options && _options.width && _options.height) {
        // Resize Image
        const rect: CGRect = CGRectMake(0, 0, _options.width, _options.height);
        UIGraphicsBeginImageContext(rect.size);
        image.drawInRect(rect);
        const resizedImage = UIGraphicsGetImageFromCurrentImageContext();
        UIGraphicsEndImageContext();

        try {
          imgSrc.setNativeSource(resizedImage);
        } catch (e) {
          console.error(e);
        }
        if (imgSrc.ios) {
          this._resolve({
            response: "Success",
            image: imgSrc
          });
        }
        else {
          this._reject({
            response: "Error",
            image: null
          });
        }
      }
      else {
        // Use Cropped Image w/o Resize
        try {
          imgSrc.setNativeSource(image);
        } catch (e) {
          console.error(e);
        }
        if (imgSrc.ios) {
          this._resolve({
            response: "Success",
            image: imgSrc
          });
        }
        else {
          this._reject({
            response: "Error",
            image: null
          });
        }
      }
    }
    CFRelease(cropViewController.delegate);
    // return;
  }

  public cropViewControllerDidFinishCancelled(cropViewController: TOCropViewController, cancelled: boolean): void { // Promise<Result>
    // console.log("TOCropViewControllerDelegateImpl.cropViewControllerDidFinishCancelled");
    cropViewController.dismissViewControllerAnimatedCompletion(true, null);
    this._resolve({
      response: "Cancelled",
      image: null
    });
    CFRelease(cropViewController.delegate);
    // return;
  }
}

export class ImageCropper {
  public show(image: ImageSource, options: OptionsCommon = {}, androidOptions: OptionsAndroid = {}): Promise<Result> {
    // console.log("ImageCropper.show");
    return new Promise<Result>((resolve: (val: Result) => void, reject: (val: Result) => void) => {
      _options = options;
      if (image.ios) {
        const viewController = TOCropViewController.alloc().initWithCroppingStyleImage(options.circularCrop ? TOCropViewCroppingStyle.Circular : TOCropViewCroppingStyle.Default, image.ios); // initWithImage(image.ios);
        const delegate = TOCropViewControllerDelegateImpl.initWithOwner(new WeakRef(viewController));
        delegate.initResolveReject(resolve, reject);
        CFRetain(delegate);
        viewController.delegate = delegate;
        let vc = Frame.topmost().ios.controller;
        let page = null;
        while (vc.presentedViewController
            && vc.presentedViewController.viewLoaded) {
            vc = vc.presentedViewController;
            if (!vc.beingDismissed) page = vc;
        }
        if (page === null) {
          page = vc;
        }

        if (_options.lockSquare) {
          viewController.aspectRatioPreset = TOCropViewControllerAspectRatioPreset.PresetSquare;
          viewController.aspectRatioLockEnabled = true; // The crop box is locked to the aspect ratio and can't be resized away from it
          viewController.aspectRatioPickerButtonHidden = true;
          viewController.resetAspectRatioEnabled = false;
        }
        page.presentViewControllerAnimatedCompletion(viewController, true, function () {
          if (_options) {
            if (_options.width && _options.height) {
              const gcd = ImageCropper._gcd(_options.width, _options.height);
              viewController.toolbar.clampButtonHidden = true;
              viewController.cropView.setAspectRatioAnimated(CGSizeMake(_options.width / gcd, _options.height / gcd), false);
            }

          }
        });
      }
      else {
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
}
