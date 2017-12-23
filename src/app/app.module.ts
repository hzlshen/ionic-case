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
// import {LoginPage} from "../pages/login/login";
import {MenuPage} from "../pages/menu/menu";
import {SearchPage} from "../pages/search/search";
import {SettingsPage} from "../pages/settings/settings";
import {SignupPage} from "../pages/signup/signup";
// import {TutorialPage} from "../pages/tutorial/tutorial";
import {WelcomePage} from "../pages/welcome/welcome";
import { Settings } from '../providers/providers';
import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import {Items} from "../mocks/providers/items";
import {Camera} from "@ionic-native/camera";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  
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
    // LoginPage,
    MenuPage,
    SearchPage,
    SettingsPage,
    SignupPage,
    // TutorialPage,
    WelcomePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:(createTranslateLoader),
        deps:[HttpClient]
      }
    }),
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
    // LoginPage,
    MenuPage,
    SearchPage,
    SettingsPage,
    SignupPage,
    // TutorialPage,
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
