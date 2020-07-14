import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class CovidDataService {

    public headline = 'This is covid center';
    public newUpdate: any = '';
    public subject = new Subject<any>();

    constructor() {
    }

    // below method explain the observable next
    getcovidData(): Observable<any> {
        this.newUpdate = new Observable( (observer) => {
            observer.next(this.headline);
            // setTimeout(() => {
            //     observer.next('String Get Reflected from Observable next method');
            //     // observer.unsubscribe()
            // }, 5000);
        });
        return this.newUpdate;
    }

    CountryCounts(value) {
      this.newUpdate = value;
    }

    CountryCount() {
      return this.newUpdate;
    }
}
