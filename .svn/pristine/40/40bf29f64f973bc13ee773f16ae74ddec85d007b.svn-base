package com.hgicreate.rno.gsm.controller.measure;

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
import com.hgicreate.rno.gsm.mapper.measure.MrrQualityMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.measure.MrrQualityService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;

@RestController
@RequestMapping("/mrrQuality")
public class MrrQualityController {

	private static final Logger logger = LoggerFactory.getLogger(MrrQualityController.class);

	private final MrrQualityService mrrQualityService;

	private final MrrQualityMapper mrrQualityMapper;

	public MrrQualityController(MrrQualityService mrrQualityService, MrrQualityMapper mrrQualityMapper) {
		this.mrrQualityService = mrrQualityService;
		this.mrrQualityMapper = mrrQualityMapper;
	}

	/**
	 * 告警查询页面
	 */
	@GetMapping("/mrrQualityPage")
	ModelAndView index(Map<String, Object> model, HttpServletRequest request) {
		logger.debug("进入MrrQualityController.index()。");
		model.put("date", mrrQualityMapper.get30Date());
		model.put("bsc", mrrQualityMapper.getBsc());
		model.put("cell", mrrQualityMapper.get5Cell());
		model.put("linage", GsmConstant.linage);
		return new ModelAndView("measure/mrrQuality");
	}

	/**
	 * 日期多选
	 */
	@GetMapping("/getMQAllDate")
	List<String> getAllDate() {
		return mrrQualityMapper.getAllDate();
	}

	/**
	 * 网元多选
	 */
	@GetMapping("/getMQAllBsc")
	List<String> getAllBsc() {
		return mrrQualityMapper.getBsc();
	}

	/**
	 * 小区多选
	 */
	@GetMapping("/getMQAllCell")
	List<String> getAllCell() {
		return mrrQualityMapper.getAllCell();
	}

	/**
	 * 分页查询
	 */
	@PostMapping("/showTable")
	Page showTable(HttpServletRequest request) {

		Page page = new Page();
		page.setPageSize(GsmConstant.linage);
		page.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
		page.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
		page.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

		Map<String, Object> cond = new HashMap<>();
		cond.put("date", request.getParameter("dateSelect"));
		cond.put("cell", request.getParameter("cellSelect"));
		cond.put("bsc", request.getParameter("bscSelect"));
		cond.put("type", request.getParameter("summarySelect"));
		cond.put("RXQ0", request.getParameter("rxq0"));
		cond.put("RXQ1", request.getParameter("rxq1"));
		cond.put("RXQ2", request.getParameter("rxq2"));
		cond.put("RXQ3", request.getParameter("rxq3"));
		cond.put("RXQ4", request.getParameter("rxq4"));
		cond.put("RXQ5", request.getParameter("rxq5"));
		cond.put("RXQ6", request.getParameter("rxq6"));
		cond.put("RXQ7", request.getParameter("rxq7"));

		logger.debug("进入MrrQualityController.showTable().cond={}", cond);

		return mrrQualityService.showTable(page, mrrQualityService.prepareData(cond));
	}

	/**
	 * 导出
	 */
	@PostMapping("/export")
	void downBsicFile(HttpServletRequest request, HttpServletResponse response) {

		String fileName = "MRR质量结果" + ".xlsx";
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
		cond.put("type", request.getParameter("summarySelect"));
		cond.put("RXQ0", request.getParameter("rxq0"));
		cond.put("RXQ1", request.getParameter("rxq1"));
		cond.put("RXQ2", request.getParameter("rxq2"));
		cond.put("RXQ3", request.getParameter("rxq3"));
		cond.put("RXQ4", request.getParameter("rxq4"));
		cond.put("RXQ5", request.getParameter("rxq5"));
		cond.put("RXQ6", request.getParameter("rxq6"));
		cond.put("RXQ7", request.getParameter("rxq7"));

		Map<String, List<Map<String, Object>>> map = new LinkedHashMap<>();
		map.put("Sheet0", mrrQualityService.export(mrrQualityService.prepareData(cond)));

		ExcelFileTool.createExcel(response, map);
	}

}
