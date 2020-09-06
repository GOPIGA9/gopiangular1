import { TestBed } from '@angular/core/testing';

import { ApiCallsService } from './api-calls.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiCallsService', () => {
  let service: ApiCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiCallsService],
    });

    service = TestBed.get(ApiCallsService); // * inject service instance
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
