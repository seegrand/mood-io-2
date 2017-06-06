import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecentMoodsPage } from './recent-moods';

@NgModule({
  declarations: [
    RecentMoodsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecentMoodsPage),
  ],
  exports: [
    RecentMoodsPage
  ]
})
export class RecentMoodsModule {}
