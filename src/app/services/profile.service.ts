import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile?: Profile;

  constructor(private fireDb: AngularFirestore) {
    this.loadProfile();
  }
  loadProfile() {
    this.fireDb.collection('profiles').doc('TfoDezVikvFssse0u04k').get().subscribe(data => {
      this.profile = data.data() as Profile;
      // console.log(this.profile);
    });
  }
}
