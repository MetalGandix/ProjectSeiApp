package com.project.seiapp.controller;

import java.util.List;

import com.project.seiapp.entità.TypeStruttura;
import com.project.seiapp.repository.TypeStrutturaRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TypeStrutturaController {
    public TypeStrutturaController(TypeStrutturaRepository rep){
        this.rep = rep;
    }
    TypeStrutturaRepository rep;

    @GetMapping("/typeStruttura")
    public List<TypeStruttura> getCaratteristiche() {
        return (List<TypeStruttura>) rep.findAll();
    }
}