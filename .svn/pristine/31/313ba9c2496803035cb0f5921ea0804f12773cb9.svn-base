package com.hgicreate.rno.gsm.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "rno_gsm_users")
public class User {
    @Id
    @GeneratedValue(generator = "UserSeq")
    @SequenceGenerator(name = "UserSeq", sequenceName = "seq_rno_gsm_users", allocationSize = 5)
    private Long id;

    private String username, password, district, unit,chineseName,email;

    private int enabled;

    private Date createTime, updateTime;

    private int type;

    @OneToOne
    @JoinColumn(name ="username",insertable = false,updatable = false)
    private Auth auth;
}
