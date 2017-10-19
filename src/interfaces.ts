import * as imageSource from 'tns-core-modules/image-source';

export interface OptionsCommon{
  width?: number,
  height?: number
}

export interface Result{
  response:string;
  image:imageSource.ImageSource;
}
