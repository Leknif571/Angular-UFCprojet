import { Component } from '@angular/core';
import { CombattantService } from './services/combattant/combattant.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UFC';
  time!: number;

  constructor(
    
  ){}

ngOnInit(): void {
  const counter = interval(1000);

  counter.subscribe(
    (value) => {
      this.time = value;
    },
    (error) =>{
      console.log("Error : "+ error);
    },
    ()=>{
      console.log("Observable complet !");
      
    }
  )
}
}
