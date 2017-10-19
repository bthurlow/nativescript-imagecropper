import { Observable } from 'tns-core-modules/data/observable';
import { Imagecropper } from 'nativescript-imagecropper';

export class HelloWorldModel extends Observable {
  public message: string;
  private imagecropper: Imagecropper;

  constructor() {
    super();

    this.imagecropper = new Imagecropper();
    this.message = this.imagecropper.message;
  }
}
