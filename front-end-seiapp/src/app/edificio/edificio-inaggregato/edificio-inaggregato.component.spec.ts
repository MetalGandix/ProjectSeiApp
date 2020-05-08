import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioInaggregatoComponent } from './edificio-inaggregato.component';

describe('EdificioInaggregatoComponent', () => {
  let component: EdificioInaggregatoComponent;
  let fixture: ComponentFixture<EdificioInaggregatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdificioInaggregatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdificioInaggregatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
