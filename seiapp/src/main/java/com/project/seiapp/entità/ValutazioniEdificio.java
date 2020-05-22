package com.project.seiapp.entità;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "valutazioni")
public class ValutazioniEdificio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String vulnerabilityGrade;
    @Column
    private int punteggio;
    @Column
    private String pam;
    @Column
    private int zonaSismica;
    @Column
    private String classeRischio;

    public String getVulnerabilityGrade() {
        return vulnerabilityGrade;
    }

    public void setVulnerabilityGrade(String vulnerabilityGrade) {
        this.vulnerabilityGrade = vulnerabilityGrade;
    }

    public int getPunteggio() {
        return punteggio;
    }

    public void setPunteggio(int punteggio) {
        this.punteggio = punteggio;
    }

    public String getPam() {
        return pam;
    }

    public void setPam(String pam) {
        this.pam = pam;
    }

    public int getZonaSismica() {
        return zonaSismica;
    }

    public void setZonaSismica(int zonaSismica) {
        this.zonaSismica = zonaSismica;
    }

    public String getClasseRischio() {
        return classeRischio;
    }

    public void setClasseRischio(String classeRischio) {
        this.classeRischio = classeRischio;
    }
}