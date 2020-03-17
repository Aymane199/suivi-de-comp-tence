import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quizz3Page } from './quizz3.page';

const routes: Routes = [
  {
    path: '',
    component: Quizz3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quizz3PageRoutingModule {}
