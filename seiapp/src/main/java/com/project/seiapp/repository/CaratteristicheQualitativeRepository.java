package com.project.seiapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.project.seiapp.entità.CaratteristicheQualitative;

//@RepositoryRestResource(collectionResourceRel="analisi",path = "analisi")
public interface CaratteristicheQualitativeRepository extends JpaRepository<CaratteristicheQualitative, String> {


}