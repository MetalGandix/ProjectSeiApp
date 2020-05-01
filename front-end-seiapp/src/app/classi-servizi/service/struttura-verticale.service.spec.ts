import { TestBed } from '@angular/core/testing';

import { StrutturaVerticaleService } from './struttura-verticale.service';

describe('StrutturaVerticaleService', () => {
  let service: StrutturaVerticaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrutturaVerticaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
