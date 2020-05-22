package com.project.seiapp.controller.elementiStrutturaController;

import java.util.List;

import com.project.seiapp.entità.elementiStruttura.ElementiNonStrutturali;
import com.project.seiapp.repository.elementiStrutturaRepository.ElementiNonStrutturaliRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ElementiNonStrutturaliController {

    public ElementiNonStrutturaliController(ElementiNonStrutturaliRepository nonStrutturaliRepository) {
        this.nonStrutturaliRepository = nonStrutturaliRepository;
    }

    private ElementiNonStrutturaliRepository nonStrutturaliRepository;
    

    @GetMapping("/elementiNonStrutturali")
    public List<ElementiNonStrutturali> getNonStrutturali(){
        return (List<ElementiNonStrutturali>) nonStrutturaliRepository.findAll();
    }
}