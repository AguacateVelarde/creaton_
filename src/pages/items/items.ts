import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriasPage } from '../categorias/categorias'

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }

  public regions = [
    {
      name: "Sierra Norte",
      population: "668,859 ",
      image: "assets/reg/1.png",
      url : 1
    },

    {
      name: "Sierra Nororiental",
      population: "532,017",
      image: "assets/reg/2.png",
      url : 2
    },

    {
      name: "Valle de Serdán",
      population: "650,933",
      image: "assets/reg/3.png",
      url : 3
    },

    {
      name: "Angelópolis",
      population: "2,651,015",
      image: "assets/reg/4.png",
      url : 4
    },

    {
      name: "Valle de Atlixco",
      population: "378,169",
      image: "assets/reg/5.png",
      url : 5
    },

    {
      name: "Mixteca",
      population: "254,100",
      image: "assets/reg/6.png",
      url : 6
    },

    {
      name: "Sierra Negra",
      population: "644,736",
      image: "assets/reg/7.png",
      url : 7
    }
  ];

  getCategory( category:number ){
    this.navCtrl.push( CategoriasPage, {
        url_category : category
    })
  }

}
