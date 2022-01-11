import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NewCombattantComponent } from './new-combattant/new-combattant.component';
import { ListCombattantComponent } from './list-combattant/list-combattant.component';
import { UpdateCombattantComponent } from './update-combattant/update-combattant.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore'


import { CombattantService } from './services/combattant/combattant.service';
import { CombattantComponent } from './combattant/combattant.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NewCombattantComponent,
    ListCombattantComponent,
    UpdateCombattantComponent,
    CombattantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    CombattantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
