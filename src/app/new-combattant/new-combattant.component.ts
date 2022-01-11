import { Component, OnInit, Input } from '@angular/core';
import { Combattants } from '../models/combattants.model';
import { CombattantService } from '../services/combattant/combattant.service';

@Component({
  selector: 'app-new-combattant',
  templateUrl: './new-combattant.component.html',
  styleUrls: ['./new-combattant.component.scss']
})
export class NewCombattantComponent implements OnInit {

  public combattant!: Combattants
  listPys:any = [];
  constructor(
    private Combattants: CombattantService
  ) { }

  ngOnInit(): void {
    this.combattant = new Combattants();

    const selectReg = document.getElementById('selectPys');

    //J'ai essayer de mettre en place une api pour lister tout les pays et recupérer tout les drapeaux
    //Mais je n'arrive pas a afficher quelque chose même avec d'autre api comme geo.api.gouv
    
    // fetch("https://geo.api.gouv.fr/regions", {
    //   "method": "GET",
    // })
    // .then(response => {
    //   console.log(response);
    //   let createOpt = document.createElement('option');
    //   createOpt.textContent = response.code+" "+response.nom
    //   selectReg?.appendChild(createOpt);
    //   createOpt.value = response.code  
    // })
    // .catch(err => {
    //   console.error(err);
    // });

  }

  add() {
    this.Combattants.setNewCombattant(this.combattant).subscribe(() => {
      this.combattant = new Combattants;
      
    })
  }

}
