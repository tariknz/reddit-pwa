import { TestBed, inject } from '@angular/core/testing';

import { SharerService } from './sharer.service';

describe('SharerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharerService]
    });
  });

  it('should be created', inject([SharerService], (service: SharerService) => {
    expect(service).toBeTruthy();
  }));
});
