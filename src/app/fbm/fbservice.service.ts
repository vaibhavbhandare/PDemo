import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Observable} from 'rxjs';

@Injectable()
export class FbserviceService {

  subject = new Subject<any>();
  constructor() { }

  setdata(data){
   this.subject.next(data)
  }

  getData():Observable<any>{
    return this.subject.asObservable();
  }

}
