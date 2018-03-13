package com.hgicreate.rno.gsm.app.controller;

import com.hgicreate.rno.gsm.app.mapper.WorkOrderBatchMapper;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.MultipartConfigElement;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;


@RestController
@CrossOrigin
public class WorkOrderBatchController {

    private static final Logger logger = LoggerFactory.getLogger(WorkOrderBatchController.class);

    @Autowired
    private MultipartConfigElement multipartConfigElement;

    private WorkOrderBatchMapper workOrderBatchMapper;

    private Sheet sheet;

    public WorkOrderBatchController(WorkOrderBatchMapper workOrderBatchMapper){
        this.workOrderBatchMapper=workOrderBatchMapper;
    }

    @PostMapping("processWorkOrderBatch")
    String processWorkOrderBatch(MultipartHttpServletRequest request) throws IOException {
        logger.debug("进入工单批量处理方法"+request.getFiles("file"));
        try {
            Iterator<String> itr = request.getFileNames();
            MultipartFile mpf;
            while (itr.hasNext()) {
                mpf = request.getFile(itr.next());
                String path=multipartConfigElement.getLocation() + System.getProperty("file.separator") + mpf.getOriginalFilename();
                File f = new File(path);

                mpf.transferTo(f);
                InputStream inputStream=null;
                try {
                    inputStream= new FileInputStream(f);
                    Workbook workbook= WorkbookFactory.create(inputStream);
                    sheet=workbook.getSheetAt(0);
                    Map<String,String> processItems=parseExcel(sheet);
                    if(processItems ==null){
                        return "处理失败，无可解析数据！";
                    }
                    for (String order : processItems.keySet()) {
                        if(processItems.get(order) !=null
                                && ! processItems.get(order).trim().equals("& &")
                                && ! processItems.get(order).split("&")[2].equals(" ")){
                            if (workOrderBatchMapper.ifExitsThisOrder(order) > 0) {
                                workOrderBatchMapper.updateWorkOrderBatch(order,
                                        processItems.get(order).split("&")[0],
                                        processItems.get(order).split("&")[1],
                                        processItems.get(order).split("&")[2]);
                            } else {
                                workOrderBatchMapper.insertWorkOrderBatch(order,
                                        processItems.get(order).split("&")[0],
                                        processItems.get(order).split("&")[1],
                                        processItems.get(order).split("&")[2]);
                            }
                        }
                    }
                } catch (InvalidFormatException e) {
                    logger.debug(e.getMessage());
                    return "处理失败!";
                } finally{
                    try {
                        if(inputStream!=null){
                            inputStream.close();
                        }
                    } catch (IOException e) {
                        logger.debug(e.getMessage());
                    }
                }


            }
        } catch (IllegalStateException | IOException e) {
            logger.debug(e.getMessage());
            return "处理失败!";
        }
        return "处理成功!";
    }

    private Map<String,String> parseExcel(Sheet sheet){

        Map<String ,String> result = new LinkedHashMap<>();
        int rowNum = sheet.getLastRowNum()+1;

        for(int i=1;i<rowNum;i++){
            String order;
            Row row =sheet.getRow(i);
            for(int j = 0 ; j < row.getLastCellNum()+1; j++){
                String [] treatCond = new String[3];
                Cell cell0 = row.getCell(0);
                order = cell0.getStringCellValue();
                if(!order.startsWith("GMCC-")){
                    return null;
                }
                if(row.getCell(12)!=null){
                    treatCond[0]=row.getCell(12).getStringCellValue();
                }else{
                    treatCond[0]=null;
                }
                if(row.getCell(13)!=null){
                    treatCond[1]=row.getCell(13).getStringCellValue();
                }else{
                    treatCond[1]=null;
                }
                if(row.getCell(14)!=null){
                    treatCond[2]=row.getCell(14).getStringCellValue();
                }else{
                    treatCond[2]=null;
                }
                if(treatCond[0] != null || treatCond[1] != null || treatCond[2] != null){
                    result.put(order,treatCond[0]+"&"+treatCond[1]+"&"+treatCond[2]);
                    treatCond=null;
                }
            }
        }
        logger.debug("需更新的内容有result={}"+result);
        return result;
    }
}
