import { Page } from "@nativescript/core";
import { ImageCropperModel } from './main-view-model';

let closeCallback;

export function onShownModally(args) {
    const context = args.context;
    closeCallback = args.closeCallback;
    const page: Page = <Page>args.object;
    page.bindingContext = new ImageCropperModel(page, 'croppedImage2');
}

export function closeModal(args) {
  closeCallback();
}