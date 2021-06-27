export class EstadoCivilModel {
  id: number | string;
  descripcion: string;

  constructor(item?: any) {
    this.id = item?.id ?? '';
    this.descripcion = item?.descripcion ?? '';
  }
}
