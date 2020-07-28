package com.project.seiapp.controller;

import java.util.List;

import com.project.seiapp.entità.AssociazioneIntervento;
import com.project.seiapp.repository.AssociazioneInterventoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AssociazioneInterventoController {

    public AssociazioneInterventoController(AssociazioneInterventoRepository rep){
        this.rep = rep;
    }
    
    private AssociazioneInterventoRepository rep;

    @GetMapping("/associazioneIntervento")
    public List<AssociazioneIntervento> getStruttura(){
        return (List<AssociazioneIntervento>) rep.findAll();
    }

    @GetMapping("/getInterventoSingolo")
    public List<AssociazioneIntervento> getInterventoSingolo(@RequestParam Long carQual, @RequestParam Long struttura, @RequestParam Long intervento){
        return rep.findByCaratteristicaAssociazioneInterventoIdAndStrutturaAssociazioneIdAndInterventoId(carQual, struttura, intervento);
    }

    @GetMapping("/getInterventoByCaratteristica")
    public List<AssociazioneIntervento> getInterventoByCaratteristica(@RequestParam Long carQual){
        return rep.findByCaratteristicaAssociazioneInterventoId(carQual);
    }
}