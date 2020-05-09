import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EdificioSingolo } from 'src/app/classi-servizi/classes/edificio-singolo';
import { QualitàEdificiService } from 'src/app/classi-servizi/service/qualità-edifici.service';

@Component({
  selector: 'app-edificio-singolo-q',
  templateUrl: './edificio-singolo-q.component.html',
  styleUrls: ['./edificio-singolo-q.component.css']
})
export class EdificioSingoloQComponent implements OnInit {

  edificioSingolo: EdificioSingolo[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private qualità: QualitàEdificiService
    ) { }

    ngOnInit(){
    }

}
