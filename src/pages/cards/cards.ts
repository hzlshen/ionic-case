import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

  cardItems:any[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cardItems=[
      {
        user:{
          avatar: 'assets/img/marty-avatar.png',
          name: '大王'
        },
        date: 'November 5, 1955',
        image: 'assets/img/advance-card-bttf.png',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      },
      {
        user:{
          avatar: 'assets/img/marty-avatar.png',
          name: '二王'
        },
        date: 'November 5, 1955',
        image: 'assets/img/advance-card-bttf.png',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      },
      {
        user:{
          avatar: 'assets/img/marty-avatar.png',
          name: '三王'
        },
        date: 'November 5, 1955',
        image: 'assets/img/advance-card-bttf.png',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

}
