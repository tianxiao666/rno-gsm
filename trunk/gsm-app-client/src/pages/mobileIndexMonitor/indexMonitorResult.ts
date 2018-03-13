/**
 * Created by yangch on 2017/6/28.
 */
import {Component} from "@angular/core";
import {NavController, NavParams, ToastController} from "ionic-angular";
import {NetworkServiceProvider} from "../../providers/network-service/network-service";
import {IndexPage} from "../index/index";
import {LoginPage} from "../login/login";


@Component({
  selector: 'page-IndexMonitorResult',
  templateUrl: 'indexMonitorResult.html',
})

export class IndexMonitorResultPage{
  public results: any;
  index="综合指标";
  props= [];
  datas= [];
  oneData=[];
  constructor(public navController: NavController,
              public navParams: NavParams,
              public netWorkService: NetworkServiceProvider,
              public toastCtrl: ToastController){
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
          if(this.results.indexOf(re)==0){
            for(let r in re){
              this.props.push(r);
            }
          }
        }

        for(let re of this.results){
          this.oneData=[];
          for(let a in re){
            this.oneData.push(re[a]);
          }
          this.datas.push(this.oneData);
        }
      }
    ).catch(error => {
      console.log("error");
      this.navController.push(LoginPage);
    });
    //console.log(this.navParams.get("index"));
    if(this.navParams.get("index")=="指标"){
      this.index="综合指标";
    }else{
      this.index=this.navParams.get("index")+"指标";
    }
  }

  toIndex(){
    this.navController.popToRoot(IndexPage);
  }

}
