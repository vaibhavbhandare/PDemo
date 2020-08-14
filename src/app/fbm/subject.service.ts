import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private msg = new Subject<any>();
  public msgBroadcaster = this.msg.asObservable();

  constructor() { }

  setMsg(getMsg) {
    this.msg.next(getMsg);
  }
}
