import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Viaje } from '../../models/viaje';

@Component({
  selector: 'app-viajes-table-list',
  templateUrl: './viajes-table-list.component.html',
  styleUrls: ['./viajes-table-list.component.scss'],
})
export class ViajesTableListComponent implements OnInit {
  @Input() viajes: Viaje[] = [];
  @Output() editar = new EventEmitter<string>();
  @Output() eliminar = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
