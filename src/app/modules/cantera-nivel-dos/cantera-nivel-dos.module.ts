// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routers
import { CanteraNivelDosRoutingModule } from './cantera-nivel-dos-routing.module';

// Components
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, CanteraNivelDosRoutingModule]
})
export class CanteraNivelDosModule {}
