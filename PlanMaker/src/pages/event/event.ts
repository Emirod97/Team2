import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { NewEventPage } from '../new-event/new-event';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  details(){
    this.navCtrl.push(DetailsPage);
  }

  newEvent(){
    this.navCtrl.push(NewEventPage);
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Friends',
      message: "Enter the Email of your Friend",
      inputs: [
        {
          name: 'Email',
          type:'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}


