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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OptionComponent,
    IndividuazioneInterventiComponent
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
