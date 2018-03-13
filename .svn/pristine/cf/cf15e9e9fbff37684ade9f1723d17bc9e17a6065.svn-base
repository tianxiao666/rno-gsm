package com.hgicreate.rno.gsm.controller.optimize;

import com.hgicreate.rno.gsm.mapper.optimize.CapacityMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.optimize.CapacityService;
import org.apache.poi.xssf.usermodel.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;

import java.util.*;
import java.util.List;

@RestController
@RequestMapping("/capacity")
public class CapacityController {

	private static final Logger logger = LoggerFactory.getLogger(CapacityController.class);

    private final CapacityMapper capacityMapper;

    private final CapacityService capacityService;

    private List<Map<String, Object>> list;

    @Value("${rmo.gsm.linage:15}")
    private String linage;

    public CapacityController(CapacityMapper capacityMapper, CapacityService capacityService) {
        this.capacityMapper = capacityMapper;
        this.capacityService = capacityService;
    }
    
    @GetMapping("/capacityPage")
    ModelAndView index(Map<String, Object> model, HttpServletRequest request) {
        model.put("sqldates", capacityMapper.querySqlDate());
    	model.put("capacitydate", capacityMapper.queryStsDate());
        model.put("capacitybsc" , capacityMapper.queryBscDate());
    	model.put("capacitycell", capacityMapper.queryGsmCell());
    	model.put("linage", Integer.parseInt(linage));
    	return new ModelAndView("optimize/capacityReduction");
    }

    @GetMapping("/capacityDate")
    List<String> stsDate() {
        return capacityMapper.queryAllDate();
    }

    @GetMapping("/capacityBsc")
    List<String> queryAllBsc() {
        return capacityMapper.queryAllBsc();
    }

    @GetMapping("/capacityCell")
    List<String> queryGsmCell() {
        return capacityMapper.queryAllGsmCell();
    }

	@PostMapping("/exportCapacity")
    ModelAndView exportcapacity(HttpServletRequest request,HttpServletResponse resp,Map<String, Object> model) {
        logger.debug("进入方法exportCapacity:"+"exportCapacity.pageSize={},date={},bsc={},cell={},checkValue={},slqdate={}", linage,request.getParameter("dateSelect"), request.getParameter("bscSelect"),request.getParameter("cellSelect"),request.getParameter("checkValue"),request.getParameter("sqlDate"));

        XSSFWorkbook workbook = new XSSFWorkbook();
        XSSFSheet sheet = workbook.createSheet();
        workbook.setSheetName(0, "sheet1");
        XSSFRow row = sheet.createRow(0);
        XSSFCell  cell;
        XSSFCellStyle alignStyle=(XSSFCellStyle) workbook.createCellStyle();
        alignStyle.setAlignment(XSSFCellStyle.ALIGN_CENTER);//水平居中
        alignStyle.setVerticalAlignment(XSSFCellStyle.ALIGN_CENTER);//垂直居中
        try {
        list=capacityService.querycapacity(request);
        String[] title_list1={"BSC","CELL","平均峰值语音","平均峰值数据","平均峰值话务","载波数","合理载波数","需求"};
        String[] title_list2={"BSC","CELL","平均峰值语音","平均峰值数据","平均峰值话务","空闲传输数","载波数","合理载波数","需求"};
        String[] title_list;
        String fileName;
        if("cal".equals(request.getParameter("checkValue"))){
            title_list=title_list2;
            fileName="批量扩减容_计算.xlsx";
        }else {
            title_list=title_list1;
            fileName="批量扩减容.xlsx";
        }

        fileName = new String(fileName.getBytes("UTF-8"), "iso-8859-1");

        for(int i=0;i<title_list.length;i++){
            cell = row.createCell(i);
            cell.setCellValue(title_list[i]);
            cell.setCellStyle(alignStyle);
            sheet.setColumnWidth(i,("平均峰值语音".getBytes().length)*256);
        }
        // 写入各条记录，每条记录对应Excel中的一行
        Iterator<Map<String, Object>> it=list.iterator();
        for(int i=0;it.hasNext();i++) {
            row = sheet.createRow(i+1);
            Map<String, Object> map =it.next();
            for(int j=0;j<title_list.length;j++){
                cell=row.createCell(j);
                if("合理载波数".equals(title_list[j])){
                    cell.setCellValue(erlangB(map.get("平均峰值话务").toString()));
                }else if("需求".equals(title_list[j])){
                    cell.setCellValue(requirement(erlangB(map.get("平均峰值话务").toString()),map.get("载波数").toString()));
                }else {
                    cell.setCellValue(map.get(title_list[j]).toString());
                }
                cell.setCellStyle(alignStyle);
            }
        }
        resp.setContentType("application/x.ms-excel");
        resp.setHeader("Content-disposition", "attachment;filename=" + fileName);
        OutputStream ouputStream = resp.getOutputStream();
        workbook.write(ouputStream);
        ouputStream.flush();
        ouputStream.close();
        list.clear();
            return null;
        } catch (Exception e) {
            model.put("message", "error");
            model.put("sqldates", capacityMapper.querySqlDate());
            model.put("capacitydate", capacityMapper.queryStsDate());
            model.put("capacitybsc" , capacityMapper.queryBscDate());
            model.put("capacitycell", capacityMapper.queryGsmCell());
            model.put("linage", Integer.parseInt(linage));
            return new ModelAndView("optimize/capacityReduction");
        }
    }

    //合理载波数
    private String erl="0.02 0.223 0.602 1.092 1.657 2.276 2.935 3.627 4.345 5.084 5.842 6.615 7.402 8.2 9.01 9.828 10.656 11.491 12.333 13.182 14.036 14.895 15.761 16.631 17.505 18.383 19.265 20.15 21.039 21.932 22.827 23.725 24.626 25.529 26.435 27.343 28.254 29.166 30.081 30.997 31.916 32.836 33.758 34.682 35.607 36.534 37.462 38.392 39.323 40.255 41.1 42.12 43.06 44.0 44.94 45.88 46.82 47.76 48.7 49.64 50.59 51.53 52.48 53.43 54.38 55.33 56.27 57.23 58.18 59.13 60.08 61.04 61.99 62.94 63.9 64.86 65.81 66.77 67.73 68.69 69.65 70.61 71.57 72.53 73.49 74.45 75.42 76.38 77.34 78.31 79.27 80.24 81.2 82.17 83.13 84.1 85.07 86.04 87.0 87.97";
    private String[] erlang = erl.split(" ");
    private int erlangB(String b){
        int key=0;
        for(int i=0;i<erlang.length;i++){
            if(Double.parseDouble(erlang[i])<Double.parseDouble(b)){
                continue;
            }else {
                key=i+1;
                break;
            }
        }
        if(key==0){
            key=100;
        }
        int erlangB=(key%8==0)?key/8:key/8+1;
        return erlangB;
    }

    //需求
    private String requirement(int carriers,String  reacarrier) {
        long reacarriers = Math.round(Double.parseDouble(reacarrier));
        if(carriers== (int)reacarriers){
            return "合理配置";
        }else if(carriers<(int)reacarriers){
            return "减容"+(reacarriers-carriers)+"个载波";
        }else{
            return "扩容"+(carriers-reacarriers)+"个载波";
        }
    }
    
    /**
	 * 分页查询
	 */
	@PostMapping("/queryCapacityByPage")
	Map<String, Object> queryCapacityByPage(HttpServletRequest request) {
		
		logger.debug("queryCapacityByPage.pageSize={},date={},bsc={},cell={},checkbox={}", linage,request.getParameter("dateSelect"),
				request.getParameter("bscSelect"),request.getParameter("cellSelect"),request.getParameter("checkValue"));

		Map<String, Object> result = new HashMap<String, Object>();

		Page newPage = new Page();
		newPage.setPageSize(Integer.parseInt(linage));
		newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
		newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
		newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

		Map<String, Object> cond = new HashMap<String, Object>();

		cond.put("capacitydate", request.getParameter("dateSelect"));
        cond.put("capacitysqldate", request.getParameter("sqlDate").replace("[","").replace("]","").replace(" ",""));
		cond.put("capacitybsc", request.getParameter("bscSelect"));
		cond.put("capacitycell", request.getParameter("cellSelect"));
        cond.put("capacitycaculate", request.getParameter("checkValue"));

		List<Map<String, Object>> res = capacityService.queryCapacityByPage(cond, newPage);

		int totalCnt = newPage.getTotalCnt();
		newPage.setTotalPageCnt(totalCnt / newPage.getPageSize() + (totalCnt % newPage.getPageSize() == 0 ? 0 : 1));
		newPage.setForcedStartIndex(-1);
		result.put("page", newPage);
		result.put("data", res);
        result.put("calculate", request.getParameter("checkValue"));

		return result;
	}
}
