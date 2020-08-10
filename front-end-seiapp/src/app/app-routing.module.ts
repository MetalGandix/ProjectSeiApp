import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OptionComponent } from './option/option.component';
import { AggiungiInterventoComponent } from './aggiungi-intervento/aggiungi-intervento.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { ModificaInterventoComponent } from './modifica-intervento/modifica-intervento.component';
import { EdificioSingoloComponent } from './edificio/edificio-singolo/edificio-singolo.component';
import { EdificioInaggregatoComponent } from './edificio/edificio-inaggregato/edificio-inaggregato.component';
import { EdificioInAggregatoQComponent } from './edificio/edificio-in-aggregato-q/edificio-in-aggregato-q.component';
import { EdificioSingoloQComponent } from './edificio/edificio-singolo-q/edificio-singolo-q.component';
import { ZonaSismicaComponent } from './zona-sismica/zona-sismica.component';
import { ElementoStrutturaComponent } from './elemento-struttura/elemento-struttura.component';
import { ReportInterventoComponent } from './report-intervento/report-intervento.component';
import { MatriceComparazioneComponent } from './matrice-comparazione/matrice-comparazione.component';
import { McdmComponent } from './mcdm/mcdm.component';
import { AggiuntaInterventoSecondarioComponent } from './aggiunta-intervento-secondario/aggiunta-intervento-secondario.component';
import { McdmSecondariaComponent } from './mcdm-secondaria/mcdm-secondaria.component';
import { RiepilogoCostiComponent } from './riepilogo-costi/riepilogo-costi.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'option', component: OptionComponent },
  { path: 'aggiungi-intervento', component: AggiungiInterventoComponent },
  { path: 'a1', component: A1Component },
  { path: 'a2', component: A2Component },
  { path: 'modifica-interventi', component: ModificaInterventoComponent },
  { path: 'edificio-singolo', component: EdificioSingoloComponent },
  { path: 'edificio-in-aggregato', component: EdificioInaggregatoComponent },
  { path: 'edificio-in-aggregato-q/:id', component: EdificioInAggregatoQComponent },
  { path: 'edificio-singolo-q/:id', component: EdificioSingoloQComponent },
  { path: 'zona-sismica', component: ZonaSismicaComponent },
  { path: 'struttura', component: ElementoStrutturaComponent },
  { path: 'report-intervento', component: ReportInterventoComponent },
  { path: 'matrice', component: MatriceComparazioneComponent },
  { path: 'mcdm', component: McdmComponent },
  { path: 'aggiunta-intervento-secondario', component: AggiuntaInterventoSecondarioComponent },
  { path: 'mcdm-secondaria', component: McdmSecondariaComponent },
  { path: 'riepilogo-costi', component: RiepilogoCostiComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }