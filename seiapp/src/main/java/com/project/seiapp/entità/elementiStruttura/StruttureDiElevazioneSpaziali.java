package com.project.seiapp.entità.elementiStruttura;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "strutturaSpaziale")

public class StruttureDiElevazioneSpaziali {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String strutturaSpaziale;

    public String getStrutturaSpaziale() {
        return strutturaSpaziale;
    }

    public void setStrutturaSpaziale(String strutturaSpaziale) {
        this.strutturaSpaziale = strutturaSpaziale;
    }

    
}