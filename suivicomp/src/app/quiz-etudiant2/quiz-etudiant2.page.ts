import {Component, OnInit} from '@angular/core';
import {TestService} from '../services/test.service';
import {ProfilService} from '../profil.service';

@Component({
    selector: 'app-quiz-etudiant2',
    templateUrl: './quiz-etudiant2.page.html',
    styleUrls: ['./quiz-etudiant2.page.scss'],
})
export class QuizEtudiant2Page implements OnInit {

    testService: TestService;
    currentQuestionIndex: number;
    questionCount: number;
    currentQuestion: string;
    currentResponses: string[];
    userResponse: boolean[] = [];
    currentCorrectResponse : number;

    constructor(testService: TestService, private profilService: ProfilService) {
        this.testService = testService;
        this.questionCount = testService.questions.length;
        this.currentQuestionIndex = 0;
        this.currentQuestion = this.testService.questions[this.currentQuestionIndex];
        this.currentCorrectResponse = this.testService.correctResponse[this.currentQuestionIndex];
        this.currentResponses = this.testService.responses[this.currentQuestionIndex].split("-");
        this.profilService.reponse=[];

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
        if(flag)
            this.profilService.reponse.push(1);
        else
            this.profilService.reponse.push(0);

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
        console.log(this.profilService.reponse);
    }
}
