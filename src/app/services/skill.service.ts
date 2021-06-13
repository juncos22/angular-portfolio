import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skills?: Skill[];
  constructor(private fireDb: AngularFirestore) {
    this.loadSkills();
  }
  loadSkills() {
    this.fireDb.collection('skills').valueChanges()
      .subscribe(data => {
        this.skills = data as Skill[];
        // console.log(this.skills);
      });
  }
}
