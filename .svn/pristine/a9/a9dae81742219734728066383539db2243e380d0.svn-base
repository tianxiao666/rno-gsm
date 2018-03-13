package com.hgicreate.rno.gsm.controller.optimize;

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
import com.hgicreate.rno.gsm.mapper.optimize.MotsMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.optimize.MotsService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;

@RestController
@RequestMapping("/mots")
public class MotsController {

	private static final Logger logger = LoggerFactory.getLogger(MotsController.class);

	private final MotsMapper motsMapper;

	private final MotsService motsService;

	public MotsController(MotsMapper motsMapper, MotsService motsService) {
		this.motsMapper = motsMapper;
		this.motsService = motsService;
	}

	/**
	 * MOTS分析页面
	 */
	@GetMapping("/motsPage")
	ModelAndView index(Map<String, Object> model, HttpServletRequest request) {
		model.put("date", motsMapper.queryStsDate());
		model.put("cell", motsMapper.queryGsmCell());
		model.put("linage", GsmConstant.linage);
		return new ModelAndView("optimize/motsAnalysis");
	}

	/**
	 * 获取日期
	 */
	@GetMapping("/stsDate")
	List<String> stsDate() {
		return motsMapper.queryStsDate();
	}

	/**
	 * 获取全部小区
	 */
	@GetMapping("/gsmCell")
	List<String> queryGsmCell() {
		return motsMapper.queryAllGsmCell();
	}

	/**
	 * 导出MOTS
	 */
	@RequestMapping("/exportMots")
	void exportMots(HttpServletRequest request, HttpServletResponse resp) throws Exception {
		logger.debug("进入MotsController.exportMots()");

		String fileName = "MOTS分析.xlsx";
		try {
			fileName = new String(fileName.getBytes("UTF-8"), "iso-8859-1");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} // 为了解决中文名称乱码问题

		resp.setContentType("application/x.ms-excel");
		resp.setHeader("Content-disposition", "attachment;filename=" + fileName);

		Map<String, Object> cond = new HashMap<String, Object>();
		cond.put("date", request.getParameter("dateSelect"));
		cond.put("time", request.getParameter("timeSelect"));
		cond.put("cell", request.getParameter("cellSelect"));

		Map<String, List<Map<String, Object>>> map = new LinkedHashMap<>();
		map.put("Sheet0", motsService.export(motsService.prepareData(cond)));

		ExcelFileTool.createExcel(resp, map);
	}

	/**
	 * 分页查询MOTS
	 */
	@PostMapping("/queryMotsByPage")
	Page queryMotsByPage(HttpServletRequest request) {
		logger.debug("进入MotsController.queryMotsByPage().");

		Page newPage = new Page();
		newPage.setPageSize(GsmConstant.linage);
		newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
		newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
		newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

		Map<String, Object> cond = new HashMap<String, Object>();
		cond.put("date", request.getParameter("dateSelect"));
		cond.put("time", request.getParameter("timeSelect"));
		cond.put("cell", request.getParameter("cellSelect"));

		return motsService.showTable(newPage, motsService.prepareData(cond));
	}
}
