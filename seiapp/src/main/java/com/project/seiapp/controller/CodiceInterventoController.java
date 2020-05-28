package com.project.seiapp.controller;

import java.util.List;

import com.project.seiapp.entità.CodiceIntervento;
import com.project.seiapp.repository.CodiceInterventoRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CodiceInterventoController {
    public CodiceInterventoController(CodiceInterventoRepository codIntervento){
        this.codIntervento =codIntervento;
    }

    private CodiceInterventoRepository codIntervento;

    @GetMapping("/codiceIntervento")
    public List<CodiceIntervento> getCodice(){
        return (List<CodiceIntervento>) codIntervento.findAll();
    }
    
}