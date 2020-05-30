import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportInterventoComponent } from './report-intervento.component';

describe('ReportInterventoComponent', () => {
  let component: ReportInterventoComponent;
  let fixture: ComponentFixture<ReportInterventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportInterventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportInterventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
