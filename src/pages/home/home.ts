import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SesionPage } from '../sesion/sesion'
import { RegistroPage } from '../registro/registro'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
bird:string = "Unión MX"


  slides = [
    {
      title: "¡Bienvenido a " + this.bird + "!",
      description: "Donde puedes interactuar y dar tu opinión sobre las problemáticas de tu entidad de manera fácil.",
      image: "assets/imgs/logo.png",
    },
    {
      title: "¿Cómo funciona?",
      description: "Podrás escoger cualquiera de los temas a tratar, ver qué se está haciendo y opinar sobre éstos.",
      image: "assets/imgs/gif_mano.gif",
    },
    {
      title: "¿Cómo evaluar?",
      description: "Evaluarás del 1 al 5, siendo el 1 el máximo valor y el 5 el mínimo.",
      image: "assets/imgs/gif-interrogacion.gif",
    }
  ];

  constructor(public navCtrl: NavController) {
      //this.navCtrl.push( RegistroPage )
  }
  go(){
    this.navCtrl.push( RegistroPage )
  }

}
