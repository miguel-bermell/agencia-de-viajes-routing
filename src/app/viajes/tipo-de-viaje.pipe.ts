import { Pipe, PipeTransform } from '@angular/core';
import { TipoDeViaje } from './models/enums/tipo-de-viaje.enum';
import { ViajesModelService } from './services/viajes-model.service';

@Pipe({
  name: 'tipoDeViaje',
})
export class TipoDeViajePipe implements PipeTransform {
  constructor(private viajesModelService: ViajesModelService) {}

  transform(tipoDeViajeId: number | null): string {
    if (!tipoDeViajeId) {
      return '---';
    }

    // const tiposViaje = this.viajesModelService.getTiposDeViajes();
    // const v = tiposViaje.find((x) => x.id == tipoDeViajeId)?.valor;
    // return v ? v : '----';
    return '';
  }

  /*   transform(tipoDeViajeId: number): unknown {
    return TipoDeViaje[tipoDeViajeId];
  } */

  tipos: { [key: number]: string } = {
    1: 'Familiar',
    2: 'Trabajo',
    3: 'Luna de Miel',
    4: 'Ahora mismo, por favor',
    5: 'Aventura',
    6: 'Cultural',
    7: 'Deluxury',
    8: 'Gastronomico',
  };
}
