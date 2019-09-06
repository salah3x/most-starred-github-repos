import { Component, OnInit } from '@angular/core';

import { RepositoriesService } from './repositories.service';
import { Repository } from './repository.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  repos: Repository[];
  page = 1;
  loading = true;

  constructor(private service: RepositoriesService) {}

  ngOnInit() {
    this.service.getRecentRepos().then(rs => {
      this.loading = false;
      this.repos = rs;
    });
  }

  loadRepos(event: any) {
    this.page++;
    this.service.getRecentRepos(this.page).then(rs => {
      this.repos.push(...rs);
      event.target.complete();
    });
  }
}
