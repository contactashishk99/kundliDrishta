import { TestBed } from '@angular/core/testing';

import { DatabeaseService } from './databease.service';

describe('DatabeaseService', () => {
  let service: DatabeaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabeaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
