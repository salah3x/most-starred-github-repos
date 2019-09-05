import { Component, Input } from '@angular/core';

import { Repository } from '../repository.model';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent {
  @Input() repo: Repository;

  constructor() {}
}
