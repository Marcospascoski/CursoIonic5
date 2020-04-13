import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'navegacao',
    loadChildren: () => import('./pages/componentes-visuais/navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'navegacao2',
    loadChildren: () => import('./pages/componentes-visuais/navegacao2/navegacao2.module').then( m => m.Navegacao2PageModule)
  },
  {
    path: 'botao',
    loadChildren: () => import('./pages/componentes-visuais/botao/botao.module').then( m => m.BotaoPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/componentes-visuais/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'actionsheet',
    loadChildren: () => import('./pages/componentes-visuais/actionsheet/actionsheet.module').then( m => m.ActionsheetPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./pages/componentes-visuais/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/componentes-visuais/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./pages/componentes-visuais/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./pages/componentes-visuais/chip/chip.module').then( m => m.ChipPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./pages/componentes-visuais/content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./pages/componentes-visuais/date-time/date-time.module').then( m => m.DateTimePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./pages/componentes-visuais/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/componentes-visuais/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'infinitscroll',
    loadChildren: () => import('./pages/componentes-visuais/infinitscroll/infinitscroll.module').then( m => m.InfinitscrollPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/componentes-visuais/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/componentes-visuais/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'progressbar',
    loadChildren: () => import('./pages/componentes-visuais/progressbar/progressbar.module').then( m => m.ProgressbarPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./pages/componentes-visuais/segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./pages/componentes-visuais/select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'toggle',
    loadChildren: () => import('./pages/componentes-visuais/toggle/toggle.module').then( m => m.TogglePageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./pages/componentes-visuais/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'reorder',
    loadChildren: () => import('./pages/componentes-visuais/reorder/reorder.module').then( m => m.ReorderPageModule)
  },
  {
    path: 'animacao',
    loadChildren: () => import('./pages/componentes-visuais/animacao/animacao.module').then( m => m.AnimacaoPageModule)
  },
  {
    path: 'componentes-visuais',
    loadChildren: () => import('./pages/componentes-visuais/componentes-visuais.module').then( m => m.ComponentesVisuaisPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
