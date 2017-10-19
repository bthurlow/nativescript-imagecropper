import { OptionsCommon } from './interfaces';
import { Result } from './interfaces';
import * as imageSource from 'tns-core-modules/image-source';

export declare class ImageCropper {
    show(image: imageSource.ImageSource, options?: OptionsCommon): Promise<Result>;    
}
