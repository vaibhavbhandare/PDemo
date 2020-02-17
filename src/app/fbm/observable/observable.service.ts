import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable()

export class ObservableService {

    constructor() {

    }
    public url: string = "http://jsonplaceholder.typicode.com/users";

    getUserdata(): Observable<any> {
        let observableObject = new Observable((observer) => {
            observer.next(this.url)

            setTimeout(() => {
                observer.next('String Get Reflected from Observable next method')
                // observer.unsubscribe()
            }, 5000)
        })
        return observableObject
    }
}