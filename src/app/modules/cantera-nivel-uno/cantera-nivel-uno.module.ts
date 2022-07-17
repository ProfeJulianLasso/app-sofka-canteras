// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routers
import { CanteraNivelUnoRoutingModule } from './cantera-nivel-uno-routing.module';

// Components
import { IndexComponent } from './components/index/index.component';
import { ContenidoComponent } from './components/contenido/contenido.component';

@NgModule({
  declarations: [IndexComponent, ContenidoComponent],
  imports: [CommonModule, CanteraNivelUnoRoutingModule]
})
export class CanteraNivelUnoModule {}
