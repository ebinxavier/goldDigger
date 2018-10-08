import { TestBed, inject } from '@angular/core/testing';

import { RaTranslationsService } from './ra-translations.service';

describe('RaTranslationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaTranslationsService]
    });
  });

  it('should be created', inject([RaTranslationsService], (service: RaTranslationsService) => {
    expect(service).toBeTruthy();
  }));
});
