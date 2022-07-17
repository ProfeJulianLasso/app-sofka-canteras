import { PagesMainMenuInterface } from './pages-main-menu.model';

export interface MainMenuInterface {
  id: string;
  title: string;
  pages: Array<PagesMainMenuInterface>;
}
