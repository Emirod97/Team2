import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventPage } from '../event/event';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
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

  create(){
    const loader = this.loadingCtrl.create({
      content: "Creating event, Please wait...",
      duration: 500
    });
    loader.present();
    this.navCtrl.setRoot(EventPage);
  }

}
