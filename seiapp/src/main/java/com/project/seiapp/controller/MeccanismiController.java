package com.project.seiapp.controller;

import java.util.List;

import com.project.seiapp.entità.Meccanismi;
import com.project.seiapp.repository.interventirepository.MeccanismiRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class MeccanismiController {
    public MeccanismiController(MeccanismiRepository meccanismiRepository){
        this.meccanismiRepository = meccanismiRepository;
    }

    private MeccanismiRepository meccanismiRepository;

    @GetMapping("/meccanismi")
    public List<Meccanismi> getMeccanismi(){
        return (List<Meccanismi>) meccanismiRepository.findAll();
    }
    
}