package com.project.seiapp.controller;

import java.util.List;

import com.project.seiapp.entità.TipologiaStruttura;
import com.project.seiapp.repository.TipologiaStrutturaRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TipologiaStrutturaController {

    public TipologiaStrutturaController(TipologiaStrutturaRepository tipo) {
        this.tipo = tipo;
    }

    private TipologiaStrutturaRepository tipo;


    @GetMapping("/tipologiaStruttura")
    public List<TipologiaStruttura> getStruttura(){
        return (List<TipologiaStruttura>) tipo.findAll();
        
    }
    
}