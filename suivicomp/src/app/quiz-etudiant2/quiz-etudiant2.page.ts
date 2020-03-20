import {Component, OnInit} from '@angular/core';
import {TestService} from '../services/test.service';

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

    constructor(testService: TestService) {

        this.testService = testService;
        this.questionCount = testService.questions.length;
        this.currentQuestionIndex = 0;
        this.currentQuestion = this.testService.questions[this.currentQuestionIndex];
        this.currentResponses = this.testService.responses[this.currentQuestionIndex].split("-");

    }

    ngOnInit() {
    }

  questionSuivant() {

    this.currentQuestionIndex++;
    this.currentQuestion = this.testService.questions[this.currentQuestionIndex];
    this.currentResponses = this.testService.responses[this.currentQuestionIndex].split("-");
  }

    quizTerminer() {
    }
}
