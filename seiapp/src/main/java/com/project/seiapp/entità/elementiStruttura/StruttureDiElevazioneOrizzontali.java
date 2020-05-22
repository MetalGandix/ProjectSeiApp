package com.project.seiapp.entità.elementiStruttura;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "strutturaOrizzontale")

public class StruttureDiElevazioneOrizzontali {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String strutturaOrizzontale;

    public String getStrutturaOrizzontale() {
        return strutturaOrizzontale;
    }

    public void setStrutturaOrizzontale(String strutturaOrizzontale) {
        this.strutturaOrizzontale = strutturaOrizzontale;
    }


    
}



    
