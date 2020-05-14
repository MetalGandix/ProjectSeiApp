import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaSismicaComponent } from './zona-sismica.component';

describe('ZonaSismicaComponent', () => {
  let component: ZonaSismicaComponent;
  let fixture: ComponentFixture<ZonaSismicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaSismicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaSismicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
