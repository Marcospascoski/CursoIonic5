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
  },
  {
    path: 'toggle',
    loadChildren: () => import('./toggle/toggle.module').then( m => m.TogglePageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },  {
    path: 'toast',
    loadChildren: () => import('./toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./radio/radio.module').then( m => m.RadioPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesVisuaisPageRoutingModule {}
