import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignUpFormComponent } from './signup/signupform.component';
import { UsersComponent } from './users/users.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


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
    children: [
      {
        path: 'userdetails/:id',
        component: UserdetailsComponent
      }
    ]
  },
  { path: 'inventory/:abc', component: InventoryComponent },
  {
    path: 'Skill-M',
    loadChildren: () => import('./skill-m/skill-m.module').then(m => m.SkillMModule)
  },
  {
    path:'fb-M',
    loadChildren:()=> import('./fbm/fbm.module').then(m=>m.FBMModule)
  },
  // {
  //   path:'fb-M',
  //   loadChildren:()=> import('./fbm/fbm.module').then(m=>m.FBMModule)
  // },
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
