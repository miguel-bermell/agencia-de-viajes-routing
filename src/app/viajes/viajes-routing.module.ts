import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViajesEditComponent } from './viajes-edit/viajes-edit.component';
import { ViajesListComponent } from './viajes-list/viajes-list.component';

const routes: Routes = [
  { path: '', component: ViajesListComponent },
  { path: 'editar', component: ViajesEditComponent },
  { path: 'editar/:id', component: ViajesEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesRoutingModule {}
