package com.project.seiapp.entità;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.project.seiapp.entità.edificientity.Edificio;



@Entity
@Table(name = "CaratterisitcheQualitative")
public class CaratteristicheQualitative {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String CaratteristicheQualitative;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Meccanismi> meccanismiAssociati;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable
    private List<Edificio> caratteristiche_punteggi;


    public String getCaratteristicheQualitative() {
        return CaratteristicheQualitative;
    }

    public void setCaratteristicheQualitative(String caratteristicheQualitative) {
        this.CaratteristicheQualitative = caratteristicheQualitative;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Meccanismi> getMeccanismiAssociati() {
        return meccanismiAssociati;
    }

    public void setMeccanismiAssociati(List<Meccanismi> meccanismiAssociati) {
        this.meccanismiAssociati = meccanismiAssociati;
    }

	public List<Edificio> getCaratteristiche_punteggi() {
		return caratteristiche_punteggi;
	}

	public void setCaratteristiche_punteggi(List<Edificio> caratteristiche_punteggi) {
		this.caratteristiche_punteggi = caratteristiche_punteggi;
	}
    }



