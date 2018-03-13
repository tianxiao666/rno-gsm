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
import com.hgicreate.rno.gsm.mapper.optimize.SameNeiborFreqCheckMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.optimize.SameNeiborFreqCheckService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;

@RestController
@RequestMapping("/sameNeiborFreqCheck")
public class SameNeiborFreqCheckController {

	private static final Logger logger = LoggerFactory.getLogger(SameNeiborFreqCheckController.class);

	private SameNeiborFreqCheckMapper sameNeiborFreqCheckMapper;

	private SameNeiborFreqCheckService sameNeiborFreqCheckService;

	public SameNeiborFreqCheckController(SameNeiborFreqCheckMapper sameNeiborFreqCheckMapper,
			SameNeiborFreqCheckService sameNeiborFreqCheckService) {
		this.sameNeiborFreqCheckMapper = sameNeiborFreqCheckMapper;
		this.sameNeiborFreqCheckService = sameNeiborFreqCheckService;
	}

	/**
	 * 同邻频检查页面
	 */
	@GetMapping("/sameNeiborFreqCheckPage")
	ModelAndView index(Map<String, Object> model, HttpServletRequest request) {
		model.put("date", sameNeiborFreqCheckMapper.queryDate());
		model.put("bsc", sameNeiborFreqCheckMapper.queryBsc());
		model.put("cell", sameNeiborFreqCheckMapper.queryCell());
		model.put("linage", GsmConstant.linage);
		return new ModelAndView("optimize/sameNeiborFreqCheck");
	}

	/**
	 * 获取全部BSC
	 */
	@GetMapping("/getAllBsc")
	List<String> getAllBsc() {
		return sameNeiborFreqCheckMapper.queryAllBsc();
	}

	/**
	 * 获取全部小区
	 */
	@GetMapping("/getAllCell")
	List<String> getAllCell() {
		return sameNeiborFreqCheckMapper.queryAllCell();
	}

	/**
	 * 查询结果分页展示
	 */
	@PostMapping("/querySnfByPage")
	Map<String, Object> showQueryResultByPage(HttpServletRequest request) {
		logger.debug("进入SameNeiborFreqCheckController.querySnfByPage()");

		Map<String, Object> result = new HashMap<String, Object>();

		Page newPage = new Page();
		newPage.setPageSize(GsmConstant.linage);
		newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
		newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
		newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

		result.put("data", sameNeiborFreqCheckService.showQueryResultByPage(newPage, prepareData(request)));
		result.put("queryFlag", true);

		return result;
	}

	/**
	 * 查询结果导出
	 */
	@RequestMapping("/exportSnf")
	void downloadSnf(HttpServletRequest req, HttpServletResponse res) {
		String fileName = "同邻频检查查询结果.xlsx";
		try {
			fileName = new String("同邻频检查查询结果.xlsx".getBytes("UTF-8"), "iso-8859-1");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} // 为了解决中文名称乱码问题

		res.setContentType("application/x.ms-excel");
		res.setHeader("Content-disposition", "attachment;filename=" + fileName);

		Map<String, List<Map<String, Object>>> map = new LinkedHashMap<>();
		map.put("Sheet0", sameNeiborFreqCheckService.exportQueryResult(prepareData(req)));

		ExcelFileTool.createExcel(res, map);
	}

	/**
	 * 计算结果分页展示
	 */
	@RequestMapping("/calculation")
	Map<String, Object> showCalResultByPage(HttpServletRequest request) {
		logger.debug("SameNeiborFreqCheckController.showCalResultByPage().");

		Map<String, Object> result = new HashMap<String, Object>();

		Page newPage = new Page();
		newPage.setPageSize(GsmConstant.linage);
		newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
		newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
		newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

		result.put("data", sameNeiborFreqCheckService.showCalculateResultByPage(newPage,
				sameNeiborFreqCheckService.calculation(prepareData(request))));
		result.put("calFlag", true);

		return result;
	}

	/**
	 * 导出同邻频检查计算结果
	 */
	@RequestMapping("/exportCalSnf")
	void downloadCalSnf(HttpServletRequest req, HttpServletResponse res) {
		String fileName = "同邻频检查计算结果.xlsx";
		try {
			fileName = new String("同邻频检查计算结果.xlsx".getBytes("UTF-8"), "iso-8859-1");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} // 为了解决中文名称乱码问题

		res.setContentType("application/x.ms-excel");
		res.setHeader("Content-disposition", "attachment;filename=" + fileName);

		Map<String, List<Map<String, Object>>> map = new LinkedHashMap<>();
		map.put("Sheet0", sameNeiborFreqCheckService
				.exportCalculateResult(sameNeiborFreqCheckService.calculation(prepareData(req))));

		ExcelFileTool.createExcel(res, map);
	}

	/**
	 * 准备数据
	 */
	private Map<String, Object> prepareData(HttpServletRequest req) {
		Map<String, Object> cond = new HashMap<String, Object>();
		cond.put("date", req.getParameter("dateSelect"));
		cond.put("bsc", req.getParameter("bscSelect"));
		cond.put("cell", req.getParameter("cellSelect"));
		return sameNeiborFreqCheckService.preparation(cond);
	}

}