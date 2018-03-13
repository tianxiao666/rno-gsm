package com.hgicreate.rno.gsm.service.query;

import java.util.List;
import java.util.Map;

import com.hgicreate.rno.gsm.model.Page;

public interface TrafficQueryService {

	/**
	 * 准备相应条件的数据
	 */
	public List<Map<String, Object>> prepareData(Map<String, Object> condition);

	/**
	 * 分页展现表格
	 */
	public Page showTable(Page page, List<Map<String, Object>> data);

	/**
	 * 导出数据
	 */
	public List<Map<String, Object>> export(List<Map<String, Object>> data);
}
