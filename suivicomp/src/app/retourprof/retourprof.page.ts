import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../profil.service';
import {TestService} from '../services/test.service';

@Component({
  selector: 'app-retourprof',
  templateUrl: './retourprof.page.html',
  styleUrls: ['./retourprof.page.scss'],
})
export class RetourprofPage implements OnInit {
    Resultat: number;
  private nbTrue: number;
  private nbFalse: number;
  retour: string;

  constructor(private pr: ProfilService, private ts: TestService) { }

  ngOnInit() {
    this.nbTrue = 0;
    this.nbFalse = 0;
    for (let i = 0; i < this.ts.responses.length; i++) {
      if (this.pr.reponse[i] == 1) {
        this.nbTrue++;
      } else {
        this.nbFalse++;
      }
    }
    this.Resultat = this.nbTrue;

    if (this.Resultat == 0) {
        this.retour = 'De grosses lacunes revoir tous le cours de javascript';
    }
    if (this.Resultat == 1) {
      this.retour = 'Certaines lacunes revoir le cours de javascript';
    }
    if (this.Resultat == 2){
      this.retour  = 'Résultat moyen revoir les parties flou du cour de javascript';
    }
    if (this.Resultat == 3){
      this.retour = 'Super tu as eu un bon score il suffit de réviser encore un peut et tu seras ok sur le javascript';
    }
    if (this.Resultat == 4){
      this.retour = 'Bravo ! tu as eu tout bon.';
    }
  }

}
