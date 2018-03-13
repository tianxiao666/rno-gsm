package com.hgicreate.rno.gsm.app.controller;

import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hgicreate.rno.gsm.app.bean.Authen;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.hgicreate.rno.gsm.app.mapper.WorkOrderExtractMapper;

@RestController
public class WorkOrderExtractController {

	private static final Logger logger = LoggerFactory.getLogger(WorkOrderExtractController.class);

	private final WorkOrderExtractMapper workOrderExtractMapper;

	private String subMaintain, index, cell, chinese, beginTime, endTime = "";
	private int downloadCount=0;

	public WorkOrderExtractController(WorkOrderExtractMapper workOrderExtractMapper) {
		this.workOrderExtractMapper = workOrderExtractMapper;
	}

	/**
	 * 工单提取首页
	 */
	@GetMapping("/woe")
	ModelAndView index(HttpServletRequest request) {
		logger.debug("访问工单提取首页");
		return new ModelAndView("workOrderExtract");
	}
	
	/**
	 * 获取工单条数
	 */
	@GetMapping("/countWorkOrder")
	boolean countWorkOrder(HttpServletRequest request) {
		//String subMaintain, index, cell, chinese, beginTime, endTime = "";
		logger.debug("进入countWorkOrder方法，代维={}，指标={}，CELL={}，中文名={}，开始时间={}，结束时间={}",
				subMaintain = request.getParameter("subMaintain"), index = request.getParameter("index"),
				cell = request.getParameter("cell").trim().replace("，", ",").toUpperCase(),
				chinese = request.getParameter("chinese").trim().replace("，", ",").toUpperCase(),
				beginTime = request.getParameter("beginTime").replace("-", ""),
				endTime = request.getParameter("endTime").replace("-", ""));

		Map<String, Object> map = new HashMap<>();
		map.put("subMaintain", subMaintain);
		map.put("indexName", index);
		map.put("cells", cell == "" ? null : cell.split(","));
		map.put("chinese", chinese == "" ? null : chinese.split(","));
		map.put("beginTime", beginTime);
		map.put("endTime", endTime);
		Authen.getInstance().setAuthenti(true);
		if(workOrderExtractMapper.countWorkOrder(map) > 0) {
			return true;
		}else {
			return false;
		}
	}

	/**
	 * 提取工单
	 */
	@GetMapping("/extractWorkOrder")
	void extractWorkOrder(HttpServletRequest request, HttpServletResponse response) {
		logger.debug("进入extractWorkOrder方法，代维={}，指标={}，CELL={}，中文名={}，开始时间={}，结束时间={}",
				subMaintain = request.getParameter("subMaintain"), index = request.getParameter("index"),
				cell = request.getParameter("cell").trim().replace("，", ",").toUpperCase(),
				chinese = request.getParameter("chinese").trim().replace("，", ",").toUpperCase(),
				beginTime = request.getParameter("beginTime").replace("-", ""),
				endTime = request.getParameter("endTime").replace("-", ""));
		try {
			Authen.getInstance().setAuthenti(true);
			response.sendRedirect("/download/page");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@GetMapping("/download/page")
	void index1(HttpServletResponse response, HttpServletRequest request) {
		logger.debug("访问工单提取首页");
		if(Authen.getInstance().isAuthenti()){
			downloadCount+=1;
			if(downloadCount%2==0){
				downloadCount=0;
				Authen.getInstance().setAuthenti(false);
			}
			Map<String, Object> map = new HashMap<>();
			map.put("subMaintain", subMaintain);
			map.put("indexName", index);
			map.put("cells", cell == "" ? null : cell.split(","));
			map.put("chinese", chinese == "" ? null : chinese.split(","));
			map.put("beginTime", beginTime);
			map.put("endTime", endTime);

			String fileName = "工单提取结果.xlsx";
			try {
				fileName = new String(fileName.getBytes("UTF-8"), "iso-8859-1");
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			} // 为了解决中文名称乱码问题

			response.setContentType("application/x.ms-excel");
			response.setHeader("Content-disposition", "attachment;filename=" + fileName);
			createExcel(response, workOrderExtractMapper.extractWorkOrder(map));
		}else{
			try {
				response.sendRedirect("/index");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * 创建excel文件
	 */
	private boolean createExcel(HttpServletResponse response, List<Map<String, Object>> data) {

		OutputStream os = null;
		try {
			os = response.getOutputStream();
		} catch (IOException e) {
			e.printStackTrace();
		}

		Workbook workbook = new SXSSFWorkbook();
		Sheet sheet = workbook.createSheet();
		Row row = sheet.createRow(0);
		Cell cell;

		int titleIndex = 0, rowIndex = 0, valueIndex = 0;
		String handler = "", method = "",result="";
		for (Map<String, Object> map : data) {
			valueIndex = 0;
			if (rowIndex == 0) {
				for (String title : map.keySet()) {
					 if(titleIndex<=13) {
						cell = row.createCell(titleIndex++);
						cell.setCellValue(title.toUpperCase());
					}else{
						cell=row.createCell(14);
						cell.setCellValue("处理结果");
						break;
					}
				}
			}
			row = sheet.createRow(++rowIndex);
			for (Object o : map.values()) {
				if (valueIndex < 12) {
					cell = row.createCell(valueIndex++);
					cell.setCellValue(o.toString());
				} else if (valueIndex == 12) {
					handler = o.toString();
					valueIndex++;
				} else if (valueIndex == 13) {
					method = o.toString();
					valueIndex++;
				} else if (valueIndex == 14) {
					if (o.toString().trim() != "") {
						handler = o.toString();
					}
					cell = row.createCell(valueIndex-2);
					cell.setCellValue(handler);
					valueIndex++;
					handler = "";
				} else if (valueIndex == 15) {
					if (o.toString().trim() != "") {
						method = o.toString();
					}
					cell = row.createCell(valueIndex-2);
					cell.setCellValue(method);
					valueIndex++;
					method = "";
				}else if(valueIndex==16){
					result=o.toString();
					cell=row.createCell(valueIndex-2);
					cell.setCellValue(result);
					result="";
				}
			}
		}
		try {
			workbook.write(os);
			os.flush();
			os.close();
		} catch (IOException e) {
			//e.printStackTrace();
			/**原生安卓端WebView此处会报输出流错误，但暂不打印错误信息
			 * 原因，安卓端WebView在点击下载的时候，webview只是向服务器请求了一个头，但服务器错误地以为要完整地发送包括一个文件流
			 * 安卓取得请求头后，分析得到原本webview是要下载文件的，所以会再次向服务器发送请求。
			 * 但此时请求方已经变成安卓系统了，所以Session已经改变，服务器需要进行适配
			 */
		}
		return true;
	}

}