import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListCombattantComponent } from './list-combattant/list-combattant.component';
import { NewCombattantComponent } from './new-combattant/new-combattant.component';
import { UpdateCombattantComponent } from './update-combattant/update-combattant.component';

const routes: Routes = [
  {
    path: "" ,
    component: AccueilComponent
  },
  {
    path: "new" ,
    component: NewCombattantComponent
  },
  {
    path: "combattants" ,
    component: ListCombattantComponent
  },
  {
    path: "modif/:id" ,
    component: UpdateCombattantComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
