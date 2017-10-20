import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Rx'
import { AngularFireDatabase } from 'angularfire2/database';
//import {  FirebaseListObservable } from 'angularfire2';




@Injectable()
export class DatabaseProvider {

  constructor(
    public http: HttpModule,
    public db: AngularFireDatabase
  ) {

  }
getData( data:string ){
  return this.db.list( data ).valueChanges()
}

push(  data ){
  this.db.list('usuarios/').push( data);

         //this.db.object("usuarios/").child(correo).setValue(data);

}

pushComment( data, correo, route ){

    route += "comment"
    let entry = this.db.list( route ).push( {
      comentario : data,
      nombre : "Usuario Nuevo"
    } )

}

updateCont( zonaCategoria:string, id:string, cont_:number, cont_user1 ){

  let quer = zonaCategoria + '/' + String(id)

  this.db.object(quer).update({
      cont : cont_,
      cont_user : cont_user1
  })
}


}
