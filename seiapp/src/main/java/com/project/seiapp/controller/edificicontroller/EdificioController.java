package com.project.seiapp.controller.edificicontroller;

import com.project.seiapp.repository.edificirepository.EdificioRepository;

import java.util.List;

import com.project.seiapp.entità.edificientity.Edificio;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class EdificioController {
    public EdificioController(EdificioRepository edificio) {
        this.edificio = edificio;
    }

    private EdificioRepository edificio;

    @GetMapping("/edificio")
    public List<Edificio> getCaratteristiche() {
        List<Edificio> lE = edificio.findAll();
        System.out.println(lE);
        return lE;
    }
}