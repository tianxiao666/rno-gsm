package com.hgicreate.rno.gsm.controller.query;

import java.io.UnsupportedEncodingException;
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
import com.hgicreate.rno.gsm.mapper.query.IdleTransmissionMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.query.IdleTransmissionService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;

@RestController
@RequestMapping("/idleTransmission")
public class IdleTransmissionController {

	private static final Logger logger = LoggerFactory.getLogger(IdleTransmissionController.class);

	private final IdleTransmissionService idleTransmissionService;

	private final IdleTransmissionMapper idleTransmissionMapper;

	public IdleTransmissionController(IdleTransmissionService idleTransmissionService,
			IdleTransmissionMapper idleTransmissionMapper) {
		this.idleTransmissionService = idleTransmissionService;
		this.idleTransmissionMapper = idleTransmissionMapper;
	}

	/**
	 * 告警查询页面
	 */
	@GetMapping("/idleTransmissionPage")
	ModelAndView index(Map<String, Object> model, HttpServletRequest request) {
		logger.debug("进入AlarmQueryController.index()。");
		model.put("date", idleTransmissionMapper.get30Date());
		model.put("bsc", idleTransmissionMapper.getBsc());
		model.put("cell", idleTransmissionMapper.get5Cell());
		model.put("linage", GsmConstant.linage);
		return new ModelAndView("query/idleTransmission");
	}

	/**
	 * 日期多选
	 */
	@GetMapping("/getITAllDate")
	List<String> getAllDate() {
		return idleTransmissionMapper.getAllDate();
	}

	/**
	 * 网元多选
	 */
	@GetMapping("/getITAllBsc")
	List<String> getAllBsc() {
		return idleTransmissionMapper.getBsc();
	}

	/**
	 * 小区多选
	 */
	@GetMapping("/getITAllCell")
	List<String> getAllCell() {
		return idleTransmissionMapper.getAllCell();
	}

	/**
	 * 查询结果分页展示
	 */
	@PostMapping("/showQueryResult")
	Page showQueryResult(HttpServletRequest request) {
		logger.debug("进入IdleTransmissionController.showQueryResult()");

		Page page = new Page();
		page.setPageSize(GsmConstant.linage);
		page.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
		page.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
		page.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

		Map<String, Object> cond = new HashMap<>();
		cond.put("date", request.getParameter("dateSelect"));
		cond.put("cell", request.getParameter("cellSelect"));
		cond.put("bsc", request.getParameter("bscSelect"));

		return idleTransmissionService.showTable(page,
				idleTransmissionMapper.queryIdleTransmission(idleTransmissionService.prepareData(cond)));
	}

	/**
	 * 查询结果导出
	 */
	@PostMapping("/exportQueryResult")
	void exportQueryResult(HttpServletRequest request, HttpServletResponse response) {

		String fileName = "空闲传输查询结果" + ".xlsx";
		try {
			fileName = new String(fileName.getBytes("UTF-8"), "iso-8859-1");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} // 为了解决中文名称乱码问题

		response.setContentType("application/x.ms-excel");
		response.setHeader("Content-disposition", "attachment;filename=" + fileName);

		Map<String, Object> cond = new HashMap<>();
		cond.put("date", request.getParameter("dateSelect"));
		cond.put("cell", request.getParameter("cellSelect"));
		cond.put("bsc", request.getParameter("bscSelect"));

		List<Map<String, Object>> result = idleTransmissionService
				.export(idleTransmissionMapper.queryIdleTransmission(idleTransmissionService.prepareData(cond)));

		Map<String, List<Map<String, Object>>> map = new LinkedHashMap<>();
		map.put("Sheet0", result);

		ExcelFileTool.createExcel(response, map);
	}

	/**
	 * 计算结果分页展示
	 */
	@PostMapping("/showCalResult")
	Page showCalResult(HttpServletRequest request) {
		logger.debug("进入IdleTransmissionController.showCalResult()");

		Page page = new Page();
		page.setPageSize(GsmConstant.linage);
		page.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
		page.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
		page.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

		Map<String, Object> cond = new HashMap<>();
		cond.put("date", request.getParameter("dateSelect"));
		cond.put("cell", request.getParameter("cellSelect"));
		cond.put("bsc", request.getParameter("bscSelect"));

		return idleTransmissionService.showTable(page,
				idleTransmissionMapper.calIdleTransmission(idleTransmissionService.prepareData(cond)));
	}

	/**
	 * 计算结果导出
	 */
	@PostMapping("/exportCalResult")
	void exportCalResult(HttpServletRequest request, HttpServletResponse response) {

		String fileName = "空闲传输计算结果" + ".xlsx";
		try {
			fileName = new String(fileName.getBytes("UTF-8"), "iso-8859-1");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} // 为了解决中文名称乱码问题

		response.setContentType("application/x.ms-excel");
		response.setHeader("Content-disposition", "attachment;filename=" + fileName);

		Map<String, Object> cond = new HashMap<>();
		cond.put("date", request.getParameter("dateSelect"));
		cond.put("cell", request.getParameter("cellSelect"));
		cond.put("bsc", request.getParameter("bscSelect"));

		List<Map<String, Object>> result = idleTransmissionService
				.export(idleTransmissionMapper.calIdleTransmission(idleTransmissionService.prepareData(cond)));

		Map<String, List<Map<String, Object>>> map = new LinkedHashMap<>();
		map.put("Sheet0", result);

		ExcelFileTool.createExcel(response, map);
	}
}
