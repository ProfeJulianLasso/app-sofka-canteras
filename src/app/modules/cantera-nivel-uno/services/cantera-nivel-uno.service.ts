// Libraries
import { Injectable } from '@angular/core';

// Models
import { ContentInterface } from '../models/content.model';
import { MainMenuInterface } from '@template/canteras-2022/models/main-menu.model';

// Data
import menuJson from '../data/menu.data.json';
import contentJon from '../data/content.data.json';

@Injectable({
  providedIn: 'root'
})
export class CanteraNivelUnoService {
  constructor() {}

  getMainMenu(): Array<MainMenuInterface> {
    return menuJson;
  }

  getContent(url: string | Array<string>): ContentInterface {
    const data: Array<ContentInterface> = contentJon;

    const index = data.findIndex(
      (data) => data.url.toString() === url.toString()
    );
    return data[index] ?? {};
  }
}
