package com.hgicreate.rno.gsm.service.optimize;

import com.hgicreate.rno.gsm.mapper.optimize.StructureIndexMapper;
import com.hgicreate.rno.gsm.model.Page;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class StructureIndexServiceImpl implements StructureIndexService {

    private static final Logger logger = LoggerFactory.getLogger(MotsServiceImpl.class);

    private final StructureIndexMapper structureIndexMapper;

    public StructureIndexServiceImpl(StructureIndexMapper structureIndexMapper){
        this.structureIndexMapper=structureIndexMapper;
    }

    @Override
    public List<Map<String, Object>> queryStructureIndexByPage(Map<String, Object> condition, Page page) {

        logger.debug("进入方法：queryStructureIndexByPage。condition={}, page={}", condition, page);

        Map<String, Object> map = new HashMap<>();
        List<String> dateList = new ArrayList<>();
        if(condition.get("dates")!=null){
            dateList.addAll(Arrays.asList(condition.get("dates").toString().split(",")));
            map.put("dates", dateList);
        }else{
            map.put("dates",null);
        }

        List<String> bscList=new ArrayList<>();
        if(condition.get("bscs")!=null) {
            bscList.addAll(Arrays.asList(condition.get("bscs").toString().split(",")));
            map.put("bscs", bscList);
        }else{
            map.put("bscs",null);
        }

        map.put("gsm900Number",condition.get("gsm900Number").toString());
        map.put("gsm1800Number",condition.get("gsm1800Number").toString());

        if (page == null) {
            logger.warn("方法：queryMotsByPage的参数：page 是空！无法查询!");
            return Collections.emptyList();
        }
        long totalCnt = page.getTotalCnt();
        if (totalCnt < 0) {
            totalCnt = structureIndexMapper.getStructureIndexCount(map);
            page.setTotalCnt((int) totalCnt);
        }
        int startIndex = page.calculateStart();
        int cnt = page.getPageSize();

        map.put("startIndex", startIndex);
        map.put("cnt", cnt);

        return structureIndexMapper.queryStructureIndexByPage(map);
    }
}
