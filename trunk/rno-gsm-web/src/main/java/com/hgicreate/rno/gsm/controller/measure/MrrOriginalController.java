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
import com.hgicreate.rno.gsm.mapper.measure.MrrOriginalMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.measure.MrrOriginalService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;

@RestController
@RequestMapping("/mrrOriginal")
public class MrrOriginalController {

	private static final Logger logger = LoggerFactory.getLogger(MrrOriginalController.class);

	private final MrrOriginalService mrrOriginalService;

	private final MrrOriginalMapper mrrOriginalMapper;

	public MrrOriginalController(MrrOriginalService mrrOriginalService, MrrOriginalMapper mrrOriginalMapper) {
		this.mrrOriginalService = mrrOriginalService;
		this.mrrOriginalMapper = mrrOriginalMapper;
	}

	/**
	 * 告警查询页面
	 */
	@GetMapping("/mrrOriginalPage")
	ModelAndView index(Map<String, Object> model, HttpServletRequest request) {
		logger.debug("进入MrrOriginalController.index()。");
		model.put("date", mrrOriginalMapper.get30Date());
		model.put("bsc", mrrOriginalMapper.getBsc());
		model.put("cell", mrrOriginalMapper.get5Cell());
		model.put("linage", GsmConstant.linage);
		return new ModelAndView("measure/mrrOriginal");
	}

	/**
	 * 日期多选
	 */
	@GetMapping("/getMOAllDate")
	List<String> getAllDate() {
		return mrrOriginalMapper.getAllDate();
	}

	/**
	 * 网元多选
	 */
	@GetMapping("/getMOAllBsc")
	List<String> getAllBsc() {
		return mrrOriginalMapper.getBsc();
	}

	/**
	 * 小区多选
	 */
	@GetMapping("/getMOAllCell")
	List<String> getAllCell() {
		return mrrOriginalMapper.getAllCell();
	}

	/**
	 * 分页查询
	 */
	@PostMapping("/showTable")
	Page showTable(HttpServletRequest request) {
		logger.debug("进入MrrOriginalController.showTable()");

		Page page = new Page();
		page.setPageSize(GsmConstant.linage);
		page.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
		page.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
		page.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

		Map<String, Object> cond = new HashMap<>();
		cond.put("date", request.getParameter("dateSelect"));
		cond.put("cell", request.getParameter("cellSelect"));
		cond.put("bsc", request.getParameter("bscSelect"));

		return mrrOriginalService.showTable(page, mrrOriginalService.prepareData(cond));
	}

	/**
	 * 导出
	 */
	@PostMapping("/export")
	void downBsicFile(HttpServletRequest request, HttpServletResponse response) {

		String fileName = "MRR原始结果" + ".xlsx";
		try {
			fileName = new String(fileName.getBytes("UTF-8"), "iso-8859-1");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} // 为了解决中文名称乱码问题

		response.setContentType("application/x.ms-excel");
		response.setHeader("Content-disposition", "attachment;filename=" + fileName);

		String date[] = request.getParameter("dateSelect").split(",");

		Map<String, List<Map<String, Object>>> map = new LinkedHashMap<>();
		map.put("质量按网元聚合", mrrOriginalMapper.getQualityByBsc(date));
		map.put("质量按小区聚合", mrrOriginalMapper.getQualityByCell(date));
		map.put("电平按小区聚合", mrrOriginalMapper.getLevelByCell(date));
		map.put("RxLev", mrrOriginalMapper.getAllLevel(date));
		map.put("RxQual", mrrOriginalMapper.getAllQuality(date));
		map.put("TA", mrrOriginalMapper.getAllTA(date));

		ExcelFileTool.createExcel(response, map);
	}

	/**
	 * 清空表
	 */
	@GetMapping("/deleteMrr")
	int deleteTable(HttpServletRequest request) {
		String date = "";
		logger.debug("进入MrrOriginalController.deleteTable().date={}", date = request.getParameter("dateSelect"));
		return mrrOriginalMapper.deleteMrr(date.split(","));
	}

	/**
	 * 获取电平图表数据
	 */
	@PostMapping("/getLevel")
	List<Map<String, Object>> getLevel(HttpServletRequest request) {

		Map<String, Object> cond = new HashMap<>();
		cond.put("date", request.getParameter("date"));
		cond.put("time", request.getParameter("time"));
		cond.put("cell", request.getParameter("cell"));
		cond.put("bsc", request.getParameter("bsc"));
		cond.put("chgr", request.getParameter("chgr"));

		logger.debug("进入MrrOriginalController.getLevel(), cond={}", cond);
		return mrrOriginalMapper.getLevel(cond);
	}

	/**
	 * 获取质量图表数据
	 */
	@PostMapping("/getQuality")
	List<Map<String, Object>> getQuality(HttpServletRequest request) {

		Map<String, Object> cond = new HashMap<>();
		cond.put("date", request.getParameter("date"));
		cond.put("time", request.getParameter("time"));
		cond.put("cell", request.getParameter("cell"));
		cond.put("bsc", request.getParameter("bsc"));
		cond.put("chgr", request.getParameter("chgr"));

		logger.debug("进入MrrOriginalController.getQuality(), cond={}", cond);
		return mrrOriginalMapper.getQuality(cond);
	}

	/**
	 * 获取TA图表数据
	 */
	@PostMapping("/getTA")
	List<Map<String, Object>> getTA(HttpServletRequest request) {

		Map<String, Object> cond = new HashMap<>();
		cond.put("date", request.getParameter("date"));
		cond.put("time", request.getParameter("time"));
		cond.put("cell", request.getParameter("cell"));
		cond.put("bsc", request.getParameter("bsc"));
		cond.put("chgr", request.getParameter("chgr"));

		logger.debug("进入MrrOriginalController.getTA(), cond={}", cond);
		return mrrOriginalMapper.getTA(cond);
	}
}
