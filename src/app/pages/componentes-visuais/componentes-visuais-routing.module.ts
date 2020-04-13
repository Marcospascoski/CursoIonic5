import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentesVisuaisPage } from './componentes-visuais.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentesVisuaisPage
  },
  {
    path: 'select',
    loadChildren: () => import('./select/select.module').then( m => m.SelectPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesVisuaisPageRoutingModule {}
