import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, ViewChild } from '@angular/core';
import { ObservableService } from './observable.service';
import { MatDialog } from '@angular/material';
import { MyDialogComponentComponent } from '../my-dialog-component/my-dialog-component.component';
import { SubjectService } from '../subject.service';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnChanges, OnInit, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(private observable: ObservableService,
              public dialog: MatDialog,
              private subjectService: SubjectService) {
   // alert('1. on changes called');
  }

  public data: any;
  public rafel = 'Welcome Rafel to India';
  public inputValue;
  @ViewChild('box' , {static: true}) boxRef: any;

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
      width: '300px', height: '250px'
    });

   dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      console.log(result);
    });
  }

  keyName(event) {
   // console.log(event.target.value); // works if method have $event
    console.log(this.boxRef);
  }

  blurevent(value) {
    console.log(value);
  }

  getName(value) {
   this.rafel = value;
  }

  // below method pass the calue to child to subject from rxjs
  changeSub() {
    this.subjectService.setMsg(this.inputValue);
  }
}
