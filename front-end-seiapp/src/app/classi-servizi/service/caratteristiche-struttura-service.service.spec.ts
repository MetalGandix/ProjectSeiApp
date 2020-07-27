import { TestBed } from '@angular/core/testing';

import { CaratteristicheStrutturaServiceService } from './caratteristiche-struttura-service.service';

describe('CaratteristicheStrutturaServiceService', () => {
  let service: CaratteristicheStrutturaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaratteristicheStrutturaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
