import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PepoleComponent } from './pepole/pepole.component';


const routes: Routes = [
  {
    path:'fb',
    component: PepoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FBMRoutingModule { }
