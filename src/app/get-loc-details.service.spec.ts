import { TestBed, inject } from '@angular/core/testing';

import { GetLocDetailsService } from './get-loc-details.service';

describe('GetLocDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetLocDetailsService]
    });
  });

  it('should be created', inject([GetLocDetailsService], (service: GetLocDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
