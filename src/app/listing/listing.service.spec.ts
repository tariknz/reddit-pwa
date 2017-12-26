import { TestBed, inject } from '@angular/core/testing';

import { ListingService } from './listing.service';
import { BASE_URL_TOKEN } from '../common/tokens/base-url-token';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ListingService,
        {
          provide: BASE_URL_TOKEN,
          useValue: 'https://test.com/'
        }]
    });
  });

  it('should be created', inject([ListingService], (service: ListingService) => {
    expect(service).toBeTruthy();
  }));
});
