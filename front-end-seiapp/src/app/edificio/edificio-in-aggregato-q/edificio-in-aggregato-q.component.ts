import { Component, OnInit } from '@angular/core';
import { QualitàEdificiService } from 'src/app/classi-servizi/service/qualità-edifici.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EdificioInAggregato } from 'src/app/classi-servizi/classes/edificio-in-aggregato';
import { Quality } from 'src/app/classi-servizi/classes/quality';

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
  value: number[] = [];

  edificioFiltro: EdificioInAggregato[];
  quality: Quality[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private qualità: QualitàEdificiService
  ) { }

  ngOnInit() {
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
      this.cleanQualityArray();
    });
    this.qualità.getQEdificio().subscribe(data =>{
      this.edificioSelezionato1 = data;
    })
  }

  /*onChange(value: Quality) {
    //Creo un array di tipo EdificioInAggregato[]
    const arr: EdificioInAggregato[] = []
    //Per ogni elemento controllo se è un edificio in aggregato o singolo
    for (const edificio of this.edificioInAggregato[value.tQuality.tipoStruttura]) {
      //
      if (edificio.quality.id === value.id) {
        arr.push(edificio)
      }
    }
    this.edificioFiltro = arr;
  }
*/

  cleanQualityArray(): void{
    //Crea un array di numeri
    const qualityIds: number[] = [];
    //Metto nell'array ogni ID dell'elemento scelto
    this.quality.forEach(el => {
      qualityIds.push(el.id)
    });
    //Questo Set filtra GLI ID DUPLICATI
    const unique = new Set(qualityIds);
    //Creo un altro array di tipo Quality
    const qualityTemp : Quality[] = [];
    unique.forEach( u => {
    //Con questo push, associo ad ongi id il resto della stringa
      qualityTemp.push(this.quality.find( qE => qE.id == u))
    });
    //Rimetto tutto qualityTempo all'interno di quality
    this.quality = qualityTemp
  }

  vediNumeroSelezionato(id: EdificioInAggregato){
    console.log(id.punteggio.valueOf)
  }

  outputSelection(){
    var select1 = (<HTMLInputElement>document.getElementById("id1")).value;
    var select2 = (<HTMLInputElement>document.getElementById("id2")).value;
    var valore1 = parseInt(select1)
    var valore2 = parseInt(select2)
    const numeriSelezionati: number[] = []
    const totale = (accumulator, currentValue) => accumulator + currentValue;
    if(valore1.valueOf() == 0){
      this.value[0] = 3
      numeriSelezionati.push(this.value[0])
      console.log(numeriSelezionati)
    } else if(valore1.valueOf() == 1){
      this.value[0] = 2
      numeriSelezionati.push(this.value[1])
      console.log(numeriSelezionati)
    } else if(valore1.valueOf() == 2){
      this.value[0] = 0
      numeriSelezionati.push(this.value[2])
      console.log(numeriSelezionati)
    }
    if(valore2.valueOf() == 3){
      this.value[1] = 15
      numeriSelezionati.push(this.value[1])
      console.log(numeriSelezionati)
    } else if(valore2.valueOf() == 4){
      this.value[1] = 8
      numeriSelezionati.push(this.value[1])
      console.log(numeriSelezionati)
    } else if(valore2.valueOf() == 5){
      this.value[1] = 0
      numeriSelezionati.push(this.value[1])
      console.log(numeriSelezionati)
    }
    console.log(numeriSelezionati.reduce(totale));

    
  }



  
}