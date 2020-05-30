import { Component, OnInit } from '@angular/core';
import { AssociazioneIntervento } from '../classi-servizi/classes/associazione-intervento';
import { CaratteristicheQualitative } from '../classi-servizi/classes/caratteristiche-qualitative';

@Component({
  selector: 'app-report-intervento',
  templateUrl: './report-intervento.component.html',
  styleUrls: ['./report-intervento.component.css']
})
export class ReportInterventoComponent implements OnInit {

  constructor() { }

  variabileIntervento: AssociazioneIntervento[];
  selectedMeccanicaIndex: number;
  selectedIntervento: number;
  caratteristica: CaratteristicheQualitative;
  interventoCod = [];
  interventoDes = [];

  


  ngOnInit(){
    this.variabileIntervento = window.history.state.variabileIntervento;
    this.selectedMeccanicaIndex = window.history.state.selectedMeccanicaIndex;
    this.caratteristica = window.history.state.caratteristica;
    console.log("Interventi codici:",this.variabileIntervento)
    //this.interventoCod = this.variabileIntervento[0].intervento.codice
    console.log("Meccaniche: ",this.caratteristica.meccanismiAssociati[this.selectedMeccanicaIndex]);
  }

}
