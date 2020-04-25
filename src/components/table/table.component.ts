import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../clases/estudiante';

declare var $: any;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  estudiantes: Estudiante[] = [
    { codigo: 1, nombre: 'Daniel', apellido: 'Alvarez', nota: 3.5 },
    { codigo: 2, nombre: 'Santiago', apellido: 'Cardona', nota: 1.8 },
    { codigo: 3, nombre: 'Alexis', apellido: 'Rincon', nota: 4.0 },
    { codigo: 4, nombre: 'Mirando', apellido: 'Rios', nota: 2.9 },
    { codigo: 5, nombre: 'Armando', apellido: 'Casas', nota: 3.0 },
    { codigo: 6, nombre: 'Pintando', apellido: 'Paredes', nota: -0.5 },
    { codigo: 7, nombre: 'Andres', apellido: 'Garcia', nota: 5 },
    { codigo: 8, nombre: 'Samuel', apellido: 'Hernandez', nota: 2.3 },
    { codigo: 9, nombre: 'Armando', apellido: 'Barrera', nota: 6.0 },
    { codigo: 10, nombre: 'Diego', apellido: 'Pineda', nota: 5.0 },
  ];
  ngOnInit(): void {
  }

  devolverEstado(valor1: number): number {
    if (valor1 < 0 || valor1 > 5) {
      return 1;
    }
    else if (valor1 >= 3.0) {
      return 2;
    }
    else{
      return 3;
    }
  }

}
