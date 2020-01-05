import * as L from 'nativescript-localize';
import { ImagePickerMediaType, create as PickImage } from 'nativescript-imagepicker';
import { ImageSource, fromNativeSource } from '@nativescript/core/image-source';
import { takePicture as TakePicture, isAvailable as isCameraAvailable } from 'nativescript-camera';
import { knownFolders, path } from '@nativescript/core/file-system';
import { Frame } from '@nativescript/core/ui/frame';
import { ImageCropper } from '@proplugins/nativescript-imagecropper';
import { session as Uploader } from 'nativescript-background-http';
import { UserService } from '~/services/user-service';
import { action } from '@nativescript/core/ui/dialogs';
import { isAndroid } from '@nativescript/core/platform';
import { loader } from '~/shared/helpers';
import { requestPermission } from '@proplugins/nativescript-permissions';

export class ImageUploadService {

  constructor() {
    if (ImageUploadService._instance) {
      throw new Error(
          'Use ImageUploadService.getInstance() instead of new.'
      );
    }

    this._imageCropper = new ImageCropper();
  }

  chooseImage({
    promptText,
    destinationId,
    apiPath,
    logEvent,
    cameraFacing
  }) {
    this.apiPath = apiPath;
    if (!apiPath) {
      console.log('Error: apiPath not specified');

      return;
    }
    action({
      message: promptText,
      actions: [L('imageUploadService.takeAPic'), L('imageUploadService.chooseFromGallery'), L('imageUploadService.cancelButton')]
    }).then(r => {
      let promise;
      switch (r) {
        case L('imageUploadService.takeAPic'):
          promise = this._takeAPicture(cameraFacing); break;
        case L('imageUploadService.chooseFromGallery'):
          promise = this._chooseFromGallery(); break;
        default: break;
      }

      promise.then(image => {
        const task = this._uploadImage(image, destinationId);
        loader.show({
          message: L('imageUploadService.uploading')
        });
        task.on('progress', logEvent);
        task.on('error', (args) => {
          loader.hide();
          logEvent(args);
        });
        task.on('complete', logEvent);
        task.on('responded', (args) => {
          loader.hide();
          logEvent(args);
        });
      }).catch(console.log);
    });
  }

  /**
   * Upload image to server
   * @private
   * @param { object } image
   * @memberof ImageUploadService
   */
  _uploadImage(image, destinationId) {
    const folder = knownFolders.documents().path;
    const timestamp = new Date().getTime();
    const fileName = `image-${timestamp}.png`;
    const imageUrl = path.join(folder, fileName);
    const saved = image.saveToFile(
      imageUrl,
      'png',
      100
    );
    if (saved) {
      const imageWidget = Frame.getFrameById('rootFrame').currentPage.getViewById(destinationId);
      if (imageWidget) {
        setTimeout(() => {
          if (isAndroid) {
            imageWidget.src = imageUrl;
          } else {
            imageWidget.src = image;
          }
        }, 1000);
      }
      const session = Uploader('image-upload');
      const token = UserService.getInstance().token;
      const request = {
        url: `${global.getUrl('community_url')}${this.apiPath}?api_token=${token}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/octet-stream',
            'User-Agent': 'Mozilla/5.0',
            'Accept': 'application/json',
            'App-Version': global.settings.appVersion
        },
        androidNotificationTitle: L('imageUploadService.uploading'),
        androidAutoDeleteAfterUpload: true
      };

      // TODO: Augment this to enable configurable request params
      const params = [
        { name: 'image', filename: imageUrl, mimeType: 'image/png' },
        { name: 'is_public', value: '1' }
      ];
      const task = session.multipartUpload(params, request);

      return task;
    } else {
      return null;
    }
  }

  /**
   * Crop image
   * @private
   * @param { string, string } destinationId selectedImageSource
   * @memberof ImageUploadService
   */
  _cropImage({ selectedImageSource }) {
    return new Promise(async (resolve, reject) => {
      const cropResponse = await this._imageCropper.show(selectedImageSource, {
        width: 500,
        height: 500
      }, {
        isFreeStyleCropEnabled: true,
        toolbarColor: '#303235',
        toolbarTextColor: 'white',
        statusBarColor: 'black'
      }).catch(e => {
        reject('Error in cropping');
        console.log(e);
      });
      if (cropResponse.response === 'Success' && cropResponse.image !== null) {
        resolve(cropResponse.image);
      } else {
        reject('No Image => _cropImage');
      }
    });
  }

  /**
   * Take a picture using camera
   * @private
   * @memberof ImageUploadService
   */
  _takeAPicture(cameraFacing = 'rear') {
    return new Promise(async (resolve, reject) => {
      if (isCameraAvailable()) {
        if (isAndroid) {
          const resp = await requestPermission([
            android.Manifest.permission.CAMERA,
            android.Manifest.permission.WRITE_EXTERNAL_STORAGE
          ], 'Need camera permission to take photo').catch(e => {
            reject('User rejected permission');
            console.log(e);
          });

          if (!resp) {
            return;
          }
        }
        const imageAsset = await TakePicture({
          width: 800,
          keepAspectRatio: true,
          saveToGallery: false,
          cameraFacing
        }).catch(e => {
          reject('No Image => _takeAPicture');
          console.log(e);
        });

        if (imageAsset) {
          loader.show({
            message: L('imageUploadService.pleaseWait')
          });
          const source = new ImageSource();
          const selectedImageSource = await source.fromAsset(imageAsset).catch(e => {
            reject('Failed to get source'); console.log(e);
          });

          setTimeout(async () => {
            const image = await this._cropImage({
              selectedImageSource
            }).catch(e => {
              console.log('Failed to Crop'); console.log(e);
            });
            loader.hide();
            if (image) {
              resolve(image);
            }
          }, isAndroid ? 0 : 1000);
        }
      } else {
        reject('No camera');
      }
    });
  }

  /**
   * Choose Image from Gallery
   * @private
   * @memberof ImageUploadService
   */
  _chooseFromGallery() {
    return new Promise(async (resolve, reject) => {
      const context = PickImage({ mode: 'single', mediaType: ImagePickerMediaType.Image });
      if (isAndroid) {
        const resp = await requestPermission([
          android.Manifest.permission.WRITE_EXTERNAL_STORAGE
        ], 'Need storage to read photo').catch(e => {
          reject('User rejected permission');
          console.log(e);
        });

        if (!resp) {
          return;
        }
      }
      const [selection] = await context.present().catch(e => {
        reject('Error in choosing image'); console.log(e);
      });

      if (selection) {
        selection.getImageAsync(async source => {
          if (source) {
            const selectedImageSource = fromNativeSource(source);
            const image = await this._cropImage({
              selectedImageSource
            }).catch(e => {
              console.log('Failed to Crop'); console.log(e);
            });
            if (image) {
              resolve(image);
            }
          }
        });
      }
    });
  }

  /**
   * @returns {ImageUploadService}
  */
  static getInstance() {
    if (!ImageUploadService._instance) {
      ImageUploadService._instance = new ImageUploadService();
    }

    return ImageUploadService._instance;
  }
}
