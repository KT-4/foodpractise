import { TestBed } from '@angular/core/testing';

import { NoodlesService } from './noodles.service';

describe('NoodlesService', () => {
  let service: NoodlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoodlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
