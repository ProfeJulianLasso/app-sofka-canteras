import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '@pages/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'cantera-nivel-1',
    loadChildren: () =>
      import('./modules/cantera-nivel-uno/cantera-nivel-uno.module').then(
        (m) => m.CanteraNivelUnoModule
      )
  },
  {
    path: 'cantera-nivel-2',
    loadChildren: () =>
      import('./modules/cantera-nivel-dos/cantera-nivel-dos.module').then(
        (m) => m.CanteraNivelDosModule
      )
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
