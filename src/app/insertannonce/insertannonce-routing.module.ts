import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertannoncePage } from './insertannonce.page';

const routes: Routes = [
  {
    path: '',
    component: InsertannoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertannoncePageRoutingModule {}
