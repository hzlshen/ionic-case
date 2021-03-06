import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers/providers';
import { Item } from '../../models/item';
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  currentItems:any=[];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public items:Items
  ) {
  }
  
  getItems(ev){
    let val = ev.target.value;
    if(!val || !val.trim()){
      this.currentItems=[];
      return;
    }
    this.currentItems=this.items.query({
      name:val
    });
  }

  openItem(item:Item){
    this.navCtrl.push('ItemDetailPage',{
      item:item
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
