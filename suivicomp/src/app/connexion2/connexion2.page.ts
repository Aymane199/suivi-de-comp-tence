import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../profil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion2',
  templateUrl: './connexion2.page.html',
  styleUrls: ['./connexion2.page.scss'],
})
export class Connexion2Page implements OnInit {

  constructor(private pr: ProfilService, private router: Router) { }
    private addresse: string = 'MarineMiller@gmail.com';
    private motDePasse: string;
  ngOnInit() {
  }
  Connexion(){
    if((this.pr.Email == this.addresse) && (this.pr.Pass == this.motDePasse) ){
      this.router.navigate(['/accueil']);
    }
    else{
      alert("Email ou Mot de passe incorrect");
    }
  }

}
