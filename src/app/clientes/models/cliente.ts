import { EstadoCivil } from './enums/estado-civil.enum';

export class Cliente {
  id: string;
  nombre: string;
  dni: string;
  telefono: number;
  direccion: string;
  estadoCivilId: EstadoCivil | null;
  email: string;
  fechaNacimiento: Date | null;
  apellidos: string;

  constructor(item?: any) {
    this.id = item?.id ?? '';
    this.nombre = item?.nombre ?? '';
    this.dni = item?.dni ?? '';
    this.telefono = item?.telefono ?? '';
    this.direccion = item?.direccion ?? '';
    this.estadoCivilId = item?.estadoCivilId ?? 99;
    this.email = item?.email ?? '';
    this.apellidos = item?.apellidos ?? '';
    this.fechaNacimiento = item?.fechaNacimiento
      ? new Date(item.fechaNacimiento)
      : null;
  }
}
