import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OptionComponent } from './option/option.component';
import { IndividuazioneInterventiComponent } from './individuazione-interventi/individuazione-interventi.component';
import { AggiungiInterventoComponent } from './aggiungi-intervento/aggiungi-intervento.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'option', component: OptionComponent },
  { path: 'individuazione-interventi', component: IndividuazioneInterventiComponent },
  { path: 'aggiungi-intervento', component: AggiungiInterventoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
