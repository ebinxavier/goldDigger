import { TestBed, inject } from '@angular/core/testing';

import { ScrapeCompaniesService } from './scrape-companies.service';

describe('ScrapeCompaniesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrapeCompaniesService]
    });
  });

  it('should be created', inject([ScrapeCompaniesService], (service: ScrapeCompaniesService) => {
    expect(service).toBeTruthy();
  }));
});
