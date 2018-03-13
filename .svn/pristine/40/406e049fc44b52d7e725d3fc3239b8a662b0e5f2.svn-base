package com.hgicreate.rno.gsm.service.optimize;

import java.util.List;
import java.util.Map;

import com.hgicreate.rno.gsm.model.Page;

public interface SameNeiborFreqCheckService {

	/**
	 * 准备数据
	 */
	public Map<String, Object> preparation(Map<String, Object> condition);

	/**
	 * 查询结果分页展示
	 */
	public Page showQueryResultByPage(Page page, Map<String, Object> condition);

	/**
	 * 查询结果导出
	 */
	public List<Map<String, Object>> exportQueryResult(Map<String, Object> condition);

	/**
	 * 同邻频检查计算
	 */
	public List<Map<String, Object>> calculation(Map<String, Object> condition);

	/**
	 * 计算结果分页展示
	 */
	public Page showCalculateResultByPage(Page page, List<Map<String, Object>> allData);

	/**
	 * 计算结果导出
	 */
	public List<Map<String, Object>> exportCalculateResult(List<Map<String, Object>> allData);

}
