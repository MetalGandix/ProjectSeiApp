package com.project.seiapp.controller.interventicontroller;

import java.util.List;

import com.project.seiapp.entità.interventi.CreazioneInterventoA1;
import com.project.seiapp.repository.interventirepository.InterventoA1Repository;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ControllerA1 {
    public ControllerA1(InterventoA1Repository a1Repository) {
        this.a1Repository = a1Repository;
    }

    private InterventoA1Repository a1Repository;

    @GetMapping("/interventoA1")
    public List<CreazioneInterventoA1> getIntervento() {
        return (List<CreazioneInterventoA1>) a1Repository.findAll();
    }

    @PostMapping("/interventoA1")
    public CreazioneInterventoA1 postMethodName(@RequestBody CreazioneInterventoA1 a1) {
        a1Repository.save(a1);
        return a1;
    }

    @DeleteMapping("/interventoA1/{interventoA1id}")
    public String deleteIntervento(@PathVariable String interventoId) {
        CreazioneInterventoA1 intervento = a1Repository.getOne(interventoId);
        a1Repository.delete(intervento);
        return "Elemento cancellato";
    }

    @PutMapping("/interventoA1/{interventoA1id}")
    public CreazioneInterventoA1 saveOrUpdateIntervento(@RequestBody CreazioneInterventoA1 interventoA1) {
        a1Repository.save(interventoA1);
        return interventoA1;
    }

}