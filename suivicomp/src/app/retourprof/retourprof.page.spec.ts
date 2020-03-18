import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetourprofPage } from './retourprof.page';

describe('RetourprofPage', () => {
  let component: RetourprofPage;
  let fixture: ComponentFixture<RetourprofPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetourprofPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetourprofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
