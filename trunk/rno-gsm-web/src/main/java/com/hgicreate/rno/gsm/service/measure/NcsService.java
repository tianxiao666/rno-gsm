package com.hgicreate.rno.gsm.service.measure;


import java.util.List;
import java.util.Map;

public interface NcsService {

    List<Map<String,Object>> getChartData(Map<String, Object> cond);


}
