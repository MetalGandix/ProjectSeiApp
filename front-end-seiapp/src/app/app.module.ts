import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AggiungiInterventoComponent } from './aggiungi-intervento/aggiungi-intervento.component';
import { VisualizzaInterventiDisponibiliComponent } from './visualizza-interventi-disponibili/visualizza-interventi-disponibili.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { ModificaInterventoComponent } from './modifica-intervento/modifica-intervento.component';
import { EdificioSingoloComponent } from './edificio/edificio-singolo/edificio-singolo.component';
import { EdificioInaggregatoComponent } from './edificio/edificio-inaggregato/edificio-inaggregato.component';
import { InterventiService } from './classi-servizi/service/interventi.service';
import { EdificioService } from './classi-servizi/service/edificio.service';
import { QualitàEdificiService } from './classi-servizi/service/qualità-edifici.service';
import { EdificioSingoloQComponent } from './edificio/edificio-singolo-q/edificio-singolo-q.component';
import { EdificioInAggregatoQComponent } from './edificio/edificio-in-aggregato-q/edificio-in-aggregato-q.component';
import { ZonaSismicaComponent } from './zona-sismica/zona-sismica.component';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { ElementoStrutturaComponent } from './elemento-struttura/elemento-struttura.component';
import { ReportInterventoComponent } from './report-intervento/report-intervento.component';
import { MatriceComparazioneComponent } from './matrice-comparazione/matrice-comparazione.component';
import { McdmComponent } from './mcdm/mcdm.component';
import { AggiuntaInterventoSecondarioComponent } from './aggiunta-intervento-secondario/aggiunta-intervento-secondario.component';
import { McdmSecondariaComponent } from './mcdm-secondaria/mcdm-secondaria.component';
import { RiepilogoCostiComponent } from './riepilogo-costi/riepilogo-costi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AggiungiInterventoComponent,
    VisualizzaInterventiDisponibiliComponent,
    A1Component,
    A2Component,
    ModificaInterventoComponent,
    EdificioSingoloComponent,
    EdificioInaggregatoComponent,
    EdificioSingoloQComponent,
    EdificioInAggregatoQComponent,
    ZonaSismicaComponent,
    ElementoStrutturaComponent,
    ReportInterventoComponent,
    MatriceComparazioneComponent,
    McdmComponent,
    AggiuntaInterventoSecondarioComponent,
    McdmSecondariaComponent,
    RiepilogoCostiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [InterventiService,EdificioService,QualitàEdificiService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
