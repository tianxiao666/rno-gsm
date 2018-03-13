package com.hgicreate.rno.gsm.mapper.query;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface ParamsQueryMapper {

    @Select("select Distinct Date from cdd_Date order by Date desc")
    List<String> selectParamsDate();

    @Select("select Distinct 指令 from cdd_zhiLing")
    List<String> selectParamsOrder();

    @Select("select Distinct BSC from cdd_Date")
    List<String> selectParamsBsc();

    @Select("select Distinct ObjectID as CELL from sts_GSM_CELL")
    List<String> selectParamsCell();

    @Select("select top 5 ObjectID as CELL from sts_GSM_CELL")
    List<String> selectTop5Cell();

    long selectDbtspCount(Map<String,Object> map);

    List<Map<String,Object>> selectDbtsp(Map<String,Object> map);

    List<Map<String,Object>> selectDbtspByPage(Map<String,Object> map);

    long selectDtstpCount(Map<String,Object> map);

    List<Map<String,Object>> selectDtstp(Map<String,Object> map);

    List<Map<String,Object>> selectDtstpByPage(Map<String,Object> map);

    long selectIoexpCount(Map<String,Object> map);

    List<Map<String,Object>> selectIoexp(Map<String,Object> map);

    List<Map<String,Object>> selectIoexpByPage(Map<String,Object> map);

    long selectRaclpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRaclp(Map<String,Object> map);

    List<Map<String,Object>> selectRaclpByPage(Map<String,Object> map);

    long selectRaeppCount(Map<String,Object> map);

    List<Map<String,Object>> selectRaepp(Map<String,Object> map);

    List<Map<String,Object>> selectRaeppByPage(Map<String,Object> map);

    long selectRfcapCount(Map<String,Object> map);

    List<Map<String,Object>> selectRfcap(Map<String,Object> map);

    List<Map<String,Object>> selectRfcapByPage(Map<String,Object> map);

    long selectRlappCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlapp(Map<String,Object> map);

    List<Map<String,Object>> selectRlappByPage(Map<String,Object> map);

    long selectRlbapCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlbap(Map<String,Object> map);

    List<Map<String,Object>> selectRlbapByPage(Map<String,Object> map);

    long selectRlbcpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlbcp(Map<String,Object> map);

    List<Map<String,Object>> selectRlbcpByPage(Map<String,Object> map);

    long selectRlbdpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlbdp(Map<String,Object> map);

    List<Map<String,Object>> selectRlbdpByPage(Map<String,Object> map);

    long selectRlccpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlccp(Map<String,Object> map);

    List<Map<String,Object>> selectRlccpByPage(Map<String,Object> map);

    long selectRlcdpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlcdp(Map<String,Object> map);

    List<Map<String,Object>> selectRlcdpByPage(Map<String,Object> map);

    long selectRlcfpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlcfp(Map<String,Object> map);

    List<Map<String,Object>> selectRlcfpByPage(Map<String,Object> map);

    long selectRlchpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlchp(Map<String,Object> map);

    List<Map<String,Object>> selectRlchpByPage(Map<String,Object> map);

    long selectRlclpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlclp(Map<String,Object> map);

    List<Map<String,Object>> selectRlclpByPage(Map<String,Object> map);

    long selectRlcppCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlcpp(Map<String,Object> map);

    List<Map<String,Object>> selectRlcppByPage(Map<String,Object> map);

    long selectRlcppExtCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlcppExt(Map<String,Object> map);

    List<Map<String,Object>> selectRlcppExtByPage(Map<String,Object> map);

    long selectRlcrpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlcrp(Map<String,Object> map);

    List<Map<String,Object>> selectRlcrpByPage(Map<String,Object> map);

    long selectRlcxpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlcxp(Map<String,Object> map);

    List<Map<String,Object>> selectRlcxpByPage(Map<String,Object> map);

    long selectRldepCount(Map<String,Object> map);

    List<Map<String,Object>> selectRldep(Map<String,Object> map);

    List<Map<String,Object>> selectRldepByPage(Map<String,Object> map);

    long selectRldepExtCount(Map<String,Object> map);

    List<Map<String,Object>> selectRldepExt(Map<String,Object> map);

    List<Map<String,Object>> selectRldepExtByPage(Map<String,Object> map);

    long selectRldgpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRldgp(Map<String,Object> map);

    List<Map<String,Object>> selectRldgpByPage(Map<String,Object> map);

    long selectRldhpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRldhp(Map<String,Object> map);

    List<Map<String,Object>> selectRldhpByPage(Map<String,Object> map);

    long selectRldtpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRldtp(Map<String,Object> map);

    List<Map<String,Object>> selectRldtpByPage(Map<String,Object> map);

    long selectRldupCount(Map<String,Object> map);

    List<Map<String,Object>> selectRldup(Map<String,Object> map);

    List<Map<String,Object>> selectRldupByPage(Map<String,Object> map);

    long selectRlefpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlefp(Map<String,Object> map);

    List<Map<String,Object>> selectRlefpByPage(Map<String,Object> map);

    long selectRlgapCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlgap(Map<String,Object> map);

    List<Map<String,Object>> selectRlgapByPage(Map<String,Object> map);

    long selectRlgrpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlgrp(Map<String,Object> map);

    List<Map<String,Object>> selectRlgrpByPage(Map<String,Object> map);

    long selectRlgspCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlgsp(Map<String,Object> map);

    List<Map<String,Object>> selectRlgspByPage(Map<String,Object> map);

    long selectRlhppCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlhpp(Map<String,Object> map);

    List<Map<String,Object>> selectRlhppByPage(Map<String,Object> map);

    long selectRlihpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlihp(Map<String,Object> map);

    List<Map<String,Object>> selectRlihpByPage(Map<String,Object> map);

    long selectRlimpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlimp(Map<String,Object> map);

    List<Map<String,Object>> selectRlimpByPage(Map<String,Object> map);

    long selectRllbpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRllbp(Map<String,Object> map);

    List<Map<String,Object>> selectRllbpByPage(Map<String,Object> map);

    long selectRlldpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlldp(Map<String,Object> map);

    List<Map<String,Object>> selectRlldpByPage(Map<String,Object> map);

    long selectRllfpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRllfp(Map<String,Object> map);

    List<Map<String,Object>> selectRllfpByPage(Map<String,Object> map);

    long selectRllhpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRllhp(Map<String,Object> map);

    List<Map<String,Object>> selectRllhpByPage(Map<String,Object> map);

    long selectRllhpExtCount(Map<String,Object> map);

    List<Map<String,Object>> selectRllhpExt(Map<String,Object> map);

    List<Map<String,Object>> selectRllhpExtByPage(Map<String,Object> map);

    long selectRllopCount(Map<String,Object> map);

    List<Map<String,Object>> selectRllop(Map<String,Object> map);

    List<Map<String,Object>> selectRllopByPage(Map<String,Object> map);

    long selectRllopExtCount(Map<String,Object> map);

    List<Map<String,Object>> selectRllopExt(Map<String,Object> map);

    List<Map<String,Object>> selectRllopExtByPage(Map<String,Object> map);

    long selectRllppCount(Map<String,Object> map);

    List<Map<String,Object>> selectRllpp(Map<String,Object> map);

    List<Map<String,Object>> selectRllppByPage(Map<String,Object> map);

    long selectRllupCount(Map<String,Object> map);

    List<Map<String,Object>> selectRllup(Map<String,Object> map);

    List<Map<String,Object>> selectRllupByPage(Map<String,Object> map);

    long selectRlmapCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlmap(Map<String,Object> map);

    List<Map<String,Object>> selectRlmapByPage(Map<String,Object> map);

    long selectRlmfpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlmfp(Map<String,Object> map);

    List<Map<String,Object>> selectRlmfpByPage(Map<String,Object> map);

    long selectRlnmpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlnmp(Map<String,Object> map);

    List<Map<String,Object>> selectRlnmpByPage(Map<String,Object> map);

    long selectRlnrpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlnrp(Map<String,Object> map);

    List<Map<String,Object>> selectRlnrpByPage(Map<String,Object> map);

    long selectRlpbpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlpbp(Map<String,Object> map);

    List<Map<String,Object>> selectRlpbpByPage(Map<String,Object> map);

    long selectRlpcpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlpcp(Map<String,Object> map);

    List<Map<String,Object>> selectRlpcpByPage(Map<String,Object> map);

    long selectRlsbpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlsbp(Map<String,Object> map);

    List<Map<String,Object>> selectRlsbpByPage(Map<String,Object> map);

    long selectRlsepCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlsep(Map<String,Object> map);

    List<Map<String,Object>> selectRlsepByPage(Map<String,Object> map);

    long selectRlsmpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlsmp(Map<String,Object> map);

    List<Map<String,Object>> selectRlsmpByPage(Map<String,Object> map);

    long selectRlsrpEarfcnCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlsrpEarfcn(Map<String,Object> map);

    List<Map<String,Object>> selectRlsrpEarfcnByPage(Map<String,Object> map);

    long selectRlsrpFddCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlsrpFdd(Map<String,Object> map);

    List<Map<String,Object>> selectRlsrpFddByPage(Map<String,Object> map);

    long selectRlsrpTddCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlsrpTdd(Map<String,Object> map);

    List<Map<String,Object>> selectRlsrpTddByPage(Map<String,Object> map);

    long selectRlsspCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlssp(Map<String,Object> map);

    List<Map<String,Object>> selectRlsspByPage(Map<String,Object> map);

    long selectRlstpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlstp(Map<String,Object> map);

    List<Map<String,Object>> selectRlstpByPage(Map<String,Object> map);

    long selectRlsupCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlsup(Map<String,Object> map);

    List<Map<String,Object>> selectRlsupByPage(Map<String,Object> map);

    long selectRltdpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRltdp(Map<String,Object> map);

    List<Map<String,Object>> selectRltdpByPage(Map<String,Object> map);

    long selectRltypCount(Map<String,Object> map);

    List<Map<String,Object>> selectRltyp(Map<String,Object> map);

    List<Map<String,Object>> selectRltypByPage(Map<String,Object> map);

    long selectRlumpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRlump(Map<String,Object> map);

    List<Map<String,Object>> selectRlumpByPage(Map<String,Object> map);

    long selectRrtppCount(Map<String,Object> map);

    List<Map<String,Object>> selectRrtpp(Map<String,Object> map);

    List<Map<String,Object>> selectRrtppByPage(Map<String,Object> map);

    long selectRxappCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxapp(Map<String,Object> map);

    List<Map<String,Object>> selectRxappByPage(Map<String,Object> map);

    long selectRxaspTgCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxaspTg(Map<String,Object> map);

    List<Map<String,Object>> selectRxaspTgByPage(Map<String,Object> map);

    long selectRxelpTgCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxelpTg(Map<String,Object> map);

    List<Map<String,Object>> selectRxelpTgByPage(Map<String,Object> map);

    long selectRxmfpCfCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfpCf(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfpCfByPage(Map<String,Object> map);

    long selectRxmfpCfFCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfpCfF(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfpCfFByPage(Map<String,Object> map);

    long selectRxmfpMctrCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfpMctr(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfpMctrByPage(Map<String,Object> map);

    long selectRxmfpRxFCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfpRxF(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfpRxFByPage(Map<String,Object> map);

    long selectRxmfpTrxCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfpTrx(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfpTrxByPage(Map<String,Object> map);

    long selectRxmfpTrxFCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfpTrxF(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfpTrxFByPage(Map<String,Object> map);

    long selectRxmfpTxFCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfpTxF(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfpTxFByPage(Map<String,Object> map);

    long selectRxmopCfCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmopCf(Map<String,Object> map);

    List<Map<String,Object>> selectRxmopCfByPage(Map<String,Object> map);

    long selectRxmopMctrCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmopMctr(Map<String,Object> map);

    List<Map<String,Object>> selectRxmopMctrByPage(Map<String,Object> map);

    long selectRxmopRxCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmopRx(Map<String,Object> map);

    List<Map<String,Object>> selectRxmopRxByPage(Map<String,Object> map);

    long selectRxmopTgCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmopTg(Map<String,Object> map);

    List<Map<String,Object>> selectRxmopTgByPage(Map<String,Object> map);

    long selectRxmopTrxCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmopTrx(Map<String,Object> map);

    List<Map<String,Object>> selectRxmopTrxByPage(Map<String,Object> map);

    long selectRxmopTxCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmopTx(Map<String,Object> map);

    List<Map<String,Object>> selectRxmopTxByPage(Map<String,Object> map);

    long selectRxmspMctrCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmspMctr(Map<String,Object> map);

    List<Map<String,Object>> selectRxmspMctrByPage(Map<String,Object> map);

    long selectRxmspTgCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmspTg(Map<String,Object> map);

    List<Map<String,Object>> selectRxmspTgByPage(Map<String,Object> map);

    long selectRxtcpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxtcp(Map<String,Object> map);

    List<Map<String,Object>> selectRxtcpByPage(Map<String,Object> map);

}
