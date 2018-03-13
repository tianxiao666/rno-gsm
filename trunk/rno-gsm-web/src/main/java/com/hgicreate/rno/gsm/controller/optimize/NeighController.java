package com.hgicreate.rno.gsm.controller.optimize;

import com.hgicreate.rno.gsm.mapper.optimize.NeighMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.optimize.NeighService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;
import org.apache.poi.xssf.usermodel.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.util.*;

@RestController
@RequestMapping("/neigh")
public class NeighController {

	private static final Logger logger = LoggerFactory.getLogger(NeighController.class);

    private final NeighMapper neighMapper;

    private final NeighService neighService;

    @Value("${rmo.gsm.linage:15}")
    private String linage;

    public NeighController(NeighMapper neighMapper, NeighService neighService) {
        this.neighMapper = neighMapper;
        this.neighService = neighService;
    }
    
    @GetMapping("/neighPage")
    ModelAndView index(Map<String, Object> model, HttpServletRequest request) {
    	model.put("neighdate", neighMapper.queryStsDate());
        model.put("neighbsc" , neighMapper.queryBscDate());
    	model.put("neighcell", neighMapper.queryGsmCell());
    	model.put("linage", Integer.parseInt(linage));
    	return new ModelAndView("optimize/neighborhood");
    }

    @GetMapping("/neighDate")
    List<String> stsDate() {
        return neighMapper.queryAllDate();
    }

    @GetMapping("/neighBsc")
    List<String> queryAllBsc() {
        return neighMapper.queryAllBsc();
    }

    @GetMapping("/neighCell")
    List<String> queryGsmCell() {
        return neighMapper.queryAllGsmCell();
    }

	@PostMapping("/exportNeigh")
    ModelAndView exportneigh(HttpServletRequest request,HttpServletResponse resp,Map<String, Object> model){
        logger.debug("进入方法exportNeigh:"+"exportNeigh.pageSize={},date={},bsc={},cell={}", request.getParameter("hiddenPageSize"), request.getParameter("dateSelect"),request.getParameter("bscSelect"),request.getParameter("cellSelect"));
        String fileName = "邻区优化.xlsx";
        try {
            List<Map<String, Object>> result = neighService.queryNeigh(request);
            Map<String, List<Map<String, Object>>> map = new LinkedHashMap<>();
            map.put("sheet1", result);
            fileName = new String("邻区优化.xlsx".getBytes("UTF-8"), "iso-8859-1");
            resp.setContentType("application/x.ms-excel");
            resp.setHeader("Content-disposition", "attachment;filename=" + fileName);
            ExcelFileTool.createExcel(resp, map);
            return null;
        } catch (Exception e) {
            model.put("messages", "error");
            model.put("neighdate", neighMapper.queryStsDate());
            model.put("neighbsc" , neighMapper.queryBscDate());
            model.put("neighcell", neighMapper.queryGsmCell());
            model.put("linage", Integer.parseInt(linage));
            return new ModelAndView("optimize/neighborhood");
        }
    }
    
    /**
	 * 分页查询MOTS
	 */
	@PostMapping("/queryNeighByPage")
	Map<String, Object> queryNeighByPage(HttpServletRequest request) {
		
		logger.debug("queryNeighByPage.pageSize={},date={},bsc={},cell={}", linage,request.getParameter("dateSelect"),
				request.getParameter("bscSelect"),request.getParameter("cellSelect"));

		Map<String, Object> result = new HashMap<String, Object>();

		Page newPage = new Page();
		newPage.setPageSize(Integer.parseInt(linage));
		newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
		newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
		newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

		Map<String, Object> cond = new HashMap<String, Object>();
		cond.put("neighdate", request.getParameter("dateSelect"));
		cond.put("neighbsc", request.getParameter("bscSelect"));
		cond.put("neighcell", request.getParameter("cellSelect"));
		
		List<Map<String, Object>> res = neighService.queryNeighByPage(cond, newPage);

		int totalCnt = newPage.getTotalCnt();
		newPage.setTotalPageCnt(totalCnt / newPage.getPageSize() + (totalCnt % newPage.getPageSize() == 0 ? 0 : 1));
		newPage.setForcedStartIndex(-1);
		result.put("page", newPage);
		result.put("data", res);
		
		return result;
	}
}
