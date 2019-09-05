import { TestBed } from '@angular/core/testing';

import { RepositoriesService } from './repositories.service';
import { HttpClientModule } from '@angular/common/http';

describe('RepositoriesService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RepositoriesService]
    })
  );

  it('should be created', () => {
    const service: RepositoriesService = TestBed.get(RepositoriesService);
    expect(service).toBeTruthy();
  });
});
