import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PepoleComponent } from './pepole/pepole.component';
import { ObservableComponent } from './observable/observable.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  {
    path:'fb',
    component: PepoleComponent
  },
  {
    path:'observable',
    component:ObservableComponent
  },
  {
    path:'reactive-form',
    component:ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FBMRoutingModule { }
