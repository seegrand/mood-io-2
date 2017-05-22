import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoodDetailsPage } from './mood-details';

@NgModule({
  declarations: [
    MoodDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MoodDetailsPage),
  ],
  exports: [
    MoodDetailsPage
  ]
})
export class MoodDetailsModule {}
