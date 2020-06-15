import { TestBed } from '@angular/core/testing';

import { CalculoImcService } from './calculoimc.service';

describe('CalculoimcService', () => {
  let service: CalculoImcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculoImcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
