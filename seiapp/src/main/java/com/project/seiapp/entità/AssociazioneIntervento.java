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
    private int modicitàDiCosto;
    private int efficacia;
    private int supIntonacate;
    private int supVista;
    private int reversibilità;
    private int semplicitàDiCantiere;
    private int esiguitàDiIngombro;


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

    public int getModicitàDiCosto() {
        return modicitàDiCosto;
    }

    public void setModicitàDiCosto(int modicitàDiCosto) {
        this.modicitàDiCosto = modicitàDiCosto;
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

    public int getReversibilità() {
        return reversibilità;
    }

    public void setReversibilità(int reversibilità) {
        this.reversibilità = reversibilità;
    }

    public int getSemplicitàDiCantiere() {
        return semplicitàDiCantiere;
    }

    public void setSemplicitàDiCantiere(int semplicitàDiCantiere) {
        this.semplicitàDiCantiere = semplicitàDiCantiere;
    }

    public int getEsiguitàDiIngombro() {
        return esiguitàDiIngombro;
    }

    public void setEsiguitàDiIngombro(int esiguitàDiIngombro) {
        this.esiguitàDiIngombro = esiguitàDiIngombro;
    }
}