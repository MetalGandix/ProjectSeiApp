package com.project.seiapp.entità;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name= "CaratteristicheStruttura")
public class CaratteristicheStruttura {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(cascade = CascadeType.ALL)
    private CaratteristicheQualitative caratteristica;

    @ManyToOne(cascade = CascadeType.ALL)
    private Struttura struttura;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public CaratteristicheQualitative getCaratteristica() {
        return caratteristica;
    }

    public void setCaratteristica(CaratteristicheQualitative caratteristica) {
        this.caratteristica = caratteristica;
    }

    public Struttura getStruttura() {
        return struttura;
    }

    public void setStruttura(Struttura struttura) {
        this.struttura = struttura;
    }

}