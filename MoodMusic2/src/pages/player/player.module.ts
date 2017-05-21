import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// import { PlayerPage } from './player';

import { PlayerBackgroundService } from '../../services/utils/player-background.service';

@NgModule({
  declarations: [

  ],
  imports: [
    // IonicPageModule.forChild(PlayerPage),
  ],
  exports: [

  ],
  providers: [
    PlayerBackgroundService
  ]
})
export class PlayerModule {}
