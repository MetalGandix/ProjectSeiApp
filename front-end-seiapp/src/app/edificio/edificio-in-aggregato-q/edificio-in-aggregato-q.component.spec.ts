import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioInAggregatoQComponent } from './edificio-in-aggregato-q.component';

describe('EdificioInAggregatoQComponent', () => {
  let component: EdificioInAggregatoQComponent;
  let fixture: ComponentFixture<EdificioInAggregatoQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdificioInAggregatoQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdificioInAggregatoQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
