package com.project.seiapp.entità;

import javax.persistence.CascadeType;
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

}