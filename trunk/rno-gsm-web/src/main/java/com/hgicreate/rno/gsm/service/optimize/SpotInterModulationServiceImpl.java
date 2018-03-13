package com.hgicreate.rno.gsm.service.optimize;

import com.hgicreate.rno.gsm.mapper.optimize.SpotInterModulationMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.tool.GsmAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SpotInterModulationServiceImpl implements SpotInterModulationService {

    private static final Logger logger = LoggerFactory.getLogger(SpotInterModulationServiceImpl.class);

    private final SpotInterModulationMapper spotInterModulationMapper;

    public SpotInterModulationServiceImpl(SpotInterModulationMapper spotInterModulationMapper){
        this.spotInterModulationMapper=spotInterModulationMapper;
    }

    @Override
    public Map<String,Object> calculateDuplicateSpot(String date, String cell) {
        List<String> spotList=spotInterModulationMapper.selectDchno(date,cell);
        List<String> resultSpot=new ArrayList<>();
        Map<String,Object> result= new HashMap<>();
        //频点封装到集合
        for(String spot:spotList){
            String[] spotArr=spot.split("&");
            resultSpot.addAll(Arrays.asList(spotArr));
        }
        //去重
        List<String> tempList= new ArrayList<String>();
        for(String i:resultSpot){
            if(!tempList.contains(i)){
            tempList.add(i);
            }
        }
        result.put("cell",cell);
        result.put("spots",tempList);
        return result;
    }

    @SuppressWarnings("unchecked")
    @Override
    public Map<String, Object> cycleCalculateSpotModulation(String date,String cell) {

        Map<String,Integer> result;
        List<String> onlyspot= (List<String>) calculateDuplicateSpot(date,cell).get("spots");
        Map<String,Object> resultMap=new LinkedHashMap<>();
        for(int i=0; i<onlyspot.size();i++){
            for(int j=0;j<onlyspot.size();j++){
                result=GsmAlgorithm.intermodulation(Integer.parseInt(onlyspot.get(i)),Integer.parseInt(onlyspot.get(j)));
                if(onlyspot.contains(result.get("fim5").toString())){
                    resultMap.put("日期",date);
                    resultMap.put("网元", spotInterModulationMapper.queryInfoByCellAndDate(date,cell).get(0));
                    resultMap.put("小区",cell);
                    if(Integer.parseInt(onlyspot.get(i))<=Integer.parseInt(onlyspot.get(j))){
                        resultMap.put("频点1",Integer.parseInt(onlyspot.get(i)));
                        resultMap.put("频点2",Integer.parseInt(onlyspot.get(j)));
                    }else{
                        resultMap.put("频点1",Integer.parseInt(onlyspot.get(j)));
                        resultMap.put("频点2",Integer.parseInt(onlyspot.get(i)));
                    }
                    resultMap.put("受扰频点",result.get("fim5"));
                    resultMap.put("干扰类型","五阶互调");

                    return resultMap;
                }
                if(onlyspot.contains(result.get("fim7").toString())){
                    resultMap.put("日期",date);
                    resultMap.put("网元", spotInterModulationMapper.queryInfoByCellAndDate(date,cell).get(0));
                    resultMap.put("小区",cell);
                    if(Integer.parseInt(onlyspot.get(i))<=Integer.parseInt(onlyspot.get(j))){
                        resultMap.put("频点1",Integer.parseInt(onlyspot.get(i)));
                        resultMap.put("频点2",Integer.parseInt(onlyspot.get(j)));
                    }else{
                        resultMap.put("频点1",Integer.parseInt(onlyspot.get(j)));
                        resultMap.put("频点2",Integer.parseInt(onlyspot.get(i)));
                    }
                    resultMap.put("受扰频点",result.get("fim7"));
                    resultMap.put("干扰类型","七阶互调");
                    return resultMap;
                }
            }
        }
        return null;
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Map<String, Object>> querySpotInterModulationByPage(Map<String, Object> condition, Page page) {
        logger.debug("进入方法：querySpotInterModulationByPage。condition={}, page={}",condition,page);
        if (page == null) {
            logger.warn("方法：querySpotInterModulationByPage的参数：page 是空！无法查询!");
            return Collections.emptyList();
        }
        Map<String, Object> map = new HashMap<>();
        List<String> dateList = new ArrayList<>();
        List<String> bscList= new ArrayList<>();
        List<String> cellList=new ArrayList<>();

        dateList.add(condition.get("dates").toString());
        for(String bsc :(List<String>)condition.get("bscs")){
            bscList.add(bsc.trim());
        }
        for(String cell :(List<String>)condition.get("cells")){
            cellList.add(cell.trim());
        }
        map.put("dates",dateList);
        map.put("bscs",bscList);
        map.put("cells",cellList);
        long totalCnt = page.getTotalCnt();
        if (totalCnt < 0) {
            totalCnt = spotInterModulationMapper.getSpotInterModulationCount(map);
            page.setTotalCnt((int) totalCnt);
        }
        int startIndex = page.calculateStart();
        int cnt = page.getPageSize();

        map.put("startIndex", startIndex);
        map.put("cnt", cnt);
        return spotInterModulationMapper.querySpotInterModulationByPage(map);
    }

}
