import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {NetworkServiceProvider} from "../../../providers/network-service/network-service";
import {Http} from "@angular/http";
import {IndexPage} from "../../index/index";

@Component({
  selector: 'page-statisticsResult',
  templateUrl: 'statisticsResult.html'
})
export class StatisticsResultPage {

  public results: any;


  constructor(public navCtrl: NavController,public navParams: NavParams,public networkService: NetworkServiceProvider,public alertCtrl: AlertController,public http: Http,public loadingCtrl: LoadingController) {

    this.networkService.load(navParams.data.parameters)
      .then(data => {
          let dataString = JSON.stringify(data);
          dataString = dataString.replace(/完成率/g,"completedRate");
          dataString = dataString.replace(/已完成数/g,"completedCound");
          dataString = dataString.replace(/总数/g,"total");
          dataString = dataString.replace(/未完成数/g,"unCompletedCount");
          dataString = dataString.replace(/片区/g,"area");
          let json = JSON.parse(dataString);
          for(let i = 0; i < json.length; i++){
            console.log(json[i].completedRate);
            json[i].completedRate = ((json[i].completedRate).toFixed(2))+"%";
          }
          this.results = json;
      })
      .catch(error => {
        this.navCtrl.pop();
        this.alertCtrl.create({
          message:  '抱歉，无查询结果',
          buttons: ['OK']
        }).present();
      });
  }

  toIndex(){
    this.navCtrl.popToRoot(IndexPage);
  }
}


