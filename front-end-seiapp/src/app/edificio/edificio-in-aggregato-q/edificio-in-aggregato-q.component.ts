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
  value: number[] = [];
  muratura: EdificioInaggregatoComponent;
  edificioFiltro: EdificioInAggregato[];
  quality: Quality[] = [];
  totalePunteggio: number
  varEmp: Number


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private qualità: QualitàEdificiService,
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {empVar};
    this.varEmp= state.empVar;
  }


  ngOnInit() {
    this.varEmp = window.history.state;
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
    this.qualità.getQEdificio().subscribe(data => {
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

  cleanQualityArray(): void {
    //Crea un array di numeri
    const qualityIds: number[] = [];
    //Metto nell'array ogni ID dell'elemento scelto
    this.quality.forEach(el => {
      qualityIds.push(el.id)
    });
    //Questo Set filtra GLI ID DUPLICATI
    const unique = new Set(qualityIds);
    //Creo un altro array di tipo Quality
    const qualityTemp: Quality[] = [];
    unique.forEach(u => {
      //Con questo push, associo ad ongi id il resto della stringa
      qualityTemp.push(this.quality.find(qE => qE.id == u))
    });
    //Rimetto tutto qualityTempo all'interno di quality
    this.quality = qualityTemp
  }

  outputSelection() {
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
    var valore19 = parseInt(select19)
    var valore20 = parseInt(select20)
    const numeriSelezionati: number[] = []
    const totale = (accumulator, currentValue) => accumulator + currentValue;
    if (valore1.valueOf() == 1) {
      this.value[0] = 3
      numeriSelezionati.push(this.value[0])
    } else if (valore1.valueOf() == 2) {
      this.value[0] = 2
      numeriSelezionati.push(this.value[0])
    } else if (valore1.valueOf() == 3) {
      this.value[0] = 0
      numeriSelezionati.push(this.value[0])
    }
    if (valore2.valueOf() == 4) {
      this.value[1] = 15
      numeriSelezionati.push(this.value[1])
    } else if (valore2.valueOf() == 5) {
      this.value[1] = 8
      numeriSelezionati.push(this.value[1])
    } else if (valore2.valueOf() == 6) {
      this.value[1] = 0
      numeriSelezionati.push(this.value[1])
    }
    if (valore3.valueOf() == 7) {
      this.value[2] = 4
      numeriSelezionati.push(this.value[2])

    } else if (valore3.valueOf() == 8) {
      this.value[2] = 2
      numeriSelezionati.push(this.value[2])
    } else if (valore3.valueOf() == 9) {
      this.value[2] = 0
      numeriSelezionati.push(this.value[2])
    }
    if (valore4.valueOf() == 10) {
      this.value[3] = 4
      numeriSelezionati.push(this.value[3])
    } else if (valore4.valueOf() == 11) {
      this.value[3] = 2
      numeriSelezionati.push(this.value[3])
    } else if (valore4.valueOf() == 12) {
      this.value[3] = 0
      numeriSelezionati.push(this.value[3])
    }
    if (valore5.valueOf() == 13) {
      this.value[4] = 8
      numeriSelezionati.push(this.value[4])
    } else if (valore5.valueOf() == 14) {
      this.value[4] = 4
      numeriSelezionati.push(this.value[4])
    } else if (valore5.valueOf() == 15) {
      this.value[4] = 0
      numeriSelezionati.push(this.value[4])
    }
    if (valore6.valueOf() == 16) {
      this.value[5] = 20
      numeriSelezionati.push(this.value[5])
    } else if (valore6.valueOf() == 17) {
      this.value[5] = 10
      numeriSelezionati.push(this.value[5])
    } else if (valore6.valueOf() == 18) {
      this.value[5] = 0
      numeriSelezionati.push(this.value[5])
    }
    if (valore7.valueOf() == 19) {
      this.value[6] = 4
      numeriSelezionati.push(this.value[6])
    } else if (valore7.valueOf() == 20) {
      this.value[6] = 2
      numeriSelezionati.push(this.value[6])
    } else if (valore7.valueOf() == 21) {
      this.value[6] = 0
      numeriSelezionati.push(this.value[6])
    }
    if (valore8.valueOf() == 22) {
      this.value[7] = 4
      numeriSelezionati.push(this.value[7])
    } else if (valore8.valueOf() == 23) {
      this.value[7] = 2
      numeriSelezionati.push(this.value[7])
    } else if (valore8.valueOf() == 24) {
      this.value[7] = 0
      numeriSelezionati.push(this.value[7])
    }
    if (valore9.valueOf() == 25) {
      this.value[8] = 4
      numeriSelezionati.push(this.value[8])
    } else if (valore9.valueOf() == 26) {
      this.value[8] = 2
      numeriSelezionati.push(this.value[8])
    } else if (valore9.valueOf() == 27) {
      this.value[8] = 0
      numeriSelezionati.push(this.value[8])
    }
    if (valore10.valueOf() == 28) {
      this.value[9] = 4
      numeriSelezionati.push(this.value[9])
    } else if (valore10.valueOf() == 29) {
      this.value[9] = 2
      numeriSelezionati.push(this.value[9])
    } else if (valore10.valueOf() == 30) {
      this.value[9] = 0
      numeriSelezionati.push(this.value[9])
    }
    if (valore11.valueOf() == 31) {
      this.value[10] = 4
      numeriSelezionati.push(this.value[10])
    } else if (valore11.valueOf() == 32) {
      this.value[10] = 2
      numeriSelezionati.push(this.value[10])
    } else if (valore11.valueOf() == 33) {
      this.value[10] = 0
      numeriSelezionati.push(this.value[10])
    }
    if (valore12.valueOf() == 34) {
      this.value[11] = 8
      numeriSelezionati.push(this.value[11])
    } else if (valore12.valueOf() == 35) {
      this.value[11] = 4
      numeriSelezionati.push(this.value[11])
    } else if (valore12.valueOf() == 36) {
      this.value[11] = 0
      numeriSelezionati.push(this.value[11])
    }
    if (valore13.valueOf() == 37) {
      this.value[12] = 0
      numeriSelezionati.push(this.value[12])
    } else if (valore13.valueOf() == 38) {
      this.value[12] = 0
      numeriSelezionati.push(this.value[12])
    } else if (valore13.valueOf() == 39) {
      this.value[12] = 0
      numeriSelezionati.push(this.value[12])
    }
    if (valore14.valueOf() == 40) {
      this.value[13] = 0
      numeriSelezionati.push(this.value[13])
    } else if (valore14.valueOf() == 41) {
      this.value[13] = 0
      numeriSelezionati.push(this.value[13])
    } else if (valore14.valueOf() == 42) {
      this.value[13] = 0
      numeriSelezionati.push(this.value[13])
    }
    if (valore15.valueOf() == 43) {
      this.value[14] = 3
      numeriSelezionati.push(this.value[14])
    } else if (valore15.valueOf() == 44) {
      this.value[14] = 1
      numeriSelezionati.push(this.value[14])
    } else if (valore15.valueOf() == 45) {
      this.value[14] = 0
      numeriSelezionati.push(this.value[14])
    }
    if (valore16.valueOf() == 46) {
      this.value[15] = -5
      numeriSelezionati.push(this.value[15])
    } else if (valore16.valueOf() == 47) {
      this.value[15] = 0
      numeriSelezionati.push(this.value[15])
    } else if (valore16.valueOf() == 48) {
      this.value[15] = 4
      numeriSelezionati.push(this.value[15])
    } else if (valore16.valueOf() == 49) {
      this.value[15] = 11
      numeriSelezionati.push(this.value[15])
    }
    if (valore17.valueOf() == 50) {
      this.value[16] = -15
      numeriSelezionati.push(this.value[16])
    } else if (valore17.valueOf() == 51) {
      this.value[16] = -9
      numeriSelezionati.push(this.value[16])
    } else if (valore17.valueOf() == 52) {
      this.value[16] = -5
      numeriSelezionati.push(this.value[16])
    } else if (valore17.valueOf() == 53) {
      this.value[16] = 0
      numeriSelezionati.push(this.value[16])
    }
    if (valore18.valueOf() == 54) {
      this.value[17] = 0
      numeriSelezionati.push(this.value[17])
    } else if (valore18.valueOf() == 55) {
      this.value[17] = 2
      numeriSelezionati.push(this.value[17])
    } else if (valore18.valueOf() == 56) {
      this.value[17] = 3
      numeriSelezionati.push(this.value[17])
    } else if (valore18.valueOf() == 57) {
      this.value[17] = 6
      numeriSelezionati.push(this.value[17])
    }
    if (valore19.valueOf() == 58) {
      this.value[18] = -4
      numeriSelezionati.push(this.value[18])
    } else if (valore19.valueOf() == 59) {
      this.value[18] = -3
      numeriSelezionati.push(this.value[18])
    } else if (valore19.valueOf() == 60) {
      this.value[18] = 0
      numeriSelezionati.push(this.value[18])
    } else if (valore19.valueOf() == 61) {
      this.value[18] = 13
      numeriSelezionati.push(this.value[18])
    }
    if (valore20.valueOf() == 62) {
      this.value[19] = -5
      numeriSelezionati.push(this.value[19])
    } else if (valore20.valueOf() == 63) {
      this.value[19] = 0
      numeriSelezionati.push(this.value[19])
    } else if (valore20.valueOf() == 64) {
      this.value[19] = 6
      numeriSelezionati.push(this.value[19])
    } else if (valore20.valueOf() == 65) {
      this.value[19] = 11
      numeriSelezionati.push(this.value[19])
    }
    this.totalePunteggio = numeriSelezionati.reduce(totale)
    console.log(this.totalePunteggio);
  }

  vediMuratura() {
  console.log(this.varEmp)
    if (this.muratura.emp == 1) {
      alert("La classe di vulnerabilità è V6")
    }
    if (this.muratura.emp == 3) {
      if (this.totalePunteggio <= 50) {
        alert("La classe di vulnerabilità è V5")
      }
    }
  }
}