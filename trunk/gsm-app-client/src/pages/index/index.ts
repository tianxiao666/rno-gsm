import { Component } from '@angular/core';
import {AlertController, Events, NavController} from 'ionic-angular';
import {MobileIndexMonitorPage} from "../mobileIndexMonitor/mobileIndexMonitor";
import {WorkOrderProcessPage} from "../workOrderProcess/workOrderProcess";
import {WorkOrderExtractPage} from "../workOrderExtract/workOrderExtract";
import {WorkOrderBatchProcessPage} from "../workOrderBatchProcess/workOrderBatchProcess";
import {WorkOrderStatisticsPage} from "../workOrderStatistics/workOrderStatistics";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {

  monitorPage: any= MobileIndexMonitorPage;
  processPage: any= WorkOrderProcessPage;
  extractPage: any= WorkOrderExtractPage;
  batchProcessPage: any= WorkOrderBatchProcessPage;
  statisticsPage: any= WorkOrderStatisticsPage;
  LoginStatus: boolean = false;

  constructor(public navCtrl: NavController
  ,public storage: Storage
  ,public events: Events
  ,private alertCtrl: AlertController){
    this.events.subscribe("user.login", (LoginName) => {
      this.LoginStatus = true;
    });
    this.events.subscribe("user.logout", () => {
      this.LoginStatus = false;
    });
  }

  doLogout(){
    this.alertCtrl.create({
      message: '要注销登录吗？',
      buttons: [{
        text: '取消'
      },{
        text: '确认',
        handler: () => {
          this.events.publish("user.logout",'');
          this.LoginStatus = false;
        }
      }]
    }).present();
  }
}
