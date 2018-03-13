package com.hgicreate.rno.gsm.service.optimize;

import com.hgicreate.rno.gsm.mapper.optimize.AccordanceCheckMapper;
import com.hgicreate.rno.gsm.model.Page;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.lang.reflect.Method;
import java.util.*;

@Service
public class AccordanceCheckServiceImpl implements AccordanceCheckService {

    private static final Logger logger = LoggerFactory.getLogger(AccordanceCheckServiceImpl.class);

    private final AccordanceCheckMapper accordanceCheckMapper;

    private List<Map<String, Object>> spotLackList=new ArrayList<>();

    public AccordanceCheckServiceImpl(AccordanceCheckMapper accordanceCheckMapper){
        this.accordanceCheckMapper=accordanceCheckMapper;
    }

    @SuppressWarnings("unchecked")
    @Cacheable(value = "MApreparation")
    @Override
    public List<Map<String, Object>> calculateAccordanceByPage(Map<String, Object> condition, Page page,String order) throws Exception{
        logger.debug("进入方法：calculateAccordanceByPage。condition={}, page={}", condition, page);
        Map<String, Object> map = new HashMap<>();
        map.put("dates",condition.get("dates"));
        if (page == null) {
            logger.warn("方法：calculateAccordanceByPage的参数：page 是空！无法查询!");
            return Collections.emptyList();
        }
        Class clazz=accordanceCheckMapper.getClass();
        Method[] methods= clazz.getMethods();

        List<String> cellList=accordanceCheckMapper.selectSpotLackCell(map);
        for(Method method:methods){
            long totalCnt = page.getTotalCnt();
            if(("calculate"+order+"count").equalsIgnoreCase("calculateSpotLackDefCount")&&totalCnt<0){
                totalCnt=0;
                for(String cell :cellList){
                    map.put("cell",cell);
                    long cnt=accordanceCheckMapper.calculateSpotLackDefCount(map);
                    totalCnt +=cnt;
                }
                page.setTotalCnt((int)totalCnt);
            }
            if(("calculate"+order+"Count").equalsIgnoreCase(method.getName())&&totalCnt < 0
                    &&!("calculate"+order+"count").equalsIgnoreCase("calculateSpotLackDefCount")){
                totalCnt=(long)method.invoke(accordanceCheckMapper,map);
                page.setTotalCnt((int) totalCnt);
            }
            //logger.debug(order+"总记录数为"+page.getTotalCnt());
        }


        for(Method method:methods){
            int startIndex = page.calculateStart();
            int cnt = page.getPageSize();
            map.put("startIndex", startIndex);
            map.put("cnt", cnt);
            if(("calculate"+order+"ByPage").equalsIgnoreCase("calculateSpotLackDefByPage")){
                List<Map<String, Object>> resultList = new ArrayList<>();
                if(spotLackList.size()==0) {
                    for (String cell : cellList) {
                        map.put("cell", cell);
                        List<Map<String, Object>> list = accordanceCheckMapper.calculateSpotLackDef(map);
                        spotLackList.addAll(list);
                    }
                    resultList.addAll(spotLackList.subList(startIndex, startIndex + cnt - 1 >= page.getTotalCnt() ? page.getTotalCnt() : startIndex + cnt - 1));
                }else{
                    resultList.addAll(spotLackList.subList(startIndex, startIndex + cnt - 1 >= page.getTotalCnt() ? page.getTotalCnt() : startIndex + cnt - 1));
                }
                return resultList;
            }
            if(("calculate"+order+"ByPage").equalsIgnoreCase(method.getName())&&method.invoke(accordanceCheckMapper,map)!=null
                    &&!("calculate"+order+"ByPage").equalsIgnoreCase("calculateSpotLackDefByPage")){
                return (List<Map<String,Object>>)method.invoke(accordanceCheckMapper,map);
            }
        }
        return null;
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Map<String, Object>> inquireAccordanceByPage(Map<String, Object> condition, Page page,String order) throws Exception{
        logger.debug("进入方法：inquireAccordanceByPage。condition={}, page={}", condition, page);
        Map<String, Object> map = new HashMap<>();
        map.put("dates",condition.get("dates"));
        if (page == null) {
            logger.warn("方法：inquireAccordanceByPage的参数：page 是空！无法查询!");
            return Collections.emptyList();
        }
        Class clazz=accordanceCheckMapper.getClass();
        Method[] methods= clazz.getMethods();
        for(Method method:methods){
            long totalCnt = page.getTotalCnt();
            if(("select"+order+"Count").equalsIgnoreCase(method.getName())&&totalCnt < 0) {
                    totalCnt = (long) method.invoke(accordanceCheckMapper, map);
                    page.setTotalCnt((int) totalCnt);
            }
        }
        for(Method method:methods){
            int startIndex = page.calculateStart();
            int cnt = page.getPageSize();
            map.put("startIndex", startIndex);
            map.put("cnt", cnt);
            if(("select"+order+"ByPage").equalsIgnoreCase(method.getName())&&method.invoke(accordanceCheckMapper,map)!=null){
                return (List<Map<String,Object>>)method.invoke(accordanceCheckMapper,map);
            }
        }
        return null;
    }

}
