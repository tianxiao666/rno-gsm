package com.hgicreate.rno.gsm.service.query;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.hgicreate.rno.gsm.constant.GsmConstant;
import com.hgicreate.rno.gsm.mapper.query.TrafficQueryMapper;
import com.hgicreate.rno.gsm.model.Page;

@Service
public class TrafficQueryServiceImpl implements TrafficQueryService {

	private static final Logger logger = LoggerFactory.getLogger(TrafficQueryServiceImpl.class);

	private final TrafficQueryMapper trafficQueryMapper;

	public TrafficQueryServiceImpl(TrafficQueryMapper trafficQueryMapper) {
		this.trafficQueryMapper = trafficQueryMapper;
	}

	@Override
	public List<Map<String, Object>> prepareData(Map<String, Object> condition) {

		boolean isSixBusyHour = false;
		Map<String, Object> map = new HashMap<>();
		String template = condition.get("template").toString();// 模板
		logger.debug("进入TrafficQueryServiceImpl.prepareData().template={}", template);

		// 日期
		if (!condition.get("date").equals("-1")) {
			map.put("date", condition.get("date").toString().split(","));
		} else {
			map.put("date", null);
		}

		// 时间
		List<String> timeList = new ArrayList<>();
		if (!condition.get("time").equals("-1")) {
			timeList = Arrays.asList(condition.get("time").toString().split(","));
			map.put("time", timeList);
			if (Arrays.asList(GsmConstant.sixBusyHour).containsAll(timeList)) {
				isSixBusyHour = true;
			}
		} else {
			map.put("time", null);
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

		// 指标
		if (!condition.get("index").equals("-1")) {
			map.put("index", Arrays.asList(condition.get("index").toString().split(",")));
		} else {
			map.put("index", null);
		}

		String granularity = condition.get("granularity").toString();// 粒度
		if (granularity.equals("15")) {
			map.put("granularity", "15");
		} else if (granularity.equals("60")) {
			map.put("granularity", isSixBusyHour ? "6" : "");
		}

		logger.debug("TrafficQueryServiceImpl.prepareData().condition={}", map);

		List<Map<String, Object>> allData = null;
		try {
			if (template.equals("话务")) {
				allData = trafficQueryMapper.showTrafficTemplateTab(map);
			} else if (template.equals("切出切入")) {
				allData = trafficQueryMapper.showDriveInAndOutTemplateTab(map);
			} else if (template.equals("切换点对点")) {
				allData = trafficQueryMapper.showSwitchPointToPointTemplateTab(map);
			} else if (template.equals("数据")) {
				allData = trafficQueryMapper.showDataTemplateTab(map);
			} else if (template.equals("无线利用率")) {
				allData = trafficQueryMapper.showWirelessUtilizationTemplateTab(map);
			} else if (template.equals("质量")) {
				allData = trafficQueryMapper.showQualityTemplateTab(map);
			} else if (template.equals("聚合BSC_S话务")) {
				allData = trafficQueryMapper.showAggregationBSCSTrafficTemplateTab(map);
			} else if (template.equals("聚合BSC_话务")) {
				allData = trafficQueryMapper.showAggregationBSCTrafficTemplateTab(map);
			} else if (template.equals("聚合BSC_数据")) {
				allData = trafficQueryMapper.showAggregationBSCDataTemplateTab(map);
			} else if (template.equals("聚合CELL_S话务")) {
				allData = trafficQueryMapper.showAggregationCELLSTrafficTemplateTab(map);
			} else if (template.equals("聚合CELL_话务")) {
				allData = trafficQueryMapper.showAggregationCELLTrafficTemplateTab(map);
			} else if (template.equals("聚合CELL_切出切入")) {
				allData = trafficQueryMapper.showAggregationCELLDriveInAndOutTemplateTab(map);
			} else if (template.equals("聚合CELL_切换点对点")) {
				allData = trafficQueryMapper.showAggregationCELLSwitchPointToPointTemplateTab(map);
			} else if (template.equals("聚合CELL_数据")) {
				allData = trafficQueryMapper.showAggregationCELLDataTemplateTab(map);
			} else if (template.equals("聚合Date_S话务")) {
				allData = trafficQueryMapper.showAggregationDateSTrafficTemplateTab(map);
			} else if (template.equals("聚合Date_话务")) {
				allData = trafficQueryMapper.showAggregationDateTrafficTemplateTab(map);
			} else if (template.equals("聚合Date_数据")) {
				allData = trafficQueryMapper.showAggregationDateDataTemplateTab(map);
			} else if (template.equals("聚合Time_S话务")) {
				allData = trafficQueryMapper.showAggregationTimeSTrafficTemplateTab(map);
			} else if (template.equals("聚合Time_话务")) {
				allData = trafficQueryMapper.showAggregationTimeTrafficTemplateTab(map);
			} else if (template.equals("聚合Time_数据")) {
				allData = trafficQueryMapper.showAggregationTimeDataTemplateTab(map);
			} else {
				allData = Collections.emptyList();
			}
		} catch (Exception e) {
			allData = Collections.emptyList();
			e.printStackTrace();
		}

		return allData;
	}

	@Override
	public Page showTable(Page page, List<Map<String, Object>> allData) {
		logger.debug("进入TrafficQueryServiceImpl.showTable().currentPage={}", page.getCurrentPage());
		return page.newPage(page, allData);
	}

	@Override
	public List<Map<String, Object>> export(List<Map<String, Object>> data) {
		return data;
	}
}
