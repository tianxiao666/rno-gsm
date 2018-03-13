package com.hgicreate.rno.demo.controller;

import com.hgicreate.rno.demo.mapper.MotsMapper;
import com.hgicreate.rno.demo.model.Mots;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MotsController {

    private final MotsMapper motsMapper;

    public MotsController(MotsMapper motsMapper) {
        this.motsMapper = motsMapper;
    }

    @GetMapping("/stsDate")
    List<String> stsDate() {
        return motsMapper.queryStsDate();
    }

    @GetMapping("/gsmCell")
    List<String> queryGsmCell() {
        return motsMapper.queryGsmCell();
    }

    @GetMapping("/mots")
    List<Mots> queryMots() {
        return motsMapper.queryMots();
    }
}
