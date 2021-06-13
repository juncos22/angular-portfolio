import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(public sProfile: ProfileService) {
    this.sProfile.loadProfile();
  }

  ngOnInit(): void {

  }

}
