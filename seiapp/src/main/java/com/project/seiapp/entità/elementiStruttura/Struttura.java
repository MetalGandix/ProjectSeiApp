package com.project.seiapp.entità.elementiStruttura;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.project.seiapp.entità.CaratteristicheQualitative;
import com.project.seiapp.entità.TypeStruttura;

@Entity
@Table(name = "struttura")
public class Struttura {
    //Shift alt o
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String struttura;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<CaratteristicheQualitative> carQuality;

    @ManyToOne(cascade = CascadeType.ALL)
    private TypeStruttura tipoStruttura;

    public String getStruttura() {
        return struttura;
    }

    public void setStruttura(String struttura) {
        this.struttura = struttura;
    }

    public List<CaratteristicheQualitative> getCarQuality() {
        return carQuality;
    }

    public void setCarQuality(List<CaratteristicheQualitative> carQuality) {
        this.carQuality = carQuality;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public TypeStruttura getTipoStruttura() {
        return tipoStruttura;
    }

    public void setTipoStruttura(TypeStruttura tipoStruttura) {
        this.tipoStruttura = tipoStruttura;
    }
}