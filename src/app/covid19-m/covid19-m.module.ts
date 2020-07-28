import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Covid19MRoutingModule } from './covid19-m-routing.module';
import { WorldCountComponent } from './worldCount/worldcount.component';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CovidFormComponent } from './covid-form/covid-form.component';

@NgModule({
  declarations: [ WorldCountComponent, CovidFormComponent ],
  imports: [
    CommonModule,
    Covid19MRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [DatePipe],
  entryComponents: [CovidFormComponent]
})
export class Covid19MModule { }
