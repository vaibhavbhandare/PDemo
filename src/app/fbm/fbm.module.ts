import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FBMRoutingModule } from './fbm-routing.module';
import { PepoleComponent } from './pepole/pepole.component';
import { FriendsComponent } from './friends/friends.component';
import { FbserviceService } from './fbservice.service';
import { FormsModule } from '@angular/forms';
import { CamelCaseComponent } from './fb.pipe';


@NgModule({
  declarations: [PepoleComponent, FriendsComponent,CamelCaseComponent],
  imports: [
    CommonModule,
    FBMRoutingModule,
    FormsModule
  ],
  providers:[FbserviceService]
})
export class FBMModule { }
