import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMotorbikesPageRoutingModule } from './my-motorbikes-routing.module';

import { MyMotorbikesPage } from './my-motorbikes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMotorbikesPageRoutingModule
  ],
  declarations: [MyMotorbikesPage]
})
export class MyMotorbikesPageModule {}
