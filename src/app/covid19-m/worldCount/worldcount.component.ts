import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../services/coviddata.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-world',
    templateUrl: 'worldcount.component.html',
    styleUrls: ['worldcount.component.css']
})

export class WorldCountComponent implements OnInit {

    public applyHeading: any;
    public patientSatatList: any;
    public giveDate: any;

    constructor(private covidDataService: CovidDataService,
                private datepipe: DatePipe) {

    }

    ngOnInit() {
     const start = '1234';
     this.patientSatatList = ['MH', ...start.split(''), 'Gujarat', 'MadhyaPradesh', 'Telangana', 'Jammu & Kashmir', 'Ladhakh',
        'Keral', 'Goa', 'Rajasthan', 'GhatisGhad', 'Panjab', 'Delhi', 'AndhraPradesh', 'Zarkhand',
        ];
    // get index value from forEach
     this.patientSatatList.forEach((ele: any, index) => {
      console.log('states = ' + ele + ' index =' + index);
    });
     // let fri = this.patientSatatList;
     // console.log(fri.slice(2, 7));
     // console.log(this.patientSatatList.splice(1,2,"A","B"));
     // console.log(this.patientSatatList.indexOf('GhatisGhad'));
     // console.log(this.patientSatatList.join('-'));

    //  console.log(start.split(''));
     this.giveDate = Date.now();
     console.log(this.datepipe.transform(this.giveDate , 'M/d/yy, h:mm a'));
    }

    getCovidPatient() {
        this.covidDataService.getcovidData().subscribe( (data) => {
            this.applyHeading = data;
        });
        return this.applyHeading;
    }

}
