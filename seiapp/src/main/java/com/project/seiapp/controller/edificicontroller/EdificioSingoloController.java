package com.project.seiapp.controller.edificicontroller;

import com.project.seiapp.entità.edificientity.EdificioSingolo;

import com.project.seiapp.repository.edificirepository.EdificioSingoloRepository;
import java.util.List;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EdificioSingoloController {
    public EdificioSingoloController(EdificioSingoloRepository edificioSingolo) {
        this.edificioSingolo = edificioSingolo;
    }

    private EdificioSingoloRepository edificioSingolo;

    @GetMapping("/edificioSingolo")
    public List<EdificioSingolo> getCaratteristiche() {
        return (List<EdificioSingolo>) edificioSingolo.findAll();
    }

}