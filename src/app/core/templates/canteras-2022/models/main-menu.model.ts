import { PagesMainMenuInterface } from './pages-main-menu.model';

export interface MainMenuInterface {
  title: string;
  pages: Array<PagesMainMenuInterface>;
}
