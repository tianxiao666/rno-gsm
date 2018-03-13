package com.hgicreate.rno.gsm.controller.query;

import com.hgicreate.rno.gsm.constant.GsmConstant;
import com.hgicreate.rno.gsm.mapper.query.ParamsQueryMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.query.ParamsQueryService;
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
@RequestMapping("/paramsQuery")
public class ParamsQueryController {

    private static final Logger logger = LoggerFactory.getLogger(ParamsQueryController.class);

    private final ParamsQueryService paramsQueryService;

    private final ParamsQueryMapper paramsQueryMapper;

    public ParamsQueryController(ParamsQueryService paramsQueryService,ParamsQueryMapper paramsQueryMapper){
        this.paramsQueryService=paramsQueryService;
        this.paramsQueryMapper=paramsQueryMapper;
    }

    @GetMapping("/paramsQueryPage")
    ModelAndView index(Map<String, Object> model) {
        model.put("dates",paramsQueryMapper.selectParamsDate());
        model.put("orders",paramsQueryMapper.selectParamsOrder());
        model.put("bscs",paramsQueryMapper.selectParamsBsc());
        model.put("cells",paramsQueryMapper.selectTop5Cell());
        model.put("linage", GsmConstant.linage);
        return new ModelAndView("query/paramsQuery");
    }

    @GetMapping("/date")
    List<String> paramsQueryDate(){
        return paramsQueryMapper.selectParamsDate();
    }

    @GetMapping("/order")
    List<String> paramsQueryOrder(){
        return paramsQueryMapper.selectParamsOrder();
    }

    @GetMapping("/bsc")
    List<String> paramsQueryBsc(){
        return paramsQueryMapper.selectParamsBsc();
    }

    @GetMapping("/cell")
    List<String> paramsQueryCell(){
        return paramsQueryMapper.selectParamsCell();
    }

    @PostMapping("/queryParamsByPage")
    Map<String, Object> queryParamsByPage(HttpServletRequest request) throws Exception{
        logger.debug("queryParamsByPage.dates={}，orders={},bscs={},cells={}",  request.getParameter("dateSelect"),
                request.getParameter("orderSelect"),request.getParameter("bscSelect"),request.getParameter("cellSelect"));
        String dates=request.getParameter("dateSelect");
        String orders=request.getParameter("orderSelect");
        String bscs=request.getParameter("bscSelect");
        String cells=request.getParameter("cellSelect");

        Map<String, Object> cond = new HashMap<String, Object>();
        Map<String, Object> result = new LinkedHashMap<>();

        List<String> dateList= Arrays.asList(dates.split(","));
        List<String> orderList= Arrays.asList(orders.split(","));
        List<String> bscList;
        List<String> cellList;
        if(bscs.equals("-1") || bscs.trim().equals("")){
            bscList=null;
        }else{
            bscList=Arrays.asList(bscs.split(","));
        }
        if(cells.equals("-1")|| cells.trim().equals("")){
            cellList=null;
        }else{
            cellList=Arrays.asList(cells.split(","));
        }
        cond.put("dates",dateList);
        cond.put("bscs",bscList);
        cond.put("cells",cellList);
        List<String> orderCopyList=new ArrayList<>();
        orderCopyList.addAll(orderList);
        for(int i=0;i<orderList.size();i++){
                if(orderList.get(i).contains("_")){
                    orderCopyList.set(i,orderList.get(i).replace("_",""));
                }
                Page page=createNewPageObj(request,i+1);
                result.put("index"+(i+1),i+1);
                if(paramsQueryService.queryParamsByPage(cond,page,orderCopyList.get(i))!=null){
                result.put(orderList.get(i),paramsQueryService.queryParamsByPage(cond,page,orderCopyList.get(i)));}
                setPageData(page);
                result.put("page"+(i+1),page);
        }
        logger.debug("resultparams={}"+result);
        return result;
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

    @PostMapping("/paramsForm{index}")
    Map<String, Object> getDataByPageNum(@PathVariable("index") int index, HttpServletRequest request) throws Exception{

        logger.debug("getDataByPageNum.condIndex={},date={}, currentPage={}", index, request.getParameter("date"),
                Integer.parseInt(request.getParameter("hiddenCurrentPage")));

        String dates=request.getParameter("date");
        String bscs=request.getParameter("bsc");
        String cells=request.getParameter("cell");
        String order=request.getParameter("order");
        logger.debug(order);

        Map<String, Object> result = new LinkedHashMap<String, Object>();

        Page page = new Page();
        page.setPageSize(GsmConstant.linage);
        page.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
        page.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
        page.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

        Map<String, Object> cond = new HashMap<String, Object>();
        List<String> dateList= Arrays.asList(dates.split(","));
        List<String> bscList;
        List<String> cellList;
        if(bscs.equals("-1")|| bscs.trim().equals("")){
            bscList=null;
        }else{
            bscList=Arrays.asList(bscs.split(","));
        }
        if(cells.equals("-1")|| cells.trim().equals("")){
            cellList=null;
        }else{
            cellList=Arrays.asList(cells.split(","));
        }
        cond.put("dates",dateList);
        cond.put("bscs",bscList);
        cond.put("cells",cellList);
        if(order.contains("_")){
            order=order.replace("_","");
        }
        result.put("data",paramsQueryService.queryParamsByPage(cond,page,order));
        setPageData(page);
        result.put("page", page);
        result.put("index", index);
        logger.debug("getDataByPageNum.result={}"+result);
        return result;
    }

    @SuppressWarnings("unchecked")
    @RequestMapping("/exportParams")
    void exportParams( HttpServletRequest request, HttpServletResponse resp) throws Exception {
        logger.debug("进入方法exportParams: request={}",request.getParameter("cond"),
                request.getParameter("dateSelect"),request.getParameter("bscSelect"),request.getParameter("cellSelect"));
        String exportOrder=request.getParameter("exportCond");
        List<String> orderList=Arrays.asList(exportOrder.split(","));
        String dates=request.getParameter("dateSelect");
        String bscs=request.getParameter("bscSelect");
        String cells=request.getParameter("cellSelect");
        Map<String, Object> cond = new HashMap<String, Object>();
        List<String> dateList= Arrays.asList(dates.split(","));
        List<String> bscList;
        List<String> cellList;
        if(bscs.equals("-1") || bscs.trim().equals("")){
            bscList=null;
        }else{
            bscList=Arrays.asList(bscs.split(","));
        }
        if(cells.equals("-1") || cells.trim().equals("")){
            cellList=null;
        }else{
            cellList=Arrays.asList(cells.split(","));
        }
        cond.put("dates",dateList);
        cond.put("bscs",bscList);
        cond.put("cells",cellList);
        String fileName = "参数查询.xlsx";
        try {
            fileName = new String("参数查询.xlsx".getBytes("UTF-8"), "iso-8859-1");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        resp.setContentType("application/x.ms-excel");
        resp.setHeader("Content-disposition", "attachment;filename=" + fileName);

        Map<String, List<Map<String, Object>>> result = new LinkedHashMap<>();
        List<String> orderCopyList=new ArrayList<>();
        orderCopyList.addAll(orderList);
        for(int i=0;i<orderCopyList.size();i++){
            String orderOne=orderCopyList.get(i);
            if(orderOne.contains("_")){
               orderOne=orderOne.replace("_","");
               orderCopyList.set(i,orderOne);
            }
            Class clazz=paramsQueryMapper.getClass();
            Method[] methods=clazz.getMethods();
            for(Method method:methods){
                if(("select"+orderCopyList.get(i)).equalsIgnoreCase(method.getName())){
                    result.put(orderList.get(i),(List<Map<String,Object>>)method.invoke(paramsQueryMapper,cond));
                }
            }
        }
        logger.debug("exportParams.result={}"+result);
        ExcelFileTool.createExcel(resp,result);
    }

}
