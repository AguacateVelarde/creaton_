import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase/app';
import { DatabaseProvider } from '../database/database'
import { AlertController } from 'ionic-angular';
import { ItemsPage } from '../../pages/items/items'
import {App} from "ionic-angular";



@Injectable()
export class AuthProvider {
  user:any;

  constructor(public http: HttpModule,
              public firebaseAuth: AngularFireAuth,
              public db: DatabaseProvider,
              public alertCtrl: AlertController,
              public app: App
  ) {
         this.user = firebaseAuth.authState;

  }

  signup(email: string, password: string, data:any) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        let nav = this.app.getActiveNav();
        console.log('Success!', value);

         this.db.push( {
          email : data.email,
          nombre : data.nombre,
          municipio : data.municipio,
          username : data.username

        } )

        nav.push( ItemsPage )



      })
      .catch(err => {
        let alert = this.alertCtrl.create({
           title: '¡Algo ocurrió!',
           subTitle: err.message,
           buttons: ['OK']
         });
         alert.present();

      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        let nav = this.app.getActiveNav();
          //this.navCtrl.push( ItemsPage )
          nav.push( ItemsPage,{
            correo : email
          } )
      })
      .catch(err => {
        let alert = this.alertCtrl.create({
           title: '¡Algo ocurrió!',
           subTitle: err.message,
           buttons: ['OK']
         });
         alert.present();
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}
