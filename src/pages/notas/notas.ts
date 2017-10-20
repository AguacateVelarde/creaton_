import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database'
import { DecimalPipe } from '@angular/common';
//import { AuthProvider } from '../../providers/auth/auth'


declare var google;

@IonicPage()
@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  zona:any
  category:any
  id:any
  obj:any

  categoryData:string

  pos:any


  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  todo = {}
  cont = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public googleMaps: GoogleMaps,
    public platform: Platform,
    public alertCtrl: AlertController,
    public db: DatabaseProvider,
  //  public auth: AuthProvider
  ) {

    this.obj = this.navParams.get( 'obj' )
    this.category = this.navParams.get( 'category' )
    this.id = this.navParams.get( 'id' )
    this.zona = this.navParams.get( 'zona' )
    this.pos = {
      latitude : this.obj.latitud,
      longitude :  this.obj.longitud,
      title : "México"
    }
    switch( this.category ){
      case 1:
        this.categoryData = "Sector Salud";
      break;
      case 2:
        this.categoryData = "Cultura";
      break;
      case 3:
        this.categoryData = "Educación";
      break;
      case 4:
        this.categoryData = "Infraestructura";
      break;
      case 5:
        this.categoryData = "Laboral";
      break;
      case 6:
        this.categoryData = "Ciencia/tecnología";
      break;
    }
  }

  ionViewDidLoad(){
    if( this.platform.is( 'ios' ) || this.platform.is( 'android' ) ){
      this.loadMap( this.pos )
      this.addMarkersToMap( this.pos );
    }else{
      this.loadImage();

    }
  }

loadImage(){
  let img = document.createElement("img");
  img.src = "assets/map.jpg";
  let src = document.getElementById( 'map' )
  src.appendChild( img )
}

  loadMap(postion){
   let latitude = postion.latitude;
   let longitud = postion.longitude;
   console.log(latitude, longitud);
   this.map = new google.maps.Map(this.mapElement.nativeElement, {
         zoom: 7,
         center: {lat: latitude, lng: longitud}
    });

       this.directionsDisplay.setMap(this.map);

 }



 addMarkersToMap(marker) {
     var position = new google.maps.LatLng(marker.latitude, marker.longitude);
     var dogwalkMarker = new google.maps.Marker({
       position: position,
       map: this.map,
       icon: 'assets/imgs/marcador.png'
     });
     dogwalkMarker.setMap(this.map);

 }

 pushComment( ){
  /*console.log(  )
   let buffer =  '/'+this.zona +'/'+this.category+'/'+this.id+'/';
   this.db.pushComment( data, this.correo, buffer  )*/
 }

 promedio( cont, user ){
   return ( !user ) ? 0 : cont/user ;
 }

votar( voto:number ){
  if( voto == 0 ){
    let alert = this.alertCtrl.create({
       title: '¡Algo ocurrió!',
       subTitle: 'No puede votar con cero',
       buttons: ['OK']
     });
     alert.present();
  }else{
    let nde = '/'+this.zona +'/'+this.category;
    let sumCont  = this.obj.cont + voto
    let sumUser = this.obj.cont_user + 1
    this.obj.cont = sumCont
    this.obj.cont_user = sumUser
    console.log( nde, sumCont, sumUser )
    this.db.updateCont( nde, this.id, sumCont, sumUser )
  }
}

}
