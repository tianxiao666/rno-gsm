package com.hgicreate.rno.gsm.controller.optimize;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Iterator;
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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.hgicreate.rno.gsm.constant.GsmConstant;
import com.hgicreate.rno.gsm.mapper.optimize.BsicMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.optimize.BsicService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;

@RestController
@RequestMapping("/bsic")
public class BsicController {

	private static final Logger logger = LoggerFactory.getLogger(BsicController.class);

	private BsicMapper bsicMapper;

	private final BsicService bsicService;

	public BsicController(BsicMapper bsicMapper, BsicService bsicService) {
		this.bsicMapper = bsicMapper;
		this.bsicService = bsicService;
	}

	/**
	 * BSIC规划页面
	 */
	@GetMapping("/bsicPage")
	ModelAndView index(Map<String, Object> model, HttpServletRequest request) {
		model.put("linage", GsmConstant.linage);
		return new ModelAndView("optimize/bsicPlan");
	}

	/**
	 * 获取全部小区
	 */
	@GetMapping("/cellForBsicAna")
	List<String> queryCell() {
		return bsicMapper.queryCell();
	}

	/**
	 * 以文件形式导入小区
	 */
	@RequestMapping("/importCellFileForBsicAna")
	String importCell(MultipartHttpServletRequest request) {
		logger.debug("进入importCell方法。");
		String result = readFile(request);
		logger.debug("cellFileData={}", result);
		if (result == null) {
			return "false";
		} else {
			return result;
		}
	}

	/**
	 * 以文件形式导入BSIC
	 */
	@RequestMapping("/importBsicFileForBsicAna")
	String importBsic(MultipartHttpServletRequest request) {
		logger.debug("进入importBsic方法。");
		String result = readFile(request);
		logger.debug("bsicFileData={}", result);
		if (result == null) {
			return "false";
		} else {
			return result;
		}
	}

	/**
	 * BSIC规划计算
	 */
	@PostMapping("/calForBsic")
	Map<String, Object> calculation(HttpServletRequest request) {
		logger.debug("进入calculation");
		Map<String, Object> result = new HashMap<String, Object>();

		Page newPage = new Page();
		newPage.setPageSize(GsmConstant.linage);
		newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
		newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
		newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

		Map<String, Object> cond = new HashMap<String, Object>();
		cond.put("distance", request.getParameter("maxDistance"));
		cond.put("bsic", request.getParameter("bsic"));
		cond.put("cell", request.getParameter("cell"));

		List<Map<String, Object>> res = bsicService.queryBsicByPage(cond, newPage);

		int totalCnt = newPage.getTotalCnt();
		newPage.setTotalPageCnt(totalCnt / newPage.getPageSize() + (totalCnt % newPage.getPageSize() == 0 ? 0 : 1));
		newPage.setForcedStartIndex(-1);
		result.put("page", newPage);
		result.put("data", res);

		return result;
	}

	/**
	 * 分页查询BSIC规划结果
	 */
	@PostMapping("/calForBsicForPage")
	Map<String, Object> calForBsicForPage(HttpServletRequest request) {
		logger.debug("进入calculation");
		Map<String, Object> result = new HashMap<String, Object>();

		Page newPage = new Page();
		newPage.setPageSize(GsmConstant.linage);
		newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
		newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
		newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

		Map<String, Object> cond = new HashMap<String, Object>();
		cond.put("distance", request.getParameter("maxDistance"));
		cond.put("bsic", request.getParameter("bsic"));
		cond.put("cell", request.getParameter("cell"));

		List<Map<String, Object>> res = bsicService.queryBsicByPageForPage(cond, newPage);

		int totalCnt = newPage.getTotalCnt();
		newPage.setTotalPageCnt(totalCnt / newPage.getPageSize() + (totalCnt % newPage.getPageSize() == 0 ? 0 : 1));
		newPage.setForcedStartIndex(-1);
		result.put("page", newPage);
		result.put("data", res);

		return result;
	}

	/**
	 * 导出BSIC规划结果
	 */
	@PostMapping("/exportBsic")
	void downBsicFile(HttpServletRequest req, HttpServletResponse res) {
		String fileName = "BSIC规划.xlsx";
		try {
			fileName = new String("BSIC规划.xlsx".getBytes("UTF-8"), "iso-8859-1");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} // 为了解决中文名称乱码问题

		res.setContentType("application/x.ms-excel");
		res.setHeader("Content-disposition", "attachment;filename=" + fileName);

		List<Map<String, Object>> result = bsicService.exportBsic(req.getParameter("cell"));

		Map<String, List<Map<String, Object>>> map = new LinkedHashMap<>();
		map.put("Sheet0", result);

		ExcelFileTool.createExcel(res, map);
	}

	/**
	 * 读取数据文件内容
	 */
	private String readFile(MultipartHttpServletRequest request) {
		StringBuilder sb = null;
		try {
			Iterator<String> itr = request.getFileNames();
			MultipartFile mpf;
			BufferedReader br = null;
			String a = "";

			while (itr.hasNext()) {
				sb = new StringBuilder();
				mpf = request.getFile(itr.next());
				logger.debug("fileName={}", mpf.getOriginalFilename());
				br = new BufferedReader(new InputStreamReader(mpf.getInputStream(), "GBK"));
				while ((a = br.readLine()) != null) {
					if (a.matches("^[0-9a-zA-Z\\s,]+$")) {
						for (String b : a.split(",")) {
							sb.append(b.trim() + ",");
						}
					} else {
						return null;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return sb.toString().hashCode() == 0 ? "" : sb.toString().substring(0, sb.toString().length() - 1);
	}
}
