package com.project.seiapp.entità;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TipologiaStruttura")
public class TipologiaStruttura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String TipologiaStrutture;

    public TipologiaStruttura(String tipologiaStrutture) {
        this.TipologiaStrutture = tipologiaStrutture;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTipologiaStrutture() {
        return TipologiaStrutture;
    }

    public void setTipologiaStrutture(String tipologiaStrutture) {
        TipologiaStrutture = tipologiaStrutture;
    }

  
}