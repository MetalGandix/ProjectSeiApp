package com.project.seiapp.repository;

import com.project.seiapp.entità.elementiStruttura.StrutturaVerticale;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//@RepositoryRestResource(collectionResourceRel="analisi",path = "analisi")
public interface StrutturaVerticaleRepository extends JpaRepository<StrutturaVerticale, String> {


}