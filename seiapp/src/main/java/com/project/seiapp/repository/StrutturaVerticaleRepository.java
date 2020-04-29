package com.project.seiapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.project.seiapp.entità.StrutturaVerticale;

//@RepositoryRestResource(collectionResourceRel="analisi",path = "analisi")
public interface StrutturaVerticaleRepository extends JpaRepository<StrutturaVerticale, String> {


}