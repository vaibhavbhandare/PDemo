import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { EventEmitter } from '';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userList: any;
  public patientData: any = [];
  public newObj: any;

  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  constructor(public usrser: UserService,
              private router: Router) { }

  ngOnInit() {

    this.usrser.getUserdata().subscribe((data => {
      this.userList = data;
    }));

    this.usrser.getCovidPatient().subscribe(value => {
      this.patientData = value;
    },
      (err) => {
        // getting error when url are wrong
        console.log('error');
      });
  }

  getUserData(id) {
    this.router.navigate(['/userdetails', id]);
  }

  getData(http: HttpClient) {

  }

  postdata() {
   this.newObj = {
      id: 100,
      name: 'Austria',
      report: '+ve',
      bloodgroup: 'A',
      age: '34'
    };

   this.usrser.postSelectedData(this.newObj).subscribe(data => {
        // console.log(data);
        this.usrser.getCovidPatient().subscribe(value => {
          this.patientData = value;
        });
   });
   // location.reload();

  }

  deleteData(id) {
    this.usrser.deleteCovidData(id).subscribe(data => {
      this.patientData = this.patientData.filter(item => item.id !== id);
    });
  }

}
