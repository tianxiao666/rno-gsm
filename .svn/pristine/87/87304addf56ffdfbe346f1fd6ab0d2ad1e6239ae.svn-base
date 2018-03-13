package com.hgicreate.rno.gsm.service.query;

import com.hgicreate.rno.gsm.mapper.query.IndicatorDiagramMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.lang.reflect.Method;
import java.util.*;

@Service
public class IndicatorDiagramServiceImpl implements IndicatorDiagramService {

	private static final Logger logger = LoggerFactory.getLogger(IndicatorDiagramServiceImpl.class);

	private final IndicatorDiagramMapper indicatorDiagramMapper;

    public IndicatorDiagramServiceImpl(IndicatorDiagramMapper indicatorDiagramMapper) {
		this.indicatorDiagramMapper = indicatorDiagramMapper;
    }

	public List<Map<String, Object>> getIndicatorDiagram(Map<String, Object> condition) {
		
		logger.debug("进入方法：getIndicatorDiagram。condition={}", condition);

		List<Map<String, Object>> res = new ArrayList<Map<String, Object>>();
		Map<String, Object> map = new HashMap<>();

		String axis = condition.get("indicatoraxis").toString();
		String template = condition.get("indicatortemplate").toString();

		for(String date : condition.get("indicatordate").toString().split(",")) {
			List<String> dateList = new ArrayList<>();
			dateList.add(date);
			map.put("indicatordate", dateList);

			if(!condition.get("indicatortime").equals("-1")){
				map.put("indicatortime", condition.get("indicatortime").toString().split(","));
			}else {
				map.put("indicatortime", null);
			}

			if(!condition.get("indicatorbsc").equals("-1")&&!condition.get("indicatorbsc").toString().trim().equals("")){
				map.put("indicatorbsc", condition.get("indicatorbsc").toString().split(","));
			}else {
				map.put("indicatorbsc", null);
			}

			if(!condition.get("indicatorbcell").equals("-1")&&!condition.get("indicatorbcell").toString().trim().equals("")){
				map.put("indicatorbcell", condition.get("indicatorbcell").toString().split(","));
			}else {
				map.put("indicatorbcell", null);
			}

			List<Map<String, Object>> mapAxis = null;
			try {
				if ("按日期".equals(axis)) {
					axis = "Date";
				} else if ("按时间".equals(axis)) {
					axis = "Time";
				} else if ("按小区".equals(axis)) {
					axis = "ObjectID";
				} else if ("按网元".equals(axis)) {
					axis = "BSC";
				}
				if ("EDGE下行流量M".equals(template)) {
					template = "Edge";
				} else if ("GPRS下行流量M".equals(template)) {
					template = "GPRS";
				} else if ("ICM45比例".equals(template)) {
					template = "ICM45";
				} else if ("SQI".equals(template)) {
					template = "SQI";
				} else if ("S话务量".equals(template)) {
					template = "S";
				} else if ("上行语音质量".equals(template)) {
					template = "Up";
				} else if ("无线接入性".equals(template)) {
					template = "Acess";
				} else if ("无线总掉话".equals(template)) {
					template = "Drop";
				} else if ("下行语音质量".equals(template)) {
					template = "Down";
				} else if ("总话务量".equals(template)) {
					template = "Tatol";
				}
				//反射、匹配、调用
				Class clazz = indicatorDiagramMapper.getClass();
				Method[] methods = clazz.getDeclaredMethods();
				for(Method method:methods){
					if(("query"+axis+template).equalsIgnoreCase(method.getName())){
						logger.debug("进入方法：method={}", method.getName());
						mapAxis = (List<Map<String, Object>>) method.invoke(indicatorDiagramMapper,map);
					}
				}
			}catch (Exception e){
				Map<String, Object> errorMap = new HashMap<>();
				errorMap.put("message",date+"的某表不存在");
				res.add(errorMap);
			}
			if(mapAxis!=null && !mapAxis.isEmpty()) {
				for (Map<String, Object> maps : mapAxis) {
					maps.put("time",date);
					res.add(maps);
				}
			}
		}
		return res;
	}

}
