import { Component, OnInit ,Inject} from '@angular/core';
import { Person } from './Person';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-signupform',
  templateUrl: 'signupform.component.html',

})
export class SignUpFormComponent {
  public id: any = 5;
  person: Person = {
    name: 'James',
    phone: "1234",
    address: 'India'

  }

  constructor(private userser: UserService, private router: Router,
    public dialogRef: MatDialogRef<SignUpFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

  submitform(value) {
    console.log(value);
    this.userser.postUserdata(value).subscribe(data => {
     // alert('data submitted');
    })
    this.dialogRef.close('sign up form close')
  }

  navigate() {
    this.router.navigate(['/inventory', 2])
  }

}