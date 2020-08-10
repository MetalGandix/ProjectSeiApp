package com.project.seiapp.entità;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name= "AssociazioneIntervento")
public class AssociazioneIntervento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @ManyToOne(cascade = CascadeType.ALL)
    private CodiceIntervento intervento;

    @ManyToOne(cascade = CascadeType.ALL)
    private CaratteristicheQualitative caratteristicaAssociazioneIntervento;

    @ManyToOne(cascade = CascadeType.ALL)
    private Struttura strutturaAssociazione;

    @Column
    private int modicitaDiCosto;
    private int efficacia;
    private int supIntonacate;
    private int supVista;
    private int reversibilita;
    private int semplicitaDiCantiere;
    private int esiguitaDiIngombro;
    private String variante;
    private double prezzo;
    private String unitaMisura;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public CodiceIntervento getIntervento() {
        return intervento;
    }

    public void setIntervento(CodiceIntervento intervento) {
        this.intervento = intervento;
    }

    public CaratteristicheQualitative getCaratteristicaAssociazioneIntervento() {
        return caratteristicaAssociazioneIntervento;
    }

    public void setCaratteristicaAssociazioneIntervento(
            CaratteristicheQualitative caratteristicaAssociazioneIntervento) {
        this.caratteristicaAssociazioneIntervento = caratteristicaAssociazioneIntervento;
    }

    public Struttura getStrutturaAssociazione() {
        return strutturaAssociazione;
    }

    public void setStrutturaAssociazione(Struttura strutturaAssociazione) {
        this.strutturaAssociazione = strutturaAssociazione;
    }

    public int getModicitaDiCosto() {
        return modicitaDiCosto;
    }

    public void setModicitaDiCosto(int modicitaDiCosto) {
        this.modicitaDiCosto = modicitaDiCosto;
    }

    public int getEfficacia() {
        return efficacia;
    }

    public void setEfficacia(int efficacia) {
        this.efficacia = efficacia;
    }

    public int getSupIntonacate() {
        return supIntonacate;
    }

    public void setSupIntonacate(int supIntonacate) {
        this.supIntonacate = supIntonacate;
    }

    public int getSupVista() {
        return supVista;
    }

    public void setSupVista(int supVista) {
        this.supVista = supVista;
    }

    public int getReversibilita() {
        return reversibilita;
    }

    public void setReversibilita(int reversibilita) {
        this.reversibilita = reversibilita;
    }

    public int getSemplicitaDiCantiere() {
        return semplicitaDiCantiere;
    }

    public void setSemplicitaDiCantiere(int semplicitaDiCantiere) {
        this.semplicitaDiCantiere = semplicitaDiCantiere;
    }

    public int getEsiguitaDiIngombro() {
        return esiguitaDiIngombro;
    }

    public void setEsiguitaDiIngombro(int esiguitaDiIngombro) {
        this.esiguitaDiIngombro = esiguitaDiIngombro;
    }

    public String getVariante() {
        return variante;
    }

    public void setVariante(String variante) {
        this.variante = variante;
    }

    public double getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(double prezzo) {
        this.prezzo = prezzo;
    }

    public String getUnitaMisura() {
        return unitaMisura;
    }

    public void setUnitaMisura(String unitaMisura) {
        this.unitaMisura = unitaMisura;
    }
}