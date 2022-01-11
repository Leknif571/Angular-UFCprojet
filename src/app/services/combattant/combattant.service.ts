import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Combattants } from 'src/app/models/combattants.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CombattantService {

  private dbPath = '/combattants';
  combattantRef: AngularFirestoreCollection<Combattants>;


  constructor(
    private db: AngularFirestore
  ) {
    this.combattantRef = db.collection(this.dbPath);
   }

   getAllCombattant(): any{
     return this.combattantRef.snapshotChanges().pipe(
       map((changes:any) => {
         return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
       })   
     );
   }

  getCombattantById(id: any): any{

    return new Observable(obs => {
      this.combattantRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      })
    })
  }

  updte(combattant: Combattants){
    console.log(combattant);
    console.log(combattant.id);
    return new Observable(obs => {
      this.combattantRef.doc(combattant.id).update(combattant);
      obs.next();
    });
  }

  delete(id:any){

    this.db.doc(`combattants/${id}`).delete();
  }

  setNewCombattant(combattant:Combattants):any{
     return new Observable(obs => {
       this.combattantRef.add({...combattant}).then(() => {
         obs.next();
       })
     })
   }
}
