import { TestBed } from '@angular/core/testing';

import { RoutinService } from './routin-service';

describe('RoutinService', () => {
  let service: RoutinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
