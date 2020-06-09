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
    { id:1, char:"1/9", num: 1/9 },
    { id:2, char:"1/8", num: 1/8 },
    { id:3, char:"1/7", num: 1/7 },
    { id:4, char:"1/6",num: 1/6 },
    { id:5, char:"1/5",num: 1/5 },
    { id:6, char:"1/4",num: 1/4 },
    { id:7, char:"1/3",num: 1/3 },
    { id:8, char:"1/2",num: 1/2 },
    { id:9, char:"1",num: 1 },
    { id:10, char:"2",num: 2 },
    { id:11, char:"3",num: 3 },
    { id:12, char:"4",num: 4 },
    { id:13, char:"5",num: 5 },
    { id:14, char:"6",num: 6 },
    { id:15, char:"7",num: 7 },
    { id:16, char:"8", num: 8 },
    { id:17, char:"9", num: 9 }
  ]

  ngOnInit() {
  }

}
