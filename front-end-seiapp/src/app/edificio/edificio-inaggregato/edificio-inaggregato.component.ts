import { Component, OnInit } from '@angular/core';
import { TipoEdificio } from 'src/app/classi-servizi/classes/tipo-edificio';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { EdificioService } from 'src/app/classi-servizi/service/edificio.service';
import { EdificioInAggregatoQComponent } from '../edificio-in-aggregato-q/edificio-in-aggregato-q.component';

@Component({
  selector: 'app-edificio-inaggregato',
  templateUrl: './edificio-inaggregato.component.html',
  styleUrls: ['./edificio-inaggregato.component.css']
})
export class EdificioInaggregatoComponent implements OnInit {

  
  edificioInAggregato: TipoEdificio[];
  //showMsg1: boolean = false
  avantiAbilitato = false
  tipoEdificioSelezionato: TipoEdificio;
  emsType: Number

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private edificioService: EdificioService
    ) { 
    }

  ngOnInit(){
      this.edificioService.getTipoEdificio().subscribe(data =>{
      this.edificioInAggregato = data;
    })
  }

  onChange(tipoEdificioId: number){
    this.tipoEdificioSelezionato = this.edificioInAggregato.find(t => t.id==tipoEdificioId);
    this.avantiAbilitato = this.tipoEdificioSelezionato.abilitato;
    this.emsType = this.tipoEdificioSelezionato.id
    console.log(this.emsType)
  }

  outputSelezione(){
    this.router.navigate(['/edificio-in-aggregato-q', this.tipoEdificioSelezionato.id], { state: {emsType: this.emsType}});
    console.log("Passo questo valore: ", this.tipoEdificioSelezionato.id)
  }
}
