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
import com.hgicreate.rno.gsm.mapper.query.AlarmQueryMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.query.AlarmQueryService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;

@RestController
@RequestMapping("/alarmQuery")
public class AlarmQueryController {

	private static final Logger logger = LoggerFactory.getLogger(AlarmQueryController.class);

	private final AlarmQueryService alarmQueryService;

	private final AlarmQueryMapper alarmQueryMapper;

	public AlarmQueryController(AlarmQueryService alarmQueryService, AlarmQueryMapper alarmQueryMapper) {
		this.alarmQueryService = alarmQueryService;
		this.alarmQueryMapper = alarmQueryMapper;
	}

	/**
	 * 告警查询页面
	 */
	@GetMapping("/alarmQueryPage")
	ModelAndView index(Map<String, Object> model, HttpServletRequest request) {
		logger.debug("进入AlarmQueryController.index()。");
		model.put("date", alarmQueryMapper.get30Date());
		model.put("bsc", alarmQueryMapper.getBsc());
		model.put("cell", alarmQueryMapper.get5Cell());
		model.put("linage", GsmConstant.linage);
		return new ModelAndView("query/alarmQuery");
	}

	/**
	 * 日期多选
	 */
	@GetMapping("/getAQAllDate")
	List<String> getAllDate() {
		return alarmQueryMapper.getAllDate();
	}

	/**
	 * 网元多选
	 */
	@GetMapping("/getAQAllBsc")
	List<String> getAllBsc() {
		return alarmQueryMapper.getBsc();
	}

	/**
	 * 小区多选
	 */
	@GetMapping("/getAQAllCell")
	List<String> getAllCell() {
		return alarmQueryMapper.getAllCell();
	}

	/**
	 * 分页查询
	 */
	@PostMapping("/showTable")
	Page showTable(HttpServletRequest request) {
		logger.debug("进入AlarmQueryController.showTable()");

		Page page = new Page();
		page.setPageSize(GsmConstant.linage);
		page.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
		page.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
		page.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

		Map<String, Object> cond = new HashMap<>();
		cond.put("date", request.getParameter("dateSelect"));
		cond.put("cell", request.getParameter("cellSelect"));
		cond.put("bsc", request.getParameter("bscSelect"));

		return alarmQueryService.showTable(page, alarmQueryService.prepareData(cond));
	}

	/**
	 * 导出
	 */
	@PostMapping("/export")
	void downBsicFile(HttpServletRequest request, HttpServletResponse response) {

		String fileName = "告警查询" + ".xlsx";
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

		List<Map<String, Object>> result = alarmQueryService.export(alarmQueryService.prepareData(cond));

		Map<String, List<Map<String, Object>>> map = new LinkedHashMap<>();
		map.put("Sheet0", result);

		ExcelFileTool.createExcel(response, map);
	}
}
