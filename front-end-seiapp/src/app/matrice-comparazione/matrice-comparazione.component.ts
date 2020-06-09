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

  metodo2(element: number){
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if(this.numeroPrimario < 1){
      this.a = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.a = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }
  
  metodo3(element: number){
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if(this.numeroPrimario < 1){
      this.b = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.b = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }
  
  metodo4(element: number){
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if(this.numeroPrimario < 1){
      this.c = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.c = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }
  
  metodo5(element: number){
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if(this.numeroPrimario < 1){
      this.d = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.d = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }
  
  metodo6(element: number){
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if(this.numeroPrimario < 1){
      this.e = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.e = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }
  
  metodo7(element: number){
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if(this.numeroPrimario < 1){
      this.f = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.f = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }
  
  metodo8(element: number){
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if(this.numeroPrimario < 1){
      this.g = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.g = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }
  
  metodo9(element: number){
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if(this.numeroPrimario < 1){
      this.h = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.h = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }
  
  metodo10(element: number){
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if(this.numeroPrimario < 1){
      this.i = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.i = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }
  
  metodo11(element: number){
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if(this.numeroPrimario < 1){
      this.j = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.j = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }
  
  metodo12(element: number){
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if(this.numeroPrimario < 1){
      this.k = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.k = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }
  
  metodo13(element: number){
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if(this.numeroPrimario < 1){
      this.l = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.l = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }
  
  metodo14(element: number){
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if(this.numeroPrimario < 1){
      this.m = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.m = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }
  
  metodo15(element: number){
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if(this.numeroPrimario < 1){
      this.n = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.n = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
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

  ngOnInit() {
  }

}
