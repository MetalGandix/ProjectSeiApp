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
import com.project.seiapp.entità.elementiStruttura.StruttureDiElevazioneInclinate;
import com.project.seiapp.entità.elementiStruttura.StruttureDiElevazioneOrizzontali;

@Entity
@Table(name = "CaratterisitcheQualitative")
public class CaratteristicheQualitative {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(cascade = CascadeType.ALL)
    private StrutturaVerticale struttura;
    @ManyToOne(cascade = CascadeType.ALL)
    private StruttureDiElevazioneOrizzontali strutturaOrizzontale;
    @ManyToOne(cascade = CascadeType.ALL)
    private StruttureDiElevazioneInclinate srtutturaInclinata;

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


    //Getter e setter per i join

    public StrutturaVerticale getStruttura() {
        return struttura;
    }

    public void setStruttura(StrutturaVerticale struttura) {
        this.struttura = struttura;
    }

    public StruttureDiElevazioneOrizzontali getStrutturaOrizzontale() {
        return strutturaOrizzontale;
    }

    public void setStrutturaOrizzontale(StruttureDiElevazioneOrizzontali strutturaOrizzontale) {
        this.strutturaOrizzontale = strutturaOrizzontale;
    }

    public StruttureDiElevazioneInclinate getSrtutturaInclinata() {
        return srtutturaInclinata;
    }

    public void setSrtutturaInclinata(StruttureDiElevazioneInclinate srtutturaInclinata) {
        this.srtutturaInclinata = srtutturaInclinata;
    }

    

    }



