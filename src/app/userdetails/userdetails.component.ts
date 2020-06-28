import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  public id: any;
  public userList: any;
  constructor(private activateroute: ActivatedRoute, private userser: UserService) {


  }

  ngOnInit() {
    this.userser.getUserdata().subscribe((data) => {
      this.userList = data;
    });

    this.activateroute.params.subscribe(data => {
      this.id = Number(data.id);
    });
    console.log(this.id);



  }

  userdetails() {

  }

}
