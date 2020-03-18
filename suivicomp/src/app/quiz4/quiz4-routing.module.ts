import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quiz4Page } from './quiz4.page';

const routes: Routes = [
  {
    path: '',
    component: Quiz4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quiz4PageRoutingModule {}
