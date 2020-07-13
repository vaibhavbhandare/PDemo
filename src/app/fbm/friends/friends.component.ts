import { Component, OnInit } from '@angular/core';
import { FbserviceService } from '../fbservice.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  public ids: any;
  constructor(private fbser: FbserviceService) {

   }

  ngOnInit() {
  }

  valueset() {
     this.fbser.setdata(this.ids);
     console.log(this.ids);
  }
}
