package com.project.seiapp.entità;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "meccanismi")
public class Meccanismi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private int codice;
    private String descrizione;
    private String modi_di_danno_alle_strutture_verticali;
    private String modi_di_danno_alle_strutture_orizzontali;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getCodice() {
        return codice;
    }

    public void setCodice(int codice) {
        this.codice = codice;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public String getModi_di_danno_alle_strutture_verticali() {
        return modi_di_danno_alle_strutture_verticali;
    }

    public void setModi_di_danno_alle_strutture_verticali(String modi_di_danno_alle_strutture_verticali) {
        this.modi_di_danno_alle_strutture_verticali = modi_di_danno_alle_strutture_verticali;
    }

    public String getModi_di_danno_alle_strutture_orizzontali() {
        return modi_di_danno_alle_strutture_orizzontali;
    }

    public void setModi_di_danno_alle_strutture_orizzontali(String modi_di_danno_alle_strutture_orizzontali) {
        this.modi_di_danno_alle_strutture_orizzontali = modi_di_danno_alle_strutture_orizzontali;
    }



    
}