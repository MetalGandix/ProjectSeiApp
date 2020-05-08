import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OptionComponent } from './option/option.component';
import { IndividuazioneInterventiComponent } from './individuazione-interventi/individuazione-interventi.component';
import { StrutturaVerticaleService } from './classi-servizi/service/struttura-verticale.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AggiungiInterventoComponent } from './aggiungi-intervento/aggiungi-intervento.component';
import { VisualizzaInterventiDisponibiliComponent } from './visualizza-interventi-disponibili/visualizza-interventi-disponibili.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { ModificaInterventoComponent } from './modifica-intervento/modifica-intervento.component';
import { SceltaEdificioComponent } from './edificio/scelta-edificio/scelta-edificio.component';
import { EdificioSingoloComponent } from './edificio/edificio-singolo/edificio-singolo.component';
import { EdificioInaggregatoComponent } from './edificio/edificio-inaggregato/edificio-inaggregato.component';
import { InterventiService } from './classi-servizi/service/interventi.service';
import { EdificioService } from './classi-servizi/service/edificio.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OptionComponent,
    IndividuazioneInterventiComponent,
    AggiungiInterventoComponent,
    VisualizzaInterventiDisponibiliComponent,
    A1Component,
    A2Component,
    ModificaInterventoComponent,
    SceltaEdificioComponent,
    EdificioSingoloComponent,
    EdificioInaggregatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StrutturaVerticaleService,InterventiService,EdificioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
