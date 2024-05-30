import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertannoncePageRoutingModule } from './insertannonce-routing.module';

import { InsertannoncePage } from './insertannonce.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertannoncePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InsertannoncePage]
})
export class InsertannoncePageModule {}
