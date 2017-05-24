import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeMyMoodPage } from './change-my-mood';

@NgModule({
  declarations: [
    ChangeMyMoodPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeMyMoodPage),
  ],
  exports: [
    ChangeMyMoodPage
  ]
})
export class ChangeMyMoodModule {}
