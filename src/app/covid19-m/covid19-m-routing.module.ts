import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldCountComponent } from './worldCount/worldcount.component';
import { CanactivatechildComponent } from './canactivatechild/canactivatechild.component';
import { CanactiveGuard } from '../Guard/canactive.guard';
import { MaharashtraReportComponent } from './maharashtra-report/maharashtra-report.component';


const routes: Routes = [
  {
    path: '',
    component: WorldCountComponent
  },
  {
    path: 'mhreport',
    component: MaharashtraReportComponent,
    canActivateChild: [CanactiveGuard],
    children: [
      {
        path: 'covinax',
        component: CanactivatechildComponent
      }
    ]
  }
  // { path: '' , redirectTo: '/frontworld', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Covid19MRoutingModule { }
