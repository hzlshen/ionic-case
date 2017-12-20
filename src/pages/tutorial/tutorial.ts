import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";

export interface Slide{
  title:string;
  description:string;
  image:string;
}



@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
  
  slides:Slide[];
  showSkip = true;
  dir:string ='ltr';

  constructor(public navCtrl: NavController, public navParams: NavParams,translate:TranslateService) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

}
