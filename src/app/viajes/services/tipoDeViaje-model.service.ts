import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { tipoDeViajeModel } from '../models/tipoDeViaje';
@Injectable({
  providedIn: 'root',
})
export class TipoDeViajeModelService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getTipoDeViaje(): Observable<tipoDeViajeModel[]> {
    return this.http
      .get<tipoDeViajeModel[]>(`${this.url}/viajes/tipodeviaje`)
      .pipe(map((tipo) => tipo.map((x) => new tipoDeViajeModel(x))));
  }
}
