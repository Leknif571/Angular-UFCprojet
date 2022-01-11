import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CombattantService } from '../services/combattant/combattant.service';

@Component({
  selector: 'app-list-combattant',
  templateUrl: './list-combattant.component.html',
  styleUrls: ['./list-combattant.component.scss']
})
export class ListCombattantComponent implements OnInit {
  combattants!:any
  constructor(
    private Combattant: CombattantService
  ) { }

  ngOnInit(): void {
    this.Combattant.getAllCombattant().subscribe((data: any) => {
      this.combattants = data;
    });
  }

}
