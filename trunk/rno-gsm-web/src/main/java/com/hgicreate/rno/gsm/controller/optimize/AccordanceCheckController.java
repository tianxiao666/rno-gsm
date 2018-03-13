package com.hgicreate.rno.gsm.controller.optimize;

import com.hgicreate.rno.gsm.constant.GsmConstant;
import com.hgicreate.rno.gsm.mapper.optimize.AccordanceCheckMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.optimize.AccordanceCheckService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.Method;
import java.util.*;


@RestController
@RequestMapping("/accordanceCheck")
public class AccordanceCheckController {

    private static final Logger logger = LoggerFactory.getLogger(AccordanceCheckController.class);

    private final AccordanceCheckMapper accordanceCheckMapper;

    private final AccordanceCheckService accordanceCheckService;

    public AccordanceCheckController(AccordanceCheckMapper accordanceCheckMapper, AccordanceCheckService accordanceCheckService) throws UnsupportedEncodingException {
        this.accordanceCheckMapper = accordanceCheckMapper;
        this.accordanceCheckService = accordanceCheckService;
    }

    @GetMapping("/accordanceCheckPage")
    ModelAndView index(Map<String, Object> model) {
        model.put("dates", accordanceCheckMapper.selectCddDate());
        model.put("linage", GsmConstant.linage);
        return new ModelAndView("optimize/accordanceCheck");
    }

    private Page createNewPageObj(HttpServletRequest request, int condIndex) {
        Page newPage = new Page();
        newPage.setPageSize(GsmConstant.linage);
        return newPage;
    }

    private void setPageData(Page page) {
        int totalCnt = page.getTotalCnt();
        page.setTotalPageCnt(totalCnt / page.getPageSize() + (totalCnt % page.getPageSize() == 0 ? 0 : 1));
        page.setForcedStartIndex(-1);
    }

    private Map<String,String> getCondMap(){
        Map<String,String> condMap=new LinkedHashMap<>();
        condMap.put("CB=YES","CbYes");
        condMap.put("ECSC=NO","EcscNo");
        condMap.put("GPRSSUP=NO","GprsupNo");
        condMap.put("内外局异常","InnerOuterException");
        condMap.put("TX定义异常","TxException");
        condMap.put("TRX定义异常","TrxException");
        condMap.put("传输定义异常","TransportException");
        condMap.put("BA表 >= 26 和 <= 3","BaTable");
        condMap.put("邻区 >=26 和 <=3","Neighbor");
        condMap.put("测量频点漏定义","SpotLackDef");
        condMap.put("跳频与CDU不匹配","CduSpot");
        condMap.put("BSPWRT不等于BSPWRB","Bspwrt");
        return condMap;
    }

    @PostMapping("/queryAccordanceCheckByPage")
    Map<String, Object> queryAccordanceCheckByPage(HttpServletRequest request) throws Exception {
        logger.debug("queryAccordanceCheckByPage.date={},conditionSelect={}", request.getParameter("dateSelect"),
                request.getParameter("conditionSelect"));

        Map<String, Object> result = new LinkedHashMap<>();
        Map<String, Object> cond = new HashMap<String, Object>();
        List<String> dateList = new ArrayList<>();
        dateList.add(request.getParameter("dateSelect"));
        cond.put("dates", dateList);
        String conditionSelect = request.getParameter("conditionSelect");
        List<String> conditionList = Arrays.asList(conditionSelect.split(","));

        Map<String,String> condMap=getCondMap();

        for(int i=0;i<conditionList.size();i++){
            Page page=createNewPageObj(request,i+13);
            result.put("index"+(i+13),i+13);
            result.put(conditionList.get(i),accordanceCheckService.inquireAccordanceByPage(cond,page,condMap.get(conditionList.get(i))));
            setPageData(page);
            result.put("page"+(i+13),page);
        }

        return result;
    }


    @PostMapping("/calculateAccordanceCheckByPage")
    Map<String, Object> calculateAccordanceCheckByPage(HttpServletRequest request)  throws Exception{
        logger.debug("calculateAccordanceCheckByPage.date={}，condition={}", request.getParameter("dateSelect"),
                request.getParameter("conditionSelect"));

        Map<String, Object> result = new LinkedHashMap<>();

        Map<String, Object> cond = new HashMap<String, Object>();
        List<String> dateList = new ArrayList<>();
        dateList.add(request.getParameter("dateSelect"));
        cond.put("dates", dateList);
        String conditionSelect = request.getParameter("conditionSelect");
        List<String> conditionList = Arrays.asList(conditionSelect.split(","));


        Map<String,String> condMap=getCondMap();

        for(int i=0;i<conditionList.size();i++){
            Page page=createNewPageObj(request,i+1);
            result.put("index"+(i+1),i+1);
            result.put(conditionList.get(i), accordanceCheckService.calculateAccordanceByPage(cond, page, condMap.get(conditionList.get(i))));
            setPageData(page);
            result.put("page"+(i+1),page);
        }

        return result;
    }

    @PostMapping("/accordanceForm{index}")
    Map<String, Object> getDataByPageNum(@PathVariable("index") int index, HttpServletRequest request) throws Exception{

        logger.debug("getDataByPageNum.condIndex={},date={}, currentPage={}", index, request.getParameter("date"),
                Integer.parseInt(request.getParameter("hiddenCurrentPage")));

        Map<String, Object> result = new LinkedHashMap<String, Object>();

        Page page = new Page();
        page.setPageSize(GsmConstant.linage);
        page.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
        page.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
        page.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

        Map<String, Object> cond = new HashMap<String, Object>();
        List<String> dateList = new ArrayList<>();
        dateList.add(request.getParameter("date"));
        cond.put("dates", dateList);

        String condit=request.getParameter("cond");
        Map<String,String> mapOrder=getCondMap();

        if(condit.equals("BA表 &gt;= 26 和 &lt;= 3")){
            condit="BA表 >= 26 和 <= 3";
        }
        if(condit.equals("邻区 &gt;=26 和 &lt;=3")){
            condit="邻区 >=26 和 <=3";
        }
        if(condit.equals("测量频点漏定义")){
            cond.put("flag","flag");
        }
        if(index >12){
            result.put("data",accordanceCheckService.inquireAccordanceByPage(cond,page,mapOrder.get(condit)));
        }else{
            result.put("data",accordanceCheckService.calculateAccordanceByPage(cond,page,mapOrder.get(condit)));
        }
        setPageData(page);
        result.put("page", page);
        result.put("index", index);
        return result;
    }

    @SuppressWarnings("unchecked")
    @RequestMapping("/exportAccordanceCheck")
    void exportAccordanceCheck(HttpServletRequest request, HttpServletResponse resp) throws Exception {
        logger.debug("进入方法exportAccordanceCheckData: " + "request={}", request.getParameter("date"));

        String exportOrder=request.getParameter("exportCond");
        List<String> orderList=Arrays.asList(exportOrder.split(","));
        logger.debug("orderList={}"+orderList);

        String date = request.getParameter("dateSelect");
        Map<String, Object> mapCond = new HashMap<>();
        List<String> dateList = new ArrayList<>();
        dateList.add(date);
        mapCond.put("dates", dateList);

        Map<String, List<Map<String, Object>>> map = new LinkedHashMap<>();

        String fileName = "一致性检查.xlsx";
        try {
            fileName = new String("一致性检查.xlsx".getBytes("UTF-8"), "iso-8859-1");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        resp.setContentType("application/x.ms-excel");
        resp.setHeader("Content-disposition", "attachment;filename=" + fileName);


        Map<String,String> condMap=getCondMap();
        //logger.debug("orderList={}"+orderList);
        List<String> cellList=accordanceCheckMapper.selectSpotLackCell(mapCond);
        List<Map<String, Object>> listSpotLack=new ArrayList<>();
        for (String anOrder : orderList) {
            if(anOrder.equals("BA表 &gt;= 26 和 &lt;= 3")){
                anOrder="BA表 >= 26 和 <= 3";
            }
            if(anOrder.equals("邻区 &gt;=26 和 &lt;=3")){
                anOrder="邻区 >=26 和 <=3";
            }
            Class clazz = accordanceCheckMapper.getClass();
            Method[] methods = clazz.getMethods();
            if(("calculate" + condMap.get(anOrder)).equalsIgnoreCase("calculateSpotLackDef")){
                for(String cell:cellList){
                    mapCond.put("cell",cell);
                    List<Map<String, Object>> spotLackList= accordanceCheckMapper.calculateSpotLackDef(mapCond);
                    listSpotLack.addAll(spotLackList);
                }
                map.put("测量频点漏定义",listSpotLack);
            }

            for (Method method : methods) {

                if (("calculate" + condMap.get(anOrder)).equalsIgnoreCase(method.getName())
                        &&!("calculate" + condMap.get(anOrder)).equalsIgnoreCase("calculateSpotLackDef")) {
                    map.put(anOrder, (List<Map<String, Object>>) method.invoke(accordanceCheckMapper, mapCond));
                }
            }
        }
        logger.debug("exportAccordanceCheck.map={}" + map);
        ExcelFileTool.createExcel(resp, map);
    }

}