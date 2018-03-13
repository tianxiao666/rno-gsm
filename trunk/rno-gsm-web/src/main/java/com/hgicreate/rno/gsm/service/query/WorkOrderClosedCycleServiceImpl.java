package com.hgicreate.rno.gsm.service.query;

import com.hgicreate.rno.gsm.mapper.query.WorkOrderClosedCycleMapper;
import com.hgicreate.rno.gsm.model.Page;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
public class WorkOrderClosedCycleServiceImpl implements WorkOrderClosedCycleService {

    private static final Logger logger = LoggerFactory.getLogger(WorkOrderClosedCycleServiceImpl.class);

    private WorkOrderClosedCycleMapper workOrderClosedCycleMapper;

    public WorkOrderClosedCycleServiceImpl(WorkOrderClosedCycleMapper workOrderClosedCycleMapper){
        this.workOrderClosedCycleMapper=workOrderClosedCycleMapper;
    }

    @Override
    public List<Map<String, Object>> queryWorkOrderByPage(Map<String, Object> map,Page page) {
        logger.debug("进入方法：queryWorkOrderByPage。condition={}, page={}", map, page);
        if (page == null) {
            logger.warn("方法：queryWorkOrderByPage的参数：page 是空！无法查询!");
            return Collections.emptyList();
        }
        long totalCnt = page.getTotalCnt();
        if (totalCnt < 0) {
            totalCnt = workOrderClosedCycleMapper.selectWorkOrderCount(map);
            page.setTotalCnt((int) totalCnt);
        }
        int startIndex = page.calculateStart();
        int cnt = page.getPageSize();

        map.put("startIndex", startIndex);
        map.put("cnt", cnt);

        return workOrderClosedCycleMapper.selectWorkOrderByPage(map);
    }
}
