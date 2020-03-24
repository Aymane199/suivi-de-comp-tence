import {Component, OnInit} from '@angular/core';
import {TestService} from '../services/test.service';
import {ProfilService} from '../profil.service';
import {BehaviorSubject} from "rxjs";

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
    time: BehaviorSubject<string> = new BehaviorSubject('00:00');
    timer:number;
    interval;
    startDuration =1;

    constructor(testService: TestService, private profilService: ProfilService) {
        this.testService = testService;
        this.questionCount = testService.questions.length;

    }

    ngOnInit() {

    }
    ionViewWillEnter(){
        this.currentQuestionIndex = 0;
        this.currentQuestion = this.testService.questions[this.currentQuestionIndex];
        this.currentCorrectResponse = this.testService.correctResponse[this.currentQuestionIndex];
        this.currentResponses = this.testService.responses[this.currentQuestionIndex].split("-");
        this.profilService.reponse=[];
        this.profilService.reponse.length=0;
        this.startTimer(this.startDuration);
    }

    startTimer(duration: number){
        clearInterval(this.interval);
        this.timer = duration*60;
        this.updateTimerValue();
        this.interval = setInterval(()=>{
            this.updateTimerValue();
        },1000);
    }

    updateTimerValue(){
        let minutes :any = this.timer/60;
        let seconde: any = this.timer%60;

        minutes= String('0'+Math.floor(minutes)).slice(-2);
        seconde = String('0'+Math.floor(seconde)).slice(-2);
        const text = minutes +':'+seconde;
        this.time.next(text);
        --this.timer;
        if(this.timer<-1){
            if(this.currentQuestionIndex+1 != this.questionCount){
                this.startTimer(this.startDuration);
                this.questionSuivant();
            }else{
                clearInterval(this.interval);
                this.time.next('00:00');
                //this.quizTerminer();
            }
        }
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
        this.startTimer(1);
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
