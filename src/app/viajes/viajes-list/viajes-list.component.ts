import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDeViaje } from '../models/enums/tipo-de-viaje.enum';
import { tipoDeViajeModel } from '../models/tipoDeViaje';
import { Viaje } from '../models/viaje';
import { ViajesFilter } from '../models/viajes-filter';
import { IdValor } from '../services/id-valor';
import { TipoDeViajeModelService } from '../services/tipoDeViaje-model.service';
import { ViajesModelService } from '../services/viajes-model.service';

@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.scss'],
})
export class ViajesListComponent implements OnInit {
  viajes: Viaje[] = [];
  tipoDeViaje: tipoDeViajeModel[] = [];
  mostrarTarjetas = false;

  constructor(
    private viajesModel: ViajesModelService,
    private tiposDeViajeModel: TipoDeViajeModelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarViajes();
    this.tiposDeViajeModel.getTipoDeViaje().subscribe((res) => {
      this.tipoDeViaje = res;
      console.log(res);
    });
  }

  cambiarVistaClick() {
    this.mostrarTarjetas = !this.mostrarTarjetas;
  }

  searchClick(filtro: ViajesFilter): void {
    if (filtro) {
      this.viajesModel.buscar(filtro).subscribe((result) => {
        this.viajes = result;
      });
    }
  }

  eliminarClick(id: string): void {
    if (id && confirm('Estas seguro que deseas eliminar el viaje?')) {
      this.viajesModel.eliminar(id).subscribe((result) => {
        if (result) {
          this.cargarViajes();
        }
      });
    }
  }

  editarClick(id: string): void {
    if (id) {
      this.router.navigate(['viajes/editar', id]);
    }
  }

  private cargarViajes() {
    this.viajesModel.getViajes().subscribe((result) => {
      this.viajes = result;
    });
  }
}
