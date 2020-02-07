import { Component, OnInit } from '@angular/core';
import { FbserviceService } from '../fbservice.service';

@Component({
  selector: 'app-pepole',
  templateUrl: './pepole.component.html',
  styleUrls: ['./pepole.component.css']
})
export class PepoleComponent implements OnInit {

  constructor(private fbser:FbserviceService) { }
public getid:any;
  ngOnInit() {
    this.fbser.getData().subscribe((data)=>{
        this.getid = data
    })
  }

}
