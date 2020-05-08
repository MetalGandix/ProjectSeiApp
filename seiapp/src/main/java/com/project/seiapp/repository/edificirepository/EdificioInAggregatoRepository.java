package com.project.seiapp.repository.edificirepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.seiapp.entità.edificientity.EdificioInAggregato;

public interface EdificioInAggregatoRepository extends JpaRepository<EdificioInAggregato, Long> {
    
}