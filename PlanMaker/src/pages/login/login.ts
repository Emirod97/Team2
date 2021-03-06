import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { EventPage } from '../event/event';

/**
 * import { AngularFireAuth } from "angularfire2/auth";
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User){
 
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);

      if(result){
        this.navCtrl.setRoot(EventPage);
        this.afAuth.authState.subscribe(data => {
          if(data.email && data.uid){
            this.toast.create({
              message: `Welcome, ${data.email}`,
              duration: 3000 
            }).present();
        }
    
        });  
      }

      }
      catch(e){
        console.error(e);
      }


  }

  register(){
    this.navCtrl.push(RegisterPage)
  }

}
