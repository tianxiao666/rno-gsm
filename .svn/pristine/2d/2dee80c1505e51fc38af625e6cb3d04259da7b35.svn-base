package com.hgicreate.rno.gsm.controller.query;

import com.hgicreate.rno.gsm.mapper.query.IndicatorDiagramMapper;
import com.hgicreate.rno.gsm.service.query.IndicatorDiagramService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@RestController
@RequestMapping("/indicator")
public class IndicatorDiagramController {

	private static final Logger logger = LoggerFactory.getLogger(IndicatorDiagramController.class);

    private final IndicatorDiagramMapper indicatorDiagramMapper;
    private  final IndicatorDiagramService indicatorDiagramService;


    @Value("${rmo.gsm.linage:15}")
    private String linage;

    public IndicatorDiagramController(IndicatorDiagramMapper indicatorDiagramMapper,IndicatorDiagramService indicatorDiagramService) {
        this.indicatorDiagramMapper = indicatorDiagramMapper;
        this.indicatorDiagramService = indicatorDiagramService;
    }
    
    @GetMapping("/indicatorPage")
    ModelAndView index(Map<String, Object> model, HttpServletRequest request) {
    	model.put("indicatordate", indicatorDiagramMapper.queryStsDate());
        model.put("indicatorbsc" , indicatorDiagramMapper.queryBscDate());
    	model.put("indicatorcell", indicatorDiagramMapper.queryGsmCell());
        model.put("indicatortemplate",indicatorDiagramMapper.queryIndicatorTemplate());
    	model.put("linage", Integer.parseInt(linage));
    	return new ModelAndView("query/indicatorDiagram");
    }

    @GetMapping("/indicatorDate")
    List<String> stsDate() {
        return indicatorDiagramMapper.queryAllDate();
    }

    @GetMapping("/indicatorBsc")
    List<String> queryAllBsc() {return indicatorDiagramMapper.queryAllBsc();}

    @GetMapping("/indicatorCell")
    List<String> queryGsmCell() {
        return indicatorDiagramMapper.queryAllGsmCell();
    }

    @PostMapping("/queryIndicator")
    Map<String, Object> queryIndicator(HttpServletRequest request) {

        logger.debug("进入方法：getIndicatorDiagram。date={},time={},bsc={},cell={},template={},axis={},graphics={}", request.getParameter("dateSelect"),
                request.getParameter("timeSelect"),request.getParameter("bscSelect"),request.getParameter("cellSelect"),
                request.getParameter("templateSelect"),request.getParameter("axisSelect"),request.getParameter("graphics"));

        Map<String, Object> result = new HashMap<String, Object>();

        Map<String, Object> cond = new HashMap<String, Object>();
        cond.put("indicatordate", request.getParameter("dateSelect"));
        cond.put("indicatortime", request.getParameter("timeSelect"));
        cond.put("indicatorbsc", request.getParameter("bscSelect"));
        cond.put("indicatorbcell", request.getParameter("cellSelect"));
        cond.put("indicatortemplate", request.getParameter("templateSelect"));
        cond.put("indicatoraxis", request.getParameter("axisSelect"));

        List<Map<String, Object>> res = indicatorDiagramService.getIndicatorDiagram(cond);

        List<Map<String, Object>> resF = new ArrayList<Map<String, Object>>();
        for (Map<String, Object> maps : res) {
            if(maps.containsKey("message")){
                List<Map<String, Object>> resE = new ArrayList<Map<String, Object>>();
                resE.add(maps);
                result.put("errorE",resE);
            }else {
                resF.add(maps);
            }
        }
        result.put("data", resF);
        return result;
    }
}
