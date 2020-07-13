import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldCountComponent } from './worldCount/worldcount.component';


const routes: Routes = [
   { path: '' , component: WorldCountComponent }
  // { path: '' , redirectTo: '/frontworld', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Covid19MRoutingModule { }
