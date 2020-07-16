import { Component, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssociazioneIntervento } from '../classi-servizi/classes/associazione-intervento';
import { CaratteristicheQualitative } from '../classi-servizi/classes/caratteristiche-qualitative';

@Component({
  selector: 'app-matrice-comparazione',
  templateUrl: './matrice-comparazione.component.html',
  styleUrls: ['./matrice-comparazione.component.css']
})
export class MatriceComparazioneComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  numeroArray: number = 0;
  x: number = 1;
  y: number;
  a: number;
  cr: number
  mxp: number[] = [0, 0, 0, 0, 0, 0]
  ponderazione: number[] = [0, 0, 0, 0, 0, 0]
  arrayOpposite: number[];
  arr: number[];
  arrayProva: number[] = []
  numeroPrimario;
  z: number
  matriceNormalizzata: number[][] = []
  oggetto: any = {}
  matrix: number[][] = []
  matrixRisultati: number[] = [0, 0, 0, 0, 0, 0]
  variabileIntervento: AssociazioneIntervento[];
  caratteristiche: CaratteristicheQualitative[];
  vulClass: Number;
  risk: String
  pam: String
  punteggio: Number
  emsType: Number

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

  arrayStringhe = [
    "MODICITà DI COSTO",
    "EFFICACIA",
    "COMPATIBILITÀ VISIVA",
    "REVERSIBILITÀ",
    "SEMPLICITÀ DI CANTIERE",
    "ESIGUITÀ DI INGOMBRO"
  ]

  ngOnInit() {
    this.emsType = window.history.state.emsType
    this.vulClass = window.history.state.vulClass;
    this.punteggio = window.history.state.punteggio;
    this.risk = window.history.state.risk;
    this.pam = window.history.state.pam;
    this.variabileIntervento = window.history.state.variabileIntervento
    this.caratteristiche = window.history.state.caratteristiche
    for (let r = 0; r < 6; r++) {
      this.matriceNormalizzata.push([0, 0, 0, 0, 0, 0])
      this.matrix[r] = []
      this.oggetto[r] = {}
      this.oggetto[r][r] = 1
      for (let c = 0; c < 6; c++) {
        if (r == c) {
          this.matrix[r].push(1)
          this.oggetto[r][c] = 1
        }
        if (r > c) {
          this.matrix[r].push(1 / 9)
          this.oggetto[r][c] = 1 / 9
        }
        else if (r < c) {
          this.matrix[r].push(9)
          this.oggetto[r][c] = 9
        }
      }
    }
    this.onSelectChange(0, 0)
  }

  onSelectChange(r: number, c: number) {
    //i risultati della prima matrice
    this.oggetto[c][r] = 1 / this.oggetto[r][c]
    this.matrixRisultati = [0, 0, 0, 0, 0, 0]
    for (let r = 0; r < this.matrix.length; r++) {
      for (let c = 0; c < this.matrix[r].length; c++) {
        this.matrixRisultati[c] += this.oggetto[r][c] !== undefined ? this.oggetto[r][c] : 0
      }
    }
    console.log(this.matrix)
    console.log(this.matrixRisultati)
    //La seconda matrice
    for (let r = 0; r < this.matriceNormalizzata.length; r++) {
      for (let c = 0; c < this.matriceNormalizzata[r].length; c++) {
        this.matriceNormalizzata[r][c] = this.oggetto[r][c] / this.matrixRisultati[c]
      }
    }
    //i risultati della secconda matrice
    this.ponderazione = [0, 0, 0, 0, 0, 0]
    for (let r = 0; r < this.matriceNormalizzata.length; r++) {
      for (let c = 0; c < this.matriceNormalizzata[r].length; c++) {
        this.ponderazione[r] += this.matriceNormalizzata[r][c]
      }
      this.ponderazione[r] = this.ponderazione[r] / this.matriceNormalizzata.length
    }
    //Matrice x 
    for (let r = 0; r < 6; r++) {
      let riga = []
      for (let c = 0; c < 6; c++) {
        riga.push(this.oggetto[r][c] !== undefined ? this.oggetto[r][c] : 0)
      }
      this.mxp[r] = this.prodottoVettoriale(riga, this.ponderazione)
    }
    //Calcolo di lambda e di cr
    let lambda = 0
    for (let r in this.mxp) {
      lambda += this.mxp[r] / this.ponderazione[r]
    }
    lambda = lambda / 6
    let ci = (lambda - 6) / 5
    let ri = 1.24
    this.cr = ci / ri
  }

  prodottoVettoriale(array1: number[], array2: number[]) {
    let risultato = 0
    for (let r = 0; r < array1.length; r++) {
      risultato = risultato + array1[r] * array2[r]
    }
    return risultato
  }

  metodo1(element: number) {
    this.arrayComparazione.find(t => t.id == element);
    this.numeroPrimario = element;
    console.log(this.numeroPrimario)
    if (this.numeroPrimario < 1) {
      this.y = 1 / (this.numeroPrimario.valueOf())
    }
    if (this.numeroPrimario > 1) {
      this.y = this.numeroPrimario.valueOf() * (1 / (this.numeroPrimario.valueOf() * this.numeroPrimario.valueOf()))
    }
  }

  trasferisciPonderazione(){
    this.router.navigate(['/mcdm'], { state: {emsType: this.emsType, vulClass: this.vulClass, punteggio: this.punteggio, risk: this.risk, pam: this.pam, caratteristiche: this.caratteristiche, ponderazione: this.ponderazione, variabileIntervento: this.variabileIntervento }})
  }

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