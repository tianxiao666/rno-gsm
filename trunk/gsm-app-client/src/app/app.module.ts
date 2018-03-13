import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { MyApp } from './app.component';
import { MobileIndexMonitorPage } from '../pages/mobileIndexMonitor/mobileIndexMonitor';
import {WorkOrderProcessPage} from "../pages/workOrderProcess/workOrderProcess";
import {WorkOrderExtractPage} from "../pages/workOrderExtract/workOrderExtract";
import {WorkOrderBatchProcessPage} from "../pages/workOrderBatchProcess/workOrderBatchProcess";
import {WorkOrderStatisticsPage} from "../pages/workOrderStatistics/workOrderStatistics";
import {StatisticsResultPage} from "../pages/workOrderStatistics/statisticsResult/statisticsResult";
import {IndexPage} from "../pages/index/index";
import {LoginPage} from "../pages/login/login";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from "@angular/http";
import {NetworkServiceProvider} from "../providers/network-service/network-service";
import {FormsModule} from "@angular/forms";
import { IonicStorageModule } from '@ionic/storage';
import {IndexMonitorResultPage} from "../pages/mobileIndexMonitor/indexMonitorResult";
import {WorkOrderListPage} from "../pages/workOrderProcess/workOrderList/workOrderList";
import {WorkOrderDetailPage} from "../pages/workOrderProcess/workOrderDetail/workOrderDetail";
import {File} from "@ionic-native/file";
import {Transfer, TransferObject} from "@ionic-native/transfer";
import {FileUploadModule} from "ng2-file-upload";




@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    IndexPage,
    MobileIndexMonitorPage,
    IndexMonitorResultPage,
    WorkOrderProcessPage,
    WorkOrderListPage,
    WorkOrderDetailPage,
    WorkOrderExtractPage,
    WorkOrderBatchProcessPage,
    WorkOrderStatisticsPage,
    StatisticsResultPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    FileUploadModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    IndexPage,
    MobileIndexMonitorPage,
    IndexMonitorResultPage,
    WorkOrderProcessPage,
    WorkOrderListPage,
    WorkOrderDetailPage,
    WorkOrderExtractPage,
    WorkOrderBatchProcessPage,
    WorkOrderStatisticsPage,
    StatisticsResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NetworkServiceProvider,
    File,
    TransferObject,
    Transfer
  ]
})
export class AppModule {

}
