import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tipoDeViajeModel } from '../../models/tipoDeViaje';
import { ViajesFilter } from '../../models/viajes-filter';
import { IdValor } from '../../services/id-valor';
import { TipoDeViajeModelService } from '../../services/tipoDeViaje-model.service';

@Component({
  selector: 'app-viajes-filter',
  templateUrl: './viajes-filter.component.html',
  styleUrls: ['./viajes-filter.component.scss'],
})
export class ViajesFilterComponent implements OnInit {
  tiposDeViaje: tipoDeViajeModel[] = [];
  @Output() search = new EventEmitter<ViajesFilter>();

  filterForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private tiposDeViajeModel: TipoDeViajeModelService
  ) {
    this.filterForm = fb.group({
      nombre: [''],
      tipoDeViajeId: [''],
      destino: [''],
    });
  }

  ngOnInit(): void {
    this.tiposDeViajeModel.getTipoDeViaje().subscribe((res) => {
      this.tiposDeViaje = res;
      console.log(res);
    });
  }

  searchClick(form: FormGroup) {
    this.search.emit(new ViajesFilter(form.value));
  }

  limpiarFiltro() {
    this.filterForm.reset();
    this.search.emit(new ViajesFilter());
  }
}
