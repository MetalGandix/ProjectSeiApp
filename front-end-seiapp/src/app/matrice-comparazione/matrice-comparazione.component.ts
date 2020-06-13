import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-matrice-comparazione',
  templateUrl: './matrice-comparazione.component.html',
  styleUrls: ['./matrice-comparazione.component.css']
})
export class MatriceComparazioneComponent implements OnInit {

  constructor() { }

  numeroArray: number = 0;
  x: number = 1;
  y: number;

  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
  g: number;
  h: number;
  i: number;
  j: number;
  k: number;
  l: number;
  m: number;
  n: number;

  arrayOpposite: number[];
  arr: number[];
  arrayProva: number [] = []
  numeroPrimario;
  z: number

  oggetto: any = {}

  matrix: number[][] = []
  matrixRisultati: number[] = [0,0,0,0,0,0]

  arrayComparazione = [
    { id: 1, char: "1/9", num: 1 / 9 },
    { id: 2, char: "1/8", num: 1 / 8 },
    { id: 3, char: "1/7", num: 1 / 7 },
    { id: 4, char: "1/6", num: 1 / 6 },
    { id: 5, char: "1/5", num: 1 / 5 },
    { id: 6, char: "1/4", num: 1 / 4 },
    { id: 7, char: "1/3", num: 1 / 3 },
    { id: 8, char: "1/2", num: 1 / 2 },
    { id: 9, char: "2", num: 2 },
    { id: 10, char: "3", num: 3 },
    { id: 11, char: "4", num: 4 },
    { id: 12, char: "5", num: 5 },
    { id: 13, char: "6", num: 6 },
    { id: 14, char: "7", num: 7 },
    { id: 15, char: "8", num: 8 },
    { id: 16, char: "9", num: 9 }
  ]

  ngOnInit() {
    for(let r = 0; r<6; r++){
      this.matrix[r] = []
      this.oggetto[r] = {}
      this.oggetto[r][r] = 1
      for(let c=0; c<6; c++){
        if(r == c){
          this.matrix[r].push(1) 
          this.oggetto[r][c] = 1
        }
        if(r > c){
          this.matrix[r].push(1/9) 
          this.oggetto[r][c] = 1/9
        }
        else if(r < c){
          this.matrix[r].push(9) 
          this.oggetto[r][c] = 9
        }
      }
    }
    this.onSelectChange(0,0)
  }

  onSelectChange(r: number, c: number){
    this.oggetto[c][r] = 1/this.oggetto[r][c]
    this.matrixRisultati = [0,0,0,0,0,0]
    for(let r = 0; r<this.matrix.length; r++){
      for(let c=0; c<this.matrix[r].length; c++){
        this.matrixRisultati[c] += this.oggetto[r][c] !== undefined ? this.oggetto[r][c] : 0
      }
    }
    console.log(this.matrix)
    console.log(this.matrixRisultati)
  }

  metodo1(element: number){
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if(this.numeroPrimario < 1){
      this.y = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.y = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }

  /*outputSelection(){
    let p = 0
      this.selectedCasella.forEach((function (value, index, array){
        for(const key in this.arrayComparazione){
          const list = this.arrayComparazione[key]
          list.forEach(function (numero, indexDue, arrayDue){
            if(numero.id === value) {
              p = p + parseInt(numero.num)
            }
          })
        } 
      }).bind(this))
      this.p = p
  }*/

  /*numeriContrapposti(){
  var gcd = function(a, b) {
    if (b < 0.0000001) return a;                // Since there is a limited precision we need to limit the value.
    return gcd(b, Math.floor(a % b));           // Discard any fractions due to limitations in precision.
  };
  
  var fraction = this.y 
  var len = fraction.toString().length - 2;
  var denominator = Math.pow(10, len);
  var numerator = fraction * denominator;

  var divisor = gcd(numerator, denominator);
  numerator /= divisor;                         // Should be 687
  denominator /= divisor; 
  this.j = (Math.floor(numerator) + '/' + Math.floor(denominator));
}*/



}
