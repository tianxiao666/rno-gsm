package com.hgicreate.rno.gsm.service.optimize;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hgicreate.rno.gsm.mapper.optimize.BsicMapper;
import com.hgicreate.rno.gsm.model.Page;

@Service
public class BsicServiceImpl implements BsicService {

	private static final Logger logger = LoggerFactory.getLogger(BsicServiceImpl.class);

	private BsicMapper bsicMapper;

	public BsicServiceImpl(BsicMapper bsicMapper) {
		this.bsicMapper = bsicMapper;
	}

	public List<Map<String, Object>> res = new ArrayList<>();

	@Override
	@Transactional
	public List<Map<String, Object>> queryBsicByPage(Map<String, Object> condition, Page page) {

		logger.debug("进入方法：BsicServiceImpl.queryBsicByPage。condition={}, page={}", condition, page);

		List<String> cellList = new ArrayList<>();
		List<String> bsicList = new ArrayList<>();
		int distance = Integer.parseInt(condition.get("distance").toString());

		for (String cell : condition.get("cell").toString().split(",")) {
			cellList.add(cell);
		}

		for (String bsic : condition.get("bsic").toString().split(",")) {
			while (bsic.startsWith("0")) {
				bsic = bsic.substring(1, bsic.length());
			}
			bsicList.add(bsic);
		}

		calBsicForCell(cellList, bsicList, distance);

		if (page == null) {
			logger.warn("方法：queryBsicByPage的参数：page 是空！无法查询!");
			return Collections.emptyList();
		}
		long totalCnt = page.getTotalCnt();
		if (totalCnt < 0) {
			totalCnt = bsicMapper.getBsicCount(cellList);
			page.setTotalCnt((int) totalCnt);
		}
		int startIndex = page.calculateStart();
		int cnt = page.getPageSize();

		Map<String, Object> map = new HashMap<>();
		map.put("startIndex", startIndex);
		map.put("cnt", cnt);
		map.put("cell", cellList);
		res = bsicMapper.queryBsicByPage(map);

		// dropTempTabAfterCal();

		return res;
	}

	@Override
	@Transactional
	public List<Map<String, Object>> queryBsicByPageForPage(Map<String, Object> condition, Page page) {

		logger.debug("进入方法：BsicServiceImpl.queryBsicByPageForPage。condition={}, page={}", condition, page);

		List<String> cellList = new ArrayList<>();
		for (String cell : condition.get("cell").toString().split(",")) {
			cellList.add(cell);
		}

		if (page == null) {
			logger.warn("方法：queryBsicByPage的参数：page 是空！无法查询!");
			return Collections.emptyList();
		}
		long totalCnt = page.getTotalCnt();
		if (totalCnt < 0) {
			totalCnt = bsicMapper.getBsicCount(cellList);
			page.setTotalCnt((int) totalCnt);
		}
		int startIndex = page.calculateStart();
		int cnt = page.getPageSize();

		Map<String, Object> map = new HashMap<>();
		map.put("startIndex", startIndex);
		map.put("cnt", cnt);
		map.put("cell", cellList);
		res = bsicMapper.queryBsicByPage(map);

		return res;
	}

	@Override
	public List<Map<String, Object>> exportBsic(String cell) {

		List<Map<String, Object>> result = new ArrayList<>();
		List<String> cellList = new ArrayList<>();

		for (String s : cell.split(",")) {
			cellList.add(s);
		}

		result = bsicMapper.getBsic(cellList);

		return result;
	}

	private void calBsicForCell(List<String> cellList, List<String> bsicList, int distance) {
		if (bsicMapper.getCountFromTempCell() > 0) {
			bsicMapper.dropTempCell();
		}

		if (bsicMapper.getCountFromTempBsic() > 0) {
			bsicMapper.dropTempBsic();
		}

		bsicMapper.insertToTempCell();
		bsicMapper.createTempBsic();
		// bsicMapper.preparationForBulkInsert();

		List<String> allBsic = new ArrayList<>();
		for (int i = 0; i < 8; i++) {
			for (int j = 0; j < 8; j++) {
				if (i == 0) {
					allBsic.add(j + "");
				} else {
					allBsic.add(i + "" + j);
				}
			}
		}
		bsicMapper.insertToTempBsic(allBsic);

		for (String cell : cellList) {
			bsicMapper.updateTempCell(cell);
		}

		for (String cell : cellList) {
			List<String> unAvailBsicAfterCheck = new ArrayList<>();
			List<String> unAvailBsicAfterCheck_temp = new ArrayList<>();
			unAvailBsicAfterCheck_temp = bsicMapper.checkBsic(cell, distance);
			logger.debug("({}).unAvailBsic={}", cell, unAvailBsicAfterCheck_temp);
			for (String bsic : unAvailBsicAfterCheck_temp) {
				while (bsic.startsWith("0") && !bsic.endsWith("0")) {
					bsic = bsic.substring(1, bsic.length());
				}
				unAvailBsicAfterCheck.add(bsic);
			}
			logger.debug("({}).unAvailBsicAfter20KMCheck={}", cell, unAvailBsicAfterCheck);
			unAvailBsicAfterCheck.addAll(bsicList);

			Set<String> set = new HashSet<>(unAvailBsicAfterCheck);
			logger.debug("({}).unAvailBsicAfter20KMCheckAndDeDuplication={}", cell, set);

			List<String> availBsic = bsicMapper.getAvailBsic(set.toArray(new String[set.size()]));
			logger.debug("({}).availBsic={}", cell, availBsic);

			String bsic = "";
			if (availBsic != null && !availBsic.isEmpty()) {
				bsic = availBsic.get((int) Math.round(Math.random() * (availBsic.size() - 1)));
				bsicMapper.updateBsic(bsic, cell);
			}
			logger.debug("({}).bsic={}", cell, bsic);
		}
	}

	@SuppressWarnings("unused")
	private void dropTempTabAfterCal() {
		bsicMapper.dropTempBsic();
		bsicMapper.dropTempCell();
	}

}
