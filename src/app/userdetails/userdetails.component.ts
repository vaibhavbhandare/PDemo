import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  public id: any;
  public userList:any;
  constructor(private userser: UserService,
              private activatedroute: ActivatedRoute,
              private router: Router) {
   

  }

  ngOnInit() {

    this.activatedroute.params.subscribe(value => {
      this.id = Number(value['id']);
    })

    this.userser.getCovidPatient().subscribe(data => {
      this.userList = data;
    })
  }

  getBack() {
    this.router.navigate(['/user'])
  }

  goPrevious() {
    this.router.navigate(['/userdetails', this.id - 1])
  }

  goNext() {
    this.router.navigate(['/userdetails', this.id + 1])
  }
}
