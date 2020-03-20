import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Connexion2Page } from './connexion2.page';

const routes: Routes = [
  {
    path: '',
    component: Connexion2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Connexion2PageRoutingModule {}
