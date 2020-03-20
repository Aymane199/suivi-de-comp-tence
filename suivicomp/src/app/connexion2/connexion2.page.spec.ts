import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Connexion2Page } from './connexion2.page';

describe('Connexion2Page', () => {
  let component: Connexion2Page;
  let fixture: ComponentFixture<Connexion2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Connexion2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Connexion2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
