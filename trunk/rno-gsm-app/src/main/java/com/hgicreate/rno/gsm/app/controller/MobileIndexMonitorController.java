package com.hgicreate.rno.gsm.app.controller;

import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.hgicreate.rno.gsm.app.mapper.MobileIndexMonitorMapper;

@RestController
public class MobileIndexMonitorController {

	private static final Logger logger = LoggerFactory.getLogger(MobileIndexMonitorController.class);

	private final MobileIndexMonitorMapper indexMonitorMapper;

	public MobileIndexMonitorController(MobileIndexMonitorMapper indexMonitorMapper) {
		this.indexMonitorMapper = indexMonitorMapper;
	}

	/**
	 * APP指标监控首页
	 */
	@GetMapping("/indexMonitor")
	ModelAndView index(Map<String, Object> model) {
		return new ModelAndView("indexMonitor");
	}

	/**
	 * 指标查询
	 */
	@PostMapping("/indexMonitorResult")
	List<Map<String, Object>> result(HttpServletRequest request, Map<String, Object> model) {

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
			result = indexMonitorMapper.selectCallDrop(cond);
		}
		if (index.equals("ICM")) {
			result = indexMonitorMapper.selectIcm(cond);
		}
		if (index.equals("S掉话")) {
			result = indexMonitorMapper.selectScallDrop(cond);
		}
		if (index.equals("无线接入性")) {
			result = indexMonitorMapper.selectWirelessAccess(cond);
		}
		if (index.equals("信道完好率")) {
			result = indexMonitorMapper.selectChannelWellRate(cond);
		}
		if (index.equals("0话务")) {
			result = indexMonitorMapper.selectZeroTeleTraffic(cond);
		}
		if (index.equals("0流量")) {
			result = indexMonitorMapper.selectZeroFlow(cond);
		}
		if (index.equals("切入")) {
			result = indexMonitorMapper.selectPitchIn(cond);
		}
		if (index.equals("切出")) {
			result = indexMonitorMapper.selectPitchOut(cond);
		}
		if (index.equals("SQI")) {
			result = indexMonitorMapper.selectSqi(cond);
		}
		if (index.equals("拥塞")) {
			result = indexMonitorMapper.selectCrowd(cond);
		}
		if (index.equals("S拥塞")) {
			result = indexMonitorMapper.selectScrowd(cond);
		}
		if (index.equals("TBF")) {
			result = indexMonitorMapper.selectTbf(cond);
		}
		if (index.equals("传输断链")) {
			result = indexMonitorMapper.selectTransportChainScission(cond);
		}
		if (index.equals("误码滑码")) {
			result = indexMonitorMapper.selectErrorSlideCode(cond);
		}
		if (index.equals("倒站BCCH=0")) {
			result = indexMonitorMapper.selectFallSiteBcch(cond);
		}
		if (index.equals("A1A2")) {
			result = indexMonitorMapper.selectA1A2(cond);
		}
		if (index.equals("RXMFP")) {
			result = indexMonitorMapper.selectRxmfp(cond);
		}
		if (index.equals("寻呼拥塞")) {
			result = indexMonitorMapper.selectPagingCrowd(cond);
		}
		if (index.equals("质量")) {
			result = indexMonitorMapper.selectQuality(cond);
		}
		if(index.equals("指标")){
			result = indexMonitorMapper.selectIndex(cond);
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
	private String cell, chinese, index, topX, sts, time = "";
	private List<Map<String, Object>> result = new ArrayList<>();
	private String fileName="";
	/**
	 * 提取监控指标
	 */
	@GetMapping("/extractIndex")
	void extractIndex(HttpServletRequest request, HttpServletResponse response) {

		logger.debug("进入方法queryIndex.cell={},index={},topX={}，粒度={}，时间={}",
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
			result = indexMonitorMapper.selectCallDrop(cond);
		}
		if (index.equals("ICM")) {
			result = indexMonitorMapper.selectIcm(cond);
		}
		if (index.equals("S掉话")) {
			result = indexMonitorMapper.selectScallDrop(cond);
		}
		if (index.equals("无线接入性")) {
			result = indexMonitorMapper.selectWirelessAccess(cond);
		}
		if (index.equals("信道完好率")) {
			result = indexMonitorMapper.selectChannelWellRate(cond);
		}
		if (index.equals("0话务")) {
			result = indexMonitorMapper.selectZeroTeleTraffic(cond);
		}
		if (index.equals("0流量")) {
			result = indexMonitorMapper.selectZeroFlow(cond);
		}
		if (index.equals("切入")) {
			result = indexMonitorMapper.selectPitchIn(cond);
		}
		if (index.equals("切出")) {
			result = indexMonitorMapper.selectPitchOut(cond);
		}
		if (index.equals("SQI")) {
			result = indexMonitorMapper.selectSqi(cond);
		}
		if (index.equals("拥塞")) {
			result = indexMonitorMapper.selectCrowd(cond);
		}
		if (index.equals("S拥塞")) {
			result = indexMonitorMapper.selectScrowd(cond);
		}
		if (index.equals("TBF")) {
			result = indexMonitorMapper.selectTbf(cond);
		}
		if (index.equals("传输断链")) {
			result = indexMonitorMapper.selectTransportChainScission(cond);
		}
		if (index.equals("误码滑码")) {
			result = indexMonitorMapper.selectErrorSlideCode(cond);
		}
		if (index.equals("倒站BCCH=0")) {
			result = indexMonitorMapper.selectFallSiteBcch(cond);
		}
		if (index.equals("A1A2")) {
			result = indexMonitorMapper.selectA1A2(cond);
		}
		if (index.equals("RXMFP")) {
			result = indexMonitorMapper.selectRxmfp(cond);
		}
		if (index.equals("寻呼拥塞")) {
			result = indexMonitorMapper.selectPagingCrowd(cond);
		}
		if (index.equals("质量")) {
			result = indexMonitorMapper.selectQuality(cond);
		}
		if(index.equals("指标")){
			result = indexMonitorMapper.selectIndex(cond);
		}
		fileName = index+"提取结果.xlsx";
		try {
			fileName=new String(fileName.getBytes("utf-8"),"iso-8859-1");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		try {
			Authen.getInstance().setAuthenti(true);
			response.sendRedirect("/monitorExtract");
		} catch (IOException e) {
			e.printStackTrace();
		}

	}
	private int downloadCount=0;
	@GetMapping("/monitorExtract")
	void extra(HttpServletResponse response){
		if(Authen.getInstance().isAuthenti()) {
			downloadCount += 1;
			if (downloadCount % 2 == 0) {
				downloadCount = 0;
				Authen.getInstance().setAuthenti(false);
			}
			response.setContentType("application/x.ms-excel");
			response.setHeader("Content-disposition", "attachment;filename=" + fileName);
			Map<String, List<Map<String, Object>>> data = new LinkedHashMap<>();
			data.put(index, result);
			createExcel(response, data);
		}else{
			try {
				response.sendRedirect("/index");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
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
