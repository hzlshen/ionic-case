import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { User } from '../../providers/providers';
import {TranslateService} from "@ngx-translate/core";
import {MainPage} from "../pages";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  account:{email:string,password:string} = {
    email:'test@example.com',
    password:'test'
  }
  
  private loginErrorString:string;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public user:User,
    public toastCtrl:ToastController,
    public translateService:TranslateService
  ) {
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }
  
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  

}
