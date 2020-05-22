package com.project.seiapp.entità;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SecondaryTable;
import javax.persistence.SecondaryTables;
import javax.persistence.Table;

@Entity
@Table(name = "strutturaVerticale")
@SecondaryTables({
    @SecondaryTable (name = "struttureDiElevazioniOrizzontali"), 
    @SecondaryTable (name = "struttureDiElevazioniInclinate"),
    @SecondaryTable (name = "struttureDiElevazioneSpaziali"),
    @SecondaryTable (name = "infissiEsterniVerticali"),
    @SecondaryTable (name = "elementiNonStrutturali")
})
public class StrutturaVerticale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String strutturaVerticale;

    public String getStrutturaVerticale() {
        return strutturaVerticale;
    }

    public void setStrutturaVerticale(String strutturaVerticale) {
        this.strutturaVerticale = strutturaVerticale;
    }

    @Column(table = "struttureDiElevazioniOrizzontali")
    public String struttureDiElevazioniOrizzontali;

    public String getStruttureDiElevazioniOrizzontali() {
        return struttureDiElevazioniOrizzontali;
    }

    public void setStruttureDiElevazioniOrizzontali(String struttureDiElevazioniOrizzontali) {
        this.struttureDiElevazioniOrizzontali = struttureDiElevazioniOrizzontali;
    }

    @Column(table = "struttureDiElevazioniInclinate")
    public String struttureDiElevazioniInclinate;

    public String getStruttureDiElevazioniInclinate() {
        return struttureDiElevazioniInclinate;
    }

    public void setStruttureDiElevazioniInclinate(String struttureDiElevazioniInclinate) {
        this.struttureDiElevazioniInclinate = struttureDiElevazioniInclinate;
    }

    @Column(table = "struttureDiElevazioneSpaziali")
    public String struttureDiElevazioneSpaziali;

    public String getStruttureDiElevazioneSpaziali() {
        return struttureDiElevazioneSpaziali;
    }

    public void setStruttureDiElevazioneSpaziali(String struttureDiElevazioneSpaziali) {
        this.struttureDiElevazioneSpaziali = struttureDiElevazioneSpaziali;
    }

    @Column(table = "infissiEsterniVerticali")
    public String infissiEsterniVerticali;

    public String getInfissiEsterniVerticali() {
        return infissiEsterniVerticali;
    }

    public void setInfissiEsterniVerticali(String infissiEsterniVerticali) {
        this.infissiEsterniVerticali = infissiEsterniVerticali;
    }

    @Column(table = "elementiNonStrutturali")
    public String elementiNonStrutturali;

    public String getElementiNonStrutturali() {
        return elementiNonStrutturali;
    }

    public void setElementiNonStrutturali(String elementiNonStrutturali) {
        this.elementiNonStrutturali = elementiNonStrutturali;
    }


}