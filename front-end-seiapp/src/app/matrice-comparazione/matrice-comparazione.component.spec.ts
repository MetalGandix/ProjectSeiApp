import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriceComparazioneComponent } from './matrice-comparazione.component';

describe('MatriceComparazioneComponent', () => {
  let component: MatriceComparazioneComponent;
  let fixture: ComponentFixture<MatriceComparazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriceComparazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriceComparazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
