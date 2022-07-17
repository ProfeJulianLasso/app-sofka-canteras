/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { EventEmitter, Injectable } from '@angular/core';
import { MainMenuInterface } from '../models/main-menu.model';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {
  private panelExpanded: string;
  private mainMenu: Array<MainMenuInterface>;
  PanelExpandedChanged: EventEmitter<string>;
  MainMenuChanged: EventEmitter<Array<MainMenuInterface>>;

  constructor() {
    this.panelExpanded = '';
    this.mainMenu = new Array<MainMenuInterface>();
    this.PanelExpandedChanged = new EventEmitter<string>();
    this.MainMenuChanged = new EventEmitter<Array<MainMenuInterface>>();
  }

  get PanelExpanded(): string {
    return this.panelExpanded;
  }

  get MainMenu(): Array<MainMenuInterface> {
    return this.mainMenu;
  }

  set MainMenu(menu: Array<MainMenuInterface>) {
    this.mainMenu = menu;
    this.MainMenuChanged.emit(menu);
  }

  set PanelExpanded(panel: string) {
    this.panelExpanded = panel;
    this.PanelExpandedChanged.emit(panel);
  }
}
