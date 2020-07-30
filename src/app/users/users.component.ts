import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userList: any;
  public patientData: any = [];

  constructor(private usrser: UserService,
    private router: Router) { }

  ngOnInit() {
    
    this.usrser.getUserdata().subscribe((data=>{
      this.userList = data
    }))

    this.usrser.getCovidPatient().subscribe(value => {
      this.patientData = value;
    },
      (err) => {
        // getting error when url are wrong
        console.log("error"); 
      })
  }

  getUserData(id) {
    this.router.navigate(['/userdetails', id])
  }

}
