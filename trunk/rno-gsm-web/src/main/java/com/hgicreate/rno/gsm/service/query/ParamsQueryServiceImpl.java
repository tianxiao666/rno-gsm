package com.hgicreate.rno.gsm.service.query;

import com.hgicreate.rno.gsm.mapper.query.ParamsQueryMapper;
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
public class ParamsQueryServiceImpl implements ParamsQueryService{

    private static final Logger logger = LoggerFactory.getLogger(ParamsQueryServiceImpl.class);

    private final ParamsQueryMapper paramsQueryMapper;

    public ParamsQueryServiceImpl(ParamsQueryMapper paramsQueryMapper){
        this.paramsQueryMapper=paramsQueryMapper;
    }


    @Override
    public Map<String, Object> prepareCondition(Map<String, Object> condition) {
        Map<String, Object> map = new HashMap<>();
        map.put("dates",condition.get("dates"));
        map.put("bscs",condition.get("bscs"));
        map.put("cells",condition.get("cells"));
        return map;
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Map<String, Object>> queryParamsByPage(Map<String, Object> condition, Page page,String order) throws Exception{
        logger.debug("进入方法：queryParamsByPage。condition={}, page={}", condition, page,order);
        Map<String, Object> map = prepareCondition(condition);
        if (page == null) {
            logger.warn("方法：queryParamsByPage的参数：page 是空！无法查询!");
            return Collections.emptyList();
        }
        Class clazz=paramsQueryMapper.getClass();
        Method[] methods=clazz.getDeclaredMethods();
        for(Method method : methods) {
            if(("select"+order+"Count").equalsIgnoreCase(method.getName())){
                long totalCnt = page.getTotalCnt();
                if (totalCnt < 0) {
                    totalCnt = (long)method.invoke(paramsQueryMapper,map);
                    page.setTotalCnt((int) totalCnt);
                }
            }
        }
        for(Method method : methods) {
            int startIndex = page.calculateStart();
            int cnt = page.getPageSize();
            map.put("startIndex", startIndex);
            map.put("cnt", cnt);
            if(("select"+order+"ByPage").equalsIgnoreCase(method.getName())){
                if(method.invoke(paramsQueryMapper,map)!=null){
                    return (List<Map<String,Object>>)method.invoke(paramsQueryMapper,map);
                }
            }
        }
        return null;
    }
}
