import { Component, OnInit } from '@angular/core';
import { HeaderAuthService } from '../header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public UN:string="admin"
  public PWD:string="admin"
  constructor(private auth:HeaderAuthService) { }

  ngOnInit() {
  }

  login(){
   this.auth.setUname(this.UN)
  }

}
