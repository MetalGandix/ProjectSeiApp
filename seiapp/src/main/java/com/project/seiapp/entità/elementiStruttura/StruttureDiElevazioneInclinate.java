package com.project.seiapp.entità.elementiStruttura;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.project.seiapp.entità.CaratteristicheQualitative;

@Entity
@Table(name = "strutturaInclinata")

public class StruttureDiElevazioneInclinate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String strutturaInclinata;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable 
    private List<CaratteristicheQualitative> carQuality;


    public String getStrutturaInclinata() {
        return strutturaInclinata;
    }

    public void setStrutturaInclinata(String strutturaInclinata) {
        this.strutturaInclinata = strutturaInclinata;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<CaratteristicheQualitative> getCarQuality() {
        return carQuality;
    }

    public void setCarQuality(List<CaratteristicheQualitative> carQuality) {
        this.carQuality = carQuality;
    }

    

}

