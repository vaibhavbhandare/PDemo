import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface ColumnDefination {
  headerName?: any;
}

@Injectable({
  providedIn: 'root'
})
export class StartupmService {

  constructor(private http: HttpClient) { }

  getHistoricalStartupMetricrowData(): Observable<any> {
    return this.http.get('assets/data/getInvestigatorList.json');
  }

  getHistoricalStudiesRowData(): Observable<any> {
    return this.http.get('assets/data/performHistAnalysisDetail.json');
  }

  getColumnDef(): [] {
    const columndata: any = [];
    columndata.push(
      { headerName: 'StudyID', field: 'studyId' },
      { headerName: 'Tags', field: 'tagKeys' },
      { headerName: 'Startup Time (FPA to FSI in Days)', field: 'start_up_time' },
      { headerName: 'FSI_TO_FSS', field: 'fsi_to_fss' },
      { headerName: 'ACTIVE_SITES', field: 'active_sites' },
      { headerName: 'SITES_ACTIVELY_SCREENING', field: 'sites_actively_screening' },
      { headerName: 'SITE_INIT_PERIOD', field: 'site_init_period' },
      { headerName: 'SI_25_PERCENT', field: 'si_25_percent' },
      { headerName: 'SI_50_PERCENT', field: 'si_50_percent' },
      { headerName: 'SI_90_PERCENT', field: 'si_90_percent' },
      { headerName: 'AVG_SITE_INIT_RATE', field: 'avg_site_init_rate' },
      { headerName: 'INITIATED_SITES', field: 'initiated_sites' }
    );
    return columndata;
  }



}
