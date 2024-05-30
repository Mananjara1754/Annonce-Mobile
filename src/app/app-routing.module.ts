import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'insertannonce',
    loadChildren: () => import('./insertannonce/insertannonce.module').then( m => m.InsertannoncePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'choix',
    loadChildren: () => import('./choix/choix.module').then( m => m.ChoixPageModule)
  },
  {
    path: 'annonceform',
    loadChildren: () => import('./annonceform/annonceform.module').then( m => m.AnnonceformPageModule)
  },
  {
    path: 'recherche',
    loadChildren: () => import('./recherche/recherche.module').then( m => m.RecherchePageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  { path: 'detail/:key',
   loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule) },
  {
    path: 'attente',
    loadChildren: () => import('./attente/attente.module').then( m => m.AttentePageModule)
  },
  {
    path: 'actif',
    loadChildren: () => import('./actif/actif.module').then( m => m.ActifPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
