import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule, Storage } from '@ionic/storage';
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
import { Settings } from '../providers/providers';
import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import {Items} from "../mocks/providers/items";
import {Camera} from "@ionic-native/camera";
import {HttpClientModule} from "@angular/common/http";


export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

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
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Api,
    User,
    Items,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
