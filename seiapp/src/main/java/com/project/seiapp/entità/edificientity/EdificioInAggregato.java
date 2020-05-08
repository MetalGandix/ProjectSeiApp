package com.project.seiapp.entità.edificientity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "EdificioInAggregato")
public class EdificioInAggregato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id; 
    
    @Column
    private String Valutazione;
    private String Descrizione;
    private String Punteggio;

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



    
}