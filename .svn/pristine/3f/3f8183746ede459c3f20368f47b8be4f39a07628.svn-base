package com.hgicreate.rno.gsm.service.measure;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.hgicreate.rno.gsm.mapper.measure.MrrOriginalMapper;
import com.hgicreate.rno.gsm.model.Page;

@Service
public class MrrOriginalServiceImpl implements MrrOriginalService {

	private static final Logger logger = LoggerFactory.getLogger(MrrOriginalServiceImpl.class);

	private final MrrOriginalMapper mrrOriginalMapper;

	public MrrOriginalServiceImpl(MrrOriginalMapper mrrOriginalMapper) {
		this.mrrOriginalMapper = mrrOriginalMapper;
	}

	@Override
	public List<Map<String, Object>> prepareData(Map<String, Object> condition) {
		logger.debug("进入MrrOriginalServiceImpl.prepareData().");
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
		if (!condition.get("cell").equals("-1") && !condition.get("cell").toString().trim().equals("")) {
			map.put("cell", condition.get("cell").toString().split(","));
		} else {
			map.put("cell", null);
		}

		List<Map<String, Object>> allData = new ArrayList<>();
		try {
			allData = mrrOriginalMapper.queryMrr(map);
		} catch (Exception e) {
			allData = Collections.emptyList();
			e.printStackTrace();
		}

		return allData;
	}

	@Override
	public Page showTable(Page page, List<Map<String, Object>> allData) {
		logger.debug("进入MrrOriginalServiceImpl.showTable().currentPage={}", page.getCurrentPage());
		return page.newPage(page, allData);
	}
}
