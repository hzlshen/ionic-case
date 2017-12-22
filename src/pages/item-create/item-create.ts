import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Camera} from "@ionic-native/camera";


@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html',
})
export class ItemCreatePage {
  
  @ViewChild('fileInput') fileInput;
  
  isReadyToSave:boolean;
  
  item:any;
  
  form:FormGroup;
  
  constructor(
    public viewCtrl:ViewController,
    public camera:Camera, public navCtrl: NavController, public navParams: NavParams,formBuilder:FormBuilder) {
    this.form=formBuilder.group({
      profilePic:[''],
      name:['',Validators.required],
      about:['']
    });
    
    this.form.valueChanges.subscribe((v)=>{
      this.isReadyToSave = this.form.valid;
    });
    
    this.form.valueChanges.subscribe((v)=>{
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemCreatePage');
  }
  
  getPicture(){
    if(Camera['installed']()){
      this.camera.getPicture({
        destinationType:this.camera.DestinationType.DATA_URL,
        targetWidth:96,
        targetHeight:96
      }).then((data)=>{
        this.form.patchValue({'profilePic': 'data:image/jpg;base64,'+data});
      },(err)=>{
        console.log("to take photo");
      })
    }else{
      this.fileInput.nativeElement.click();
    }
  }
  
  processWebImage(event){
    let reader = new FileReader();
    reader.onload = (readerEvent)=>{
      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({'profilePic':imageData});
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  
  getProfileImageStyle(){
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }
  
  cancel(){
    this.viewCtrl.dismiss();
  }
  
  done(){
    if(!this.form.valid){return;}
    this.viewCtrl.dismiss(this.form.value);
  }

}
