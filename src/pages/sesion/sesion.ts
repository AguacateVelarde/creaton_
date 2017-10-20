import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth'
import { RegistroPage } from '../registro/registro'


@IonicPage()
@Component({
  selector: 'page-sesion',
  templateUrl: 'sesion.html',
})
export class SesionPage {
   registerCredentials = {
     email: '',
     password: ''
   };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public auth: AuthProvider
            ) {
  }

  login():any{
    this.auth.login( this.registerCredentials.email, this.registerCredentials.password );
  }

  getRegister(){
    this.navCtrl.push( RegistroPage )
  }



}
