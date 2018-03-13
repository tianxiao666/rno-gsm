package com.hgicreate.rno.gsm.controller.measure;

import com.hgicreate.rno.gsm.constant.GsmConstant;
import com.hgicreate.rno.gsm.mapper.measure.NcsMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.measure.NcsService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.util.*;

@RestController
@RequestMapping("/ncs")
public class NcsController {

    private static final Logger logger = LoggerFactory.getLogger(NcsController.class);

    private final NcsMapper ncsMapper;

    private final NcsService ncsService;

    public NcsController(NcsService ncsService,NcsMapper ncsMapper){
        this.ncsService=ncsService;
        this.ncsMapper=ncsMapper;
    }

    @GetMapping("/page")
    ModelAndView index(Map<String,Object> model){
        model.put("dates",ncsMapper.selectNcsDownDate());
        model.put("bscs",ncsMapper.selectNcsDownBsc());
        model.put("cells",ncsMapper.selectNcsDownCell());
        model.put("linage", GsmConstant.linage);
        return new ModelAndView("measure/ncs");
    }

    @GetMapping("/date")
    List<String> ncsDate(){
        return  ncsMapper.selectNcsMultiDate();
    }

    @GetMapping("/bsc")
    List<String> ncsBsc(){
        return  ncsMapper.selectNcsMultiBsc();
    }

    @GetMapping("/cell")
    List<String> ncsCell(){
        return  ncsMapper.selectNcsMultiCell();
    }

    @PostMapping("/byPage")
    Map<String,Object>  queryNcsByPage(HttpServletRequest request){
        logger.debug("queryNcsByPage.pageSize={},date={},bsc={},cell={}", request.getParameter("dateSelect"),
                request.getParameter("bscSelect"),request.getParameter("cellSelect"));

        String dates=request.getParameter("dateSelect");
        String cells=request.getParameter("cellSelect");
        String bscs=request.getParameter("bscSelect");

        Map<String,Object> mapCond=new HashMap<>();
        if(bscs.equals("-1") || bscs.trim().equals("")){
            mapCond.put("bscs",null);
        }else{
            mapCond.put("dates", Arrays.asList(bscs.split(",")));
        }
        mapCond.put("dates", Arrays.asList(dates.split(",")));
        mapCond.put("cells",Arrays.asList(cells.split(",")));

        Map<String, Object> result = new HashMap<String, Object>();

        Page newPage = new Page();
        newPage.setPageSize(GsmConstant.linage);
        newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
        newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
        newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

        long totalCnt = newPage.getTotalCnt();
        if (totalCnt < 0) {
            totalCnt=ncsMapper.selectNcsCount(mapCond);
            newPage.setTotalCnt((int) totalCnt);
        }
        int startIndex = newPage.calculateStart();
        int cnt = newPage.getPageSize();

        mapCond.put("startIndex", startIndex);
        mapCond.put("cnt", cnt);

        List<Map<String, Object>> res = ncsMapper.selectNcsByPage(mapCond);

        newPage.setTotalPageCnt((int)totalCnt / newPage.getPageSize() + (totalCnt % newPage.getPageSize() == 0 ? 0 : 1));
        newPage.setForcedStartIndex(-1);
        result.put("page", newPage);
        result.put("data", res);
        return result;
    }

    @PostMapping("/queryChartData")
    Map<String,Object> queryChartData(HttpServletRequest request){
        String dates= request.getParameter("date");
        String times= request.getParameter("time");
        String cells= request.getParameter("cell");
        Map<String,Object> cond=new HashMap<>();
        List<String> dateList=new ArrayList<>();
        dateList.addAll(Arrays.asList(dates.split(",")));
        List<String> timeList=new ArrayList<>();
        timeList.addAll(Arrays.asList(times.split(",")));
        List<String> cellList=new ArrayList<>();
        cellList.addAll(Arrays.asList(cells.split(",")));
        cond.put("dates",dateList);
        cond.put("times",timeList);
        cond.put("cells",cellList);
        List<Map<String,Object>> list=ncsService.getChartData(cond);
        Map<String,Object> result=new LinkedHashMap<>();
        result.put("data",list);
        return  result;
    }

    @PostMapping("/exportData")
    void exportData(HttpServletRequest request, HttpServletResponse resp){
        String dates=request.getParameter("dateSelect");
        List<String> dataList=new ArrayList<>();
        if(dates.split(",").length==1) {
            dataList.add(dates);
        }else{
            dataList=Arrays.asList(dates.split(","));
        }
        Map<String,Object> mapCond=new HashMap<>();
        mapCond.put("dates",dataList);

        resp.setContentType("application/x.ms-excel");
        resp.setHeader("Content-disposition", "attachment;filename=NCS.xlsx" );

        Map<String, List<Map<String, Object>>> mapRes = new LinkedHashMap<>();
        mapRes.put("sheet0",ncsMapper.exportData(mapCond));
        ExcelFileTool.createExcel(resp,mapRes);
    }
}
