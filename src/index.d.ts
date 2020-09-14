import { ImageSource } from '@nativescript/core';

export interface OptionsCommon {
  width?: number;
  height?: number;
  lockSquare?: boolean;
  circularCrop?: boolean;
}

export interface AspectRatio {
  aspectRatioTitle: string;
  aspectRatioX: number;
  aspectRatioY: number;
}

export interface AspectRatioOptions {
  defaultIndex: number;
  aspectRatios: AspectRatio[];
}
export interface OptionsAndroid {
  isFreeStyleCropEnabled?: boolean; // set to true to let user resize crop bounds (disabled by default)
  toolbarTitle?: string; // default 'Crop Image'
  toolbarTextColor?: string; // desired resolved color of Toolbar text and buttons (default is darker orange)
  toolbarColor?: string; // desired resolved color of the toolbar
  rootViewBackgroundColor?: string; // desired background color that should be applied to the root view
  logoColor?: string; // desired resolved color of logo fill (default is darker grey)
  statusBarColor?: string; // Set statusbar color
  showCropGrid?: boolean; // set to true if you want to see a crop grid/guidelines on top of an image
  showCropFrame?: boolean; // set to true if you want to see a crop frame rectangle on top of an image
  cropFrameStrokeWidth?: number; // desired width of crop frame line in pixels
  cropGridStrokeWidth?: number; // desired width of crop grid lines in pixels
  cropGridColor?: string; // desired color of crop grid/guidelines
  cropFrameColor?: string; // desired color of crop frame
  cropGridRowCount?: number; // crop grid rows count
  cropGridColumnCount?: number; // crop grid columns count
  hideBottomControls?: boolean; // set to true to hide the bottom controls (shown by default)
  compressionQuality?: number; // Set compression quality [0-100] that will be used to save resulting Bitmap
  dimmedLayerColor?: string; // desired color of dimmed area around the crop bounds
  setAspectRatioOptions?: AspectRatioOptions; // Pass an ordered list of desired aspect ratios that should be available for a user.
  toolbarCropDrawable?: any; // Android Drawable (pass native drawable object ONLY)
  toolbarCancelDrawable?: any; // Android Drawable (pass native drawable object ONLY)
}

export interface Result {
  response: 'Success' | 'Error' | 'Cancelled';
  image: ImageSource | null;
}

export declare class ImageCropper {
    show(image: ImageSource, options?: OptionsCommon, androidOptions?: OptionsAndroid): Promise<Result>;
}
