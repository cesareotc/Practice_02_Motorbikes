import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMotorbikesPage } from './my-motorbikes.page';

const routes: Routes = [
  {
    path: '',
    component: MyMotorbikesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMotorbikesPageRoutingModule {}
