package com.project.seiapp.entità;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "TypeQuality")
public class TipeQuality {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id; 

    @Column
    private String tipoStruttura;

    public String getTipoStruttura() {
        return tipoStruttura;
    }

    public void setTipoStruttura(String tipoStruttura) {
        this.tipoStruttura = tipoStruttura;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

}