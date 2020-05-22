package com.project.seiapp.entità.elementiStruttura;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "strutturaInclinata")

public class StruttureDiElevazioneInclinate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String strutturaInclinata;

    public String getStrutturaInclinata() {
        return strutturaInclinata;
    }

    public void setStrutturaInclinata(String strutturaInclinata) {
        this.strutturaInclinata = strutturaInclinata;
    }

    

}

