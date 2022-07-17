import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainMenuService } from '@template/canteras-2022/services/main-menu.service';

@Component({
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private mainMenu$: MainMenuService
  ) { }

  ngOnInit(): void {
    console.log('seman', this.route.snapshot.paramMap.get('semana'));
    console.log('contenido', this.route.snapshot.paramMap.get('contenido'));
    this.mainMenu$.MainMenu = new Array({
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
