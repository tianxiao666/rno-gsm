import {Component} from "@angular/core";
import {NavController, NavParams, ToastController} from "ionic-angular";
import {IndexPage} from "../../index/index";
import {NetworkServiceProvider} from "../../../providers/network-service/network-service";
import {Storage} from "@ionic/storage";
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'page-workOrderDetail',
  templateUrl: 'workOrderDetail.html'
})
export class WorkOrderDetailPage {
  env = environment;
  public results: any;
  oneData=[];
  props=[];
  handler="";
  handleData="";
  handleResult=[];
  constructor(public navController: NavController,
              public navParams: NavParams,
              public netWorkService: NetworkServiceProvider,
              public toastCtrl: ToastController,
              public http: Http,
              public storage: Storage){
    netWorkService.load(navParams.data.parameters).then(
      data =>{
        let res=JSON.stringify(data);
        if(res.trim()=="" ){
          let toast= this.toastCtrl.create({
            message: '抱歉，无查询结果',
            position: 'middle'
          });
          toast.present();
          return false;
        }
        this.results=JSON.parse(res);
        console.log(this.results);
        for(let re in this.results){
          if(re !="处理人" && re !="处理方法"
          && re !="app处理人" && re != "app处理方法" && re !="处理结果"){
            this.props.push(re);
          }else{
            if(re =="处理人" || re=="app处理人"){
              if(this.results["处理人"].trim() !=""){
                this.handler=this.results["处理人"].trim();
              }else{
                this.handler=this.results["app处理人"].trim();
              }
            }
            if(re=="处理方法" || re=="app处理方法"){
              if(this.results["处理方法"].trim() !=""){
                this.handleData=this.results["处理方法"].trim();
              }else{
                this.handleData=this.results["app处理方法"].trim();
              }
            }
            if(re=="处理结果"){
              if(this.results["处理结果"].trim() !=""){
                if(this.results["处理结果"].trim()=="待处理"){
                  this.handleResult.push("待处理");
                  this.handleResult.push("正在处理");
                  this.handleResult.push("已完成");
                  this.handleResult.push("延迟处理")
                }else{
                  let handleres=["待处理","正在处理","已完成","延迟处理"];
                  for(let hand of handleres){
                    if(this.results["处理结果"].trim()==hand){
                      this.handleResult.push(hand);
                    }
                  }
                  for(let hand of handleres){
                    if(this.results["处理结果"].trim()!=hand){
                      this.handleResult.push(hand);
                    }
                  }
                }
              }else{
                this.handleResult.push("待处理");
                this.handleResult.push("正在处理");
                this.handleResult.push("已完成");
                this.handleResult.push("延迟处理")
              }
              console.log(this.handleResult);
            }
          }
        }

      }
    ).catch(error => {
      console.log(error);

    });

  }

  updateWorkOrderById(id){

    if(this.handler.trim()=="" || this.handleData.trim()==""){
      let toast= this.toastCtrl.create({
        message: '请填写处理人和处理方法！',
        position: 'middle',
        duration: 5000
      });
      toast.present();
      return false;
    }
    let treatResult=document.getElementById("reSelect").innerText;
    if(treatResult.trim()=="待处理"){
      let toast= this.toastCtrl.create({
        message: '请修改处理结果状态！',
        position: 'middle',
        duration: 5000
      });
      toast.present();
      return false;
    }
    let url=this.env.host+"/saveResultById?workOrderId="+id+"&handler="+this.handler+
      "&treatment="+this.handleData
      +"&treatResult="+treatResult;
    console.log(id);

    return new Promise((resolve,reject) => {
    this.storage.get("token")
      .then( token => {
        console.log(token);
        url = url + "&token=" + token;
        this.http.get(url).map(re => re.json())
          .subscribe(data => {
            console.log(data);
            if(data==true){
              let toast= this.toastCtrl.create({
                message: '更新工单处理情况成功！',
                position: 'middle',
                duration: 5000
              });
              toast.present();
            }else{
              let toast= this.toastCtrl.create({
                message: '更新失败！',
                position: 'middle',
                duration: 5000
              });
              toast.present();
            }
          });
      }).catch(getTokenError => {
      reject("获取token失败");
    });
    })
  }

  toIndex(){
    this.navController.popToRoot(IndexPage);
  }
}
