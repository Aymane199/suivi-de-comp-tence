import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quizz3PageRoutingModule } from './quizz3-routing.module';

import { Quizz3Page } from './quizz3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quizz3PageRoutingModule
  ],
  declarations: [Quizz3Page]
})
export class Quizz3PageModule {}
