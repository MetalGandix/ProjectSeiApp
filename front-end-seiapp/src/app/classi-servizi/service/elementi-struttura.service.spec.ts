import { TestBed } from '@angular/core/testing';

import { ElementiStrutturaService } from './elementi-struttura.service';

describe('ElementiStrutturaService', () => {
  let service: ElementiStrutturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementiStrutturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
