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

  
  emp: Number = 0;
  edificioInAggregato: TipoEdificio[];
  //showMsg1: boolean = false
  pietraASecco: number = 1
  pietraSbozzata: number = 3
  pietraLavorata: number = 5
  solaiRigidezza: number = 6
  orizzontamentiRigidezza: number = 7


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

  outputSelezione(){
    var select1 = (<HTMLInputElement>document.getElementById("edificioInAggregato")).value;
    var valore1 = parseInt(select1)
    const muraturaSelezionata: number[] = []
    const totale = (accumulator, currentValue) => accumulator + currentValue;
    //Scrive i valori presi in input document.write(select1,select2);
    if(valore1.valueOf() == 1){
      muraturaSelezionata.push(this.pietraASecco)
    }
    if(valore1.valueOf() == 2){
      alert("Questo edificio non può essere selezionato");
    }
    if(valore1.valueOf() == 3){
      muraturaSelezionata.push(this.pietraSbozzata)
    }
    if(valore1.valueOf() == 4){
      alert("Questo edificio non può essere selezionato");
    }
    if(valore1.valueOf() == 5){
      muraturaSelezionata.push(this.pietraLavorata)
    }
    if(valore1.valueOf() == 6){
      muraturaSelezionata.push(this.solaiRigidezza)
    }
    if(valore1.valueOf() == 7){
      muraturaSelezionata.push(this.orizzontamentiRigidezza)
    }
    this.emp = muraturaSelezionata.reduce(totale)
    console.log(this.emp)
    this.router.navigate(['/edificio-in-aggregato-q'], { 
      state: { varEmp: this.emp } 
    });
  }
}
