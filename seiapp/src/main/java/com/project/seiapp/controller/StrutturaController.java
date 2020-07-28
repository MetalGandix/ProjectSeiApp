package com.project.seiapp.controller;

import java.util.List;

import com.project.seiapp.entità.Struttura;
import com.project.seiapp.repository.StrutturaRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StrutturaController {
    public StrutturaController(StrutturaRepository rep){
        this.rep = rep;
    }

    StrutturaRepository rep;

    @GetMapping("/getStrutturaCaratteristica")
    public List<Struttura> getStruttureForCaratteristica(@RequestParam Long carQual){
        return rep.findByCaratteristicaQualitativa(carQual);
    }

    @GetMapping("/struttura")
    public List<Struttura> getCaratteristiche() {
        return (List<Struttura>) rep.findAll();
    }
}