import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, Platform} from 'ionic-angular';
import {File} from '@ionic-native/file';
import {IndexMonitorResultPage} from "./indexMonitorResult";
import {NetworkServiceProvider} from "../../providers/network-service/network-service";
import {Indicator} from './indicator';
import {Transfer, TransferObject} from "@ionic-native/transfer";
import {IndexPage} from "../index/index";
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {Storage} from "@ionic/storage";
import {AndroidPermissions} from "@ionic-native/android-permissions";


@Component({
  selector: 'page-MobileIndexMonitor',
  templateUrl: 'mobileIndexMonitor.html',
  providers: [NetworkServiceProvider, File,Transfer,TransferObject,AndroidPermissions]
})


export class MobileIndexMonitorPage {

  indicator=new Indicator("指标","","","30","60",1);

  env = environment;

  submmitted= false;

  onSubmit(){ this.submmitted= true }
  constructor(public navCtrl: NavController,
              private file:File,
              private transfer: Transfer,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public http: Http,
              public storage: Storage,
              private androidPermissions: AndroidPermissions,
              public platform: Platform) {

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      console.log(TransferObject);
    }

  }
  doSearch(){
    let parameter="indexMonitorResult?index="+this.indicator.index+"&cell="+this.indicator.cell+"&topx="+this.indicator.topx
      +"&chinese="+this.indicator.chinese+"&sts="+this.indicator.sts
      +"&time="+this.indicator.time;
    this.navCtrl.push(IndexMonitorResultPage,{
      parameters: parameter,
      index: this.indicator.index
    });
  }

  doExport(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      enableBackdropDismiss: true
    });
    loading.present();

    let url = this.env.host+'exportIndexMonitor?index='+this.indicator.index+"&cell="+this.indicator.cell+"&topx="+this.indicator.topx
      +"&chinese="+this.indicator.chinese+"&sts="+this.indicator.sts
      +"&time="+this.indicator.time;
    if(this.platform.is("mobileweb")){
      this.storage.get("token")
        .then( token => {
          url = url + "&token=" + token;
          url=encodeURI(url);
          location.href=url;
          loading.dismiss();
        })
    } else if(this.platform.is("android")){
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.LOCALSTORAGE).then(
        success => console.log('permission granted'),
        err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.LOCALSTORAGE)
      );
      const fileTransfer: TransferObject = this.transfer.create();
      this.storage.get("token")
        .then( token => {
          url = url + "&token=" + token;
          url=encodeURI(url);
          fileTransfer
            .download(url, this.file.externalRootDirectory+"/"+this.indicator.index+"提取结果.xlsx")
            .then((entry) => {
            loading.dismiss();
              let alert = this.alertCtrl.create({
                title: '提取成功，文件位置在SD卡根目录下',
                buttons: ['确定']
              });
              alert.present();
            }, (error) => {
              loading.dismiss();
              let alert2 = this.alertCtrl.create({
                title: '提取失败，请检查应用是否开启存储权限！',
                buttons: ['确定']
              });
              alert2.present();
            });
    })
    }else{
      this.storage.get("token")
        .then( token => {
          url = url + "&token=" + token;
          url=encodeURI(url);
          location.href=url;
          loading.dismiss();
        })
    }

  }



  toIndex(){
    this.navCtrl.popToRoot(IndexPage);
  }

}
