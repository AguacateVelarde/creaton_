import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SesionPage } from '../sesion/sesion'
import { AuthProvider } from '../../providers/auth/auth'
import { DatabaseProvider } from '../../providers/database/database'

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
   public registerCredentials = {
     email: '',
     nombre: '',
     estado: '',
     municipio: '',
     password: '',
     username: ''
   };


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public db: DatabaseProvider
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  getIniciar(){
    this.navCtrl.push( SesionPage )
  }

  register(){
    this.auth.signup( this.registerCredentials.email, this.registerCredentials.password, this.registerCredentials )
  }
}
