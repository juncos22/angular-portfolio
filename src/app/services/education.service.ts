import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  educations?: Education[];
  constructor(private fireDb: AngularFirestore) {
    this.loadEducations();
  }
  loadEducations() {
    this.fireDb.collection('educations').valueChanges()
      .subscribe(data => {
        this.educations = data as Education[];
        // console.log(this.educations);
      });
  }
}
