import { TestBed } from '@angular/core/testing';

import { ThepeerService } from './thepeer.service';

describe('ThepeerService', () => {
  let service: ThepeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThepeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
