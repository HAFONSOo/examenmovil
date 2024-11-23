import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroautoPage } from './registroauto.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroautoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroautoPageRoutingModule {}
