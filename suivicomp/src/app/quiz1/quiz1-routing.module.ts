import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quiz1Page } from './quiz1.page';

const routes: Routes = [
  {
    path: '',
    component: Quiz1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quiz1PageRoutingModule {}
