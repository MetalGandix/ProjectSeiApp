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
    var select3 = (<HTMLInputElement>document.getElementById("id3")).value;
    var select4 = (<HTMLInputElement>document.getElementById("id4")).value;
    var select5 = (<HTMLInputElement>document.getElementById("id5")).value;
    var select6 = (<HTMLInputElement>document.getElementById("id6")).value;
    var select7 = (<HTMLInputElement>document.getElementById("id7")).value;
    var select8 = (<HTMLInputElement>document.getElementById("id8")).value;
    var select9 = (<HTMLInputElement>document.getElementById("id9")).value;
    var select10 = (<HTMLInputElement>document.getElementById("id10")).value;
    var select11 = (<HTMLInputElement>document.getElementById("id11")).value;
    var select12 = (<HTMLInputElement>document.getElementById("id12")).value;
    var select13 = (<HTMLInputElement>document.getElementById("id13")).value;
    var select14 = (<HTMLInputElement>document.getElementById("id14")).value;
    var select15 = (<HTMLInputElement>document.getElementById("id15")).value;
    var select16 = (<HTMLInputElement>document.getElementById("id16")).value;
    var select17 = (<HTMLInputElement>document.getElementById("id17")).value;
    var select18 = (<HTMLInputElement>document.getElementById("id18")).value;
    var select19 = (<HTMLInputElement>document.getElementById("id19")).value;
    var select20 = (<HTMLInputElement>document.getElementById("id20")).value;
    var valore1 = parseInt(select1)
    var valore2 = parseInt(select2)
    var valore3 = parseInt(select3)
    var valore4 = parseInt(select4)
    var valore5 = parseInt(select5)
    var valore6 = parseInt(select6)
    var valore7 = parseInt(select7)
    var valore8 = parseInt(select8)
    var valore9 = parseInt(select9)
    var valore10 = parseInt(select10)
    var valore11 = parseInt(select11)
    var valore12 = parseInt(select12)
    var valore13 = parseInt(select13)
    var valore14 = parseInt(select14)
    var valore15 = parseInt(select15)
    var valore16 = parseInt(select16)
    var valore17 = parseInt(select17)
    var valore18 = parseInt(select18)










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