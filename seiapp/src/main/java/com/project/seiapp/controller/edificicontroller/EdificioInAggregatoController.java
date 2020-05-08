package com.project.seiapp.controller.edificicontroller;

import com.project.seiapp.repository.edificirepository.EdificioInAggregatoRepository;

import java.util.List;

import com.project.seiapp.entità.edificientity.EdificioInAggregato;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EdificioInAggregatoController {
    public EdificioInAggregatoController(EdificioInAggregatoRepository edificioInAggregato) {
        this.edificioInAggregato = edificioInAggregato;
    }

    private EdificioInAggregatoRepository edificioInAggregato;

    @GetMapping("/edificioInAggregato")
    public List<EdificioInAggregato> getCaratteristiche() {
        return (List<EdificioInAggregato>) edificioInAggregato.findAll();
    }

}