import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CombattantService } from '../services/combattant/combattant.service';


@Component({
  selector: 'app-combattant',
  templateUrl: './combattant.component.html',
  styleUrls: ['./combattant.component.scss']
})
export class CombattantComponent implements OnInit {
  

  @Input() index!: number;
  @Input() Fname?: string;
  @Input() Lname?: string;
  @Input() country?: string;
  @Input() height?: number;
  @Input() weight?: number;
  @Input() reach?: number;
  @Input() age?: number;
  @Input() nbKo?: number;
  @Input() nbVictory?: number;
  @Input() defeat?: boolean;
  @Input() combattantPics?: boolean;
  @Input() predilection?: string;
  @Input() description?: string;
  @Input() id?: number;


  combattants: any = [];
  combattantSubscription : Subscription | undefined;


  constructor(
    private Combattant: CombattantService
    ) {  } 

  ngOnInit(): void {

  }
  

  supr(){
    this.Combattant.delete(this.id);
  }


}

