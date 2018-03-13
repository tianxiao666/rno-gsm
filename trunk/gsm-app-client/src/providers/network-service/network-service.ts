import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {AlertController, Events, LoadingController} from "ionic-angular";
import {Storage} from "@ionic/storage";
import {environment} from "../../environments/environment";

/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NetworkServiceProvider {

  env = environment;
  token=null;
  private DataServerIP: string = this.env.host;
  constructor(public http: Http
    ,public alertCtrl: AlertController
    ,public loadingCtrl: LoadingController
    ,public events: Events
    ,public storage: Storage) {}

  login(params): Promise<any>{
    let loading = this.loadingCtrl.create({
      content: '请稍候...',
      enableBackdropDismiss: true
    });
    loading.present();
    return new Promise((resolve,reject) => {
      this.http.get(this.DataServerIP + params )//, crossDomain: true}
        .map(res => res.json())
        .subscribe(data => {
            loading.dismiss();
            resolve(data);
          },
          error => {
            loading.dismiss();
            reject("登陆失败");
          });
    });
  }

  load(params): Promise<any>{
    let loading = this.loadingCtrl.create({
      content: '请稍候...',
      enableBackdropDismiss: true
    });
    loading.present();
    return new Promise((resolve,reject) => {
      this.storage.get("token")
        .then( token => {
          if(params.indexOf("?")>=0){
            params=params+"&token="+token;
          }else{
            params=params+"?token="+token;
          }
          let headers = new Headers();
          headers.append("Authorization", token);
          let options = new RequestOptions({headers: headers});
          this.http.get(this.DataServerIP + params ,options )//, crossDomain: true}
            .map(res => res.json())
            .subscribe(data => {
              loading.dismiss();
              resolve(data);
            },
            error => {
              loading.dismiss();
              reject("未登录");
            });
          })
        .catch(getTokenError => {
          loading.dismiss();
          reject("获取token失败");
        })
    });
  }
}
