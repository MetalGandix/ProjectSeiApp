package com.project.seiapp.entità.edificientity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.project.seiapp.entità.Quality;

@Entity
@Table(name = "edificio")
public class Edificio{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id; 
    
    @Column
    private String Valutazione;
    private String Descrizione;
    private String Punteggio;
    private int tipologia;

    @ManyToOne(cascade = CascadeType.ALL)
    private Quality quality;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getValutazione() {
        return Valutazione;
    }

    public void setValutazione(String valutazione) {
        Valutazione = valutazione;
    }

    public String getDescrizione() {
        return Descrizione;
    }

    public void setDescrizione(String descrizione) {
        Descrizione = descrizione;
    }

    public String getPunteggio() {
        return Punteggio;
    }

    public void setPunteggio(String punteggio) {
        Punteggio = punteggio;
    }

    public int getTipologia() {
        return tipologia;
    }

    public void setTipologia(int tipologia) {
        this.tipologia = tipologia;
    }

    public Quality getQuality() {
        return quality;
    }

    public void setQuality(Quality quality) {
        this.quality = quality;
    }

    
}