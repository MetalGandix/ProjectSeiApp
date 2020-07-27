package com.project.seiapp.controller;

import java.util.List;

import com.project.seiapp.entità.CaratteristicheStruttura;
import com.project.seiapp.repository.CaratteristicheStrutturaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CaratteristicheStrutturaController {
    public CaratteristicheStrutturaController(CaratteristicheStrutturaRepository rep){
        this.rep = rep;
    }

    private CaratteristicheStrutturaRepository rep;

    @GetMapping("/caratteristicheStruttura")
    public List<CaratteristicheStruttura> getCaratteristicheStruttura(){
        return (List<CaratteristicheStruttura>) rep.findAll();
    }
    
}