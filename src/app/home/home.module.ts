import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { RepositoriesService } from './repositories.service';

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
  declarations: [HomePage],
  providers: [RepositoriesService]
})
export class HomePageModule {}
