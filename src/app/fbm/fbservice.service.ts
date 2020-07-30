import { Injectable } from '@angular/core';
import { Subject , Observable} from 'rxjs';

@Injectable()
export class FbserviceService {

  public subject = new Subject<any>();

  constructor() { }

  setdata(data) {
   this.subject.next(data);
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

}
