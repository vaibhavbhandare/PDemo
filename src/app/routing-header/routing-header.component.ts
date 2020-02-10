import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-header',
  templateUrl: './routing-header.component.html',
  styleUrls: ['./routing-header.component.css']
})
export class RoutingHeaderComponent implements OnInit {

  public allroutes:Array<String> = ["login","signform",'user','inventory','fb-M/observable']
  constructor() { }

  ngOnInit() {
  }

}
