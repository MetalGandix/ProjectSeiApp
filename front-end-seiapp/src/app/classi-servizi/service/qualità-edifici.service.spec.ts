import { TestBed } from '@angular/core/testing';

import { QualitàEdificiService } from './qualità-edifici.service';

describe('QualitàEdificiService', () => {
  let service: QualitàEdificiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualitàEdificiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
