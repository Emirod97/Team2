import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-new-event',
  templateUrl: 'new-event.html'
 /** styleUrls: ['./new-event.scss']*/
})
export class NewEventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  @ViewChild('myInput') myInput: ElementRef;

  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEventPage');
  }

}
