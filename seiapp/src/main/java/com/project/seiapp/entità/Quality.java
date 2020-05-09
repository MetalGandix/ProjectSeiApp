package com.project.seiapp.entità;

import java.util.List;

import com.project.seiapp.entità.edificientity.Edificio;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;



import javax.persistence.*;

@Entity
@Table(name = "Quality")
public class Quality {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id; 

    @Column
    private String Quality;

    public String getQuality() {
        return Quality;
    }

    public void setQuality(String quality) {
        Quality = quality;
    }

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable 
    private List<Edificio> edificio;

    @ManyToOne(cascade = CascadeType.ALL)
    private TipeQuality tQuality;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public TipeQuality gettQuality() {
        return tQuality;
    }

    public void settQuality(TipeQuality tQuality) {
        this.tQuality = tQuality;
    }

    public void setEdificio(List<Edificio> edificio) {
        this.edificio = edificio;
    }

}