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
    ModificaInterventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StrutturaVerticaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
