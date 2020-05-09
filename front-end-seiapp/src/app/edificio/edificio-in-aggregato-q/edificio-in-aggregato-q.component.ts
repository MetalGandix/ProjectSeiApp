import { Component, OnInit } from '@angular/core';
import { QualitàEdificiService } from 'src/app/classi-servizi/service/qualità-edifici.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EdificioInAggregato } from 'src/app/classi-servizi/classes/edificio-in-aggregato';

@Component({
  selector: 'app-edificio-in-aggregato-q',
  templateUrl: './edificio-in-aggregato-q.component.html',
  styleUrls: ['./edificio-in-aggregato-q.component.css']
})
export class EdificioInAggregatoQComponent implements OnInit {

  edificioInAggregato: {[key: string]: EdificioInAggregato[]} = {}
  edificioSelezionato: EdificioInAggregato;
  edificioFiltro: EdificioInAggregato[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private qualità: QualitàEdificiService
    ) { }

    ngOnInit(){
      this.qualità.getQEdificio().subscribe(data =>{
        console.log(this.edificioInAggregato)
        const edifici = {}
        for(const edificio of data){
          const {tipoStruttura} = edificio.quality.tQuality
          if(!edifici[tipoStruttura]){
            edifici[tipoStruttura] = []
          }
          edifici[tipoStruttura].push(edificio)
        }
        console.log(edifici)
        this.edificioInAggregato = edifici
      })
    }

    onChange(value){
      console.log(this.edificioSelezionato)
      console.log(value)
      const arr: EdificioInAggregato[] = []
      for(const edificio of this.edificioInAggregato[value.quality.tQuality.tipoStruttura]){
        if(edificio.quality.id === value.quality.id){
          arr.push(edificio)
        }
      }
      this.edificioFiltro = arr;
    }

}
