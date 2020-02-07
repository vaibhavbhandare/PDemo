import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillListComponent } from './skill-list/skill-list.component';


const routes: Routes = [
  {
    path:'skill-list',
    component: SkillListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillMRoutingModule { }
