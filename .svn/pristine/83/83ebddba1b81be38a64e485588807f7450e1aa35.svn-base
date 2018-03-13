package com.hgicreate.rno.gsm.controller.optimize;

import com.hgicreate.rno.gsm.constant.GsmConstant;
import com.hgicreate.rno.gsm.mapper.optimize.StructureIndexMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.optimize.StructureIndexService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.util.*;


@RestController
@RequestMapping("/structureIndex")
public class StructureIndexController {

    private static final Logger logger = LoggerFactory.getLogger(StructureIndexController.class);

    private final StructureIndexMapper structureIndexMapper;

    private final StructureIndexService structureIndexService;

    public StructureIndexController(StructureIndexMapper structureIndexMapper,StructureIndexService structureIndexService){
        this.structureIndexMapper=structureIndexMapper;
        this.structureIndexService=structureIndexService;
    }

    @GetMapping("/structureIndexPage")
    ModelAndView index(Map<String, Object> model) {

        model.put("date", structureIndexMapper.queryNcs30Date());
        model.put("bsc", structureIndexMapper.queryNcsBsc());
        model.put("linage", GsmConstant.linage);
        return new ModelAndView("optimize/structureIndex");
    }

    @GetMapping("/ncsDate")
    List<String>  ncsDate(){
        return structureIndexMapper.queryNcsDate();
    }

    @GetMapping("/ncsBsc")
    List<String> ncsBsc(){
        return structureIndexMapper.queryNcsBsc();
    }

    @PostMapping("/queryStructureIndexByPage")
    Map<String, Object> queryStructureIndexByPage(HttpServletRequest request) {

        logger.debug("queryStructureIndexByPage.pageSize={},date={},time={},cell={}", request.getParameter("dateSelect"),
                request.getParameter("bscSelect"),request.getParameter("gsm900"));

        Map<String, Object> result = new HashMap<String, Object>();

        Page newPage = new Page();
        newPage.setPageSize(GsmConstant.linage);
        newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
        newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
        newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

        Map<String, Object> cond = new HashMap<String, Object>();
        cond.put("dates", request.getParameter("dateSelect"));
        cond.put("bscs", request.getParameter("bscSelect"));
        cond.put("gsm900Number", request.getParameter("gsm900Select"));
        cond.put("gsm1800Number", request.getParameter("gsm1800Select"));

        List<Map<String, Object>> res = structureIndexService.queryStructureIndexByPage(cond, newPage);

        int totalCnt = newPage.getTotalCnt();
        newPage.setTotalPageCnt(totalCnt / newPage.getPageSize() + (totalCnt % newPage.getPageSize() == 0 ? 0 : 1));
        newPage.setForcedStartIndex(-1);
        result.put("page", newPage);
        result.put("data", res);

        return result;
    }

    @GetMapping("/exportStructureIndex")
    void exportStructureIndex(HttpServletRequest request,HttpServletResponse resp) throws Exception{
        logger.debug("进入方法exportStructureIndex"+"exportStructureIndex.pageSize={},date={},bsc={},gsm900={},gsm1800={}",
                request.getParameter("date"), request.getParameter("bsc"),request.getParameter("gsm900"),request.getParameter("gsm1800"));

        String fileName = "结构指数.xlsx";
        try {
            fileName = new String("结构指数.xlsx".getBytes("UTF-8"), "iso-8859-1");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        resp.setContentType("application/x.ms-excel");
        resp.setHeader("Content-disposition", "attachment;filename="+fileName);
        Map<String,List<Map<String,Object>>> res=new LinkedHashMap<>();
        res.put("sheet0",queryStructureIndex(request));
        ExcelFileTool.createExcel(resp,res);
    }

    private List<Map<String, Object>> queryStructureIndex(HttpServletRequest request) {
        Map<String, Object> map = new HashMap<>();
        List<String> dateList = new ArrayList<>();
        if(!request.getParameter("date").equals("-1")){
            dateList.addAll(Arrays.asList(request.getParameter("date").split(",")));
            map.put("dates", dateList);
        }else {
            map.put("dates", null);
        }

        List<String> bscList = new ArrayList<>();
        if(!request.getParameter("bsc").equals("-1")){
            bscList.addAll(Arrays.asList(request.getParameter("bsc").split(",")));
            map.put("bscs", bscList);
        }else {
            map.put("bscs", null);
        }

        map.put("gsm900Number",request.getParameter("gsm900"));
        map.put("gsm1800Number",request.getParameter("gsm1800"));
        logger.debug("map={}", map);
        List<Map<String, Object>> list=structureIndexMapper.exportStructureIndex(map);
        for(Map<String,Object> listMap:list){
            listMap.replace(
                    "重叠覆盖系数",
                    listMap.get("重叠覆盖系数"),
                    (double)Math.round(Double.parseDouble(listMap.get("重叠覆盖系数").toString())*100)/100
            );
        }
        return list;
    }
}
