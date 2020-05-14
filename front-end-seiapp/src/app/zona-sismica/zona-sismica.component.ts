import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-zona-sismica',
  templateUrl: './zona-sismica.component.html',
  styleUrls: ['./zona-sismica.component.css']
})
export class ZonaSismicaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  zonaSismica = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4}
  ];

vediClasseRischio(){
  alert("funziona")
}


}
