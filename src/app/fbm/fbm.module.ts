import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FBMRoutingModule } from './fbm-routing.module';
import { PepoleComponent } from './pepole/pepole.component';
import { FriendsComponent } from './friends/friends.component';
import { FbserviceService } from './fbservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CamelCaseComponent } from './fb.pipe';
import { ObservableComponent } from './observable/observable.component';
import { ObservableService } from './observable/observable.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [PepoleComponent, FriendsComponent,CamelCaseComponent, ObservableComponent, ReactiveFormComponent],
  imports: [
    CommonModule,
    FBMRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[FbserviceService , ObservableService]
})
export class FBMModule { }
