import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Quiz1Page } from './quiz1.page';

describe('Quiz1Page', () => {
  let component: Quiz1Page;
  let fixture: ComponentFixture<Quiz1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quiz1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Quiz1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
