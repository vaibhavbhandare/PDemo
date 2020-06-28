import { Component, OnInit } from '@angular/core';
import { ObservableService } from './observable.service';
import { MatDialog } from '@angular/material';
import { MyDialogComponentComponent } from '../my-dialog-component/my-dialog-component.component';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor(private observable: ObservableService, public dialog: MatDialog) { }

  public data: any;
  ngOnInit() {

    this.observable.getUserdata().subscribe((res) => {
      this.data = res;
    });
    console.log(this.data);
  }

  openDialogBox() {
    const dialogRef = this.dialog.open(MyDialogComponentComponent, {
      width: '250px', height: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      console.log(result);
    });
  }
}
