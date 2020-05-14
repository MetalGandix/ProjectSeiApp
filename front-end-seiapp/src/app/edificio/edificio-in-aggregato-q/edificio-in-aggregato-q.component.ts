import { Component, OnInit } from '@angular/core';
import { QualitàEdificiService } from 'src/app/classi-servizi/service/qualità-edifici.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EdificioInAggregato } from 'src/app/classi-servizi/classes/edificio-in-aggregato';
import { Quality } from 'src/app/classi-servizi/classes/quality';
import { EdificioInaggregatoComponent } from '../edificio-inaggregato/edificio-inaggregato.component';
import { parseTemplate } from '@angular/compiler';


@Component({
  selector: 'app-edificio-in-aggregato-q',
  templateUrl: './edificio-in-aggregato-q.component.html',
  styleUrls: ['./edificio-in-aggregato-q.component.css']
})
export class EdificioInAggregatoQComponent implements OnInit {

  edificioInAggregato: { [key: string]: EdificioInAggregato[] } = {}
  edificioSelezionato1: EdificioInAggregato[];
  edificioSelezionato2: EdificioInAggregato;
  value: number;
  quality: Quality[] = [];
  totalePunteggio: number
  varEmp: Number
  x: number
  y: Number
  z: number

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private qualità: QualitàEdificiService,
  ) {
  }

  ngOnInit() {
    //varEmp serve per portare il numero dell'emp dall'altra classe a questa
    this.varEmp = window.history.state.varEmp;
    //Prendo il metodo dal servizio e lo metto dentro un dizionario edifici
    this.qualità.getQEdificio().subscribe(data => {
      //Creo un dizionario edifici (const edifici = new Object() è la sintassi più vecchia)
      const edifici = {}
      //faccio un for di data, per prendere il suo contenuto e metterlo dentro edificio
      for (const edificio of data) {
        //Creo una costante chiamata edificio, questa avrà l'attributo tipoStruttura al suo interno
        const { tipoStruttura } = edificio.quality.tQuality
        //Se nel dizionario edifici, non c'è una chiave (Dato che nei dizionari c'è sempre almeno una chiave e un valore)
        //La imposto io.
        if (!edifici[tipoStruttura]) {
          //Creo un array associato all'array di chiavi tipoStruttura dove andranno i valori
          edifici[tipoStruttura] = []
        }
        //Metto all'interno del secondo array edificio, che al suo interno aveva tutti i valori di data (const non può essere cambiato)
        edifici[tipoStruttura].push(edificio)
      }
      //Stampo il dizionario
      console.log(edifici)
      //L'array di oggetti edificioInAggregato prende i valori di edifici(quindi prende le sue chiavi e i suoi)
      this.edificioInAggregato = edifici
      //edificioInAggregato['KEY'].forEach(ELEMENTI)
      this.edificioInAggregato['Edificio Singolo'].forEach(element => {
        this.quality.push(element.quality)
      });
      this.edificioInAggregato['Edificio In Aggregato'].forEach(element => {
        this.quality.push(element.quality);
      })
    });
    this.qualità.getQEdificio().subscribe(data => {
      this.edificioSelezionato1 = data;
      console.log("Questo è il valore [0]: " + this.edificioSelezionato1[0].punteggio)
    })
  }

  totale(){
      var select1 = document.getElementsByName("edificio1");
      Number(select1).valueOf
      console.log("Questo è quello selezionato"  + select1)
      const numeriSelezionati: Number[] = []
      const totale = (accumulator, currentValue) => accumulator + currentValue;
      for(this.x=0; this.x<65; this.x++){
      this.y=this.edificioSelezionato1[this.x].punteggio
      numeriSelezionati.push(this.y)
      //console.log("Questo è l'array di valori: " + numeriSelezionati)
      this.totalePunteggio = numeriSelezionati.reduce(totale)
      //console.log("questo è il punteggio totale" + this.totalePunteggio)
    }
    
  }


  vediMuratura() {
  console.log("Il valore dell'emp è: " + this.varEmp)
    if (this.varEmp == 1) {
      alert("La classe di vulnerabilità è V6")
    }
    if (this.varEmp == 3) {
      if (this.totalePunteggio <= 50) {
        alert("La classe di vulnerabilità è V5")
      }
    }
  }
}