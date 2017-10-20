import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SesionPage } from '../pages/sesion/sesion'
import { RegistroPage } from '../pages/registro/registro'
import { ItemsPage } from '../pages/items/items'
import { CategoriasPage } from '../pages/categorias/categorias'
import { NotasPage } from '../pages/notas/notas'
import { NotasListaPage } from '../pages/notas-lista/notas-lista'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { HttpModule } from '@angular/http';
import { DatabaseProvider } from '../providers/database/database';

import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

import { OnCreate } from '../directives/on-create/on-create'
import { Observable } from 'rxjs/Observable';




export const config = {
    apiKey: "AIzaSyCCJw5lANEIyHWCwO3AAxwQiVbYZB7OVd0",
    authDomain: "paso-app-com.firebaseapp.com",
    databaseURL: "https://paso-app-com.firebaseio.com",
    projectId: "paso-app-com",
    storageBucket: "paso-app-com.appspot.com",
    messagingSenderId: "701565952208"
  };



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SesionPage,
    RegistroPage,
    ItemsPage,
    CategoriasPage,
    NotasPage,
    NotasListaPage,
    OnCreate
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    AngularFireModule.initializeApp(config),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SesionPage,
    RegistroPage,
    ItemsPage,
    CategoriasPage,
    NotasPage,
    NotasListaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    //HttpModule,
    AngularFireAuth,
    DatabaseProvider,
    AngularFireDatabase,
    GoogleMaps,
    Geolocation
  ]
})
export class AppModule {}
