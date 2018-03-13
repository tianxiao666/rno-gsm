import {Component} from "@angular/core";
import {LoadingController, NavController, NavParams, ToastController} from "ionic-angular";
import {IndexPage} from "../../index/index";
import {NetworkServiceProvider} from "../../../providers/network-service/network-service";
import {WorkOrder} from "../workOrder";
import {Http} from "@angular/http";
import {WorkOrderDetailPage} from "../workOrderDetail/workOrderDetail";
import {Storage} from "@ionic/storage";
import {environment} from "../../../environments/environment";
/**
 * Created by yangch on 2017/7/4.
 */

@Component({
  selector: 'page-workOrderList',
  templateUrl: 'workOrderList.html',
})
export class WorkOrderListPage {
  env = environment;
  token=null;
  public results: any;
  public workOrder=new WorkOrder();
  oneData=[];
  datas=[];
  constructor(public navController: NavController,
              public navParams: NavParams,
              public netWorkService: NetworkServiceProvider,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public http: Http,
              public storage: Storage){

    netWorkService.load(navParams.data.parameters).then(
      data => {
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

        for(let re of this.results){
          this.oneData=[];
          for(let a in re){
            this.oneData.push(re[a]);
          }
          this.datas.push(this.oneData);
        }
      }
    )

  }

  doInfinite(infiniteScroll): Promise<any> {
    console.log('Begin async operation');
    console.log(this.datas.length);
    let start=this.workOrder.start=(this.datas.length+1).toString();

    return new Promise((resolve,reject) => {
      setTimeout(() => {
        let url=this.env.host+"/getWorkOrder?maintain="+this.workOrder.maintain+"&indicator="+this.workOrder.indicator
          +"&cell="+this.workOrder.cell
          +"&chinese="+this.workOrder.chinese+"&beginTime="+this.workOrder.beginTime
          +"&endTime="+this.workOrder.endTime+"&start="+start;
        this.storage.get("token")
          .then( token => {
            console.log(token);
            url = url + "&token=" + token;
            this.http.get(url).map(re => re.json())
              .subscribe(data => {
                this.results = JSON.parse(JSON.stringify(data));
                for (let re of this.results) {
                  this.oneData = [];
                  for (let a in re) {
                    this.oneData.push(re[a]);
                  }
                  this.datas.push(this.oneData);
                }
              });
            resolve(this.datas);
          }).catch(getTokenError => {
              reject("获取token失败");
            });
        console.log('Async operation has ended');
        infiniteScroll.complete();
      }, 500);
    });

  }

  getDetailById(id){
    let parameter="getDetailById?workOrderId="+id;
    this.navController.push(WorkOrderDetailPage,{
      parameters: parameter
    });
  }

  toIndex(){
    this.navController.popToRoot(IndexPage);
  }
}

