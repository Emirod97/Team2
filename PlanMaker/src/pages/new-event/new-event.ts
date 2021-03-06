import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventPage } from '../event/event';

import {
  GoogleMaps,
 /* GoogleMap,
  LatLng,
  GoogleMapsEvent,
  CameraPosition,
  MarkerOptions,
  Marker*/
} from '@ionic-native/google-maps';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';

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

  //map: GoogleMap;

  constructor(private googlemaps: GoogleMaps,public geolocation: Geolocation, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
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

  GeolocationNative(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
      console.log(geoposition);
    });
  }

  ngAfterViewInit(){
    this.GeolocationNative();
  }
/*
  loadMap(position){

    let element: HTMLElement = document.getElementById("map");

    let map: GoogleMap = this.googlemaps.create(element);

    let latlang = new LatLng(position.coords.latitude, position.coords.longitude); 

    map.one(GoogleMapsEvent.MAP_READY).then(() =>{

      let position: CameraPosition<LatLng>={
        target:latlang,
        zoom:10,
        tilt:30
      };

      map.moveCamera(position);

      let markerOptions: MarkerOptions = {
        position: latlang,
        title: "party location!"
      };

      let marker= map.addMarker(markerOptions).then((marker: Marker) => {
        marker.showInfoWindow();
      });

    })
      

    

  }
  */
}
