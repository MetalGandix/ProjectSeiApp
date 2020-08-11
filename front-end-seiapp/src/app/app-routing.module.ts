import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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