import { Injectable } from "@angular/core";
import { Subject , Observable } from 'rxjs';

@Injectable()

export class HeaderAuthService {

    constructor(){

    }
  
    subject = new Subject<string>();

    setUname(name:string){
      this.subject.next(name)
    }

    getUname():Observable<String>{
     return this.subject.asObservable();
    }

}