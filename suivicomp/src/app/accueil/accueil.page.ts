import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../profil.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  resultat: number;
  constructor(private pr: ProfilService) {
      this.resultat = this.pr.Resultat;
  }

  ngOnInit() {
  }

  ajout() {
    this.pr.addresult();
    this.resultat = this.pr.Resultat;
  }
}
