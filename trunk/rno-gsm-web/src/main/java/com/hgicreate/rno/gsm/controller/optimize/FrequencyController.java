package com.hgicreate.rno.gsm.controller.optimize;

import com.hgicreate.rno.gsm.mapper.optimize.FrequencyMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.optimize.FrequencyService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;
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
@RequestMapping("/frequency")
public class FrequencyController {

	private static final Logger logger = LoggerFactory.getLogger(FrequencyController.class);

    private final FrequencyMapper frequencyMapper;

    private final FrequencyService frequencyService;


    @Value("${rmo.gsm.linage:15}")
    private String linage;

    public FrequencyController(FrequencyMapper frequencyMapper, FrequencyService frequencyService) {
        this.frequencyMapper = frequencyMapper;
        this.frequencyService = frequencyService;
    }
    
    @GetMapping("/frequencyPage")
    ModelAndView index(Map<String, Object> model, HttpServletRequest request) {
    	model.put("frequencydate", frequencyMapper.queryStsDate());
        model.put("frequencybsc" , frequencyMapper.queryBscDate());
    	model.put("frequencycell", frequencyMapper.queryGsmCell());
    	model.put("linage", Integer.parseInt(linage));
    	return new ModelAndView("optimize/sameFrequency");
    }


    @GetMapping("/frequencyBsc")
    List<String> queryAllBsc() {
        return frequencyMapper.queryAllBsc();
    }

    @GetMapping("/frequencyCell")
    List<String> queryGsmCell() {
        return frequencyMapper.queryAllGsmCell();
    }

	@PostMapping("/exportFrequency")
    void exportFrequency(HttpServletRequest request,HttpServletResponse resp) {
        logger.debug("进入方法exportFrequency:" + "exportFrequency.pageSize={},date={},bsc={},cell={},flag1={},flag2={}",request.getParameter("hiddenPageSize"),request.getParameter("dateSelect"),
                request.getParameter("bscSelect"), request.getParameter("cellSelect"), request.getParameter("SearchE"), request.getParameter("CaculateE"));

        String fileName = "同频同色检查.xlsx";
        try {
            fileName = new String("同频同色检查.xlsx".getBytes("UTF-8"), "iso-8859-1");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }// 为了解决中文名称乱码问题

        resp.setContentType("application/x.ms-excel");
        resp.setHeader("Content-disposition", "attachment;filename=" + fileName);

        List<Map<String, Object>> result = frequencyService.queryfrequency(request);

        Map<String, List<Map<String, Object>>> map = new LinkedHashMap<>();
        map.put("sheet1", result);

        ExcelFileTool.createExcel(resp, map);
    }

    /**
	 * 分页查询
	 */
	@PostMapping("/queryFrequencyByPage")
	Map<String, Object> queryCapacityByPage(HttpServletRequest request) {

		logger.debug("queryFrequencyByPage.pageSize={},date={},bsc={},cell={}", linage,request.getParameter("dateSelect"),
				request.getParameter("bscSelect"),request.getParameter("cellSelect"));

		Map<String, Object> result = new HashMap<String, Object>();

		Page newPage = new Page();
		newPage.setPageSize(Integer.parseInt(linage));
		newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
		newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
		newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

		Map<String, Object> cond = new HashMap<String, Object>();
		cond.put("frequencydate", request.getParameter("dateSelect"));
		cond.put("frequencybsc", request.getParameter("bscSelect").trim());
		cond.put("frequencycell", request.getParameter("cellSelect").trim());

		List<Map<String, Object>> res = frequencyService.queryFrequencyByPage(cond, newPage);

		int totalCnt = newPage.getTotalCnt();
		newPage.setTotalPageCnt(totalCnt / newPage.getPageSize() + (totalCnt % newPage.getPageSize() == 0 ? 0 : 1));
		newPage.setForcedStartIndex(-1);
		result.put("page", newPage);
		result.put("data", res);

		return result;
	}
    /**
     * 分页计算
     */
    @PostMapping("/calculateFrequencyByPage")
    Map<String, Object> calculateFrequencyByPage(HttpServletRequest request) {

        logger.debug("calculateFrequencyByPage.pageSize={},date={},bsc={},cell={}", linage,request.getParameter("dateSelect"),
                request.getParameter("bscSelect"),request.getParameter("cellSelect"));

        Map<String, Object> result = new HashMap<String, Object>();

        Page newPage = new Page();
        newPage.setPageSize(Integer.parseInt(linage));
        newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
        newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
        newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

        Map<String, Object> cond = new HashMap<String, Object>();
        cond.put("frequencydates", request.getParameter("dateSelect"));
        cond.put("frequencybscs", request.getParameter("bscSelect"));
        cond.put("frequencycells", request.getParameter("cellSelect"));

        List<Map<String, Object>>  res = frequencyService.calcaculateFrequencyByPage(cond, newPage);

        int totalCnt = newPage.getTotalCnt();
        newPage.setTotalPageCnt(totalCnt / newPage.getPageSize() + (totalCnt % newPage.getPageSize() == 0 ? 0 : 1));
        newPage.setForcedStartIndex(-1);
        result.put("pages", newPage);
        result.put("datas", res);
        return result;
    }
}
