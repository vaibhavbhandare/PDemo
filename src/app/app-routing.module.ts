import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignUpFormComponent } from './signup/signupform.component';
import { UsersComponent } from './users/users.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

import { AgGridTreeComponent } from './ag-grid-tree/ag-grid-tree.component';

import { StartUpComponent } from './startup-metrics-component/StartUpComponent.component';
import { CanactiveGuard } from './Guard/canactive.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'signform', component: SignUpFormComponent },
  {
    path: 'user',
    component: UsersComponent,
    // children: [
    //   {
    //     path: 'user/userdetails/:id',
    //     component: UserdetailsComponent
    //   }
    // ]
  },
  {
    path: 'userdetails/:id' ,
    component: UserdetailsComponent,
    canActivate: [CanactiveGuard]
  },
  // { path: 'inventory/:abc', component: InventoryComponent },
  {
    path: 'Skill-M',
    loadChildren: () => import('./skill-m/skill-m.module').then(m => m.SkillMModule)
  },
  {
    path: 'fb-M',
    loadChildren: () => import('./fbm/fbm.module').then(m => m.FBMModule)
  },
  // {
  //   path:'fb-M',
  //   loadChildren:()=> import('./fbm/fbm.module').then(m=>m.FBMModule)
  // },
  {
    path: 'StartUp' , component: StartUpComponent
  },
  {
    path: 'ag-grid-tree' , component: AgGridTreeComponent
  },
  { path: 'covid19m',
    loadChildren: () => import('./covid19-m/covid19-m.module').then( m => m.Covid19MModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
