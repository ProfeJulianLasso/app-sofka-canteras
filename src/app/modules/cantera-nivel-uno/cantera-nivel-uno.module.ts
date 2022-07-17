// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// Routers
import { CanteraNivelUnoRoutingModule } from './cantera-nivel-uno-routing.module';

// Components
import { IndexComponent } from './components/index/index.component';
import { ContenidoComponent } from './components/contenido/contenido.component';

@NgModule({
  declarations: [IndexComponent, ContenidoComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    CanteraNivelUnoRoutingModule
  ]
})
export class CanteraNivelUnoModule {}
