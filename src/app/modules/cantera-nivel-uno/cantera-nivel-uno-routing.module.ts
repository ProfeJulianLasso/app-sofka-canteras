// Librerías
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanteraNivelUnoRoutingModule {}
