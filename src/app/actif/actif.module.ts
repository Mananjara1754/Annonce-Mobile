import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActifPageRoutingModule } from './actif-routing.module';

import { ActifPage } from './actif.page';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActifPageRoutingModule,
    MatMenuModule
  ],
  declarations: [ActifPage]
})
export class ActifPageModule {}
