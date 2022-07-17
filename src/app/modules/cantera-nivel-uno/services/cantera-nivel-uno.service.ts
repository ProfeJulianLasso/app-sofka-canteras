import { Injectable } from '@angular/core';
import { MainMenuInterface } from '@template/canteras-2022/models/main-menu.model';

@Injectable({
  providedIn: 'root'
})
export class CanteraNivelUnoService {
  constructor() {}

  getMainMenu(): Array<MainMenuInterface> {
    return new Array({
      title: 'Primera semana',
      pages: [
        {
          url: ['./', 'cantera-nivel-1', 'semana-1', 'hola-mundo'],
          title: 'Backend y Frontend con Spring Boot',
          ellipsis: false,
          icon: 'description'
        },
        {
          url: ['./', 'cantera-nivel-1', 'semana-1', 'otro-mundo'],
          title: 'Esto es otro mundo',
          ellipsis: false,
          icon: 'description'
        },
        {
          url: ['./', 'cantera-nivel-1', 'semana-1', 'trota-mundos'],
          title: 'Trotando por todos los mundos',
          ellipsis: false,
          icon: 'description'
        },
        {
          url: ['./', 'cantera-nivel-1', 'semana-1', 'otro-mundo-2'],
          title: 'Esto es otro mundo 2',
          ellipsis: false,
          icon: 'description'
        }
      ]
    });
  }
}
