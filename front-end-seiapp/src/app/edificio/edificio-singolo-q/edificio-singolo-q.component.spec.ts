import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioSingoloQComponent } from './edificio-singolo-q.component';

describe('EdificioSingoloQComponent', () => {
  let component: EdificioSingoloQComponent;
  let fixture: ComponentFixture<EdificioSingoloQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdificioSingoloQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdificioSingoloQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
