package com.hgicreate.rno.gsm.controller.query;

import com.hgicreate.rno.gsm.constant.GsmConstant;
import com.hgicreate.rno.gsm.mapper.query.IndexMonitorMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.query.IndexMonitorService;
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
@RequestMapping("/indexMonitor")
 class IndexMonitorController {

    private static final Logger logger = LoggerFactory.getLogger(IndexMonitorController.class);

    private final IndexMonitorService indexMonitorService;

    private final IndexMonitorMapper indexMonitorMapper;

    public  IndexMonitorController(IndexMonitorService indexMonitorService,IndexMonitorMapper indexMonitorMapper){
        this.indexMonitorService=indexMonitorService;
        this.indexMonitorMapper=indexMonitorMapper;
    }

    @GetMapping("/indexMonitorPage")
    ModelAndView index(Map<String, Object> model) {
        if(indexMonitorMapper.selectSts60Bsc()!=null){
            model.put("bsc60",indexMonitorMapper.selectSts60Bsc());
        }
      /*  if(indexMonitorMapper.selectSts15Bsc()!=null){
            model.put("bsc15",indexMonitorMapper.selectSts15Bsc());
        }*/
        model.put("linage", GsmConstant.linage);
        return new ModelAndView("query/indexMonitor");
    }

    @GetMapping("/indexMonitorBsc")
    List<String> indexMonitorBsc(){
        if(indexMonitorMapper.selectSts60Bsc()!=null) {
            return indexMonitorMapper.selectSts60Bsc();
        }
       /* if(indexMonitorMapper.selectSts15Bsc()!=null) {
            return indexMonitorMapper.selectSts15Bsc();
        }*/
        return null;
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

    private List<String> putBscInList(List<String> bscList,String bsc){
        if(bsc!=null){
            if(bsc.equals("-1")||bsc.trim().equals("")){
                List<String> bscAll=indexMonitorMapper.selectSts60Bsc();
                bscList.addAll(bscAll);
            }else{
                bscList=Arrays.asList(bsc.split(","));
            }
        }
        return bscList;
    }


    private Map<String,String> getCondMap(){
        Map<String,String> condMap=new LinkedHashMap<>();
        condMap.put("拥塞","Crowd");
        condMap.put("掉话","CallDrop");
        condMap.put("ICM","Icm");
        condMap.put("S拥塞","SIcm");
        condMap.put("S掉话","SCallDrop");
        condMap.put("无线接入性","WirelessAccess");
        condMap.put("信道完好率","ChannelWellRate");
        condMap.put("0话务","ZeroTeleTraffic");
        condMap.put("0流量","ZeroFlow");
        condMap.put("切入","PitchingIn");
        condMap.put("切出","PitchingOut");
        condMap.put("SQI","Sqi");
        condMap.put("TBF","TbfEstablish");
        condMap.put("传输断链","TransportChainScission");
        condMap.put("误码滑码","ErrorSlideCode");
        condMap.put("倒站BCCH=0","Bcch");
        condMap.put("A1A2","A1A2");
        condMap.put("RXMFP","Rxmfp");
        condMap.put("寻呼拥塞","PagingCrowd");
        return condMap;
    }

    @PostMapping("/queryIndexMonitorByPage")
    Map<String, Object> queryIndexMonitorByPage(HttpServletRequest request) throws Exception{
        logger.debug("queryIndexMonitorByPage.bsc={}，topX={},粒度={}",  request.getParameter("bscSelect"),
                request.getParameter("topxSelect"),request.getParameter("sts"));
        Map<String, Object> result = new LinkedHashMap<>();
        Map<String, Object> cond = new HashMap<String, Object>();
        String bscSelect=request.getParameter("bscSelect");
        String topxSelect=request.getParameter("topxSelect");
        String stss=request.getParameter("sts");
        stss=stss.substring(3);
        List<String> bscList=new ArrayList<>();

        List<String> stsList=new ArrayList<>();
        putBscInList(bscList,bscSelect);
        if(topxSelect.equals("ALL")){
            topxSelect="top 100 percent";
        }else{
            topxSelect="top "+topxSelect;
        }
        if(stss.equals("15")){
            return null;
        }else {
            stsList.add(stss);
        }
        cond.put("bscs",bscList);
        cond.put("topX",topxSelect);
        cond.put("stss",stsList);

        Map<String,String> tabMap=getCondMap();
        List<String> tabList=new ArrayList<>();
        for(int i=0;i<tabMap.size();i++){
            tabList.add(tabMap.get(i));
        }
        int i=0;
        for(Map.Entry<String, String> oneTab :tabMap.entrySet()){
            Page page = createNewPageObj(request, i+1);
            result.put("index" + (i+1),i+1);
            result.put(oneTab.getKey(), indexMonitorService.queryIndexByPage(cond,page,oneTab.getValue()));
            setPageData(page);
            result.put("page" + (i+1), page);
            i++;
        }
        logger.debug("queryIndexMonitorByPage.result={}", result);
        return result;
    }

    @PostMapping("/indexMonitorForm{index}")
    Map<String, Object> getDataByPageNum(@PathVariable("index") int index, HttpServletRequest request) throws Exception{

        logger.debug("getDataByPageNum.condIndex={}, currentPage={}", index,
                Integer.parseInt(request.getParameter("hiddenCurrentPage")));

        Map<String, Object> result = new LinkedHashMap<String, Object>();

        Page page = new Page();
        page.setPageSize(GsmConstant.linage);
        page.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
        page.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
        page.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

        Map<String, Object> cond = new HashMap<String, Object>();
        String bscSelect=request.getParameter("bsc");
        String topxSelect=request.getParameter("topX");
        String stss=request.getParameter("sts");
        stss=stss.substring(3);
        List<String> bscList=new ArrayList<>();
        List<String> stsList=new ArrayList<>();
        putBscInList(bscList,bscSelect);
        if(topxSelect.equals("ALL")){
            topxSelect="top 100 percent";
        }else{
            topxSelect="top "+topxSelect;
        }
        if(stss.equals("15")){
            return null;
        }else {
            stsList.add(stss);
        }
        cond.put("bscs",bscList);
        cond.put("topX",topxSelect);
        cond.put("stss",stsList);

        String order=request.getParameter("order");
        Map<String,String> mapOrder=getCondMap();
        result.put("data",indexMonitorService.queryIndexByPage(cond,page,mapOrder.get(order)));
        setPageData(page);
        result.put("page", page);
        result.put("index", index);
        return result;
    }

    @SuppressWarnings("unchecked")
    @RequestMapping("/exportMonitorIndex")
    void exportMonitorIndex( HttpServletRequest request, HttpServletResponse resp) throws Exception {
        logger.debug("进入方法exportMonitorIndex: request={}",request.getParameter("cond"),
                request.getParameter("bscSelect"),request.getParameter("sts"),request.getParameter("topxSelect"));
        String cond=request.getParameter("cond");
        List<String> condList=Arrays.asList(cond.split(","));
        String bscSelect=request.getParameter("bscSelect");
        String stss=request.getParameter("sts").substring(3);
        String topxSelect=request.getParameter("topxSelect");

        Map<String,Object> condition=new HashMap<>();
        List<String> bscList=new ArrayList<>();
        List<String> stsList=new ArrayList<>();
        stsList.add(stss);
        putBscInList(bscList,bscSelect);

        if(topxSelect.equals("ALL")){
            topxSelect="top 100 percent";
        }else{
            topxSelect="top "+topxSelect;
        }
        condition.put("bscs",bscList);
        condition.put("stss",stsList);
        condition.put("topX",topxSelect);

        String fileName = "指标监控.xlsx";
        try {
            fileName = new String("指标监控.xlsx".getBytes("UTF-8"), "iso-8859-1");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        resp.setContentType("application/x.ms-excel");
        resp.setHeader("Content-disposition", "attachment;filename=" + fileName);

        Map<String, List<Map<String, Object>>> mapRes = new LinkedHashMap<>();
        Map<String,String> condMap=getCondMap();
        for(String con :condList){
            Class clazz = indexMonitorMapper.getClass();
            Method[] methods = clazz.getMethods();
            for (Method method : methods) {
                if (("select" + condMap.get(con)).equalsIgnoreCase(method.getName())) {
                    List<Map<String,Object>> list=(List<Map<String, Object>>) method.invoke(indexMonitorMapper, condition);
                    deleteNulledInList(list);
                    mapRes.put(con,list);
                }
            }
        }
        logger.debug("exportMonitorIndex.mapRes={}"+mapRes);
        ExcelFileTool.createExcel(resp,mapRes);
    }

    private void deleteNulledInList(List<Map<String,Object>> list){
        for(Map<String,Object> listMap:list){
            for(String column : listMap.keySet()){
                if(listMap.get(column).toString().equals("nulled")){
                    listMap.replace(column,"nulled","");
                }
            }
        }
    }

}
