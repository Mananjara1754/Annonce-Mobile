import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationPageRoutingModule } from './confirmation-routing.module';

import { ConfirmationPage } from './confirmation.page';
// import { FormatFileSizePipe } from './format-file-size.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationPageRoutingModule,
    MatProgressSpinnerModule
  ],
  declarations: [ConfirmationPage]
})
export class ConfirmationPageModule {}
