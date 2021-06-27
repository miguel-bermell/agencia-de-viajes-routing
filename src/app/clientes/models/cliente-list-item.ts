export class ClienteList {
  id: string;
  nombre: string;
  dni: string;
  telefono: number;
  direccion: string;
  estadoCivilDesc: string;

  constructor(item?: any) {
    this.id = item?.id ?? '';
    this.nombre = item?.nombre ?? '';
    this.dni = item?.dni ?? '';
    this.telefono = item?.telefono ?? '';
    this.direccion = item?.direccion ?? '';
    this.estadoCivilDesc = item?.estadoCivilDesc ?? '';
  }
}
