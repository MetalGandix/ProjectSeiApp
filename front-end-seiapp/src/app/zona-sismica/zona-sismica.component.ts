import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Zona } from '../classi-servizi/classes/zona';
import { ValutazioniService } from '../classi-servizi/service/valutazioni.service';
import { ValutazioniClass } from '../classi-servizi/classes/valutazioni-class';

@Component({
  selector: 'app-zona-sismica',
  templateUrl: './zona-sismica.component.html',
  styleUrls: ['./zona-sismica.component.css']
})
export class ZonaSismicaComponent implements OnInit {
  vulClass: Number;
  risk: String
  pam: String
  punteggio: Number
  emsType: Number
  msg1: boolean = false;
  riskType: Number;
  value: number[] = []
  messaggio1: boolean = false
  far: boolean = false
  valutazioni: ValutazioniClass

  classeAA: boolean = false
  classeA: boolean = false
  classeB: boolean = false
  classeC: boolean = false
  classeD: boolean = false
  classeE: boolean = false
  classeF: boolean = false
  classeG: boolean = false
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ValutazioniService
  ) { }

  ngOnInit() {
    this.emsType = window.history.state.emsType
    this.vulClass = window.history.state.vulClass;
    this.punteggio = window.history.state.punteggio;
    console.log(this.vulClass)
  }

  onChange(zonaId: number){
   this.zonaSismica.find(t => t.id == zonaId);
   this.riskType = zonaId
   console.log(zonaId)

  }

  onSubmit(){
    this.service.postValutazione(this.valutazioni).subscribe(data =>{
      this.messaggio1 = true
    })
  }

  zonaSismica = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ];

  vediValori() {
    console.log("Grado di vulnerabilità da 1 a 6: " + this.vulClass)
    console.log("Tipo di zona sismica da 1 a 4: " + this.riskType)
  }

  gradoDiRischio() {
    if (this.vulClass == 6 && this.riskType == 1) {
      this.risk = "G"
      this.pam = "7,5%"
      this.classeG = true
    }
    if (this.vulClass == 6 && this.riskType == 2) {
      this.risk = "F"
      this.pam = "4,5% ÷ 7,5%"
      this.classeF = true
    }
    if (this.vulClass == 6 && this.riskType == 3) {
      this.risk = "D"
      this.pam = "2,5% ÷ 3,5%"
      this.classeD = true
    }
    if (this.vulClass == 6 && this.riskType == 4) {
      this.risk = "C"
      this.pam = "1,5% ÷ 2,5%"
      this.classeC = true
    }
    if (this.vulClass == 5 && this.riskType == 1) {
      this.risk = "F"
      this.pam = "4,5% ÷ 7,5%"
      this.classeF = true
    }
    if (this.vulClass == 5 && this.riskType == 2) {
      this.risk = "E"
      this.pam = "3,5% ÷ 4,5%"
      this.classeE = true
    }
    if (this.vulClass == 5 && this.riskType == 3) {
      this.risk = "D"
      this.pam = "2,5% ÷ 3,5%"
      this.classeD = true
    }
    if (this.vulClass == 5 && this.riskType == 4) {
      this.risk = "B"
      this.pam = "1% ÷ 1,5%"
      this.classeB = true
    }
    if (this.vulClass == 4 && this.riskType == 1) {
      this.risk = "E"
      this.pam = "3,5% ÷ 4,5%"
      this.classeE = true
    }
    if (this.vulClass == 4 && this.riskType == 2) {
      this.risk = "D"
      this.pam = "2,5% ÷ 3,5%"
      this.classeD = true
    }
    if (this.vulClass == 4 && this.riskType == 3) {
      this.risk = "C"
      this.pam = "1,5% ÷ 2,5%"
      this.classeC = true
    }
    if (this.vulClass == 4 && this.riskType == 4) {
      this.risk = "A"
      this.pam = "0,5% ÷ 1%"
      this.classeA = true
    }
    if (this.vulClass == 3 && this.riskType == 1) {
      this.risk = "D"
      this.pam = "2,5% ÷ 3,5%"
      this.classeD = true
    }
    if (this.vulClass == 3 && this.riskType == 2) {
      this.risk = "C"
      this.pam = "1,5% ÷ 2,5%"
      this.classeC = true
    }
    if (this.vulClass == 3 && this.riskType == 3) {
      this.risk = "B"
      this.pam = "1% ÷ 1,5%"
      this.classeB = true
    }
    if (this.vulClass == 3 && this.riskType == 4) {
      this.risk = "A"
      this.pam = "0,5% ÷ 1%"
      this.classeA = true
    }
    if (this.vulClass == 2 && this.riskType == 1) {
      this.risk = "C"
      this.pam = "1,5% ÷ 2,5%"
      this.classeC = true
    }
    if (this.vulClass == 2 && this.riskType == 2) {
      this.risk = "B"
      this.pam = "1% ÷ 1,5%"
      this.classeB = true
    }
    if (this.vulClass == 2 && this.riskType == 3) {
      this.risk = "A"
      this.pam = "0,5% ÷ 1%"
      this.classeA = true
    }
    if (this.vulClass == 2 && this.riskType == 4) {
      this.risk = "A+"
      this.pam = "≤0,5%"
      this.classeAA = true
    }
    this.msg1 = true;
    this.far = true;
  }

  mandaValori(){
  this.router.navigate(['/struttura'], { state: {emsType: this.emsType, vulClass: this.vulClass, punteggio: this.punteggio, risk: this.risk, pam: this.pam } 
  })
  }
}
