package com.project.seiapp.entità;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "joinEdificioSingolo")
public class JoinEdificioSingolo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String titolo;
    @Column
    private String Valutazione;
    @Column
    private String Descrizione;
    @Column 
    private String Punteggio;

    @JoinTable(name= "EdificioSingolo", joinColumns = { @JoinColumn(name = "titolo") })
    
}