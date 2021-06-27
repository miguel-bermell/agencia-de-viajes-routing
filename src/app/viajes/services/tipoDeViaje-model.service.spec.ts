/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipoDeViajeModelService } from './tipoDeViaje-model.service';

describe('Service: TipoDeViajeModel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoDeViajeModelService]
    });
  });

  it('should ...', inject([TipoDeViajeModelService], (service: TipoDeViajeModelService) => {
    expect(service).toBeTruthy();
  }));
});
