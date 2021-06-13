import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from '../models/category';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  categories?: Category[];
  constructor(private fireDb: AngularFirestore) {
    this.loadProjects();
  }

  loadProjects() {
    this.fireDb.collection('categories').valueChanges()
      .subscribe(data => {
        this.categories = data as Category[];
        // console.log(this.categories);
      });
  }
}
