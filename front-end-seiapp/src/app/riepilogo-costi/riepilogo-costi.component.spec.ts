import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiepilogoCostiComponent } from './riepilogo-costi.component';

describe('RiepilogoCostiComponent', () => {
  let component: RiepilogoCostiComponent;
  let fixture: ComponentFixture<RiepilogoCostiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiepilogoCostiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiepilogoCostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
