import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, Platform} from 'ionic-angular';
import {Transfer, TransferObject} from "@ionic-native/transfer";
import {File} from "@ionic-native/file";
import {environment} from "../../environments/environment";
import {Storage} from "@ionic/storage";
import {Headers, Http, RequestOptions} from "@angular/http";
import {IndexPage} from "../index/index";
// import {saveAs} from 'file-saver'

@Component({
  selector: 'page-WorkOrderExtract',
  templateUrl: 'workOrderExtract.html',
  providers: [File,Transfer,TransferObject]
})
export class WorkOrderExtractPage {

  public subMaintain: string = "-1";
  public index: string = "-1";
  public cell: string ="";
  public  chinese: string ="";
  public beginTime: any;
  public endTime: any;
  fileTransfer: TransferObject;
  env = environment;

  constructor(public navCtrl: NavController
    ,private transfer: Transfer
    ,private file: File
    ,public storage: Storage
    ,public alertCtrl: AlertController
    ,public http: Http
    ,public plt: Platform
    ,public loadingCtrl: LoadingController
  ) {


    this.beginTime = new Date().toISOString();
    this.endTime = new Date().toISOString();
    this.fileTransfer = transfer.create();
  }

  toIndex(){
    this.navCtrl.popToRoot(IndexPage);
  }

  checkTime(source){
    if(this.beginTime>this.endTime){
      if(source=="endTime"){
        this.beginTime = this.endTime;
      }else if(source=="beginTime"){
        this.endTime = this.beginTime;
      }
    }
  }
  doSearch(){
    this.storage.get("token")
      .then( token => {
        if(this.plt.is('mobileweb')){   //似乎存在优先级问题。此mobileweb必须放在android前面，否则电脑及安卓浏览器都会优先响应'android'平台
          // let headers = new Headers();
          // headers.append("Authorization", token);
          // let options = new RequestOptions({headers: headers,responseType: ResponseContentType.Blob});
          // let loading = this.loadingCtrl.create({
          //   content: '请稍候...',
          //   enableBackdropDismiss: true
          // });
          // loading.present();
          // this.http.get(this.env.host+"extractWorkOrder?subMaintain="+this.subMaintain+"&index="+this.index+"&cell="+this.cell+"&chinese="+this.chinese
          //   +"&beginTime="+this.beginTime+"&endTime="+this.endTime+"&token="+token,options)
          //   .subscribe(res => {
          //     saveAs(new Blob([res.blob()], { type: 'application/x.ms-excel' }),'工单提取结果.xlsx');
          //     loading.dismiss();
          //   },
          //   error => {
          //     loading.dismiss()
          //     this.alertCtrl.create({
          //       message:  '文件下载出错！',
          //       buttons: ['OK']
          //     }).present();
          //   });
          let url = this.env.host+"extractWorkOrder?subMaintain="+this.subMaintain+"&index="+this.index+"&cell="+this.cell+"&chinese="+this.chinese
            +"&beginTime="+this.beginTime+"&endTime="+this.endTime+"&token="+token;
          let ur = encodeURI(url);
          location.href = ur;
        }
        else if(this.plt.is('android')){
          let loading = this.loadingCtrl.create({
            content: '请稍候...',
            enableBackdropDismiss: true
          });
          loading.present();
          let headers = new Headers();
          headers.append("Authorization", token);
          let options = new RequestOptions({headers: headers});
          this.fileTransfer.download(this.env.host+"extractWorkOrder?subMaintain="+this.subMaintain+"&index="+this.index+"&cell="+this.cell+"&chinese="+this.chinese
            +"&beginTime="+this.beginTime+"&endTime="+this.endTime+"&token="+token, this.file.externalRootDirectory + '工单提取结果.xlsx', false, options)
            .then((entry) => {
              loading.dismiss();
              let alert = this.alertCtrl.create({
                title: '提取成功，文件位置在SD卡根目录下',
                buttons: ['确定']
              });
              alert.present();

            }, (error) => {
              // handle error
              loading.dismiss();
              this.alertCtrl.create({
                message:  '文件下载出错！',
                buttons: ['OK']
              }).present();
            });
        }
        else {   //当平台是非安卓时，使用angular的网页下载模式
          // let loading = this.loadingCtrl.create({
          //   content: '请稍候...',
          //   enableBackdropDismiss: true
          // });
          // loading.present();
          // let headers = new Headers();
          // headers.append("Authorization", token);
          // let options = new RequestOptions({headers: headers,responseType: ResponseContentType.Blob});
          // this.http.get(this.env.host+"extractWorkOrder?subMaintain="+this.subMaintain+"&index="+this.index+"&cell="+this.cell+"&chinese="+this.chinese
          //   +"&beginTime="+this.beginTime+"&endTime="+this.endTime+"&token="+token,options)
          //   .subscribe(res => {
          //       saveAs(new Blob([res.blob()], { type: 'application/x.ms-excel' }),'工单提取结果.xlsx');
          //       loading.dismiss();
          //     },
          //     error => {
          //     loading.dismiss();
          //       this.alertCtrl.create({
          //         message:  '文件下载出错！',
          //         buttons: ['OK']
          //       }).present();
          //     });
          //以下为简单下载方式，但没有错误处理机制
          let url = this.env.host+"extractWorkOrder?subMaintain="+this.subMaintain+"&index="+this.index+"&cell="+this.cell+"&chinese="+this.chinese
          +"&beginTime="+this.beginTime+"&endTime="+this.endTime+"&token="+token;
          let ur = encodeURI(url);
          location.href = ur;
        }
      });
  }
}
