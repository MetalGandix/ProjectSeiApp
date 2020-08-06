import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McdmSecondariaComponent } from './mcdm-secondaria.component';

describe('McdmSecondariaComponent', () => {
  let component: McdmSecondariaComponent;
  let fixture: ComponentFixture<McdmSecondariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McdmSecondariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McdmSecondariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
