package com.project.seiapp.controller;

import java.util.List;

import com.project.seiapp.entità.CaratteristicheQualitative;
import com.project.seiapp.repository.CaratteristicheQualitativeRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class CaratteristicheQualitativeController {
    public CaratteristicheQualitativeController(CaratteristicheQualitativeRepository caratteristicheQualitativeRepository){
        this.caratteristicheQualitativeRepository = caratteristicheQualitativeRepository;
    }

    private CaratteristicheQualitativeRepository caratteristicheQualitativeRepository;

    @GetMapping("/caratteristicheQualitative")
    public List<CaratteristicheQualitative> getCaratteristiche(){
    return (List<CaratteristicheQualitative>) caratteristicheQualitativeRepository.findAll();
    }

    @PostMapping("/caratteristicheQualitative")
    void addUser(@RequestBody CaratteristicheQualitative caratteristiche) {
        caratteristicheQualitativeRepository.save(caratteristiche);
    }
    }
