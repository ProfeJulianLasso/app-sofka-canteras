import { EventEmitter, Injectable } from '@angular/core';
import { MainMenuInterface } from '../models/main-menu.model';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {
  private mainMenu: Array<MainMenuInterface>;
  MainMenuChanged: EventEmitter<Array<MainMenuInterface>>;

  constructor() {
    this.mainMenu = new Array<MainMenuInterface>();
    this.MainMenuChanged = new EventEmitter<Array<MainMenuInterface>>();
  }

  get MainMenu(): Array<MainMenuInterface> {
    return this.mainMenu;
  }

  set MainMenu(menu: Array<MainMenuInterface>) {
    this.mainMenu = menu;
    this.MainMenuChanged.emit(menu);
  }
}
