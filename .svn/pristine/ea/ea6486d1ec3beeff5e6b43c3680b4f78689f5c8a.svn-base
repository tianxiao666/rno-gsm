# GSM无线网络性能预警系统

需求原型：http://sdcpm.hgicreate.com/demo/rno-gsm

## Modules
下面是在 GSM 项目中几个模块的简介。

### rno-gsm-web
GSM 系统 WEB 版。

#### 自定义参数

|参数名|说明|缺省值|
|---|---|---|
|rno.gsm.linage|数据每页显示的行数|15|
|rno.gsm.security|是否开启认证，值为 true 或 false|true|
|rno.gsm.username|自定义用户名|sa|
|rno.gsm.password|自定义密码|123456|

### rno-gsm-demo
辅助 GSM 系统开发的样例及演示代码。

### rno-gsm-app
GSM 系统手机 WEB APP 应用。

#### Install
Android手机：安装APK文件，下载地址：http://120.77.183.26/files/gsm_app.apk 

iPhone手机：用手机自带的 Safari 浏览器，打开网址：http://120.77.183.26/m，然后用”添加到主屏幕“功能，在桌面生成图标，下次就可以从桌面直接打开应用。

在Chrome浏览器中也可以测试，打开网址：http://120.77.183.26/m，然后按F12进入开发者模式，再按CTRL+SHIFT+M切换为手机模拟器，就能进行测试，可以选择不同的手机版本。

#### PostgreSQL
##### 创建指标监控表
<pre>
psql -U postgres -d gsm -f create-indicator-tables.sql
</pre>
##### 设置 CRON 定时入库
<pre>
export EDITOR=vi
crontab -e
*/5 * * * * /home/gsm/script/import-data-to-pg.sh >> /home/gsm/logs/import-data-to-pg.log 2>&1
</pre>
注：5分钟执行一次脚本。
