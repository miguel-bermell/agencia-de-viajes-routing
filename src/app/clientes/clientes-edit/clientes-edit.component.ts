import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClientesService } from '../services/clientes.service';
import { IdValor } from '../services/id-valor';

@Component({
  selector: 'app-clientes-edit',
  templateUrl: './clientes-edit.component.html',
  styleUrls: ['./clientes-edit.component.scss'],
})
export class ClientesEditComponent implements OnInit {
  clientesForm: FormGroup;
  estadoCivil: any = [];

  id: string = '';

  submited = false;

  constructor(
    fb: FormBuilder,
    private clientesModel: ClientesService,
    route: ActivatedRoute,
    private router: Router
  ) {
    route.params.subscribe((params) => {
      console.log(params);
      this.id = params.id || '';
    });

    this.clientesForm = fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellidos: [''],
      email: [''],
      dni: [''],
      telefono: [''],
      estadoCivilId: [''],
      direccion: [''],
      fechaNacimiento: [null],
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.clientesModel.getById(this.id).subscribe((cliente) => {
        if (cliente) {
          this.clientesForm.patchValue(cliente);
          if (cliente?.fechaNacimiento) {
            const t = this.formatFecha(cliente?.fechaNacimiento);
            this.clientesForm.controls.fechaNacimiento.setValue(t);
          }
        }
      });
    }
    this.clientesModel.getEstadoCivil().subscribe((res) => {
      this.estadoCivil = Array.from(res);
    });
  }

  guardarClick(form: FormGroup): void {
    this.submited = true;

    if (form.valid) {
      const cliente: Cliente = form.value;

      this.clientesModel.save(cliente).subscribe((x) => {
        this.router.navigate(['clientes']);
      });
      this.resetForm();
    }
  }

  resetForm(): void {
    this.submited = false;
    this.clientesForm.reset();
  }

  private formatFecha(date: Date): string {
    const y = date.getFullYear();
    let m: string | number = date.getMonth() + 1;
    let d: string | number = date.getDate();

    if (m < 10) {
      m = `0${m}`;
    }

    if (d < 10) {
      d = `0${d}`;
    }

    return `${y}-${m}-${d}`;
  }
}
