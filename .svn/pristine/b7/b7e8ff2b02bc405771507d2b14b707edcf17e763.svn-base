package com.hgicreate.rno.gsm.service.optimize;

import com.hgicreate.rno.gsm.mapper.optimize.CapacityMapper;
import com.hgicreate.rno.gsm.model.Page;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Service
public class CapacityServiceImpl implements CapacityService {

	private static final Logger logger = LoggerFactory.getLogger(CapacityServiceImpl.class);

	private final CapacityMapper capacityMapper;

    public CapacityServiceImpl(CapacityMapper capacityMapper) {
		this.capacityMapper = capacityMapper;
    }

	@Override
	public List<Map<String, Object>> queryCapacityByPage(Map<String, Object> condition, Page page) {
		
		logger.debug("进入方法：queryCapacityByPage。condition={}, page={}", condition, page);
		
		Map<String, Object> map = new HashMap<>();
		if(!condition.get("capacitydate").equals("-1") ){
	    	map.put("capacitydate", condition.get("capacitydate").toString().split(","));
		}else {
			map.put("capacitydate", null);
		}

		if(!condition.get("capacitysqldate").equals("-1")){
			map.put("capacitysqldate", condition.get("capacitysqldate").toString().split(","));
		}else {
			map.put("capacitysqldate", null);
		}

    	if(!condition.get("capacitybsc").equals("-1") && !condition.get("capacitybsc").toString().trim().equals("")){
	    	map.put("capacitybsc", condition.get("capacitybsc").toString().split(","));
    	}else {
    		map.put("capacitybsc", null);
    	}

    	if(!condition.get("capacitycell").equals("-1") && !condition.get("capacitycell").toString().trim().equals("")){
	    	map.put("capacitycell", condition.get("capacitycell").toString().split(","));
    	}else {
    		map.put("capacitycell", null);
    	}
		
		if (page == null) {
			logger.warn("方法：queryCapacityByPage的参数：page 是空！无法查询!");
			return Collections.emptyList();
		}
		long totalCnt = page.getTotalCnt();
		if (totalCnt < 0) {
			if("cal".equals(condition.get("capacitycaculate"))){
				totalCnt = capacityMapper.getCapacityCaculateCount(map).size();
			}else{
				totalCnt = capacityMapper.getCapacityCount(map).size();
			}
			page.setTotalCnt((int) totalCnt);
		}
		int startIndex = page.calculateStart();
		int cnt = page.getPageSize();
		map.put("startIndex", startIndex);
		map.put("cnt", cnt);
		List<Map<String, Object>> res=null;
		if("cal".equals(condition.get("capacitycaculate"))){
			res= capacityMapper.queryCaculateCapacityByPage(map);
		}else{
			res= capacityMapper.queryCapacityByPage(map);
		}
		return res;
	}

	public List<Map<String, Object>> querycapacity(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<String, Object>();

		map.put("capacitydate", request.getParameter("dateSelect").split(","));

		String sqldate = request.getParameter("sqlDate").replace("[","").replace("]","").replace(" ","");
		if(!sqldate.isEmpty()){
			map.put("capacitysqldate", sqldate.split(","));
		}else {
			map.put("capacitysqldate", null);
		}

		if(!request.getParameter("bscSelect").equals("-1") &&!request.getParameter("bscSelect").trim().equals("")){
			map.put("capacitybsc", request.getParameter("bscSelect").split(","));
		}else {
			map.put("capacitybsc", null);
		}

		if(!request.getParameter("cellSelect").equals("-1")&&!request.getParameter("cellSelect").trim().equals("")){
			map.put("capacitycell", request.getParameter("cellSelect").split(","));
		}else {
			map.put("capacitycell", null);
		}

		logger.debug("map={}", map);
		if("cal".equals(request.getParameter("checkValue"))){
			return capacityMapper.exportCaculateCapacity(map);
		}else {
			return capacityMapper.exportCapacity(map);
		}
	}
}
