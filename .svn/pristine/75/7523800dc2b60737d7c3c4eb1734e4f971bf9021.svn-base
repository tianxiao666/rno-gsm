package com.hgicreate.rno.gsm.service.measure;


import com.hgicreate.rno.gsm.mapper.measure.NcsMapper;
import com.hgicreate.rno.gsm.service.optimize.SpotInterModulationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class NcsServiceImpl implements NcsService {

    private static final Logger logger = LoggerFactory.getLogger(NcsServiceImpl.class);

    private final NcsMapper ncsMapper;

    public NcsServiceImpl(NcsMapper ncsMapper) {
        this.ncsMapper = ncsMapper;
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Map<String, Object>> getChartData(Map<String, Object> cond) {

        logger.debug("Map<String, Object> cond = " + cond.toString());

        //最终结果存放
        List<Map<String, Object>> result = new ArrayList<>();
        Map<String, Object> resultMap = new LinkedHashMap<>();


        //获得标题中BCCH和频点信息
        Map<String, Object> bcchCellMap = new HashMap<>();
        bcchCellMap.put("dates", cond.get("dates"));
        List<String> cellList = (List<String>) cond.get("cells");
        bcchCellMap.put("cell", cellList.get(0));
        List<Map<String, Object>> bcchMap = ncsMapper.selectBcchDch(bcchCellMap);
        int bcch = 0;
        String dch = "";
        for (Map<String, Object> map : bcchMap) {
            bcch = Integer.parseInt(map.get("BCCHNO").toString());
            dch += map.get("DCHNO").toString() + "&";
        }
        dch = dch.replace("&", ",");

        //结果放入map
        resultMap.put("bcch", bcch);
        resultMap.put("频点", dch);
        //包含频点，同邻频等信息的结果集
        List<Map<String, Object>> dchSameNeiList = ncsMapper.selectNcsChartData(cond);
        //logger.debug("dchSameNeiList = " + dchSameNeiList);

        Map<Integer, Double> sameFreqMap = new TreeMap<>();
        Map<Integer, Double> neighFreqMap = new TreeMap<>();
        for (Map<String, Object> mm : dchSameNeiList) {
            String[] nos = mm.get("DCHNO").toString().split("&");
            Double sameFreq = Double.parseDouble(mm.get("同频").toString());
            for (String s:nos) {
                Integer key = Integer.parseInt(s);
                sameFreqMap.merge(key, sameFreq, (a, b) -> a + b);
            }
        }
        for (Map<String, Object> mm : dchSameNeiList) {
            String[] nos = mm.get("DCHNO").toString().split("&");
            Double neighFreq = Double.parseDouble(mm.get("邻频").toString());
            for (String s:nos) {
                Integer key = Integer.parseInt(s);
                neighFreqMap.merge(key, neighFreq, (a, b) -> a + b);
            }
        }

        Iterator<Map.Entry<Integer, Double>> itSame = sameFreqMap.entrySet().iterator();
        Iterator<Map.Entry<Integer, Double>> itNeigh = neighFreqMap.entrySet().iterator();
        if(bcch>500){
            while(itSame.hasNext()){
                Map.Entry<Integer, Double> entrym=itSame.next();
                if(entrym.getKey()<500){
                    itSame.remove();
                }
            }
            while(itNeigh.hasNext()){
                Map.Entry<Integer, Double> entryd=itNeigh.next();
                if(entryd.getKey()<500){
                    itNeigh.remove();
                }
            }
        }else{
            while(itSame.hasNext()){
                Map.Entry<Integer, Double> entrym=itSame.next();
                if(entrym.getKey()>500){
                    itSame.remove();
                }
            }
            while(itNeigh.hasNext()){
                Map.Entry<Integer, Double> entryd=itNeigh.next();
                if(entryd.getKey()>500){
                    itNeigh.remove();
                }
            }
        }

        logger.debug("同频 Result : " + sameFreqMap.size());
        logger.debug("邻频 Result : " + neighFreqMap.size());

        resultMap.put("datasm", sameFreqMap);
        resultMap.put("datasd",neighFreqMap);

        //结果封装到list
        result.add(resultMap);
        return result;
    }

}
