import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';

interface PageItem{
  title:string
  component:any
}
type PageList  = PageItem[]

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  @ViewChild(Nav) nav:Nav;
  
  rootPage:any = 'ContentPage';
  
  pages:PageList;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages=[
      {title:'Sign in',component:'LoginPage'},
      {title:'Signup',component:'SignupPage'}
    ];
  }

  openPage(page:PageItem){
    this.nav.setRoot(page.component);
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
