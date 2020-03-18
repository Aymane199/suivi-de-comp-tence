import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetourprofPageRoutingModule } from './retourprof-routing.module';

import { RetourprofPage } from './retourprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetourprofPageRoutingModule
  ],
  declarations: [RetourprofPage]
})
export class RetourprofPageModule {}
