import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Models
import { ContentInterface } from '../../models/content.model';

// Services
import { CanteraNivelUnoService } from '../../services/cantera-nivel-uno.service';
import { MainMenuService } from '@template/canteras-2022/services/main-menu.service';

@Component({
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {
  contenido!: ContentInterface;

  constructor(
    private mainMenu$: MainMenuService,
    private activatedRoute: ActivatedRoute,
    private canteraNivelUno$: CanteraNivelUnoService
  ) {}

  ngOnInit() {
    this.mainMenu$.MainMenu = this.canteraNivelUno$.getMainMenu();
    this.activatedRoute.url.subscribe((url) => {
      this.contenido = this.canteraNivelUno$.getContent([
        './',
        'cantera-nivel-1',
        url[0].path,
        url[1].path
      ]);
    });
  }
}
