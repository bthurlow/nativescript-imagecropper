import * as imageSource from 'tns-core-modules/image-source';

export interface OptionsCommon{
  width?: number,
  height?: number,
  lockSquare?: number
}

export interface Result{
  response:string;
  image:imageSource.ImageSource;
}
