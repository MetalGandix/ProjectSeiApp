package com.project.seiapp.controller;

import com.project.seiapp.repository.QualityRepository;

import java.util.List;

import com.project.seiapp.entità.Quality;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class QualityController {
    public QualityController(QualityRepository qualityRepository) {
        this.qualityRepository = qualityRepository;
    }

    QualityRepository qualityRepository;

    @GetMapping("/quality")
    public List<Quality> getCaratteristiche() {
        return (List<Quality>) qualityRepository.findAll();
    }
}