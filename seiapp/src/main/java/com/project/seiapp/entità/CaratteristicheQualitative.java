package com.project.seiapp.entità;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "CaratterisitcheQualitative")
public class CaratteristicheQualitative {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String CaratteristicheQualitative;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Meccanismi> meccanismiAssociati;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable 
    private List<ValutazionePunteggio> valutazionePunteggio;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<TipologiaStruttura> emsCarQual;


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

    public List<Meccanismi> getMeccanismiAssociati() {
        return meccanismiAssociati;
    }

    public void setMeccanismiAssociati(List<Meccanismi> meccanismiAssociati) {
        this.meccanismiAssociati = meccanismiAssociati;
    }

    public List<ValutazionePunteggio> getValutazionePunteggio() {
        return valutazionePunteggio;
    }

    public void setValutazionePunteggio(List<ValutazionePunteggio> valutazionePunteggio) {
        this.valutazionePunteggio = valutazionePunteggio;
    }

    public List<TipologiaStruttura> getEmsCarQual() {
        return emsCarQual;
    }

    public void setEmsCarQual(List<TipologiaStruttura> emsCarQual) {
        this.emsCarQual = emsCarQual;
    }
    }



