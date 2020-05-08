import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioSingoloComponent } from './edificio-singolo.component';

describe('EdificioSingoloComponent', () => {
  let component: EdificioSingoloComponent;
  let fixture: ComponentFixture<EdificioSingoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdificioSingoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdificioSingoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
