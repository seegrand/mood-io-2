import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DislikedGenresPage } from './disliked-genres';

@NgModule({
  declarations: [
    DislikedGenresPage,
  ],
  imports: [
    IonicPageModule.forChild(DislikedGenresPage),
  ],
  exports: [
    DislikedGenresPage
  ]
})
export class DislikedGenresModule {}
