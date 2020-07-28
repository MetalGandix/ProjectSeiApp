package com.project.seiapp.repository;

import java.util.List;

import com.project.seiapp.entità.Struttura;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StrutturaRepository extends JpaRepository<Struttura, Long> {
	@Query("SELECT s FROM Struttura s JOIN s.carQuality as carLink with carLink.id = ?1")
	List<Struttura> findByCaratteristicaQualitativa(Long caratteristicaQualitativa);
}