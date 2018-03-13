import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NetworkServiceProvider} from "../../providers/network-service/network-service";
import {StatisticsResultPage} from "./statisticsResult/statisticsResult";
import {IndexPage} from "../index/index";

@Component({
  selector: 'page-workOrderStatistics',
  templateUrl: 'workOrderStatistics.html',
  providers: [NetworkServiceProvider]
})
export class WorkOrderStatisticsPage {

  public county: string = '-1';
  public subMaintain: string = '-1';
  public questionType: string = '-1';
  public frequency: string = "";

  public beginTime: any;
  public endTime: any;



  constructor(public navCtrl: NavController) {
    this.beginTime = new Date().toISOString();
    this.endTime = new Date().toISOString();
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
    let parameter="getWorkOrderStatistics?county="+this.county+"&subMaintain="+this.subMaintain
      +"&questionType="+this.questionType+"&frequency="+this.frequency
      +"&beginTime="+this.beginTime.substr(0,10)+"&endTime="+this.endTime.substr(0,10);

    this.navCtrl.push(StatisticsResultPage,{
      parameters: parameter
    });
  }

}
