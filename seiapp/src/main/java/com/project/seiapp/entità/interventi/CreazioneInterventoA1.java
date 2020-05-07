package com.project.seiapp.entità.interventi;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "InterventoA1")
public class CreazioneInterventoA1 {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column
    private String titolo;
    @Column
    private String corpo;
    @Column
    private String immagine;

    public CreazioneInterventoA1(final long Id){
        this.id = id;
    }

    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public String getCorpo() {
        return corpo;
    }

    public void setCorpo(String corpo) {
        this.corpo = corpo;
    }

    public String getImmagine() {
        return immagine;
    }

    public void setImmagine(String immagine) {
        this.immagine = immagine;
    }
    
    @Override
	public String toString(){
		return "" + id + "" + titolo + "" + corpo + "" + immagine + "";
	}

    public long getId() {
        return id;
    }

    public void setId(final long id) {
        this.id = id;
    }
    
}