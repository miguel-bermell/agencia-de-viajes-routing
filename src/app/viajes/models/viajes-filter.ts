// export interface ViajesFilter {
//   nombre: string;
//   destino: string;
//   tipoDeViajeId: string;
// }

export class ViajesFilter {
  nombre: string;
  destino: string;
  tipoDeViajeId: string;

  constructor(item?: any) {
    this.nombre = item?.nombre ?? '';
    this.destino = item?.destino ?? '';
    this.tipoDeViajeId = item?.tipoDeViajeId ?? '';
  }
}
