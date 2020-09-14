import { EventData, Page } from '@nativescript/core';
import { ImageCropperModel } from './main-view-model';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    const page = <Page>args.object;
    page.bindingContext = new ImageCropperModel();
}
