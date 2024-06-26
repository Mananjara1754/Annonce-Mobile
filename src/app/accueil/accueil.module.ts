import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AccueilPageRoutingModule } from './accueil-routing.module';
import { AccueilPage } from './accueil.page';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilPageRoutingModule,
    AngularFireDatabaseModule,
    MatChipsModule
  ],
  declarations: [AccueilPage]
})
export class AccueilPageModule {}
