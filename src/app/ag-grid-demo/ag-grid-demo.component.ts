import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-ag-grid-demo',
  templateUrl: './ag-grid-demo.component.html',
  styleUrls: ['./ag-grid-demo.component.scss']
})
export class AgGridDemoComponent implements OnInit {

  @ViewChild('agGrid', { read: true, static: true }) agGrid: AgGridAngular;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.rowData = this.http.get('https://jsonplaceholder.typicode.com/albums')
  }

  columnDefs = [
    { headerName: 'UserId', field: 'userId', sortable: true, filter: true, checkboxSelection: true },
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Title', field: 'title', sortable: true, filter: true },
  ];

  rowData: any;

  getSelectedRows() {
    const selectedNodes = this.agGrid
    console.log(selectedNodes);
    
    // const selectedData = selectedNodes.map(node => node.data);
    // const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
    // alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}
