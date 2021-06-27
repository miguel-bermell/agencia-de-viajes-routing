export class tipoDeViajeModel {
  id: number | string;
  nombre: string;

  constructor(item?: any) {
    this.id = item?.id ?? '';
    this.nombre = item?.nombre ?? '';
  }
}
