import { Component, OnInit } from '@angular/core';
import {ProfilService} from "../profil.service";
import {TestService} from "../services/test.service";

@Component({
  selector: 'app-quiz4',
  templateUrl: './quiz4.page.html',
  styleUrls: ['./quiz4.page.scss'],
})


export class Quiz4Page implements OnInit {

  variable1: string;
  currentQuestionIndex: number;
  questionCount: number;
  currentQuestion: string;
  currentResponses: string[];
  userResponse: boolean[] = [];
  currentCorrectResponse : number;


  constructor(private testService:TestService) {
    this.variable1 = "zoheir";
    this.questionCount = testService.questions.length;
    this.currentQuestionIndex = 0;
    this.currentQuestion = this.testService.questions[this.currentQuestionIndex];
    this.currentCorrectResponse = this.testService.correctResponse[this.currentQuestionIndex];
    this.currentResponses = this.testService.responses[this.currentQuestionIndex].split("-");


  }

  ngOnInit() {
  }
  responseVerification(){
    let flag = false;
    for (let i = 0 ; i<this.userResponse.length;i++){
      if(this.userResponse[i] == true){
        if(i == this.currentCorrectResponse ){
          flag = true;
        }else{
          flag = false;
          break;
        }
      }
    }

    this.userResponse = [];
  }

  questionSuivant() {
    this.responseVerification();
    this.currentQuestionIndex++;
    this.currentQuestion = this.testService.questions[this.currentQuestionIndex];
    this.currentCorrectResponse = this.testService.correctResponse[this.currentQuestionIndex];
    this.currentResponses = this.testService.responses[this.currentQuestionIndex].split("-");
  }

  quizTerminer() {
    this.responseVerification();
  }

}
