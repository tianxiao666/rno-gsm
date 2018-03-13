package com.hgicreate.rno.demo.mapper;

import com.hgicreate.rno.demo.model.Mots;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MotsMapper {
    @Select("select Distinct Date from sts_Date order by 1 desc")
    List<String> queryStsDate();

    @Select("select top 5 ObjectID as CELL from sts_GSM_CELL")
    List<String> queryGsmCell();

    List<Mots> queryMots();
}
