package com.project.seiapp.entità.elementiStruttura;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "elementiNonStrutturali")

public class ElementiNonStrutturali {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String infissiEsterniVerticali;

    public String getInfissiEsterniVerticali() {
        return infissiEsterniVerticali;
    }

    public void setInfissiEsterniVerticali(String infissiEsterniVerticali) {
        this.infissiEsterniVerticali = infissiEsterniVerticali;
    }

    

}