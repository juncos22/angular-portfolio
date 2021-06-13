import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project?: Project;

  constructor(private route: ActivatedRoute, private sPortfolio: PortfolioService) {

  }

  ngOnInit(): void {
    this.findProject();
  }

  findProject() {
    this.route.paramMap.subscribe(params => {
      var category = params.get('category');
      var projectName = params.get('project');
      this.project = this.sPortfolio.categories?.find(
        c => c.type === category
      )?.projects?.find(p => p.name === projectName);
      // console.log(this.project);
    });
  }
}
