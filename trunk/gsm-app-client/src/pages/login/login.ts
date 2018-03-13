import { Component } from '@angular/core';
import {AlertController, Events, NavController, ToastController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {NetworkServiceProvider} from "../../providers/network-service/network-service";
import {environment} from "../../environments/environment";
import {IndexPage} from "../index/index";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: []
})
export class LoginPage {


  public username: string = "";
  public password: string = "";
  public StorageName: string = "";
  public failCount: number=0;
  public shouldShowVerifyCode: boolean = false;
  public verifyCodeSource: string;
  public verifyCodeInput: string="";
  public token=null;
  public rememberUsernameAndPassword: boolean = false;
  public code: string = "";
  public VerifyCodeTip: string = "验证码";

  env = environment;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController
    , public events: Events, public storage: Storage, public networkService: NetworkServiceProvider
    , public toastCtrl: ToastController) {

    this.storage.get("username").then(username => {
      if(username!=null){
        this.rememberUsernameAndPassword=true;
        this.username = username;
      }
      this.storage.get("password").then( password => {
          if(password!=null){
            this.password = password;
          }
      },
      error => {
        this.rememberUsernameAndPassword = false;
      })
    },error => {
      this.rememberUsernameAndPassword = false;
    })
    this.storage.get("shouldShowVerifyCode").then(shouldShowVerifyCode => {
      this.shouldShowVerifyCode = shouldShowVerifyCode;
      this.changeVerifyCode();
    })
  }



  login() {
    if(this.username.length==0){
      this.toastCtrl.create({
        message: '用户名不能为空',
        position: 'top',
        duration: 2000
      }).present();
      return ;
    }
    if(this.password.length==0){
      this.toastCtrl.create({
        message: '密码不能为空',
        position: 'top',
        duration: 2000
      }).present();
      return ;
    }


      if(this.shouldShowVerifyCode){
        if(this.verifyCodeInput.length==0){
          this.toastCtrl.create({
            message: '验证码不能为空',
            position: 'top',
            duration: 2000
          }).present();
        }else if(this.code == this.verifyCodeInput){
          this.verifyLogin();
        }else {
          this.changeVerifyCode();
          this.verifyCodeInput = "";
          this.toastCtrl.create({
            message: '验证码错误，请重新输入验证码',
            position: 'middle',
            duration: 3000
          }).present();
        }
      }else {
        this.verifyLogin();
      }

  }

  verifyLogin(){
    let data: string = "login?username="+this.username+"&password="+this.password;
    this.networkService.login(data)
      .then(data => {
          if(this.rememberUsernameAndPassword){
            this.storage.set("username",this.username);
            this.storage.set("password",this.password);
          }else if(!this.rememberUsernameAndPassword){
            this.storage.remove("username");
            this.storage.remove("password");
          }
          this.token=data.token;
          this.storage.set("token","Bearer "+data.token);
          this.failCount=0;
          this.storage.set("shouldShowVerifyCode",false);
          this.storage.set('name', this.username);
          this.events.publish("user.login",this.username);
          this.navCtrl.setRoot(IndexPage);
        },
        error=>{
          this.failCount+=1;
          if(this.failCount>2){
            this.storage.set("shouldShowVerifyCode",true);
            this.shouldShowVerifyCode=true;
            this.changeVerifyCode();
          }
          this.verifyCodeInput = "";
          this.toastCtrl.create({
            message: '账号或密码错误',
            position: 'middle',
            duration: 3000
          }).present();
        })
  }

  changeVerifyCode(){
    this.VerifyCodeTip = "点击输入验证码";
    let param = "/defaultKaptcha?d="+this.createCode();
    this.verifyCodeSource=this.env.host+param;
  }
  createCode(): string{
    this.code = "";
    let chart = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = chart.length;
    var code = '';
    for (let i = 0; i < 4; i++) {
      code += chart.charAt(Math.floor(Math.random() * maxPos));
    }
    this.code = code.toLowerCase();
    return code.toLowerCase();
  }
}


