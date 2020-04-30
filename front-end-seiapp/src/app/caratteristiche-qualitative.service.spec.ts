import { TestBed } from '@angular/core/testing';

import { CaratteristicheQualitativeService } from './caratteristiche-qualitative.service';

describe('CaratteristicheQualitativeService', () => {
  let service: CaratteristicheQualitativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaratteristicheQualitativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
