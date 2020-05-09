package com.project.seiapp.repository.edificirepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.seiapp.entità.edificientity.Edificio;

public interface EdificioRepository extends JpaRepository<Edificio, Long> {
    
}