package com.hgicreate.rno.gsm.service.query;

import com.hgicreate.rno.gsm.model.Page;

import java.util.List;
import java.util.Map;

public interface IndicatorDiagramService {

	List<Map<String, Object>> getIndicatorDiagram(Map<String, Object> condition);
	
}
