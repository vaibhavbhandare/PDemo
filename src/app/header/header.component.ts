import { Component, OnInit } from '@angular/core';
import { HeaderAuthService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  UN: any;
  constructor(private authservice: HeaderAuthService) {

  }

  ngOnInit() {
    this.authservice.getUname().subscribe((value) => {
      this.UN = value;
    })
  }

}
