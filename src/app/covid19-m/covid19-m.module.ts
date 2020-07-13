import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Covid19MRoutingModule } from './covid19-m-routing.module';
import { WorldCountComponent } from './worldCount/worldcount.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [ WorldCountComponent ],
  imports: [
    CommonModule,
    Covid19MRoutingModule,
  ],
  providers: [DatePipe]
})
export class Covid19MModule { }
