package com.hgicreate.rno.gsm.service.optimize;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.hgicreate.rno.gsm.mapper.optimize.MotsMapper;
import com.hgicreate.rno.gsm.model.Page;

@Service
public class MotsServiceImpl implements MotsService {

	private static final Logger logger = LoggerFactory.getLogger(MotsServiceImpl.class);

	private final MotsMapper motsMapper;

	public MotsServiceImpl(MotsMapper motsMapper) {
		this.motsMapper = motsMapper;
	}

	@Override
	@Cacheable(value = "MApreparation")
	public List<Map<String, Object>> prepareData(Map<String, Object> condition) {
		logger.debug("进入方法：MotsServiceImpl.prepareData().condition={}", condition);

		Map<String, Object> map = new HashMap<>();
		map.put("date", condition.get("date").toString().split(","));

		if (!condition.get("time").equals("-1")) {
			map.put("time", condition.get("time").toString().split(","));
		} else {
			map.put("time", null);
		}

		if (!condition.get("cell").equals("-1")) {
			map.put("cell", condition.get("cell").toString().split(","));
		} else {
			map.put("cell", null);
		}

		return motsMapper.queryMots(map);
	}

	@Override
	public Page showTable(Page page, List<Map<String, Object>> allData) {
		logger.debug("进入方法：MotsServiceImpl.showTable().currentPage={}", page.getCurrentPage());
		return page.newPage(page, allData);
	}

	@Override
	public List<Map<String, Object>> export(List<Map<String, Object>> data) {
		return data;
	}

}
