import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaInterventiDisponibiliComponent } from './visualizza-interventi-disponibili.component';

describe('VisualizzaInterventiDisponibiliComponent', () => {
  let component: VisualizzaInterventiDisponibiliComponent;
  let fixture: ComponentFixture<VisualizzaInterventiDisponibiliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizzaInterventiDisponibiliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaInterventiDisponibiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
