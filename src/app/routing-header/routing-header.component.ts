import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormComponent } from '../fbm/reactive-form/reactive-form.component';
@Component({
  selector: 'app-routing-header',
  templateUrl: './routing-header.component.html',
  styleUrls: ['./routing-header.component.css']
})
export class RoutingHeaderComponent implements OnInit {

  public allroutes: Array<String> = ["login", 'inventory', 'user', 'fb-M/observable', 'fb-M/reactive-form']
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  getvalue(value) {
    console.log(value);
  }
  openDialogbox(): void {
    const dialogRef = this.dialog.open(ReactiveFormComponent, {
      width: '500px', height: '500px'
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //  this.animal = result;
    });
  }
}
