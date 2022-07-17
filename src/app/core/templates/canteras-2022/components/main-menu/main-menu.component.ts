// Libraries
import { AfterViewInit, Component, OnInit } from '@angular/core';

// Models
import { MainMenuInterface } from '@template/canteras-2022/models/main-menu.model';
import { PagesMainMenuInterface } from '@template/canteras-2022/models/pages-main-menu.model';

@Component({
  selector: 'sofka-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit, AfterViewInit {
  myDOMelement!: HTMLElement;
  ejemplo: Array<MainMenuInterface>;

  constructor() {
    this.ejemplo = new Array<MainMenuInterface>();
  }

  ngOnInit(): void {
    this.ejemplo.push({
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

  ngAfterViewInit(): void {
    this.myDOMelement = document.querySelectorAll(
      '.text-overflow-ellipsis'
    ) as unknown as HTMLElement;
    this.forEachElement(this.myDOMelement);
  }

  private forEachElement(collectionElements: HTMLElement): void {
    Array.prototype.forEach.call(collectionElements, (element: HTMLElement) => {
      // console.log(element.innerHTML);
      this.ejemplo.map((item) => {
        this.forEachPages(item, element);
      });
      // console.log(this.ejemplo);
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
