package com.hgicreate.rno.gsm.app.bean;

/**
 * Created by xiao.sz on 2017/4/25.
 */
public class Authen {


    private static Authen instance;
    private Authen (){}
    public static synchronized Authen getInstance() {
        if (instance == null) {
            instance = new Authen();
        }
        return instance;
    }

    public boolean Authenti=false;

    public boolean isAuthenti() {
        return Authenti;
    }

    public void setAuthenti(boolean authenti) {
        Authenti = authenti;
    }
}
