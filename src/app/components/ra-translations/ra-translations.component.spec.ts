import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaTranslationsComponent } from './ra-translations.component';

describe('RaTranslationsComponent', () => {
  let component: RaTranslationsComponent;
  let fixture: ComponentFixture<RaTranslationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaTranslationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
