import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quiz4PageRoutingModule } from './quiz4-routing.module';

import { Quiz4Page } from './quiz4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quiz4PageRoutingModule
  ],
  declarations: [Quiz4Page]
})
export class Quiz4PageModule {}
