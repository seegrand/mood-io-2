import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LikedGenresPage } from './liked-genres';

@NgModule({
  declarations: [
    LikedGenresPage,
  ],
  imports: [
    IonicPageModule.forChild(LikedGenresPage),
  ],
  exports: [
    LikedGenresPage
  ]
})
export class LikedGenresModule {}
