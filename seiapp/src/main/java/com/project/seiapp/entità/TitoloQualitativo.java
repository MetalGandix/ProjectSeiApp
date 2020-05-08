package com.project.seiapp.entità;


import javax.persistence.*;

@Entity
@Table(name = "titoloQualitativo")
public class TitoloQualitativo {
    
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String titolo;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    
    
    
}