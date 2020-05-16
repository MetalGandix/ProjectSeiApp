import { Component, OnInit } from '@angular/core';
import { QualitàEdificiService } from 'src/app/classi-servizi/service/qualità-edifici.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EdificioInAggregato } from 'src/app/classi-servizi/classes/edificio-in-aggregato';
import { Quality } from 'src/app/classi-servizi/classes/quality';
import { EdificioInaggregatoComponent } from '../edificio-inaggregato/edificio-inaggregato.component';


@Component({
  selector: 'app-edificio-in-aggregato-q',
  templateUrl: './edificio-in-aggregato-q.component.html',
  styleUrls: ['./edificio-in-aggregato-q.component.css']
})
export class EdificioInAggregatoQComponent implements OnInit {

  edificioInAggregato: { [key: string]: EdificioInAggregato[] } = {}
  edificioSelezionato1: EdificioInAggregato[];
  edificioSelezionato2: EdificioInAggregato;
  edificioSelezionato3: EdificioInAggregato;
  edificioSelezionato4: EdificioInAggregato;
  selezione: number[] = [];
  value: number[] = [];
  muratura: EdificioInaggregatoComponent;
  edificioFiltro: EdificioInAggregato[];
  quality: Quality[] = [];
  totalePunteggio: Number
  varEmp: Number
  vulnerability: Number
  msg1: boolean = false;
  edificioByQuality: { [key: number]: EdificioInAggregato[] } = {}


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private qualità: QualitàEdificiService,
  ) {
  }


  ngOnInit() {
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
      let qualityId = null
      this.edificioInAggregato['Edificio Singolo'].forEach(element => {
        this.quality.push(element.quality)
        if (qualityId !== element.quality.id) {
          this.selezione.push(element.id)
        }
        if(!this.edificioByQuality[element.quality.id]){
          this.edificioByQuality[element.quality.id] = []
        }
        this.edificioByQuality[element.quality.id].push(element)
        qualityId = element.quality.id
      });
      qualityId = null
      this.edificioInAggregato['Edificio In Aggregato'].forEach(element => {
        this.quality.push(element.quality);
        if (qualityId !== element.quality.id) {
          this.selezione.push(element.id)
        }
        if(!this.edificioByQuality[element.quality.id]){
          this.edificioByQuality[element.quality.id] = []
        }
        this.edificioByQuality[element.quality.id].push(element)
        qualityId = element.quality.id
      })
    });
    this.qualità.getQEdificio().subscribe(data => {
      this.edificioSelezionato1 = data;
    })
  }

  outputSelection() {
    let totalePunteggio = 0
    this.selezione.forEach((function (value, index, array) {
      for (const key in this.edificioInAggregato) {
        const list = this.edificioInAggregato[key]
        list.forEach(function (edificio, edificioIndex, edificioArray) {
          if (edificio.id === value) {
            totalePunteggio = totalePunteggio + parseInt(edificio.punteggio)
          }
        })
      }
    }).bind(this))
    this.totalePunteggio = totalePunteggio
    this.vediMuratura()
    this.vulnerability
    this.msg1 = true;
  }

  vediMuratura() {
    console.log(this.varEmp)
    if (this.varEmp == 1) {
      this.vulnerability = 6;
    }
    if (this.varEmp == 3) {
      if (this.totalePunteggio < 50) {
        this.vulnerability = 5;
      } else if (this.totalePunteggio >= 50) {
        this.vulnerability = 6;
      }
    }
    if (this.varEmp == 5) {
      if (this.totalePunteggio < 30) {
        this.vulnerability = 4;
      } else if (this.totalePunteggio >= 60) {
        this.vulnerability = 6;
      } else if (this.totalePunteggio >= 30 && this.totalePunteggio <= 60) {
        this.vulnerability = 5;
      }
    } if (this.varEmp == 6) {
      if (this.totalePunteggio < 30) {
        this.vulnerability = 3;
      } else if (this.totalePunteggio >= 60) {
        this.vulnerability = 5;
      } else if (this.totalePunteggio >= 30 && this.totalePunteggio <= 60) {
        this.vulnerability = 4;
      }
    } if (this.varEmp == 7) {
      if (this.totalePunteggio < 30) {
        this.vulnerability = 2;
      } else if (this.totalePunteggio >= 60) {
        this.vulnerability = 4;
      } else if (this.totalePunteggio >= 30 && this.totalePunteggio <= 60) {
        this.vulnerability = 3;
      }
    }
  }

  trasferisciClassVul() {
    this.router.navigate(['/zona-sismica'], {
      state: { vulClass: this.vulnerability }
    })
  }
}