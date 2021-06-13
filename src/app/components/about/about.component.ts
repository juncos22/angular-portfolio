import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { Skill } from 'src/app/models/skill';
import { ExpertiseService } from 'src/app/services/expertise.service';
import { ProfileService } from 'src/app/services/profile.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(public sProfile: ProfileService,
    public sExpertise: ExpertiseService,
    public sSkill: SkillService) {
  }

  ngOnInit(): void {

  }

}
