import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/**import { AngularFireAuth } from 'angularfire2/auth';*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( public navCtrl: NavController) {

  }
/**
 * private afAuth: AngularFireAuth,
  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if(data.email && data.uid){
        this.toast.create({
          message: `Welcome, ${data.email}`,
          duration: 3000 
        }).present();
    }

    });  
  } */

}
