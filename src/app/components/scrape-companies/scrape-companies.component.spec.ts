import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapeCompaniesComponent } from './scrape-companies.component';

describe('ScrapeCompaniesComponent', () => {
  let component: ScrapeCompaniesComponent;
  let fixture: ComponentFixture<ScrapeCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrapeCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapeCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
