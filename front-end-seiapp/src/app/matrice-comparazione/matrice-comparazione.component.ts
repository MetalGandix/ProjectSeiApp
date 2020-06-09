import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrice-comparazione',
  templateUrl: './matrice-comparazione.component.html',
  styleUrls: ['./matrice-comparazione.component.css']
})
export class MatriceComparazioneComponent implements OnInit {

  constructor() { }

  x: number = 0;

  arrayComparazione = [
    { char:"1/7", num: 1/7 },
    { char:"1/6",num: 1/6 },
    { char:"1/5",num: 1/5 },
    { char:"1/4",num: 1/4 },
    { char:"1/3",num: 1/3 },
    { char:"1/2",num: 1/2 },
    { char:"1",num: 1 },
    { char:"2",num: 2 },
    { char:"3",num: 3 },
    { char:"4",num: 4 },
    { char:"5",num: 5 },
    { char:"6",num: 6 },
    { char:"7",num: 7 }
  ]

  ngOnInit() {
  }

}
