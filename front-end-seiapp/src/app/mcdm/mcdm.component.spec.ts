import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McdmComponent } from './mcdm.component';

describe('McdmComponent', () => {
  let component: McdmComponent;
  let fixture: ComponentFixture<McdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
