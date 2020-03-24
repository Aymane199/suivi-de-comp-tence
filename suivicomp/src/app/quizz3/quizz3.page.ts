import { Component, OnInit } from '@angular/core';
import {TestService} from '../services/test.service';
import {ProfilService} from '../profil.service';

@Component({
  selector: 'app-quizz3',
  templateUrl: './quizz3.page.html',
  styleUrls: ['./quizz3.page.scss'],
})
export class Quizz3Page implements OnInit {

  prenom:string;
  nbQuestion:number;
  nbTrue:number;
  nbFalse:number;
  points:number;
  constructor(private testService: TestService, private profilService : ProfilService) { }

  ngOnInit() {
    this.prenom=this.profilService.Prenom;
    this.nbQuestion=this.profilService.reponse.length;
    this.nbTrue=0;
    this.nbFalse=0;
    for(let i=0;i<this.profilService.reponse.length;i++){
      if(this.profilService.reponse[i]==1){
        this.nbTrue++;
      }
      else{
        this.nbFalse++;
      }
    }
    this.points=this.nbTrue*1000;
  }

}
