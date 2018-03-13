package com.hgicreate.rno.gsm.service.optimize;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.hgicreate.rno.gsm.mapper.optimize.SameNeiborFreqCheckMapper;
import com.hgicreate.rno.gsm.model.Page;

@Service
public class SameNeiborFreqCheckServiceImpl implements SameNeiborFreqCheckService {

	private static final Logger logger = LoggerFactory.getLogger(SameNeiborFreqCheckServiceImpl.class);

	private final SameNeiborFreqCheckMapper sameNeiborFreqCheckMapper;

	public SameNeiborFreqCheckServiceImpl(SameNeiborFreqCheckMapper sameNeiborFreqCheckMapper) {
		this.sameNeiborFreqCheckMapper = sameNeiborFreqCheckMapper;
	}

	@Cacheable(value="SNFpreparation")
	public Map<String, Object> preparation(Map<String, Object> condition) {
		Map<String, Object> map = new HashMap<>();
		map.put("date", condition.get("date").toString());

		List<String> cellList = new ArrayList<>();
		List<String> bscList = new ArrayList<>();

		if (condition.get("cell").equals("-1") ||condition.get("cell").toString().trim().equals("")) {
			cellList = sameNeiborFreqCheckMapper.queryAllCell();
		} else {
			cellList.addAll(Arrays.asList(condition.get("cell").toString().split(",")));
		}

		if (condition.get("bsc").equals("-1") ||condition.get("bsc").toString().trim().equals("")) {
			bscList = null;
		} else {
			bscList.addAll(Arrays.asList(condition.get("bsc").toString().split(",")));
		}

		map.put("bsc", bscList);
		map.put("cell", cellList);
		return map;
	}

	@Override
	public Page showQueryResultByPage(Page page, Map<String, Object> condition) {
		logger.debug("进入SameNeiborFreqCheckServiceImpl.showQueryResultByPage().currentPage={}", page.getCurrentPage());
		return page.newPage(page, sameNeiborFreqCheckMapper.querySnf(condition));
	}

	@Override
	public List<Map<String, Object>> exportQueryResult(Map<String, Object> condition) {
		return sameNeiborFreqCheckMapper.querySnf(condition);
	}

	@Override
	@Cacheable(value = "SNFCcalSnf")
	public List<Map<String, Object>> calculation(Map<String, Object> condition) {
		logger.debug("进入SameNeiborFreqCheckServiceImpl.calSnf().condition={}", condition);

		String date = condition.get("date").toString();
		Set<Map<String, Object>> result = new HashSet<>();
		Map<String, Object> resultMap;

		@SuppressWarnings("unchecked")
		List<String> cellList = (List<String>) condition.get("cell");
		@SuppressWarnings("unchecked")
		List<String> bscList = (List<String>) condition.get("bsc");

		for (String cell : cellList) {
			List<Integer> cellDchnoList = splitList(sameNeiborFreqCheckMapper.getDchno(date, cell));
			// logger.debug("cellDchnoList={}", cellDchnoList);
			List<Map<String, Object>> threeKmCell = sameNeiborFreqCheckMapper.get3KMCell(date, cell, bscList);
			// logger.debug("threeKmCell={}", threeKmCell);
			for (Map<String, Object> map : threeKmCell) {
				List<Integer> rCellDchnoList = splitList(
						sameNeiborFreqCheckMapper.getDchno(date, map.get("CELLR").toString()));
				// logger.debug("rCellDchnoList={}", rCellDchnoList);
				for (int a : cellDchnoList) {
					for (int b : rCellDchnoList) {
						if (a == b) {
							// logger.debug("a==b,a={},b={}", a, b);
							resultMap = new LinkedHashMap<>();
							resultMap.put("日期", date);
							resultMap.put("BSC", map.get("BSC"));
							resultMap.put("CELL", map.get("CELL"));
							resultMap.put("CELLR_BSC", map.get("CELLR_BSC"));
							resultMap.put("CELLR", map.get("CELLR"));
							resultMap.put("CELL_DCHNO", a);
							resultMap.put("CELLR_DCHNO", a);
							resultMap.put("类型", "同频");
							resultMap.put("距离", map.get("距离"));
							result.add(resultMap);
						} else if (Math.abs(a - b) == 1) {
							// logger.debug("a-b=1,a={},b={}", a, b);
							resultMap = new LinkedHashMap<>();
							resultMap.put("日期", date);
							resultMap.put("BSC", map.get("BSC"));
							resultMap.put("CELL", map.get("CELL"));
							resultMap.put("CELLR_BSC", map.get("CELLR_BSC"));
							resultMap.put("CELLR", map.get("CELLR"));
							resultMap.put("CELL_DCHNO", a);
							resultMap.put("CELLR_DCHNO", b);
							resultMap.put("类型", "邻频");
							resultMap.put("距离", map.get("距离"));
							result.add(resultMap);
						}
					}
				}
			}
		}

		return new ArrayList<>(result);
	}

	@Override
	public Page showCalculateResultByPage(Page page, List<Map<String, Object>> allData) {
		logger.debug("进入SameNeiborFreqCheckServiceImpl.showCalculateResultByPage().currentPage={}",
				page.getCurrentPage());
		return page.newPage(page, allData);
	}

	@Override
	public List<Map<String, Object>> exportCalculateResult(List<Map<String, Object>> allData) {
		return allData;
	}

	/**
	 * 对以“&”相隔的List进行分割
	 */
	private List<Integer> splitList(List<String> list) {
		Set<Integer> newList = new HashSet<>();
		for (String a : list) {
			String one[] = a.split("&");
			for (String b : one) {
				newList.add(Integer.parseInt(b));
			}
		}
		return new ArrayList<>(newList);
	}
}
