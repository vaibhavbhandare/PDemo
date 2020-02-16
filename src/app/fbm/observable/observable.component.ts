import { Component, OnInit } from '@angular/core';
import { ObservableService } from './observable.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor(private observable:ObservableService) { }

  public data:any;
  ngOnInit() {

    this.observable.getUserdata().subscribe((res)=>{
      this.data = res
    })
    console.log(this.data);  
  }
}
