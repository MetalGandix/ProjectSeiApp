import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoStrutturaComponent } from './elemento-struttura.component';

describe('ElementoStrutturaComponent', () => {
  let component: ElementoStrutturaComponent;
  let fixture: ComponentFixture<ElementoStrutturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementoStrutturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoStrutturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
