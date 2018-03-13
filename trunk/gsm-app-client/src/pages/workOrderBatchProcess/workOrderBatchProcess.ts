import { Component } from '@angular/core';
import {File} from '@ionic-native/file';
import {AlertController, LoadingController, NavController, Platform} from 'ionic-angular';
import {IndexPage} from "../index/index";
import {FileUploadOptions, Transfer, TransferObject} from "@ionic-native/transfer";
import {environment} from "../../environments/environment";
import {Storage} from "@ionic/storage";
import {Http} from "@angular/http";
import {FileUploader} from "ng2-file-upload";
import {FileChooser} from "@ionic-native/file-chooser";



@Component({
  selector: 'page-WorkOrderBatchProcess',
  templateUrl: 'workOrderBatchProcess.html',
  providers: [File,Transfer,FileChooser,TransferObject]
})
export class WorkOrderBatchProcessPage {
  env=environment;
  uri="";
  public uploader: FileUploader;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              private file:File,
              private fileChooser: FileChooser,
              private transfer: Transfer,
              public storage: Storage,
              public platform: Platform,
              public http: Http) {
    let url=this.env.host+'processWorkOrderBatch';
    this.storage.get("token")
      .then( token => {
        url = url + "?token=" + token;
        this.uploader = new FileUploader({
          url: encodeURI(url),
          method: 'POST',
          itemAlias: "工单.xlsx"
        });
      })
  }

  uploadFile(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      enableBackdropDismiss: true
    });
    loading.present();
    let url=this.env.host+'processWorkOrderBatch';
    //console.log(this.uploader.queue[0].file.name);
    if(this.uploader.queue[0]==undefined){
      loading.dismiss();
      let alert =this.alertCtrl.create({
        title: "请先上传excel文件",
        buttons: ['确定']
      });
      alert.present();
      return false;
    }
    if(this.uploader.queue[0].file.name.indexOf(".xlsx")<0
      &&this.uploader.queue[0].file.name.indexOf(".xls")<0){
      loading.dismiss();
      this.uploader.removeFromQueue(this.uploader.queue[0]);
      let alert = this.alertCtrl.create({
        title: "请上传xls或xlsx格式工单处理文件",
        buttons: ['确定']
      });
      alert.present();
      return false;
    }
    //console.log(this.file.dataDirectory);
    if(this.platform.is("android") && !this.platform.is("mobileweb")){
      let options: FileUploadOptions ={
        fileKey: 'file',
        fileName: '工单提取结果.xlsx',
        httpMethod: 'POST',
        mimeType: 'application/vnd.ms-excel'
      };
      const fileTransfer: TransferObject = this.transfer.create();
      //console.log(url);
      this.storage.get("token")
        .then( token => {
          url = url + "?token=" + token;
            fileTransfer.upload(this.uri, encodeURI(url), options)
              .then((data) => {
                loading.dismiss();
                let alert = this.alertCtrl.create({
                  title: data.response,
                  buttons: ['确定']
                });
                alert.present();
              }, (err) => {
                loading.dismiss();
                let alert2 = this.alertCtrl.create({
                  title: '批量处理失败！',
                  buttons: ['确定']
                });
                alert2.present();
              })
        })
    }else{

      this.uploader.queue[0].onSuccess =
            (response, status, headers) => {
              loading.dismiss();
              if(status == 200){
                let alert = this.alertCtrl.create({
                  title: response,
                  buttons: ['确定']
                });
                alert.present();
              }else{
                let alert = this.alertCtrl.create({
                  title: this.file.dataDirectory,
                  buttons: ['确定']
                });
                alert.present();
              }
            };
      this.uploader.queue[0].upload();
    }
  }

  selectedFileOnChanged(event){
    console.log(event.target.files);
    if(this.platform.is("android") && !this.platform.is("mobileweb")){
      this.fileChooser.open().then(
        uri => this.uri= uri
      ).catch(e => console.log(e));
    }
  }

  toIndex(){
    this.navCtrl.popToRoot(IndexPage);
  }
}
