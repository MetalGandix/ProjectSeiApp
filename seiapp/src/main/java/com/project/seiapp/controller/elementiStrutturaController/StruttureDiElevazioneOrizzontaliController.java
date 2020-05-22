package com.project.seiapp.controller.elementiStrutturaController;

import java.util.List;

import com.project.seiapp.entità.elementiStruttura.StruttureDiElevazioneOrizzontali;
import com.project.seiapp.repository.elementiStrutturaRepository.StruttureDiElevazioneOrizzontaliRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StruttureDiElevazioneOrizzontaliController {

    public StruttureDiElevazioneOrizzontaliController(StruttureDiElevazioneOrizzontaliRepository orizzontaleRepository){
        this.orizzontaleRepository = orizzontaleRepository;
    }

    private StruttureDiElevazioneOrizzontaliRepository orizzontaleRepository;

    @GetMapping("/strutturaOrizzontale")
    public List<StruttureDiElevazioneOrizzontali> getStrutturaOrizzontale(){
        return (List<StruttureDiElevazioneOrizzontali>) orizzontaleRepository.findAll();
    }
    
}