package com.project.seiapp.controller;

import java.util.List;

import com.project.seiapp.entità.StrutturaVerticale;
import com.project.seiapp.repository.StrutturaVerticaleRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StrutturaVerticaleController {
    public StrutturaVerticaleController(StrutturaVerticaleRepository verticaleRepository){
        this.verticaleRepository = verticaleRepository;
    }

    private StrutturaVerticaleRepository verticaleRepository;

    @GetMapping("/strutturaVerticale")
    public List<StrutturaVerticale> getStruttura(){
    return (List<StrutturaVerticale>) verticaleRepository.findAll();
    }

    @PostMapping("/strutturaVerticale")
    void addUser(@RequestBody StrutturaVerticale strutturaVerticale) {
        verticaleRepository.save(strutturaVerticale);
    }

    }
