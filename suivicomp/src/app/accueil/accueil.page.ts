import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../profil.service';
import {TestService} from '../services/test.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  resultat: number;
  private nbTrue: number;
  private nbFalse: number;
  
  constructor(private pr: ProfilService, private ts: TestService) {
  }

  ngOnInit() {
    this.nbTrue= 0;
    this.nbFalse = 0;
    for (let i = 0; i < this.ts.responses.length; i++) {
      if(this.pr.reponse[i] == 1) {
        this.nbTrue++;
      } else {
        this.nbFalse++;
      }
    }
    this.resultat = this.nbTrue;
  }
}
