package com.hgicreate.rno.gsm.app.controller;

import com.hgicreate.rno.gsm.app.mapper.IndicatorMapper;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

/**
 * Created by yangch on 2017/6/27.
 */
@RestController
@CrossOrigin
public class IndicatorController {

    private static final Logger logger = LoggerFactory.getLogger(IndicatorController.class);

    private final IndicatorMapper indicatorMapper;



    public IndicatorController(IndicatorMapper indicatorMapper) {
        this.indicatorMapper = indicatorMapper;
    }

    /**
     * 指标查询
     */
    @GetMapping("/indexMonitorResult")
    List<Map<String, Object>> result(HttpServletRequest request, HttpServletResponse response, Map<String, Object> model) {
        String cell, chinese, index, topX, sts, time = "";
        logger.debug("进入方法queryIndex.cell={},index={},topX={}，粒度={}，时间={}",
                cell = request.getParameter("cell").trim().toUpperCase().replace("，", ","),
                chinese = request.getParameter("chinese").trim().toUpperCase().replace("，", ","), index = request.getParameter("index"),
                topX = request.getParameter("topx"), sts = request.getParameter("sts"),
                time = request.getParameter("time"));

        Map<String, Object> cond = new HashMap<String, Object>();

        if (cell.equals("")) {
            cond.put("cells", null);
        } else {
            cond.put("cells", cell.split(","));
        }

        if (chinese.equals("")) {
            cond.put("chinese", null);
        } else {
            cond.put("chinese", chinese.split(","));
        }

        if (topX.equals("ALL") || topX.equals("")) {
            cond.put("topX", "");
        } else {
            cond.put("topX", "limit " + topX);
        }

        cond.put("times", createTime(Integer.parseInt(time)));
        cond.put("sts", sts);

        List<Map<String, Object>> result = new ArrayList<>();

        if (index.equals("掉话")) {
            result = indicatorMapper.selectCallDrop(cond);
        }
        if (index.equals("ICM")) {
            result = indicatorMapper.selectIcm(cond);
        }
        if (index.equals("S掉话")) {
            result = indicatorMapper.selectScallDrop(cond);
        }
        if (index.equals("无线接入性")) {
            result = indicatorMapper.selectWirelessAccess(cond);
        }
        if (index.equals("信道完好率")) {
            result = indicatorMapper.selectChannelWellRate(cond);
        }
        if (index.equals("0话务")) {
            result = indicatorMapper.selectZeroTeleTraffic(cond);
        }
        if (index.equals("0流量")) {
            result = indicatorMapper.selectZeroFlow(cond);
        }
        if (index.equals("切入")) {
            result = indicatorMapper.selectPitchIn(cond);
        }
        if (index.equals("切出")) {
            result = indicatorMapper.selectPitchOut(cond);
        }
        if (index.equals("SQI")) {
            result = indicatorMapper.selectSqi(cond);
        }
        if (index.equals("拥塞")) {
            result = indicatorMapper.selectCrowd(cond);
        }
        if (index.equals("S拥塞")) {
            result = indicatorMapper.selectScrowd(cond);
        }
        if (index.equals("TBF")) {
            result = indicatorMapper.selectTbf(cond);
        }
        if (index.equals("传输断链")) {
            result = indicatorMapper.selectTransportChainScission(cond);
        }
        if (index.equals("误码滑码")) {
            result = indicatorMapper.selectErrorSlideCode(cond);
        }
        if (index.equals("倒站BCCH=0")) {
            result = indicatorMapper.selectFallSiteBcch(cond);
        }
        if (index.equals("A1A2")) {
            result = indicatorMapper.selectA1A2(cond);
        }
        if (index.equals("RXMFP")) {
            result = indicatorMapper.selectRxmfp(cond);
        }
        if (index.equals("寻呼拥塞")) {
            result = indicatorMapper.selectPagingCrowd(cond);
        }
        if (index.equals("质量")) {
            result = indicatorMapper.selectQuality(cond);
        }
        if(index.equals("指标")){
            result = indicatorMapper.selectIndex(cond);
        }
        return result;
    }

    /**
     * 创建时间集
     *
     * @param num+2 时间个数
     */
    private List<String> createTime(int num) {
        List<String> list = new ArrayList<>();

        LocalDate today = LocalDate.now();
        String date1 = today.format(DateTimeFormatter.BASIC_ISO_DATE);

        LocalTime time = LocalTime.now();
        int hour = time.getHour();

        LocalDate yesterday = today.minusDays(1);
        String date2 = yesterday.format(DateTimeFormatter.BASIC_ISO_DATE);

        String t = "";
        for (int i = 0; i < num + 2; i++) {
            t = time.minusHours(i).format(DateTimeFormatter.ofPattern("HH00"));
            if (hour - i >= 0) {
                list.add(date1 + t);
            } else {
                list.add(date2 + t);
            }
        }
        return list;
    }

    @GetMapping("exportIndexMonitor")
    void exportIndexMonitor(HttpServletRequest request,HttpServletResponse response){
        String cell,chinese,index,topX,sts,time,fileName = "";
        List<Map<String, Object>> result = new ArrayList<>();
        logger.debug("进入方法exportIndexMonitor.cell={},index={},topX={}，粒度={}，时间={}",
                cell = request.getParameter("cell").trim().toUpperCase().replace("，", ","),
                chinese = request.getParameter("chinese").trim().toUpperCase().replace("，", ","),
                index = request.getParameter("index"),
                topX = request.getParameter("topx"), sts = request.getParameter("sts"),
                time = request.getParameter("time"));

        Map<String, Object> cond = new HashMap<String, Object>();

        if (cell.equals("")) {
            cond.put("cells", null);
        } else {
            cond.put("cells", cell.split(","));
        }

        if (chinese.equals("")) {
            cond.put("chinese", null);
        } else {
            cond.put("chinese", chinese.split(","));
        }

        if (topX.equals("ALL") || topX.equals("")) {
            cond.put("topX", "");
        } else {
            cond.put("topX", "limit " + topX);
        }

        cond.put("times", createTime(Integer.parseInt(time)));
        cond.put("sts", sts);

        if (index.equals("掉话")) {
            result = indicatorMapper.selectCallDrop(cond);
        }
        if (index.equals("ICM")) {
            result = indicatorMapper.selectIcm(cond);
        }
        if (index.equals("S掉话")) {
            result = indicatorMapper.selectScallDrop(cond);
        }
        if (index.equals("无线接入性")) {
            result = indicatorMapper.selectWirelessAccess(cond);
        }
        if (index.equals("信道完好率")) {
            result = indicatorMapper.selectChannelWellRate(cond);
        }
        if (index.equals("0话务")) {
            result = indicatorMapper.selectZeroTeleTraffic(cond);
        }
        if (index.equals("0流量")) {
            result = indicatorMapper.selectZeroFlow(cond);
        }
        if (index.equals("切入")) {
            result = indicatorMapper.selectPitchIn(cond);
        }
        if (index.equals("切出")) {
            result = indicatorMapper.selectPitchOut(cond);
        }
        if (index.equals("SQI")) {
            result = indicatorMapper.selectSqi(cond);
        }
        if (index.equals("拥塞")) {
            result = indicatorMapper.selectCrowd(cond);
        }
        if (index.equals("S拥塞")) {
            result = indicatorMapper.selectScrowd(cond);
        }
        if (index.equals("TBF")) {
            result = indicatorMapper.selectTbf(cond);
        }
        if (index.equals("传输断链")) {
            result = indicatorMapper.selectTransportChainScission(cond);
        }
        if (index.equals("误码滑码")) {
            result = indicatorMapper.selectErrorSlideCode(cond);
        }
        if (index.equals("倒站BCCH=0")) {
            result = indicatorMapper.selectFallSiteBcch(cond);
        }
        if (index.equals("A1A2")) {
            result = indicatorMapper.selectA1A2(cond);
        }
        if (index.equals("RXMFP")) {
            result = indicatorMapper.selectRxmfp(cond);
        }
        if (index.equals("寻呼拥塞")) {
            result = indicatorMapper.selectPagingCrowd(cond);
        }
        if (index.equals("质量")) {
            result = indicatorMapper.selectQuality(cond);
        }
        if(index.equals("指标")){
            result = indicatorMapper.selectIndex(cond);
        }
        fileName = index+"提取结果.xlsx";
        try {
            fileName=new String(fileName.getBytes("utf-8"),"iso-8859-1");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        response.setContentType("application/x.ms-excel");
        response.setHeader("Content-disposition", "attachment;filename=" + fileName);
        Map<String, List<Map<String, Object>>> data = new LinkedHashMap<>();
        data.put(index, result);
        createExcel(response, data);
    }



    private boolean createExcel(HttpServletResponse response, Map<String, List<Map<String, Object>>> data) {

        OutputStream os = null;
        try {
            os = response.getOutputStream();
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }

        Workbook workbook = new SXSSFWorkbook();
        Sheet sheet = workbook.createSheet();
        Row row;
        Cell cell;
        int n = 0;

        for (String s : data.keySet()) {
            int titleIndex = 0, rowIndex = 0;
            if (n > 0) {
                sheet = workbook.createSheet();
            }
            workbook.setSheetName(n, s);
            n++;
            for (Map<String, Object> map : data.get(s)) {
                int valueIndex = 0;
                if (rowIndex == 0) {
                    row = sheet.createRow(0);
                    for (String title : map.keySet()) {
                        cell = row.createCell(titleIndex++);
                        cell.setCellValue(title);
                    }
                }
                row = sheet.createRow(++rowIndex);
                for (Object o : map.values()) {
                    cell = row.createCell(valueIndex++);
                    cell.setCellValue(o.toString());
                }
            }
        }

        try {
            workbook.write(os);
            os.flush();
            os.close();
        } catch (IOException e) {
            e.getMessage();
        }
        return true;
    }
}
