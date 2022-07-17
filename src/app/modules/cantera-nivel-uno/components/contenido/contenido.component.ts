import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Services
import { CanteraNivelUnoService } from '../../services/cantera-nivel-uno.service';
import { MainMenuService } from '@template/canteras-2022/services/main-menu.service';

@Component({
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private mainMenu$: MainMenuService,
    private canteraNivelUno$: CanteraNivelUnoService
  ) {}

  ngOnInit(): void {
    console.log('seman', this.route.snapshot.paramMap.get('semana'));
    console.log('contenido', this.route.snapshot.paramMap.get('contenido'));
    this.mainMenu$.MainMenu = this.canteraNivelUno$.getMainMenu();
  }
}
