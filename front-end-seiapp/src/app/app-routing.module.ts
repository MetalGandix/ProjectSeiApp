import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OptionComponent } from './option/option.component';
import { IndividuazioneInterventiComponent } from './individuazione-interventi/individuazione-interventi.component';
import { AggiungiInterventoComponent } from './aggiungi-intervento/aggiungi-intervento.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { ModificaInterventoComponent } from './modifica-intervento/modifica-intervento.component';
import { SceltaEdificioComponent } from './edificio/scelta-edificio/scelta-edificio.component';
import { EdificioSingoloComponent } from './edificio/edificio-singolo/edificio-singolo.component';
import { EdificioInaggregatoComponent } from './edificio/edificio-inaggregato/edificio-inaggregato.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'option', component: OptionComponent },
  { path: 'individuazione-interventi', component: IndividuazioneInterventiComponent },
  { path: 'aggiungi-intervento', component: AggiungiInterventoComponent },
  { path: 'a1', component: A1Component },
  { path: 'a2', component: A2Component },
  { path: 'modifica-interventi', component: ModificaInterventoComponent },
  { path: 'scelta-edificio', component: SceltaEdificioComponent },
  { path: 'edificio-singolo', component: EdificioSingoloComponent },
  { path: 'edificio-inaggregato', component: EdificioInaggregatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
