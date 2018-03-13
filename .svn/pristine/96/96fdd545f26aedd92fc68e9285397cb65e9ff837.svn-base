package com.hgicreate.rno.gsm.service.optimize;

import com.hgicreate.rno.gsm.model.Page;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

public interface FrequencyService {

	/**
	 *  不计算查询
	 */
	List<Map<String, Object>> queryFrequencyByPage(Map<String, Object> condition, Page page);
	/**
	 *  计算查询
	 */
	List<Map<String, Object>> calcaculateFrequencyByPage(Map<String, Object> condition, Page page);
	/**
	 *  导出
	 */
	List<Map<String, Object>> queryfrequency(HttpServletRequest request);

}
