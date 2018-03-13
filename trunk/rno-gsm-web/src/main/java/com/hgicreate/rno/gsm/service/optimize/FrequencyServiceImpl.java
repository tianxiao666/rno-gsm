package com.hgicreate.rno.gsm.service.optimize;

import com.hgicreate.rno.gsm.mapper.optimize.FrequencyMapper;
import com.hgicreate.rno.gsm.model.Page;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Service
public class FrequencyServiceImpl implements FrequencyService{

	private static final Logger logger = LoggerFactory.getLogger(FrequencyServiceImpl.class);

	private final FrequencyMapper frequencyMapper;

    public FrequencyServiceImpl(FrequencyMapper frequencyMapper) {
		this.frequencyMapper = frequencyMapper;
    }

	@Override
	public List<Map<String, Object>> queryFrequencyByPage(Map<String, Object> condition, Page page) {
		
		logger.debug("进入方法：queryFrequencyByPage。condition={}, page={}", condition, page);
		
		Map<String, Object> map = new HashMap<>();
		if(!condition.get("frequencydate").equals("-1") ){
	    	map.put("frequencydate", condition.get("frequencydate").toString().split(","));
		}else {
			map.put("frequencydate", null);
		}

    	if(!condition.get("frequencybsc").equals("-1") && !condition.get("frequencybsc").toString().trim().equals("")){
	    	map.put("frequencybsc", condition.get("frequencybsc").toString().split(","));
    	}else {
    		map.put("frequencybsc", null);
    	}

    	if(!condition.get("frequencycell").equals("-1") && !condition.get("frequencycell").toString().trim().equals("")){
	    	map.put("frequencycell", condition.get("frequencycell").toString().split(","));
    	}else {
    		map.put("frequencycell", null);
    	}
		
		if (page == null) {
			logger.warn("方法：queryFrequencyByPage的参数：page 是空！无法查询!");
			return Collections.emptyList();
		}
		long totalCnt = page.getTotalCnt();
		if (totalCnt < 0) {
			totalCnt = frequencyMapper.getFrequencyCount(map);
			page.setTotalCnt((int) totalCnt);
		}
		int startIndex = page.calculateStart();
		int cnt = page.getPageSize();
		map.put("startIndex", startIndex);
		map.put("cnt", cnt);
		List<Map<String, Object>> res = frequencyMapper.queryFrequencyByPage(map);
		return res;
	}

	@Override
	public List<Map<String, Object>> calcaculateFrequencyByPage(Map<String, Object> condition, Page page) {

		logger.debug("进入方法：calcaculateFrequencyByPage。condition={}, page={}", condition, page);

		Map<String, Object> map = new HashMap<>();
		if(!condition.get("frequencydates").equals("-1")){
			map.put("frequencydates", condition.get("frequencydates").toString().split(","));
		}else {
			map.put("frequencydates", null);
		}

		if(!condition.get("frequencybscs").equals("-1")&&!condition.get("frequencybscs").equals("")){
			map.put("frequencybscs", condition.get("frequencybscs").toString().split(","));
		}else {
			map.put("frequencybscs", null);
		}

		if(!condition.get("frequencycells").equals("-1") && !condition.get("frequencycells").equals("")){
			map.put("frequencycells", condition.get("frequencycells").toString().split(","));
		}else {
			map.put("frequencycells", null);
		}

		if (page == null) {
			logger.warn("方法：calcaculateFrequencyByPage的参数：page 是空！无法查询!");
			return Collections.emptyList();
		}

		long totalCnt = page.getTotalCnt();
		List<Map<String, Object>> Judge = frequencyMapper.first_CalFrequency(map);
		List<Map<String, Object>> res =Judge;
		if(Judge.size()!=0){
			if (totalCnt < 0) {
				totalCnt = frequencyMapper.getFrequencyCounts(map);
				page.setTotalCnt((int) totalCnt);
			}
			int startIndex = page.calculateStart();
			int cnt = page.getPageSize();
			map.put("startIndexs", startIndex);
			map.put("cnts", cnt);
			res = frequencyMapper.calcaculateFrequencyByPage(map);
		}else {
			page.setTotalCnt((int) 0);
		}
		return res;
	}

	public List<Map<String, Object>> queryfrequency(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();

		map.put("frequencydate", request.getParameter("dateSelect").split(","));

		if(!request.getParameter("bscSelect").equals("-1") &&!request.getParameter("bscSelect").trim().equals("")){
			map.put("frequencybsc", request.getParameter("bscSelect").split(","));
		}else {
			map.put("frequencybsc", null);
		}

		if(!request.getParameter("cellSelect").equals("-1")&&!request.getParameter("cellSelect").trim().equals("")){
			map.put("frequencycell", request.getParameter("cellSelect").split(","));
		}else {
			map.put("frequencycell", null);
		}

		logger.debug("map={}", map);

		if("search".equals(request.getParameter("SearchE"))){
			return frequencyMapper.exportFrequency(map);
		}else{
			return frequencyMapper.cal_exportFrequency(map);
		}
	}
}
