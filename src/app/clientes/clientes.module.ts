import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';

import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesEditComponent } from './clientes-edit/clientes-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientesListComponent, ClientesEditComponent],
  imports: [CommonModule, ClientesRoutingModule, ReactiveFormsModule],
})
export class ClientesModule {}
