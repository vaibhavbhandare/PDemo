import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { ObservableService } from './observable.service';
import { MatDialog } from '@angular/material';
import { MyDialogComponentComponent } from '../my-dialog-component/my-dialog-component.component';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnChanges, OnInit, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(private observable: ObservableService, public dialog: MatDialog) {
   // alert('1. on changes called');
  }

  public data: any;

  // ngDoCheck(): void {
  //   alert('');
  // }

  ngAfterContentInit(): void {
   // alert('4. after content init called');
  }

  ngAfterContentChecked(): void {
    // alert('5. after content check called');
  }
  ngAfterViewInit(): void {
    // alert('6. after view init called');
  }
  ngAfterViewChecked(): void {
   // alert('7. after view init checked');
  }
  ngOnDestroy(): void {
   // alert('8. on destroy called');
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
  }

  ngOnInit() {

    this.observable.getUserdata().subscribe((res) => {
      this.data = res;
    });
    console.log(this.data);
   // alert('2. ngOninit Called');
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
