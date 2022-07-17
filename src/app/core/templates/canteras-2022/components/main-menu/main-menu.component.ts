import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'sofka-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements AfterViewInit {
  myDOMelement!: HTMLElement;
  ejemplo = [
    {
      title: 'Primera semana',
      pages: [
        {
          url: ['./', 'cantera-nivel-1', 'semana-1', 'hola-mundo'],
          title: 'Backend y Frontend con Spring Boot',
          ellipsis: false,
          icon: 'description',
          content: [
            {
              title: 'Hola a todos',
              content: `Esto es un ejemplo de contenido <b>Y esto de HTML</b>`
            }
          ]
        },
        {
          url: ['./', 'cantera-nivel-1', 'semana-1', 'otro-mundo'],
          title: 'Esto es otro mundo',
          ellipsis: false,
          icon: 'description',
          content: [
            {
              title: 'Hola a todos',
              content: `Esto es un ejemplo de contenido <b>Y esto de HTML</b>`
            }
          ]
        },
        {
          url: ['./', 'cantera-nivel-1', 'semana-1', 'trota-mundos'],
          title: 'Trotando por todos los mundos',
          ellipsis: false,
          icon: 'description',
          content: [
            {
              title: 'Hola a todos',
              content: `Esto es un ejemplo de contenido <b>Y esto de HTML</b>`
            }
          ]
        },
        {
          url: ['./', 'cantera-nivel-1', 'semana-1', 'otro-mundo-2'],
          title: 'Esto es otro mundo 2',
          ellipsis: false,
          icon: 'description',
          content: [
            {
              title: 'Hola a todos',
              content: `Esto es un ejemplo de contenido <b>Y esto de HTML</b>`
            }
          ]
        }
      ]
    }
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.myDOMelement = document.querySelectorAll(
      '.text-overflow-ellipsis'
    ) as unknown as HTMLElement;
    const data = this.myDOMelement;
    Array.prototype.forEach.call(data, (element: HTMLElement) => {
      // console.log(element.innerHTML);
      this.ejemplo.map((item) => {
        item.pages.map((page, index) => {
          if (
            page.title === element.innerText &&
            element.offsetWidth < element.scrollWidth
          ) {
            page.ellipsis = true;
            return true;
          }
          return false;
        });
      });
      // console.log(this.ejemplo);
      // console.log(element.offsetWidth + 2);
      // console.log(element.scrollWidth);
      // console.log(element.offsetWidth + 2 < element.scrollWidth);
    });
  }
}
