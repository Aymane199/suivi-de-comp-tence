import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Quiz4Page } from './quiz4.page';

describe('Quiz4Page', () => {
  let component: Quiz4Page;
  let fixture: ComponentFixture<Quiz4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quiz4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Quiz4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
