package com.project.seiapp.controller;

import java.util.List;

import com.project.seiapp.entità.ValutazioniEdificio;
import com.project.seiapp.repository.ValutazioniEdificioRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ValutazioniEdificioController {
    public ValutazioniEdificioController(ValutazioniEdificioRepository repository) {
        this.repository = repository;
    }

    ValutazioniEdificioRepository repository;

    @GetMapping("/valutazioni")
    public List<ValutazioniEdificio> getValutazioni() {
        return (List<ValutazioniEdificio>) repository.findAll();
    }

    @PostMapping("/valutazioni")
    void addValutazione(@RequestBody ValutazioniEdificio valutazione) {
        repository.save(valutazione);
    }
}
