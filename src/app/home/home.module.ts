import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { RepositoriesService } from './repositories.service';
import { RepositoryComponent } from './repository/repository.component';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, RepositoryComponent, TimeAgoPipe],
  providers: [RepositoriesService]
})
export class HomePageModule {}
