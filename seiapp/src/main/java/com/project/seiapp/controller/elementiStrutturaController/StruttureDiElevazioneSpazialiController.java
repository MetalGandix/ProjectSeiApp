package com.project.seiapp.controller.elementiStrutturaController;

import java.util.List;

import com.project.seiapp.entità.elementiStruttura.StruttureDiElevazioneSpaziali;
import com.project.seiapp.repository.elementiStrutturaRepository.StruttureDiElevazioneSpazialiRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StruttureDiElevazioneSpazialiController {

    private StruttureDiElevazioneSpazialiRepository strutturaSpazialeRepository;

	public StruttureDiElevazioneSpazialiController(StruttureDiElevazioneSpazialiRepository strutturaSpazialeRepository) {
        this.strutturaSpazialeRepository = strutturaSpazialeRepository;
    }

    @GetMapping("/strutturaSpaziale")
    public List<StruttureDiElevazioneSpaziali> getStruttureSpaziali(){
        return (List<StruttureDiElevazioneSpaziali>) strutturaSpazialeRepository.findAll();

    }
    
}