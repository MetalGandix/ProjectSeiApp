import { TestBed } from '@angular/core/testing';

import { AssociazioneInterventoService } from './associazione-intervento.service';

describe('AssociazioneInterventoService', () => {
  let service: AssociazioneInterventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssociazioneInterventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
