import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Connexion2PageRoutingModule } from './connexion2-routing.module';

import { Connexion2Page } from './connexion2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Connexion2PageRoutingModule
  ],
  declarations: [Connexion2Page]
})
export class Connexion2PageModule {}
