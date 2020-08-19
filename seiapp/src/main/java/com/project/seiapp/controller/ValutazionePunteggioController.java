package com.project.seiapp.controller;

import java.util.List;

import com.project.seiapp.entità.ValutazionePunteggio;
import com.project.seiapp.repository.ValutazionePunteggioRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ValutazionePunteggioController {
    public ValutazionePunteggioController(ValutazionePunteggioRepository valPuntRep){
        this.valPuntRep = valPuntRep;
    }

    private ValutazionePunteggioRepository valPuntRep;

    @GetMapping("/valutazionePunteggio")
    public List<ValutazionePunteggio> getPunteggioValutazione(){
        return (List<ValutazionePunteggio>) valPuntRep.findAll();
    }
}