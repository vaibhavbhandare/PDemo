import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PepoleComponent } from './pepole/pepole.component';
import { ObservableComponent } from './observable/observable.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MyDialogComponentComponent } from './my-dialog-component/my-dialog-component.component';
import { CanactiveGuard } from '../Guard/canactive.guard';


const routes: Routes = [
  {
    path: '',
    component: PepoleComponent
  },
  {
    path: 'observable',
    component: ObservableComponent,
    // all methods present in canActiveGuards root Service that is deactivate method
    canDeactivate: [CanactiveGuard]
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  }
  // {
  //   path: 'wle',
  //   component: MyDialogComponentComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FBMRoutingModule { }
