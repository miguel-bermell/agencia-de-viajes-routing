import { TestBed } from '@angular/core/testing';

import { ViajesModelService } from './viajes-model.service';

describe('ViajesModelService', () => {
  let service: ViajesModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajesModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
