package com.hgicreate.rno.gsm.service.measure;

import com.hgicreate.rno.gsm.mapper.measure.FasMapper;
import com.hgicreate.rno.gsm.model.Page;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Service
public class FasServiceImpl implements FasService {

	private static final Logger logger = LoggerFactory.getLogger(FasServiceImpl.class);

	private final FasMapper fasMapper;

    public FasServiceImpl(FasMapper fasMapper) {
		this.fasMapper = fasMapper;
    }

	public List<Map<String, Object>> getFAS(Map<String, Object> condition, Page page) {
		
		logger.debug("进入方法：getFAS。condition={},page={}", condition,page);

		List<Map<String, Object>> res = new ArrayList<Map<String, Object>>();
		Map<String, Object> map = new HashMap<>();
		map.put("fasdate", condition.get("fasDate").toString().split(","));

		if(!condition.get("fasBsc").equals("-1") &&!condition.get("fasBsc").toString().trim().equals("")){
			map.put("fasbsc", condition.get("fasBsc").toString().split(","));
		}else {
			map.put("fasbsc", null);
		}

		map.put("fascell", condition.get("fasCell").toString().split(","));

		if (page == null) {
			logger.warn("方法：queryfasByPage的参数：page 是空！无法查询!");
			return Collections.emptyList();
		}

		long totalCnt = page.getTotalCnt();
		if (totalCnt < 0) {
			totalCnt = fasMapper.queryFAS(map).size();
			page.setTotalCnt((int) totalCnt);
		}
		int startIndex = page.calculateStart();
		int cnt = page.getPageSize();
		map.put("startIndex", startIndex);
		map.put("cnt", cnt);
		res = fasMapper.queryFASByPage(map);

		return res;
	}

	public List<Map<String, Object>> exportFASData(HttpServletRequest request) {
		logger.debug("进入方法：exportFASData。request={}", request);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("fasdates", request.getParameter("dateSelect").split(","));

		if(!request.getParameter("bscSelect").equals("-1")){
			map.put("fashbscs", request.getParameter("bscSelect").split(","));
		}else {
			map.put("fashbscs", null);
		}

		map.put("fascells", request.getParameter("cellSelect").split(","));
		logger.debug("map={}", map);
		return fasMapper.exportFAS(map);
	}
}
