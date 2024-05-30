import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnonceformPage } from './annonceform.page';

const routes: Routes = [
  {
    path: '',
    component: AnnonceformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnonceformPageRoutingModule {}
