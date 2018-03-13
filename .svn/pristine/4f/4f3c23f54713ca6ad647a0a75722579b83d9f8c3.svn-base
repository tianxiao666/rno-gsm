package com.hgicreate.rno.gsm.controller.query;

import com.hgicreate.rno.gsm.mapper.query.FrequencyReuseMapper;
import com.hgicreate.rno.gsm.service.query.FrequencyReuseService;
import org.apache.poi.xssf.usermodel.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.util.*;

@RestController
@RequestMapping("/frequencys")
public class FrequencyReuseController {

	private static final Logger logger = LoggerFactory.getLogger(FrequencyReuseController.class);

    private final FrequencyReuseMapper frequencyReuseMapper;
    private  final FrequencyReuseService frequencyReuseService;

    @Value("${rmo.gsm.linage:15}")
    private String linage;

    public FrequencyReuseController(FrequencyReuseMapper frequencyReuseMapper, FrequencyReuseService frequencyReuseService) {
        this.frequencyReuseMapper = frequencyReuseMapper;
        this.frequencyReuseService = frequencyReuseService;
    }
    
    @GetMapping("/frequencyReusePage")
    ModelAndView index(Map<String, Object> model) {
    	model.put("frequencyReuseDate", frequencyReuseMapper.queryStsDate());
        model.put("frequencyReuseBsc" , frequencyReuseMapper.queryBscDate());
    	model.put("linage", Integer.parseInt(linage));
    	return new ModelAndView("query/frequencyReuse");
    }

    @GetMapping("/frequencyReuseBsc")
    List<String> queryAllBsc() {return frequencyReuseMapper.queryAllBsc();}

    @PostMapping("/queryfrequencyReuse")
    Map<String, Object> queryfrequencyReuse(HttpServletRequest request) {

        logger.debug("进入方法：queryfrequencyReuse。date={},bsc={},FR={}", request.getParameter("dateSelect"),request.getParameter("bscSelect"));

        Map<String, Object> result = new HashMap<String, Object>();

        Map<String, Object> cond = new HashMap<String, Object>();
        cond.put("frequencyReuseDate", request.getParameter("dateSelect"));
        cond.put("frequencyReuseBsc", request.getParameter("bscSelect"));

        List<Map<String, Object>> res = frequencyReuseService.getFrequencyReuse(cond);

        result.put("data", res);
        return result;
    }

    @PostMapping("/exportFrequencyReuse")
    void exportFrequencyReuse(HttpServletRequest request,HttpServletResponse resp) throws Exception{
        logger.debug("exportFrequencyReuse:"+"date={},bsc={}",request.getParameter("dateSelect"), request.getParameter("bscSelect"));
        XSSFWorkbook workbook = new XSSFWorkbook();
        XSSFSheet sheet = workbook.createSheet();
        workbook.setSheetName(0, "sheet1");
        XSSFRow row = sheet.createRow(0);
        XSSFCell cell;
        XSSFCellStyle alignStyle=(XSSFCellStyle) workbook.createCellStyle();
        alignStyle.setAlignment(XSSFCellStyle.ALIGN_CENTER);//水平居中
        alignStyle.setVerticalAlignment(XSSFCellStyle.ALIGN_CENTER);//垂直居中
        String[] title_list={"GSM900频点","BCCH复用次数","TCH复用次数","","GSM1800频点","BCCH复用次数","TCH复用次数"};
        String fileName="频率复用.xlsx";
        fileName = new String(fileName.getBytes("UTF-8"), "iso-8859-1");
        for(int i=0;i<title_list.length;i++){
            cell = row.createCell(i);
            cell.setCellValue(title_list[i]);
            cell.setCellStyle(alignStyle);
            sheet.setColumnWidth(i,("BCCH复用次数".getBytes().length)*256);
        }

        Map<String, Object> cond = new HashMap<String, Object>();
        cond.put("frequencyReuseDate", request.getParameter("dateSelect"));
        cond.put("frequencyReuseBsc", request.getParameter("bscSelect"));
        List<Map<String, Object>> list=frequencyReuseService.getFrequencyReuse(cond);

        //获取map中所有的key
        //dch的map
        List keyList1 = new ArrayList();
        Set set1 = list.get(0).entrySet();
        Iterator keys = set1.iterator();
        while(keys.hasNext()){
            Map.Entry<String, String> entry1=(Map.Entry<String, String>)keys.next();
            keyList1.add(entry1.getKey());
        }
        //bcch的map
        List keyList2 = new ArrayList();
        Set set2 = list.get(1).entrySet();
        Iterator key = set2.iterator();
        while(key.hasNext()){
            Map.Entry<String, String> entry2=(Map.Entry<String, String>)key.next();
            keyList2.add(entry2.getKey());
        }
        // 写入各条记录，每条记录对应Excel中的一行
        for(int i=1;i<126;i++) {
            row = sheet.createRow(i);
            cell=row.createCell(0);
            cell.setCellValue(i);
            cell.setCellStyle(alignStyle);
            cell=row.createCell(1);
            String keyGet1 = ""+i;
            if(keyList2.contains(keyGet1)){
                cell.setCellValue(list.get(1).get(keyGet1).toString());
            }else {
                cell.setCellValue("0");
            }
            cell.setCellStyle(alignStyle);
            cell=row.createCell(2);
            if(keyList1.contains(keyGet1)){
                cell.setCellValue(list.get(0).get(keyGet1).toString());
            }else {
                cell.setCellValue("0");
            }
            cell.setCellStyle(alignStyle);
            cell=row.createCell(4);
            cell.setCellValue((i+511));
            cell.setCellStyle(alignStyle);
            cell=row.createCell(5);
            String keyGet2 = ""+(i+511);
            if(keyList2.contains(keyGet2)){
                cell.setCellValue(list.get(1).get(keyGet2).toString());
            }else {
                cell.setCellValue("0");
            }
            cell.setCellStyle(alignStyle);
            cell=row.createCell(6);
            if(keyList1.contains(keyGet2)){
                cell.setCellValue(list.get(0).get(keyGet2).toString());
            }else {
                cell.setCellValue("0");
            }
            cell.setCellStyle(alignStyle);
        }
        resp.setContentType("application/x.ms-excel");
        resp.setHeader("Content-disposition", "attachment;filename=" + fileName);
        OutputStream ouputStream = resp.getOutputStream();
        workbook.write(ouputStream);
        ouputStream.flush();
        ouputStream.close();
    }
}
