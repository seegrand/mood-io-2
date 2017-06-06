import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecentSongsPage } from './recent-songs';

@NgModule({
  declarations: [
    RecentSongsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecentSongsPage),
  ],
  exports: [
    RecentSongsPage
  ]
})
export class RecentSongsModule {}
