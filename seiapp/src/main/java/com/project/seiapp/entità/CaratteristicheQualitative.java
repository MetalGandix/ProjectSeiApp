package com.project.seiapp.entità;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.project.seiapp.entità.elementiStruttura.StrutturaVerticale;

@Entity
@Table(name = "CaratterisitcheQualitative")
public class CaratteristicheQualitative {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(cascade = CascadeType.ALL)
    private StrutturaVerticale struttura;

    @Column
    private String CaratteristicheQualitative;

    public String getCaratteristicheQualitative() {
        return CaratteristicheQualitative;
    }

    public void setCaratteristicheQualitative(String caratteristicheQualitative) {
        this.CaratteristicheQualitative = caratteristicheQualitative;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public StrutturaVerticale getStruttura() {
        return struttura;
    }

    public void setStruttura(StrutturaVerticale struttura) {
        this.struttura = struttura;
    }


    }



