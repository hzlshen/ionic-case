import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import {TranslateService} from "@ngx-translate/core";


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  account:{name:string,email:string,password:string}={
    name:'Hello 老王',
    email:'test@example.com',
    password:'test'
  };
  
  private signupErrorString:string;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public user:User,
              public toastCtrl:ToastController,
              public translateService:TranslateService
  ) {
    this.translateService.get('SIGNUP_ERROR').subscribe((value)=>{
      this.signupErrorString=value;
    })
  }
  
  doSignup(){
    this.user.signup(this.account).subscribe((resp)=>{
      this.navCtrl.push(MainPage);
    },(err)=>{
      this.navCtrl.push(MainPage);
      
      let toast = this.toastCtrl.create({
        message:this.signupErrorString,
        duration:3000,
        position:'top'
      });
      toast.present();
    })
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
