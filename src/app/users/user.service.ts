import{Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()

export class UserService {

    public url:string ="http://jsonplaceholder.typicode.com/users";
    public covidUrl:string = "http://localhost:3000/Todos";

    constructor(private http:HttpClient){
       
    }


    getUserdata():Observable<any>{
       return this.http.get(this.url)
    }

    getUserdataPromis():Promise<any>{
        return this.http.get(this.url).toPromise()
    }

    postUserdata(value):Observable<any>{
        return this.http.post(this.url+'/',value)
    }

    getCovidPatient(): Observable<any> {
        return this.http.get(this.covidUrl + '/');
    }
}