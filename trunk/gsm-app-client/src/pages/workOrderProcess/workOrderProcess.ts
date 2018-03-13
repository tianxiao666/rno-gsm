import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {WorkOrder} from "./workOrder";
import {WorkOrderListPage} from "./workOrderList/workOrderList";
import {IndexPage} from "../index/index";
import {NetworkServiceProvider} from "../../providers/network-service/network-service";

@Component({
  selector: 'page-workOrderProcess',
  templateUrl: 'workOrderProcess.html',
  providers: [NetworkServiceProvider]
})
export class WorkOrderProcessPage {

  workOrder =new WorkOrder("全部","全部","","",new Date().toISOString(),new Date().toISOString(),"0");

  submmitted= false;

  onSubmit(){ this.submmitted= true }

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {
    this.workOrder.beginTime = new Date().toISOString();
    this.workOrder.endTime = new Date().toISOString();
  }

  checkTime(source){
    if(this.workOrder.beginTime>this.workOrder.endTime){
      if(source=="endTime"){
        this.workOrder.beginTime = this.workOrder.endTime;
      }else {
        this.workOrder.endTime = this.workOrder.beginTime;
      }
    }
  }

  doSearch(){
    let parameter="getWorkOrder?maintain="+this.workOrder.maintain+"&indicator="+this.workOrder.indicator
      +"&cell="+this.workOrder.cell
      +"&chinese="+this.workOrder.chinese+"&beginTime="+this.workOrder.beginTime
      +"&endTime="+this.workOrder.endTime+"&start=0";
    this.navCtrl.push(WorkOrderListPage,{
      parameters: parameter
    });
  }

  toIndex(){
    this.navCtrl.popToRoot(IndexPage);
  }

}
