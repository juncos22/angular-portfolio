import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Expertise } from '../models/expertise';

@Injectable({
  providedIn: 'root'
})
export class ExpertiseService {
  expertises?: Expertise[];
  constructor(private fireDb: AngularFirestore) {
    this.loadExpertises();
  }
  loadExpertises() {
    this.fireDb.collection('expertises').valueChanges()
      .subscribe(data => {
        this.expertises = data as Expertise[];
        // console.log(this.expertises);
      });
  }
}
