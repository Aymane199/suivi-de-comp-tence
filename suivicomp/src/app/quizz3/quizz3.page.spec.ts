import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Quizz3Page } from './quizz3.page';

describe('Quizz3Page', () => {
  let component: Quizz3Page;
  let fixture: ComponentFixture<Quizz3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizz3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Quizz3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
