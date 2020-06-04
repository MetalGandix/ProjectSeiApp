package com.project.seiapp.entità.edificiOffida;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "edificiInAggregatoOffida")
public class edificiInAggregatoOffida {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String codice_edificio;
    private double totale_superfici_esterne_verticali;
    private double totale_superfici_di_contatto;
    private double area_di_base_copertura;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCodice_edificio() {
        return codice_edificio;
    }

    public void setCodice_edificio(String codice_edificio) {
        this.codice_edificio = codice_edificio;
    }

    public double getTotale_superfici_esterne_verticali() {
        return totale_superfici_esterne_verticali;
    }

    public void setTotale_superfici_esterne_verticali(double totale_superfici_esterne_verticali) {
        this.totale_superfici_esterne_verticali = totale_superfici_esterne_verticali;
    }

    public double getTotale_superfici_di_contatto() {
        return totale_superfici_di_contatto;
    }

    public void setTotale_superfici_di_contatto(double totale_superfici_di_contatto) {
        this.totale_superfici_di_contatto = totale_superfici_di_contatto;
    }

    public double getArea_di_base_copertura() {
        return area_di_base_copertura;
    }

    public void setArea_di_base_copertura(double area_di_base_copertura) {
        this.area_di_base_copertura = area_di_base_copertura;
    }
    
}