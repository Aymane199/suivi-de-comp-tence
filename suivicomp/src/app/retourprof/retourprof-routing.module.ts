import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetourprofPage } from './retourprof.page';

const routes: Routes = [
  {
    path: '',
    component: RetourprofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetourprofPageRoutingModule {}
