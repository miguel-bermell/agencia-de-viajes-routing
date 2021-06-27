import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesEditComponent } from './clientes-edit/clientes-edit.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';

const routes: Routes = [
  { path: '', component: ClientesListComponent },
  { path: 'editar', component: ClientesEditComponent },
  { path: 'editar/:id', component: ClientesEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
