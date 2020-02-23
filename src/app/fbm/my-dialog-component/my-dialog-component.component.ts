import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-my-dialog-component',
  templateUrl: './my-dialog-component.component.html',
  styleUrls: ['./my-dialog-component.component.css']
})
export class MyDialogComponentComponent implements OnInit {

  constructor(private dialog: MatDialog,
    public dialogRef: MatDialogRef<MyDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  fname: any = "vaibhav";
  dilogdata(value) {
    console.log(value);
    this.dialogRef.close("it was close"); // this msg reflects in subscribe class observable 
  }

  // closeDialogBox() {
  //   this.dialogRef.close("it was close");
  // }

}
