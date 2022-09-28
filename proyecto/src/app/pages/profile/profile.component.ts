import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ],
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      Nombre: 'Juan',
      Apellido: 'Quintero',
      Cargo: 'Desarrollador',
      Correo: 'jfquinterogu14@gmail.com',
      Telefono: '31282838889',
      Direccion: 'Cl 9a #15-525',
      Ciudad: 'Medellín',
      Sexo: 'Hombre',
      /* tslint:disable-next-line:max-line-length */
      Perfil: 'Juan Felipe Quintero Gutierrez.\r\n\r\n El mejor de lo mejor.'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}
