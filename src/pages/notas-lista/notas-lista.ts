import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database'
import { NotasPage } from '../notas/notas'

@IonicPage()
@Component({
  selector: 'page-notas-lista',
  templateUrl: 'notas-lista.html',
})
export class NotasListaPage {
  zona:number
  category:number
  title:string
  list:any



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: DatabaseProvider
  ) {
    this.zona = this.navParams.get( 'zona' )
    this.category = this.navParams.get( 'category' )

    switch( this.category ){
      case 1 :
         this.title = "Sector salud";
       break;
       case 2:
         this.title = "Cultura";
       break;
       case 3:
         this.title = "Educación";
       break;
       case 4:
         this.title = "Infraestructura";
       break;
       case 5:
         this.title = "Laboral";
       break;
       case 6:
         this.title = "Ciencia/tecnología";
       break;

    }
    let query = "/"+String( this.zona ) + "/" + String( this.category )
    this.list = this.db.getData( query )
    console.log( this.list )

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotasListaPage');
    //console.log( this.obj )
  }

  getNotas( data, index ){
    this.navCtrl.push( NotasPage, {
      obj : data,
      category : this.category,
      zona : this.zona,
      id: index
    } )
  }

  numberT( obj ){
      var count=0;
    for(var prop in obj) {
       if (obj.hasOwnProperty(prop)) {
          ++count;
       }
    }
  return count;



  }

}
