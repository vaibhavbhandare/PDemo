import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../services/coviddata.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material';
import { CovidFormComponent } from '../covid-form/covid-form.component';
import { FormControl, FormGroup, FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-world',
  templateUrl: 'worldcount.component.html',
  styleUrls: ['worldcount.component.css']
})

export class WorldCountComponent implements OnInit {

  public applyHeading: any;
  public patientSatatList: any;
  public giveDate: any;
  public RedZoneHeading: string;
  public RedZoneHeadingFirst = '';
  public lname: any;
  public rafelform: any;

  constructor(private covidDataService: CovidDataService,
              private datepipe: DatePipe,
              private router: Router,
              public dialog: MatDialog) {

  }

  ngOnInit() {
    this.rafelform = new FormGroup({
      email: new FormControl('abc@gmail.com', [Validators.required])
    });

    const start = '1234';
    this.patientSatatList = ['MH', ...start.split(''), 'Gujarat', 'MadhyaPradesh', 'Telangana', 'Jammu & Kashmir', 'Ladhakh',
      'Keral', 'Goa', 'Rajasthan', 'GhatisGhad', 'Panjab', 'Delhi', 'AndhraPradesh', 'Zarkhand',
    ];
    // get index value from forEach
    this.patientSatatList.forEach((ele: any, index) => {
      // console.log('states = ' + ele + ' index =' + index);
    });
    // let fri = this.patientSatatList;
    // console.log(fri.slice(2, 7));
    // console.log(this.patientSatatList.splice(1,2,"A","B"));
    // console.log(this.patientSatatList.indexOf('GhatisGhad'));
    // console.log(this.patientSatatList.join('-'));
    //  console.log(start.split(''));
    this.giveDate = Date.now();
    // console.log(this.datepipe.transform(this.giveDate, 'M/d/yy, h:mm a'));
  }

  getCovidPatient() {
    this.covidDataService.getcovidData().subscribe((data) => {
      this.applyHeading = data;
    });
    return this.applyHeading;
  }

  executeHooks() {
    this.router.navigate(['/fb-M/observable']);
  }

  getRedZoneList(data) {
    this.covidDataService.CountryCounts(data);
    this.RedZoneHeadingFirst = this.covidDataService.CountryCount();
  }

  opendialog() {
    const dialogRef = this.dialog.open(CovidFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  setlocal() {
   localStorage.setItem('name', 'Vaibhav Bhandare');
   localStorage.setItem('degree', 'Electronics Engineer');
   //  console.log(localStorage.length); // it gives length of all keys from local
  //  console.log(localStorage.key(1));  // getting key at index 1 i.e degree
  }

  getlocal() {
    const item = localStorage.getItem('degree');
    alert(item);
  }

  removeItemOfLocal() {
    localStorage.removeItem('degree');
    // if you want to clear all local storage then used clear method
   // localStorage.clear();

   // All same method used for session storage also
  }

}
