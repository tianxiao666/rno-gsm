package com.hgicreate.rno.gsm.service.optimize;

import com.hgicreate.rno.gsm.model.Page;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

public interface NeighService {

	List<Map<String, Object>> queryNeighByPage(Map<String, Object> condition, Page page);
	List<Map<String, Object>> queryNeigh(HttpServletRequest request);
	
}
