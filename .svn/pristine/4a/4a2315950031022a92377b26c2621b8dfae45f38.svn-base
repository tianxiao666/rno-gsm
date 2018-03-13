package com.hgicreate.rno.gsm.service.optimize;

import com.hgicreate.rno.gsm.mapper.optimize.NeighMapper;
import com.hgicreate.rno.gsm.model.Page;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Service
public class NeighServiceImpl implements NeighService {

	private static final Logger logger = LoggerFactory.getLogger(NeighServiceImpl.class);

	private final NeighMapper neighMapper;

    public NeighServiceImpl(NeighMapper neighMapper) {
		this.neighMapper = neighMapper;
    }

	@Override
	public List<Map<String, Object>> queryNeighByPage(Map<String, Object> condition, Page page) {
		
		logger.debug("进入方法：queryNeighByPage。condition={}, page={}", condition, page);
		
		Map<String, Object> map = new HashMap<>();
		if(!condition.get("neighdate").equals("-1")){
	    	map.put("neighdate", condition.get("neighdate").toString().split(","));
		}else {
			map.put("neighdate", null);
		}

    	if(!condition.get("neighbsc").equals("-1") && !condition.get("neighbsc").toString().trim().equals("")){
	    	map.put("neighbsc", condition.get("neighbsc").toString().split(","));
    	}else {
    		map.put("neighbsc", null);
    	}

    	if(!condition.get("neighcell").equals("-1")&& !condition.get("neighcell").toString().trim().equals("")){
	    	map.put("neighcell", condition.get("neighcell").toString().split(","));
    	}else {
    		map.put("neighcell", null);
    	}
		
		if (page == null) {
			logger.warn("方法：queryNeighByPage的参数：page 是空！无法查询!");
			return Collections.emptyList();
		}
		long totalCnt = page.getTotalCnt();
		if (totalCnt < 0) {
			totalCnt = neighMapper.getNeighCount(map);
			page.setTotalCnt((int) totalCnt);
		}
		int startIndex = page.calculateStart();
		int cnt = page.getPageSize();
		
		map.put("startIndex", startIndex);
		map.put("cnt", cnt);
		List<Map<String, Object>> res = neighMapper.queryNeighByPage(map);
		return res;
	}

	public List<Map<String, Object>> queryNeigh(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();

		map.put("neighdate", request.getParameter("dateSelect").split(","));

		if(!request.getParameter("bscSelect").equals("-1") && !request.getParameter("bscSelect").trim().equals("")){
			map.put("neighbsc", request.getParameter("bscSelect").split(","));
		}else {
			map.put("neighbsc", null);
		}

		map.put("neighcell", request.getParameter("cellSelect").split(","));

		logger.debug("map={}", map);
		return neighMapper.exportNeigh(map);
	}
}
