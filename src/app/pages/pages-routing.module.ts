import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'detalhar',
    loadChildren: () => import('./detalhar/detalhar.module').then( m => m.DetalharPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
