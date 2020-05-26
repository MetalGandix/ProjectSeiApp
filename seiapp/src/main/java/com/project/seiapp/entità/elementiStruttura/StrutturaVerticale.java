package com.project.seiapp.entità.elementiStruttura;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "strutturaVerticale")

public class StrutturaVerticale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @Column
    private String strutturaVerticale;

    public String getStrutturaVerticale() {
        return strutturaVerticale;
    }

    public void setStrutturaVerticale(String strutturaVerticale) {
        this.strutturaVerticale = strutturaVerticale;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


}