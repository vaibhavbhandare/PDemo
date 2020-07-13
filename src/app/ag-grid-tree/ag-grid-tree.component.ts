import { Component, OnInit } from '@angular/core';
import { GridApi, ColumnApi, GridReadyEvent, GridOptions } from 'ag-grid-community';
import { AllModules } from "@ag-grid-enterprise/all-modules";
@Component({
  selector: 'app-ag-grid-tree',
  templateUrl: './ag-grid-tree.component.html',
  styleUrls: ['./ag-grid-tree.component.scss']
})
export class AgGridTreeComponent implements OnInit {

  public checked = false;
  public gridOptions: GridOptions;
  public groupDefaultExpanded;
  public getDataPath;
  public autoGroupColumnDef;
  public columnDefs: any;
  public rowData: any;
  public modules = AllModules;
  constructor() {
    this.columnDefs = [{ field: "jobTitle" }, { field: "employmentType" }];

    this.rowData = [
      {
        orgHierarchy: ["Erica Rogers"],
        jobTitle: "CEO",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett"],
        jobTitle: "Exec. Vice President",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker"],
        jobTitle: "Director of Operations",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Brittany Hanson"],
        jobTitle: "Fleet Coordinator",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Brittany Hanson", "Leah Flowers"],
        jobTitle: "Parts Technician",
        employmentType: "Contract"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Brittany Hanson", "Tammy Sutton"],
        jobTitle: "Service Technician",
        employmentType: "Contract"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Derek Paul"],
        jobTitle: "Inventory Control",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland"],
        jobTitle: "VP Sales",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Morris Hanson"],
        jobTitle: "Sales Manager",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Todd Tyler"],
        jobTitle: "Sales Executive",
        employmentType: "Contract"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Bennie Wise"],
        jobTitle: "Sales Executive",
        employmentType: "Contract"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Joel Cooper"],
        jobTitle: "Sales Executive",
        employmentType: "Permanent"
      }
    ];


  }

  ngOnInit() {
    this.getDataPath = function (data) {
     // console.log(data);
      return data.orgHierarchy;
    };

    this.autoGroupColumnDef = {
      headerName: "Organisation Hierarchy",
      pinned: 'left',
      width: 500,
      cellRendererParams: { suppressCount: true }
    };
    this.groupDefaultExpanded = -1;
    
  }
}
