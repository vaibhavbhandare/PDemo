import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi, ColumnApi, GridReadyEvent, GridOptions } from 'ag-grid-community';
import { StartupmService } from '../services/startupm.service';
import * as _ from 'underscore';
import { AllModules } from "@ag-grid-enterprise/all-modules";
// import "@ag-grid-enterprise";
@Component({
  selector: 'app-ag-grid-demo',
  templateUrl: './StartUpComponent.component.html',
  styleUrls: ['./StartUpComponent.component.scss']
})

export class StartUpComponent implements OnInit {

  private gridApi: GridApi;
  private gridColumnApi: ColumnApi;
  public checked = false;
  public gridOptions: GridOptions;
  private isRowSelectable;
  public ColumnDefStartupM: any;
  public rowDataStartupM: any = [];
  public allStudies: any;
  public groupDefaultExpanded;
  public getDataPath;
  public autoGroupColumnDef;
  public columnDefs: any;
  public rowData: any;
  public rowDataObject: any;
  public modules = AllModules;
  public ColumnDefHeaderName: any;

  @ViewChild('agGrid', { read: ElementRef, static: true }) agGrid: ElementRef;

  constructor(private startM: StartupmService) {

    this.columnDefs = [{ field: "jobTitle" }, { field: "employmentType" }];

    this.rowData = [
      {
        orgHierarchy: ["Worldwide"],
        jobTitle: "CEO",
        employmentType: "Permanent",
      },
      {
        orgHierarchy: ["Worldwide", "Malcolm Barrett"],
        jobTitle: "Exec. Vice President",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Worldwide", "Melt"],
        jobTitle: "Exec. Vice President",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Worldwide", "Melt",'ABSC'],
        jobTitle: "Exec. Vice President",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Worldwide", "Malcolm Barrett", "Esther Baker"],
        jobTitle: "Director of Operations",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Worldwide", "Malcolm Barrett", "Esther Baker", "Brittany Hanson"],
        jobTitle: "Fleet Coordinator",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Worldwide", "Malcolm Barrett", "Esther Baker", "Brittany Hanson", "Leah Flowers"],
        jobTitle: "Parts Technician",
        employmentType: "Contract"
      },
      {
        orgHierarchy: ["Worldwide", "Malcolm Barrett", "Esther Baker", "Brittany Hanson", "Tammy Sutton"],
        jobTitle: "Service Technician",
        employmentType: "Contract"
      },
      {
        orgHierarchy: ["Worldwide", "Malcolm Barrett", "Esther Baker", "Derek Paul"],
        jobTitle: "Inventory Control",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Worldwide", "Malcolm Barrett", "Francis Strickland"],
        jobTitle: "VP Sales",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Worldwide", "Malcolm Barrett", "Francis Strickland", "Morris Hanson"],
        jobTitle: "Sales Manager",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Worldwide", "Malcolm Barrett", "Francis Strickland", "Todd Tyler"],
        jobTitle: "Sales Executive",
        employmentType: "Contract"
      },
      {
        orgHierarchy: ["Worldwide", "Malcolm Barrett", "Francis Strickland", "Bennie Wise"],
        jobTitle: "Sales Executive",
        employmentType: "Contract"
      },
      {
        orgHierarchy: ["Worldwide", "Malcolm Barrett", "Francis Strickland", "Joel Cooper"],
        jobTitle: "Sales Executive",
        employmentType: "Permanent"
      }
    ];
  }

  ngOnInit() {
    // this.rowData = this.http.get('https://jsonplaceholder.typicode.com/albums')
    // used pipe | async when data get from http

    this.getStudiesRowData();
    this.getColumnDefStudies();
    this.getHistoricalStartuprowData();

    this.getDataPath =  (data) => {
      return data.orgHierarchy;
    };

    this.autoGroupColumnDef = {
      headerName: 'Geography',
      pinned: 'left',
      cellRendererParams: { suppressCount: true }
    };
    this.groupDefaultExpanded = -1;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }


  onRowSelected(event) {
  }


  getHistoricalStartuprowData() {
  }



  getColumnDefStudies() {
    this.ColumnDefStartupM = this.startM.getColumnDef();
    if (this.ColumnDefStartupM.length > 0) {
      const Objectkyes = [];
      this.ColumnDefStartupM.forEach(element => {
        // tslint:disable-next-line: no-string-literal
        Objectkyes.push(element['field'].toLowerCase());
      });
      this.ColumnDefHeaderName = Objectkyes;
    }
  }

  getStudiesRowData() {
    this.startM.getHistoricalStudiesRowData().subscribe((data) => {
      const studies = data.serviceResponse.studyPerformanceMetrics.study;
      this.rowDataObjectArray(studies);
      this.allStudies = studies.length;
    }, (error) => { console.log('error in fetching json'); });
  }

  rowDataObjectArray(studies) {
  }

  getMetricNamequantites(element) {
  }
}
