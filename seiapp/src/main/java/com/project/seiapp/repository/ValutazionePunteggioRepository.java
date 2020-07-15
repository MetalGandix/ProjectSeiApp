package com.project.seiapp.repository;

import com.project.seiapp.entità.ValutazionePunteggio;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ValutazionePunteggioRepository extends JpaRepository<ValutazionePunteggio, Double> {
    
}