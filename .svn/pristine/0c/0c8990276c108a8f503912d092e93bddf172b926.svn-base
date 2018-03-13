package com.hgicreate.rno.gsm.service.query;

import com.hgicreate.rno.gsm.mapper.query.FrequencyReuseMapper;
import com.hgicreate.rno.gsm.mapper.query.IndicatorDiagramMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class FrequencyReuseServiceImpl implements FrequencyReuseService {

	private static final Logger logger = LoggerFactory.getLogger(FrequencyReuseServiceImpl.class);

	private final FrequencyReuseMapper frequencyReuseMapper;

    public FrequencyReuseServiceImpl(FrequencyReuseMapper frequencyReuseMapper) {
		this.frequencyReuseMapper = frequencyReuseMapper;
    }

	public List<Map<String, Object>> getFrequencyReuse(Map<String, Object> condition) {
		
		logger.debug("进入方法：getFrequencyReuse。condition={}", condition);

		List<Map<String, Object>> res = new ArrayList<Map<String, Object>>();
		Map<String, Object> map = new HashMap<>();

		List<String> dateList = new ArrayList<>();
		dateList.add(condition.get("frequencyReuseDate").toString());
		map.put("frequencyreusedate", dateList);

		if(!condition.get("frequencyReuseBsc").equals("-1") &&!condition.get("frequencyReuseBsc").toString().trim().equals("")){
			map.put("frequencyreusebsc", condition.get("frequencyReuseBsc").toString().split(","));
		}else {
			map.put("frequencyreusebsc", null);
		}

		res = frequencyReuseMapper.queryFrequencyReuse(map);

		List<String> dchT=new ArrayList<String>();
		List<String> bcchT=new ArrayList<String>();
		Iterator<Map<String, Object>> it=res.iterator();
		for(int i=0;it.hasNext();i++) {
			Map<String, Object> maps = it.next();
			if (maps.get("BCCHNO").toString().indexOf("&") > -1) {
				StringTokenizer st = new StringTokenizer(maps.get("BCCHNO").toString(), "&");
				while (st.hasMoreTokens()) {
					bcchT.add(st.nextToken());
				}
			} else {
				bcchT.add(maps.get("BCCHNO").toString());
			}
			if (maps.get("DCHNO").toString().indexOf("&") > -1) {
				StringTokenizer st = new StringTokenizer(maps.get("DCHNO").toString(), "&");
				while (st.hasMoreTokens()) {
					dchT.add(st.nextToken());
				}
			} else {
				dchT.add(maps.get("DCHNO").toString());
			}
		}

		Map<String, Object> dch = new HashMap<>();
		Map<String, Object> bcch = new HashMap<>();
		Map<String,Integer> elementsCount=new HashMap<String,Integer>();
		for(String s:dchT){
			Integer i=elementsCount.get(s);
			if(i==null){
				elementsCount.put(s, 1);
			}else{
				elementsCount.put(s, i+1);
			}
		}
		for(String key:elementsCount.keySet()){
			dch.put(key,elementsCount.get(key));
		}
		dch.put("type","dch");

		Map<String,Integer> elementsCounts=new HashMap<String,Integer>();
		for(String s:bcchT){
			Integer i=elementsCounts.get(s);
			if(i==null){
				elementsCounts.put(s, 1);
			}else{
				elementsCounts.put(s, i+1);
			}
		}
		for(String key:elementsCounts.keySet()){
			bcch.put(key,elementsCounts.get(key));
		}
		bcch.put("type","bcch");

		List<Map<String, Object>> resF = new ArrayList<Map<String, Object>>();
		resF.add(dch);
		resF.add(bcch);
		return resF;
	}
}
