import { TestBed } from '@angular/core/testing';

import { RisultatoSelezioneService } from './risultato-selezione.service';

describe('RisultatoSelezioneService', () => {
  let service: RisultatoSelezioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RisultatoSelezioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
