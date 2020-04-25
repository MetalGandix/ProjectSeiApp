import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuazioneInterventiComponent } from './individuazione-interventi.component';

describe('IndividuazioneInterventiComponent', () => {
  let component: IndividuazioneInterventiComponent;
  let fixture: ComponentFixture<IndividuazioneInterventiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividuazioneInterventiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividuazioneInterventiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
