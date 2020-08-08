import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CaratteristicheQualitative } from '../classi-servizi/classes/caratteristiche-qualitative';
import { ElementiStrutturaService } from '../classi-servizi/service/elementi-struttura.service';
import { Struttura } from '../classi-servizi/classes/strutture/struttura';
import { TypeStruttura } from '../classi-servizi/classes/strutture/type-struttura';
import { AssociazioneInterventoService } from '../classi-servizi/service/associazione-intervento.service';
import { AssociazioneIntervento } from '../classi-servizi/classes/associazione-intervento';
import { RisultatoSelezioneService } from '../classi-servizi/service/risultato-selezione.service';

@Component({
  selector: 'app-elemento-struttura',
  templateUrl: './elemento-struttura.component.html',
  styleUrls: ['./elemento-struttura.component.css']
})
export class ElementoStrutturaComponent implements OnInit {

  typeStruttura: TypeStruttura[];
  struttura: Struttura[];
  selectedIndex: number;
  selectedElement = [];
  selectedMeccanicaIndex: number;
  selectArr: number;
  caratteristiche: CaratteristicheQualitative[] = [];
  subscriptionsToDelete: Subscription = new Subscription();
  variabile1;
  associazioneIntervento: AssociazioneIntervento[];
  variabileIntervento: AssociazioneIntervento[];
  vulClass: Number;
  risk: String
  pam: String
  punteggio: Number
  emsType: Number


  constructor(
    private risultatoSelezione: RisultatoSelezioneService,
    private route: ActivatedRoute,
    private router: Router,
    private service: ElementiStrutturaService,
    private serviceAssociazione: AssociazioneInterventoService
  ) {
  }

  onChangeSecondo(index: number) {
    this.caratteristiche = this.selectedElement[index].carQuality
    this.selectArr = 0;
    this.selectedMeccanicaIndex = 0;
    this.onChangeCaratteristicheQualitative(0);
  }

  onChange(index: number) {
    this.selectedElement = []
    this.struttura.forEach(t => {
      if (t.tipoStruttura.id === this.typeStruttura[index].id) {
        this.selectedElement.push(t)
      }
    })
    this.selectedIndex = 0;
    this.onChangeSecondo(0);
  }

  onChangeCaratteristicheQualitative(index: number) {
    this.variabileIntervento = []
    let elemento = this.selectedElement[this.selectedIndex]
    let caratteristica = this.caratteristiche[index]
    this.associazioneIntervento.forEach(t => {
      if (elemento.id == t.strutturaAssociazione.id && caratteristica.id == t.caratteristicaAssociazioneIntervento.id) {
        this.variabileIntervento.push(t);
      }
    })
    console.log(this.variabileIntervento)
  }

  trasferisciOggetti() {
    this.risultatoSelezione.aggiungiCaratteristica(this.caratteristiche[this.selectArr])
    this.router.navigate(['/matrice'], {
      state: { emsType: this.emsType, vulClass: this.vulClass,punteggio: this.punteggio, risk: this.risk, pam: this.pam,  variabileIntervento: this.variabileIntervento, caratteristiche: this.caratteristiche[this.selectArr], selectedMeccanicaIndex: this.selectedMeccanicaIndex }
    })
  }

  ngOnInit() {
    this.risultatoSelezione.reset()
    this.emsType = window.history.state.emsType
    this.vulClass = window.history.state.vulClass;
    this.punteggio = window.history.state.punteggio;
    this.risk = window.history.state.risk;
    this.pam = window.history.state.pam;
    console.log("Classe vul: ", this.vulClass)
    console.log("Punteggio: ", this.punteggio)
    console.log("Rischio: ", this.risk)
    console.log("Pam: ", this.pam)
    this.service.getTypeStruttura().subscribe(data => {
      this.typeStruttura = data;
      console.log(this.typeStruttura)
    })
    this.service.getStruttura().subscribe(data => {
      this.struttura = data;
      console.log(this.struttura)
    })
    this.serviceAssociazione.getAssociazioneIntervento().subscribe(data => {
      this.associazioneIntervento = this.serviceAssociazione.interventGrouping(data);
      console.log(this.associazioneIntervento)
    })
  }

}