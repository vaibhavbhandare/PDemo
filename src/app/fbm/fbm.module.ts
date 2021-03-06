import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FBMRoutingModule } from './fbm-routing.module';
import { PepoleComponent } from './pepole/pepole.component';
import { FriendsComponent } from './friends/friends.component';
import { FbserviceService } from './fbservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CamelCaseComponent } from './fb.pipe';
import { ObservableComponent } from './observable/observable.component';
import { ObservableService } from './observable/observable.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MyDialogComponentComponent } from './my-dialog-component/my-dialog-component.component';
import { MaterialModule } from '../material/material.module';
import { ObservablechildComponent } from './observablechild/observablechild.component';

@NgModule({
  declarations: [PepoleComponent, FriendsComponent, CamelCaseComponent,
     ObservableComponent, ReactiveFormComponent, MyDialogComponentComponent, ObservablechildComponent],
  imports: [
    CommonModule,
    FBMRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [ MyDialogComponentComponent],
  providers: [FbserviceService , ObservableService, DatePipe]
})
export class FBMModule { }
