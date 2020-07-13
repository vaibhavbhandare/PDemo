import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class CovidDataService {

    public headline = 'This is covid center';
    public newUpdate: any;
    public subject = new Subject<any>();

    constructor() {
    }

    getcovidData(): Observable<any> {
        this.newUpdate = new Observable( (observer) => {
            observer.next(this.headline);
        });
        return this.newUpdate;
    }

    setCountryCount() {

    }

    getCountryCount(): Observable<any> {
      return;
    }
}
