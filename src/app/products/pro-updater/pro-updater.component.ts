import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-pro-updater',
  templateUrl: './pro-updater.component.html',
  styleUrls: ['./pro-updater.component.css']
})
export class ProUpdaterComponent implements OnInit {

  @Input() price:number;

  @Output() updatevalue = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  updateprice(price){
     this.updatevalue.emit(price)
  }
}
