import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActifPage } from './actif.page';

const routes: Routes = [
  {
    path: '',
    component: ActifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActifPageRoutingModule {}
