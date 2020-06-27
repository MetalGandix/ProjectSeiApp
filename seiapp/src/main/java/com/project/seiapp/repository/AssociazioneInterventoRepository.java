package com.project.seiapp.repository;


import java.util.List;

import com.project.seiapp.entità.AssociazioneIntervento;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AssociazioneInterventoRepository extends JpaRepository<AssociazioneIntervento,Long>{
	List<AssociazioneIntervento> findByCaratteristicaAssociazioneInterventoIdAndStrutturaAssociazioneIdAndInterventoId(int caratteristicaAssociazioneInterventoId, int strutturaAssociazioneId, int interventoId);
}