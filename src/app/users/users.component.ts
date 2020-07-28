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
    // this.usrser.getUserdata().subscribe((data=>{
    //   this.userList = data
    // }))
    this.usrser.getCovidPatient().subscribe(value => {
      this.patientData = value;
      console.log(value);
    },
      (err) => {
        console.log("error"); // getting error when url are wrong
      })
    console.log(this.patientData);

    // this.usrser.getUserdataPromis().then((data) => {
    //   this.userList = data;
    // },
    //   (err) => {
    //     console.log("error"); // getting error when url are wrong
    //   }
    // )


  }

  userdetails(id) {
    // this.router.navigate(['/userdetails',id])
  }

}
