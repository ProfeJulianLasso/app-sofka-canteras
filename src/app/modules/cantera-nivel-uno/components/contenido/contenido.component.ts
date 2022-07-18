import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
    private sanitizer: DomSanitizer,
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
      this.mainMenu$.PanelExpanded = url[0].path;
    });
  }

  safeHtml(data: string | HTMLElement): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(data.toString());
  }
}
