package com.project.seiapp.controller.elementiStrutturaController;

import java.util.List;

import com.project.seiapp.entità.elementiStruttura.InfissiEsterniVerticali;
import com.project.seiapp.repository.elementiStrutturaRepository.InfissiEsterniVerticaliRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class InfissiEsterniVerticaliController {

    private InfissiEsterniVerticaliRepository infissiRepository;

    public InfissiEsterniVerticaliController(InfissiEsterniVerticaliRepository infissiRepository) {
        this.infissiRepository = infissiRepository;
    }

    @GetMapping("/infissiEsterniVerticali")
    public List<InfissiEsterniVerticali> getInfissi(){
        return (List<InfissiEsterniVerticali>) infissiRepository.findAll();
    }

    
}