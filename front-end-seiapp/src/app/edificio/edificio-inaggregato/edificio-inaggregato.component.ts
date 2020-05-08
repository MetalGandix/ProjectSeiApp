import { Component, OnInit } from '@angular/core';
import { TipoEdificio } from 'src/app/classi-servizi/classes/tipo-edificio';
import { ActivatedRoute, Router } from '@angular/router';
import { EdificioService } from 'src/app/classi-servizi/service/edificio.service';

@Component({
  selector: 'app-edificio-inaggregato',
  templateUrl: './edificio-inaggregato.component.html',
  styleUrls: ['./edificio-inaggregato.component.css']
})
export class EdificioInaggregatoComponent implements OnInit {

  edificioSingolo: TipoEdificio[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private edificioService: EdificioService
    ) { }

  ngOnInit(){
    this.edificioService.getTipoEdificio().subscribe(data =>{
      this.edificioSingolo = data;
    })
  }

}
