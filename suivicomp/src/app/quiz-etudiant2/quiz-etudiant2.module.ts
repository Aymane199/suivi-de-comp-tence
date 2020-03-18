import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizEtudiant2PageRoutingModule } from './quiz-etudiant2-routing.module';

import { QuizEtudiant2Page } from './quiz-etudiant2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizEtudiant2PageRoutingModule
  ],
  declarations: [QuizEtudiant2Page]
})
export class QuizEtudiant2PageModule {}
