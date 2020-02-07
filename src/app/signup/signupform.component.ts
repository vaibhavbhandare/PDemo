import { Component, OnInit } from '@angular/core';
import {Person} from './Person';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-signupform',
    templateUrl: 'signupform.component.html',
    
})
export class SignUpFormComponent  {
    public id:any =5;
    person:Person = {
            name : 'James',             
            phone:"1234",
            address:'India'
        
    }

    constructor(private userser:UserService, private router:Router){}

    

    submitform(value){
        //console.log(value);
        
      this.userser.postUserdata(value).subscribe(data=>{
          alert('data submitted');
      })
    }

    navigate(){
      this.router.navigate(['/inventory', 2])
    }
 
}