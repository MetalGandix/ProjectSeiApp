import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-zona-sismica',
  templateUrl: './zona-sismica.component.html',
  styleUrls: ['./zona-sismica.component.css']
})
export class ZonaSismicaComponent implements OnInit {
  vulClass: Number;
  risk: String
  msg1: boolean = false;
  riskType: Number;
  value: number[] = [];



  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.vulClass = window.history.state.vulClass;
    console.log(this.vulClass)
  }

  zonaSismica = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ];

  viewRiskClass() {
    var select1 = (<HTMLInputElement>document.getElementById("id1")).value;
    var valore1 = parseInt(select1)
    const numeriSelezionati: number[] = []
    const totale = (accumulator, currentValue) => accumulator + currentValue;
    if (valore1.valueOf() == 1) {
      this.value[0] = 1;
      numeriSelezionati.push(this.value[0]);
    }
    if (valore1.valueOf() == 2) {
      this.value[0] = 2;
      numeriSelezionati.push(this.value[0]);
    }
    if (valore1.valueOf() == 3) {
      this.value[0] = 3;
      numeriSelezionati.push(this.value[0]);
    }
    if (valore1.valueOf() == 4) {
      this.value[0] = 4;
      numeriSelezionati.push(this.value[0]);
    }
    this.riskType = numeriSelezionati.reduce(totale);
    this.gradoDiRischio();
    this.msg1 = true;
  }

  vediValori() {
    console.log("Grado di vulnerabilità da 1 a 6: " + this.vulClass)
    console.log("Tipo di zona sismica da 1 a 4: " + this.riskType)
  }

  gradoDiRischio() {
    if (this.vulClass == 6 && this.riskType == 1) {
      this.risk = "G"
    }
    if (this.vulClass == 6 && this.riskType == 2) {
      this.risk = "F"
    }
    if (this.vulClass == 6 && this.riskType == 3) {
      this.risk = "D"
    }
    if (this.vulClass == 6 && this.riskType == 4) {
      this.risk = "C"
    }
    if (this.vulClass == 5 && this.riskType == 1) {
      this.risk = "F"
    }
    if (this.vulClass == 5 && this.riskType == 2) {
      this.risk = "E"
    }
    if (this.vulClass == 5 && this.riskType == 3) {
      this.risk = "D"
    }
    if (this.vulClass == 5 && this.riskType == 4) {
      this.risk = "B"
    }
  }

}
