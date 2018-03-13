package com.hgicreate.rno.gsm.controller.query;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.hgicreate.rno.gsm.constant.GsmConstant;
import com.hgicreate.rno.gsm.mapper.query.TrafficQueryMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.query.TrafficQueryService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;

@RestController
@RequestMapping("/trafficQuery")
public class TrafficQueryController {

	private static final Logger logger = LoggerFactory.getLogger(TrafficQueryController.class);

	private final TrafficQueryMapper trafficQueryMapper;

	private final TrafficQueryService trafficQueryService;

	public TrafficQueryController(TrafficQueryMapper trafficQueryMapper, TrafficQueryService trafficQueryService) {
		this.trafficQueryMapper = trafficQueryMapper;
		this.trafficQueryService = trafficQueryService;
	}

	/**
	 * 话务查询页面
	 */
	@GetMapping("/trafficQueryPage")
	ModelAndView index(Map<String, Object> model, HttpServletRequest request) {
		logger.debug("进入TrafficQueryController.index()。");
		List<String> list = new ArrayList<>();
		model.put("date", trafficQueryMapper.get30Date());
		model.put("bsc", trafficQueryMapper.getBsc());
		model.put("cell", trafficQueryMapper.get5Cell());
		list.add("<---------- 一般 ---------->");
		list.addAll(trafficQueryMapper.getCommonTemplate());
		list.add("<---------- 聚合 ---------->");
		list.addAll(trafficQueryMapper.getAggregationTemplate());
		model.put("template", list);
		model.put("index", trafficQueryMapper.getTrafficIndex());
		model.put("linage", GsmConstant.linage);
		return new ModelAndView("query/trafficQuery");
	}

	/**
	 * 日期多选
	 */
	@GetMapping("/getTQAllDate")
	List<String> getAllDate() {
		return trafficQueryMapper.getAllDate();
	}

	/**
	 * 网元多选
	 */
	@GetMapping("/getTQAllBsc")
	List<String> getAllBsc() {
		return trafficQueryMapper.getBsc();
	}

	/**
	 * 小区多选
	 */
	@GetMapping("/getTQAllCell")
	List<String> getAllCell() {
		return trafficQueryMapper.getAllCell();
	}

	/**
	 * 通过模板获取指标
	 */
	@GetMapping("/getIndexByTemplate")
	List<String> getIndexByTemplate(HttpServletRequest request) {
		logger.debug("进入TrafficQueryController.getIndexByTemplate(), template={}", request.getParameter("template"));
		return trafficQueryMapper.getIndexByTemplate(request.getParameter("template"));
	}

	/**
	 * 分页查询
	 */
	@PostMapping("/showTable")
	Page showTable(HttpServletRequest request) {
		logger.debug("进入TrafficQueryController.showTable()");

		Page page = new Page();
		page.setPageSize(GsmConstant.linage);
		page.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
		page.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
		page.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

		Map<String, Object> cond = new HashMap<>();
		cond.put("date", request.getParameter("dateSelect"));
		cond.put("time", request.getParameter("timeSelect"));
		cond.put("bsc", request.getParameter("bscSelect"));
		cond.put("cell", request.getParameter("cellSelect"));
		cond.put("index", request.getParameter("indexSelect"));
		cond.put("granularity", request.getParameter("granularity"));
		cond.put("template", request.getParameter("templateSelect"));

		return trafficQueryService.showTable(page, trafficQueryService.prepareData(cond));
	}

	/**
	 * 导出
	 */
	@PostMapping("/export")
	void downBsicFile(HttpServletRequest request, HttpServletResponse response) {

		String fileName = "话务查询-" + request.getParameter("templateSelect") + ".xlsx";
		try {
			fileName = new String(fileName.getBytes("UTF-8"), "iso-8859-1");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} // 为了解决中文名称乱码问题

		response.setContentType("application/x.ms-excel");
		response.setHeader("Content-disposition", "attachment;filename=" + fileName);

		Map<String, Object> cond = new HashMap<>();
		cond.put("date", request.getParameter("dateSelect"));
		cond.put("time", request.getParameter("timeSelect"));
		cond.put("bsc", request.getParameter("bscSelect"));
		cond.put("cell", request.getParameter("cellSelect"));
		cond.put("index", request.getParameter("indexSelect"));
		cond.put("granularity", request.getParameter("granularity"));
		cond.put("template", request.getParameter("templateSelect"));

		List<Map<String, Object>> result = trafficQueryService.export(trafficQueryService.prepareData(cond));

		Map<String, List<Map<String, Object>>> map = new LinkedHashMap<>();
		map.put("Sheet0", result);

		ExcelFileTool.createExcel(response, map);
	}
}
