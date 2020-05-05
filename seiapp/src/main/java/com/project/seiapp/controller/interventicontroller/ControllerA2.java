package com.project.seiapp.controller.interventicontroller;

import com.project.seiapp.repository.interventirepository.InterventoA2Repository;
import com.project.seiapp.entità.interventi.CreazioneInterventoA2;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


public class ControllerA2 {

    public ControllerA2(InterventoA2Repository a2repository){
        this.a2repository = a2repository;
    }

    private InterventoA2Repository a2repository;

    @GetMapping("/interventoA2")
    public List<CreazioneInterventoA2> getIntervento(){
        return (List<CreazioneInterventoA2>) a2repository.findAll();
    }

    @PostMapping("/interventoA2")
    void postMethodName(@RequestBody CreazioneInterventoA2 a2) {
       a2repository.save(a2);
    }

    @DeleteMapping("/interventoA2/{interventoA2id}")
    public String deleteIntervento(@PathVariable String interventoId)
    {
        CreazioneInterventoA2 intervento = a2repository.getOne(interventoId);
        a2repository.delete(intervento);
        return "Elemento cancellato";
    }

    @PutMapping("/interventoA2/{interventoA2id}")
    public CreazioneInterventoA2 saveOrUpdateIntervento(@RequestBody CreazioneInterventoA2 interventoA2){
        a2repository.save(interventoA2);
        return interventoA2;
    }

}