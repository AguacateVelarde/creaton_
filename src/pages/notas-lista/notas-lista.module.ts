import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotasListaPage } from './notas-lista';

@NgModule({
  declarations: [
    NotasListaPage,
  ],
  imports: [
    IonicPageModule.forChild(NotasListaPage),
  ],
})
export class NotasListaPageModule {}
