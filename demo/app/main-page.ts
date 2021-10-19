import { Button, EventData, Page, ShowModalOptions } from '@nativescript/core';
import { ImageCropperModel } from './main-view-model';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    const page = <Page>args.object;
    page.bindingContext = new ImageCropperModel(page, 'croppedImage');
}

export function openModal(args) {
    const mainView: Button = <Button>args.object;
    const option: ShowModalOptions = {
        context: {},
        closeCallback: () => {
            // show cropped image
        },
        fullscreen: true
    };
    mainView.showModal('modal-page', option);
}
