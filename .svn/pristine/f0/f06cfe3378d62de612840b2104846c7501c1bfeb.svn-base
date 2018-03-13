package com.hgicreate.rno.gsm.service.query;

import com.hgicreate.rno.gsm.mapper.query.IndexMonitorMapper;
import com.hgicreate.rno.gsm.model.Page;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.lang.reflect.Method;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class IndexMonitorServiceImpl implements IndexMonitorService{

    private static final Logger logger = LoggerFactory.getLogger(IndexMonitorServiceImpl.class);

    private final IndexMonitorMapper indexMonitorMapper;

    public IndexMonitorServiceImpl(IndexMonitorMapper indexMonitorMapper){
        this.indexMonitorMapper=indexMonitorMapper;
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Map<String, Object>> queryIndexByPage(Map<String, Object> condition, Page page, String order) throws Exception{
        logger.debug("进入方法：inquireAccordanceByPage。condition={}, page={}", condition, page);
        Map<String, Object> map = new HashMap<>();
        map.put("bscs",condition.get("bscs"));
        map.put("topX",condition.get("topX"));
        map.put("stss",condition.get("stss"));
        if (page == null) {
            logger.warn("方法：inquireAccordanceByPage的参数：page 是空！无法查询!");
            return Collections.emptyList();
        }
        Class clazz=indexMonitorMapper.getClass();
        Method[] methods= clazz.getMethods();
        for(Method method:methods){
            long totalCnt = page.getTotalCnt();
            if(("select"+order+"Count").equalsIgnoreCase(method.getName())&&totalCnt < 0) {
                totalCnt = (long) method.invoke(indexMonitorMapper, map);
                page.setTotalCnt((int) totalCnt);
            }
        }
        for(Method method:methods){
            int startIndex = page.calculateStart();
            int cnt = page.getPageSize();
            map.put("startIndex", startIndex);
            map.put("cnt", cnt);
            if(("select"+order+"ByPage").equalsIgnoreCase(method.getName())&&method.invoke(indexMonitorMapper,map)!=null){
                return (List<Map<String,Object>>)method.invoke(indexMonitorMapper,map);
            }
        }
        return null;
    }

}
