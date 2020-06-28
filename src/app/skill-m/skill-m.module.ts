import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillMRoutingModule } from './skill-m-routing.module';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillServiceService } from './skill-service.service';


@NgModule({
  declarations: [SkillListComponent],
  imports: [
    CommonModule,
    SkillMRoutingModule
  ],
   providers: [SkillServiceService]
})
export class SkillMModule { }
