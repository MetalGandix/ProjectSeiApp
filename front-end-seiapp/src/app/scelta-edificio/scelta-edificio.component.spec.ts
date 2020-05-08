import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceltaEdificioComponent } from './scelta-edificio.component';

describe('SceltaEdificioComponent', () => {
  let component: SceltaEdificioComponent;
  let fixture: ComponentFixture<SceltaEdificioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceltaEdificioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceltaEdificioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
