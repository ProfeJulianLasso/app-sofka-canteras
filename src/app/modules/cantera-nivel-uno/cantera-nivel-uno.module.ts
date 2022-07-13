import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanteraNivelUnoRoutingModule } from './cantera-nivel-uno-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, CanteraNivelUnoRoutingModule]
})
export class CanteraNivelUnoModule {}
