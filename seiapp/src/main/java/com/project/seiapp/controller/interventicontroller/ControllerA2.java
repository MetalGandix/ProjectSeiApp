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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ControllerA2 {

    public ControllerA2(InterventoA2Repository a2repository) {
        this.a2repository = a2repository;
    }

    private InterventoA2Repository a2repository;

    @GetMapping("/interventoA2")
    public List<CreazioneInterventoA2> getIntervento() {
        return (List<CreazioneInterventoA2>) a2repository.findAll();
    }

    @PostMapping("/interventoA2")
    public CreazioneInterventoA2 postMethodName(@RequestBody CreazioneInterventoA2 a2) {
        if(a2repository.findAll().isEmpty() == true){
            a2repository.save(a2);
        }else{
            System.out.println("Esiste già l'intervento nel DB");
        }
        return a2;
    }

    @DeleteMapping("/interventoA2/{id}")
    public String deleteIntervento(@PathVariable Long interventoId) {
        CreazioneInterventoA2 intervento = a2repository.getOne(interventoId);
        a2repository.delete(intervento);
        return "Elemento cancellato";
    }

    @PutMapping("/interventoA2/{id}")
    public CreazioneInterventoA2 saveOrUpdateIntervento(@RequestBody CreazioneInterventoA2 a2) {
        if(a2repository.findAll().isEmpty() == true){
            a2repository.save(a2);
        }else{
            System.out.println("Esiste già l'intervento nel DB");
        }
        return a2;
    }

}