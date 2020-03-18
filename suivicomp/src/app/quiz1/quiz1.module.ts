import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quiz1PageRoutingModule } from './quiz1-routing.module';

import { Quiz1Page } from './quiz1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quiz1PageRoutingModule
  ],
  declarations: [Quiz1Page]
})
export class Quiz1PageModule {}
