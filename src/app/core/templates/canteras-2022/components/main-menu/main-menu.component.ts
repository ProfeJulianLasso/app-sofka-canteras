// Libraries
import { AfterViewInit, Component, OnInit } from '@angular/core';

// Models
import { MainMenuInterface } from '@template/canteras-2022/models/main-menu.model';
import { PagesMainMenuInterface } from '@template/canteras-2022/models/pages-main-menu.model';

// Services
import { MainMenuService } from '@template/canteras-2022/services/main-menu.service';

@Component({
  selector: 'sofka-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit, AfterViewInit {
  myDOMelement!: HTMLElement;
  mainMenu: Array<MainMenuInterface>;

  constructor(private mainMenu$: MainMenuService) {
    this.mainMenu = this.mainMenu$.MainMenu;
  }

  ngOnInit(): void {
    this.mainMenu$.MainMenuChanged.subscribe({
      next: (menu: Array<MainMenuInterface>) => {
        this.mainMenu = menu;
      }
    });
  }

  ngAfterViewInit(): void {
    this.myDOMelement = document.querySelectorAll(
      '.text-overflow-ellipsis'
    ) as unknown as HTMLElement;
    this.forEachElement(this.myDOMelement);
  }

  isPanelExpanded(id: string): boolean {
    return this.mainMenu$.PanelExpanded === id;
  }

  private forEachElement(collectionElements: HTMLElement): void {
    Array.prototype.forEach.call(collectionElements, (element: HTMLElement) => {
      // console.log(element.innerHTML);
      this.mainMenu.map((item) => {
        this.forEachPages(item, element);
      });
      // console.log(this.mainMenu);
      // console.log(element.offsetWidth + 2);
      // console.log(element.scrollWidth);
      // console.log(element.offsetWidth + 2 < element.scrollWidth);
    });
  }

  private forEachPages(item: MainMenuInterface, element: HTMLElement): void {
    item.pages.map((page) => {
      this.useEllipsisOrNot(page, element);
    });
  }

  private useEllipsisOrNot(
    page: PagesMainMenuInterface,
    element: HTMLElement
  ): boolean {
    if (
      page.title === element.innerText &&
      element.offsetWidth < element.scrollWidth
    ) {
      page.ellipsis = true;
      return true;
    }
    return false;
  }
}
