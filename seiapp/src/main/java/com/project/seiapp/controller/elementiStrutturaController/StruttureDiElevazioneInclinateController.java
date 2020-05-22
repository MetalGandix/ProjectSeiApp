package com.project.seiapp.controller.elementiStrutturaController;

import java.util.List;

import com.project.seiapp.entità.elementiStruttura.StruttureDiElevazioneInclinate;
import com.project.seiapp.repository.elementiStrutturaRepository.StruttureDiElevazioneInclinateRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StruttureDiElevazioneInclinateController{

    private StruttureDiElevazioneInclinateRepository struttureInclinateRepository;

    public StruttureDiElevazioneInclinateController(
            StruttureDiElevazioneInclinateRepository struttureInclinateRepository) {
        this.struttureInclinateRepository = struttureInclinateRepository;
    }

    @GetMapping("/strutturaInclinata")
    public List<StruttureDiElevazioneInclinate> getStrutturaInclinata(){
        return (List<StruttureDiElevazioneInclinate>) struttureInclinateRepository.findAll();
    }
}