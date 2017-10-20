import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database'
import { NotasPage } from '../notas/notas'
import { NotasListaPage } from '../notas-lista/notas-lista'


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
  url_category:number;
  news: any;
  categorias = [
    {
      name : "Sector Salud",
      id : 1,
      logo : "ios-medkit-outline"
    },{
      name : "Cultura",
      id : 2,
      logo : "ios-book-outline"
    },{
      name : "Educación",
      id : 3,
      logo : "ios-school-outline"
    },{
      name : "Infraestructura",
      id : 4,
      logo : "ios-home-outline"
    },{
      name : "Laboral",
      id : 5,
      logo : "ios-hammer-outline"
    },{
      name : "Ciencia/Tecnología",
      id : 6,
      logo : "ios-briefcase-outline"
    }
  ]
  title:string
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: DatabaseProvider
  ) {
       this.url_category = this.navParams.get('url_category');
       switch( this.url_category ){
         case 1 :
            this.title = "Sierra Norte";
          break;
          case 2:
            this.title = "Sierra Nororiental";
          break;
          case 3:
            this.title = "Valle de Serdán";
          break;
          case 4:
            this.title = "Angelópolis";
          break;
          case 5:
            this.title = "Valle de Atlixco";
          break;
          case 6:
            this.title = "Mixteca";
          break;
          case 7:
            this.title = "Sierra Negra";
          break;
       }

  }

  ionViewDidLoad() { }

  getNotas( zona:number, category:number ){
    this.navCtrl.push( NotasListaPage, {
      zona : zona,
      category : category
    } )
  }



}
