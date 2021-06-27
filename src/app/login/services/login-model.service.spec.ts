import { TestBed } from '@angular/core/testing';

import { LoginModelService } from './login-model.service';

describe('LoginModelService', () => {
  let service: LoginModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
