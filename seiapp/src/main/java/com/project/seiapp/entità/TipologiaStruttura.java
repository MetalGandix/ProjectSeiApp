package com.project.seiapp.entità;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tipologiaStruttura")
public class TipologiaStruttura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String TipologiaStruttura;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTipologiaStrutture() {
        return TipologiaStruttura;
    }

    public void setTipologiaStrutture(String tipologiaStrutture) {
        TipologiaStruttura = tipologiaStrutture;
    }

  
}