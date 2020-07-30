import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Covid19MRoutingModule } from './covid19-m-routing.module';
import { WorldCountComponent } from './worldCount/worldcount.component';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CovidFormComponent } from './covid-form/covid-form.component';
import { CanactivatechildComponent } from './canactivatechild/canactivatechild.component';
import { MaharashtraReportComponent } from './maharashtra-report/maharashtra-report.component';

@NgModule({
  declarations: [ WorldCountComponent, CovidFormComponent, CanactivatechildComponent, MaharashtraReportComponent ],
  imports: [
    CommonModule,
    Covid19MRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  entryComponents: [CovidFormComponent]
})
export class Covid19MModule { }
