import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Player } from './player';

@NgModule({
  declarations: [
    Player,
  ],
  imports: [
    IonicPageModule.forChild(Player),
  ],
  exports: [
    Player
  ]
})
export class PlayerModule {}
