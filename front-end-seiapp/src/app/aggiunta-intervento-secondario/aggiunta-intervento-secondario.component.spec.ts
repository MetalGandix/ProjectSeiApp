import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiuntaInterventoSecondarioComponent } from './aggiunta-intervento-secondario.component';

describe('AggiuntaInterventoSecondarioComponent', () => {
  let component: AggiuntaInterventoSecondarioComponent;
  let fixture: ComponentFixture<AggiuntaInterventoSecondarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggiuntaInterventoSecondarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiuntaInterventoSecondarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
