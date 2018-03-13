import { Component, ViewChild } from '@angular/core';
import {AlertController, Events, Nav, Platform, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MobileIndexMonitorPage} from "../pages/mobileIndexMonitor/mobileIndexMonitor";
import {WorkOrderProcessPage} from "../pages/workOrderProcess/workOrderProcess";
import {WorkOrderExtractPage} from "../pages/workOrderExtract/workOrderExtract";
import {WorkOrderBatchProcessPage} from "../pages/workOrderBatchProcess/workOrderBatchProcess";
import {WorkOrderStatisticsPage} from "../pages/workOrderStatistics/workOrderStatistics";
import {IndexPage} from "../pages/index/index";
import {LoginPage} from "../pages/login/login";
import {Storage} from "@ionic/storage";
import {NetworkServiceProvider} from "../providers/network-service/network-service";
import {Diagnostic} from "@ionic-native/diagnostic";


@Component({
  templateUrl: 'app.html',
  providers: [Diagnostic]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = IndexPage;
  pages: Array<{title: string, component: any}>;

  LoginName: string ="";
  LoginStatus: boolean = false;

  constructor(public storage: Storage, public platform: Platform
              , public statusBar: StatusBar, public splashScreen: SplashScreen
              , public events: Events, public networkService: NetworkServiceProvider
              , public alertCtrl: AlertController
              , public diagnostic: Diagnostic
              , public toastCtrl: ToastController
  ) {
    this.initializeApp();
    this.checkPermissions();

    this.storage.get( 'name' ).then(name => {
      if( name == null|| name.length < 1 ){
        this.nav.setRoot(LoginPage);
        this.LoginStatus==false;
      }else{
        let param: string = "checkLogin";
        this.networkService.load( param )
          .then(data => {
            if(data.status=="true"){
              this.events.publish("user.login",data.username);
              this.nav.setRoot(IndexPage);
            }
          },error =>{
            this.nav.setRoot(LoginPage);
          })
          .catch(checkFail => {
            this.nav.setRoot(LoginPage);
          });
      }
    }).catch(getNameError => {
      this.nav.setRoot(LoginPage);
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '首页', component: IndexPage },
      { title: '指标监控', component: MobileIndexMonitorPage },
      { title: '工单处理', component: WorkOrderProcessPage },
      { title: '工单提取', component: WorkOrderExtractPage },
      { title: '工单批量处理', component: WorkOrderBatchProcessPage },
      { title: '工单统计', component: WorkOrderStatisticsPage }
    ];

    this.events.subscribe("user.login", (LoginName) => {
      this.LoginStatus = true;
      this.LoginName = LoginName;
    });
    this.events.subscribe("goto.login", () => {
      this.nav.setRoot(LoginPage);
    });
    this.events.subscribe("user.logout", () => {
      this.storage.set('name','');
      this.storage.set('token','');
      this.LoginStatus = false;
      this.LoginName = '';
      this.nav.setRoot(LoginPage);
    });

  }

  checkPermissions(){
    this.diagnostic.requestRuntimePermissions([this.diagnostic.permission.WRITE_EXTERNAL_STORAGE]).then(
      success => {

      },
      error => {

      }
    )
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the pla tform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.storage.get( 'name' ).then(name => {
      if( name == null|| name.length < 1 ){
        this.nav.setRoot(LoginPage);
        this.LoginStatus==false;
      }else{
        this.nav.push(page.component);
      }
    }).catch(getNameError => {
      this.nav.setRoot(LoginPage);
    });
  }

  doLogout(){
    this.events.publish("user.logout",'');
  }
  doLogin() {
    this.nav.setRoot(LoginPage);
  }
}
