package com.project.seiapp.entità.edificiOffida;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "edificiIsolatiOffida")
public class edificiIsolatiOffida {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String codice_edificio;
    private double totale_superfici_esterne_verticali;
    private double area_di_base_copertura;
    private String rapporto_lato_maggiore_lato_minore;

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

    public void setTotale_superfici_esterne_verticali(float totale_superfici_esterne_verticali) {
        this.totale_superfici_esterne_verticali = totale_superfici_esterne_verticali;
    }

    public double getArea_di_base_copertura() {
        return area_di_base_copertura;
    }

    public void setArea_di_base_copertura(float area_di_base_copertura) {
        this.area_di_base_copertura = area_di_base_copertura;
    }

    public String getRapporto_lato_maggiore_lato_minore() {
        return rapporto_lato_maggiore_lato_minore;
    }

    public void setRapporto_lato_maggiore_lato_minore(String rapporto_lato_maggiore_lato_minore) {
        this.rapporto_lato_maggiore_lato_minore = rapporto_lato_maggiore_lato_minore;
    }

    

    
 
    
}