package com.project.seiapp.controller;

import java.util.List;

import com.project.seiapp.entità.AssociazioneIntervento;
import com.project.seiapp.entità.CaratteristicheQualitative;
import com.project.seiapp.entità.CodiceIntervento;
import com.project.seiapp.entità.Struttura;
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
    public List<AssociazioneIntervento> getInterventoSingolo(@RequestParam int carQual, @RequestParam int struttura, @RequestParam int intervento){
        return rep.findByCaratteristicaAssociazioneInterventoIdAndStrutturaAssociazioneIdAndInterventoId(carQual, struttura, intervento);
    }
}