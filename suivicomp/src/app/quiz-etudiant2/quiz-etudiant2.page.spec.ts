import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizEtudiant2Page } from './quiz-etudiant2.page';

describe('QuizEtudiant2Page', () => {
  let component: QuizEtudiant2Page;
  let fixture: ComponentFixture<QuizEtudiant2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizEtudiant2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizEtudiant2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
