import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()

export class UserService {

    public url = 'http://jsonplaceholder.typicode.com/users';
    public covidUrl = 'http://localhost:3000/Todos';
    public id: any;
    public data: any;

    constructor(private http: HttpClient) {
    }

    getUserdata(): Observable<any> {
       return this.http.get(this.url);
    }

    getUserdataPromis(): Promise<any> {
        return this.http.get(this.url).toPromise();
    }

    postUserdata(value): Observable<any> {
        return this.http.post(this.url + '/', value);
    }

    getCovidPatient(): Observable<any> {
        return this.http.get(this.covidUrl + '/');
    }

    // below method check the user is login or not depends on status gives
    // permission to the url visit or not for particular component

    isuserLogin(): boolean {
      return true;
    }

    isloginCovidMChild(): boolean {
        return false;
    }

    postSelectedData(value): Observable<any> {
        return this.http.post(this.covidUrl, value);
    }

    deleteCovidData(id) {
      return this.http.delete(this.covidUrl + '/' + id);
    }

}
