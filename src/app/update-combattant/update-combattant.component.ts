import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Combattants } from '../models/combattants.model';
import { CombattantService } from '../services/combattant/combattant.service';



@Component({
  selector: 'app-update-combattant',
  templateUrl: './update-combattant.component.html',
  styleUrls: ['./update-combattant.component.scss']
})
export class UpdateCombattantComponent implements OnInit {

  change:any;

  public combattant!: Combattants;

  constructor(
    
    private Combattant: CombattantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.combattant = new Combattants;
    this.Combattant.getCombattantById(id).subscribe((value : any) =>{
      console.log(value);
      this.combattant = value;
    });
    
  }

  modif(){
    console.log(this.combattant);
    this.Combattant.updte(this.combattant).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }

}
