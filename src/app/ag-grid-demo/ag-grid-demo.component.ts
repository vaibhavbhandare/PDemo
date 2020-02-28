import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi, ColumnApi, GridReadyEvent, GridOptions } from 'ag-grid-community';
@Component({
  selector: 'app-ag-grid-demo',
  templateUrl: './ag-grid-demo.component.html',
  styleUrls: ['./ag-grid-demo.component.scss']
})
export class AgGridDemoComponent implements OnInit , OnChanges{

  private gridApi:GridApi;
  private columnApi:ColumnApi;
  public checked = false;
  public gridOptions: GridOptions;

  @ViewChild('agGrid', { read: ElementRef, static: true }) agGrid: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.rowData = this.http.get('https://jsonplaceholder.typicode.com/albums')
    // used pipe | async when data get from http
    this.gridOptions ={
       rowData : this.rowData,
       columnDefs : this.columnDefs,
      //  getNodeChildDetails : (rowitem:any) =>
      //  {
      //     if(rowitem.country){
      //       return {
      //         group: rowitem.country === 'India',
      //         expanded:rowitem.juniors.length > 0,
      //         children:rowitem.juniors
      //       }
      //     } else {
      //       return null;
      //     }
      //  }
    }

  }

  ngOnChanges(samples:any){
      console.log(samples);   
  }

  columnDefs = [
    { headerName: 'UserId', field: 'userId', checkboxSelection: true , cellRenderer:'agGroupCellRenderer'},
    { headerName: 'Name', field: 'name' },
    { headerName: 'Age', field: 'age' },
    { headerName: 'RT', field: 'RT' },
    { headerName: 'Country', field: 'country' },
    { headerName: 'Weekly SR' , field:'weeklysr'}
  ];

  rowData: any=[
    { userId:1 , name:'Vaibhav' , age:5 , RT:4200 , country:'India', weeklysr:78.5,
     juniors:[]},
    { userId:2 , name:'Anil' , age:8, RT:200 , country:'Aus', weeklysr:8.5},
    { userId:3 , name:'Sachin' , age:21 , RT:100 , country:'Tokiyo', weeklysr:78.5},
    { userId:4 , name:'Amit' , age:2 , RT:500 , country:'Japan', weeklysr:48.5},
    { userId:5 , name:'Dipak' , age:84 , RT:800 , country:'England', weeklysr:78},
    { userId:6 , name:'Pradeep' , age:4 , RT:10000 , country:'Poland', weeklysr:78.5},
    { userId:7 , name:'Kushal' , age:78 , RT:4000 , country:'Shrilanka', weeklysr:8.5}
  ];

  child:any = [
    {
      userId:10 , name:'child' , age:'76', RT:900,country:'zombi',weeklysr:45
    }
  ]

  onrowGroupOpened(event){
    if(event.node.expanded && event.node.data.juniors.length === 0){
     
    }
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.nativeElement.checkboxSelection
    console.log(selectedNodes);

    // const selectedData = selectedNodes.map(node => node.data);
    // const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
    // alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  onCountryGridReady(event:GridReadyEvent){
     console.log(event.type)
  }

  onRowClicked(event){
    console.log(event.data); // it gives which row clicked value
  }

  onRowSelected(event){
    console.log(event.data) // it gives which row selected with checkbox values
  }

}
