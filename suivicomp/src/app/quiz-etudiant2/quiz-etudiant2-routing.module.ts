import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizEtudiant2Page } from './quiz-etudiant2.page';

const routes: Routes = [
  {
    path: '',
    component: QuizEtudiant2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizEtudiant2PageRoutingModule {}
