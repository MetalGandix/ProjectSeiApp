import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaInterventoComponent } from './modifica-intervento.component';

describe('ModificaInterventoComponent', () => {
  let component: ModificaInterventoComponent;
  let fixture: ComponentFixture<ModificaInterventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaInterventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaInterventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
