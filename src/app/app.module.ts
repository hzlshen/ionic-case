import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CardsPage} from "../pages/cards/cards";
import {ContentPage} from "../pages/content/content";
import {ItemCreatePage} from "../pages/item-create/item-create";
import {ListMasterPage} from "../pages/list-master/list-master";
import {LoginPage} from "../pages/login/login";
import {MenuPage} from "../pages/menu/menu";
import {SearchPage} from "../pages/search/search";
import {SettingsPage} from "../pages/settings/settings";
import {SignupPage} from "../pages/signup/signup";
import {TutorialPage} from "../pages/tutorial/tutorial";
import {WelcomePage} from "../pages/welcome/welcome";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CardsPage,
    ContentPage,
    ItemCreatePage,
    ListMasterPage,
    LoginPage,
    MenuPage,
    SearchPage,
    SettingsPage,
    SignupPage,
    TutorialPage,
    WelcomePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CardsPage,
    ContentPage,
    ItemCreatePage,
    ListMasterPage,
    LoginPage,
    MenuPage,
    SearchPage,
    SettingsPage,
    SignupPage,
    TutorialPage,
    WelcomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
