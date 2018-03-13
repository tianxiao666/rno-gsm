package com.hgicreate.rno.gsm.service.measure;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.hgicreate.rno.gsm.mapper.measure.MrrQualityMapper;
import com.hgicreate.rno.gsm.model.Page;

@Service
public class MrrQualityServiceImpl implements MrrQualityService {

	private static final Logger logger = LoggerFactory.getLogger(MrrQualityServiceImpl.class);

	private final MrrQualityMapper mrrQualityMapper;

	public MrrQualityServiceImpl(MrrQualityMapper mrrQualityMapper) {
		this.mrrQualityMapper = mrrQualityMapper;
	}

	@Override
	public List<Map<String, Object>> prepareData(Map<String, Object> condition) {
		logger.debug("进入MrrQualityServiceImpl.prepareData().");
		Map<String, Object> map = new HashMap<>();

		// 日期
		if (!condition.get("date").equals("-1")) {
			map.put("date", condition.get("date").toString().split(","));
		} else {
			map.put("date", null);
		}

		// 网元
		if (!condition.get("bsc").equals("-1")&&!condition.get("bsc").toString().trim().equals("")) {
			map.put("bsc", condition.get("bsc").toString().split(","));
		} else {
			map.put("bsc", null);
		}

		// 小区
		if (!condition.get("cell").equals("-1")&&!condition.get("cell").toString().trim().equals("")) {
			map.put("cell", condition.get("cell").toString().split(","));
		} else {
			map.put("cell", null);
		}

		map.put("RXQ0", condition.get("RXQ0"));
		map.put("RXQ1", condition.get("RXQ1"));
		map.put("RXQ2", condition.get("RXQ2"));
		map.put("RXQ3", condition.get("RXQ3"));
		map.put("RXQ4", condition.get("RXQ4"));
		map.put("RXQ5", condition.get("RXQ5"));
		map.put("RXQ6", condition.get("RXQ6"));
		map.put("RXQ7", condition.get("RXQ7"));

		String type = condition.get("type").toString();

		logger.debug("进入MrrQualityServiceImpl.prepareData().type={}, map={}", type, map);

		List<Map<String, Object>> allData = new ArrayList<>();
		try {
			if (type.equals("cell")) {
				allData = mrrQualityMapper.getQualityByCell(map);
			} else if (type.equals("bsc")) {
				allData = mrrQualityMapper.getQualityByBsc(map);
			} else if (type.equals("date")) {
				allData = mrrQualityMapper.getQualityByDate(map);
			} else {
				allData = mrrQualityMapper.getQualityByAll(map);
			}
		} catch (Exception e) {
			allData = Collections.emptyList();
			e.printStackTrace();
		}

		return allData;
	}

	@Override
	public Page showTable(Page page, List<Map<String, Object>> allData) {
		logger.debug("进入MrrQualityServiceImpl.showTable().currentPage={}", page.getCurrentPage());
		return page.newPage(page, allData);
	}

	@Override
	public List<Map<String, Object>> export(List<Map<String, Object>> list) {
		return list;
	}
}
