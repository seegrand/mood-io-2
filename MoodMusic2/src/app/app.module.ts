import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LikedGenresPage } from '../pages/liked-genres/liked-genres';
import { DislikedGenresPage } from '../pages/disliked-genres/disliked-genres';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { ChangeMyMoodPage } from '../pages/change-my-mood/change-my-mood';
import { PlayerPage } from '../pages/player/player';
import { TabsPage } from '../pages/tabs/tabs';

// Services
import { APIService } from '../services/api.service';
import { GenreService } from '../services/genre.service';
import { MoodService } from '../services/mood.service';

import { PlayerBackgroundService } from '../services/utils/player-background.service';

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    LoginPage,
    RegisterPage,
    LikedGenresPage,
    DislikedGenresPage,
    HomePage,
    SearchPage,
    SettingsPage,
    ChangeMyMoodPage,
    PlayerPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    LoginPage,
    RegisterPage,
    LikedGenresPage,
    DislikedGenresPage,
    HomePage,
    SearchPage,
    SettingsPage,
    ChangeMyMoodPage,
    PlayerPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    APIService,
    GenreService,
    MoodService,
    PlayerBackgroundService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
