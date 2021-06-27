import { TipoDeViaje } from './enums/tipo-de-viaje.enum';

// export interface Viaje {
//     id: string;
//     nombre: string;
//     tipoDeViajeId: TipoDeViaje;
//     duracion: number;
//     destino: string;
//     plazas: number;
//     precio: number;
//     enOferta: boolean;
//     estado: number;
//     fechaSalida: Date;
// }

export class Viaje {
  id: string;
  nombre: string;
  tipoDeViajeId: TipoDeViaje | null;
  duracion: number;
  destino: string;
  plazas: number;
  precio: number | null;
  enOferta: boolean;
  estado: number | null;
  fechaSalida: Date | null;

  constructor(item?: any) {
    this.id = item?.id ?? '';
    this.nombre = item?.nombre ?? '';
    this.tipoDeViajeId = item?.tipoDeViajeId | item?.TipoDeViajeId ?? null;
    this.duracion = item?.duracion ?? 0;
    this.destino = item?.destino ?? '';
    this.plazas = item?.plazas ?? 0;
    this.precio = item?.precio ?? null;
    this.enOferta = item?.enOferta ?? false;
    this.estado = item?.estado ?? null;
    this.fechaSalida = item?.fechaSalida ? new Date(item.fechaSalida) : null;
  }
}
