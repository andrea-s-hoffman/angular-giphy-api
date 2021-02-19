import { TestBed } from '@angular/core/testing';

import { GifHubService } from './gif-hub.service';

describe('GifHubService', () => {
  let service: GifHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
