import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Repository } from './repository.model';

interface Response {
  incomplete_results: boolean;
  items: Repository[];
  total_count: number;
}

@Injectable()
export class RepositoriesService {
  readonly API_URL = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient, private toastCtrl: ToastController) {}

  /**
   * Get the most starred github repos created in the last 30 days.
   * @param page The page number
   */
  getRecentRepos(page: number = 1): Promise<Repository[]> {
    const lastMonth = new Date(new Date().setMonth(new Date().getMonth() - 1))
      .toISOString()
      .split('T')[0];
    return this.http
      .get(
        `${this.API_URL}?q=created:>${lastMonth}&sort=stars&order=desc&page=${page}`
      )
      .pipe(
        map((result: Response) =>
          result.items.map(
            ({
              name,
              description,
              html_url,
              created_at,
              stargazers_count,
              open_issues,
              owner
            }) => ({
              name,
              description,
              html_url,
              created_at: new Date(created_at),
              stargazers_count,
              open_issues,
              owner: {
                avatar_url: owner.avatar_url,
                login: owner.login,
                html_url: owner.html_url
              }
            })
          )
        ),
        catchError(err => {
          this.toastCtrl
            .create({
              message:
                'Error: ' + (err.error ? err.error.message : err.message),
              duration: 2000
            })
            .then(el => el.present());
          return of([]);
        })
      )
      .toPromise();
  }
}
