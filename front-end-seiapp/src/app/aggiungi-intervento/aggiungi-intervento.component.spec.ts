import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiInterventoComponent } from './aggiungi-intervento.component';

describe('AggiungiInterventoComponent', () => {
  let component: AggiungiInterventoComponent;
  let fixture: ComponentFixture<AggiungiInterventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggiungiInterventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiInterventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
