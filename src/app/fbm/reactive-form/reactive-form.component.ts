import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder , Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private datePipe: DatePipe) { }

  public changename = 'vaibhav';
  public title = 'Maharashtra Mega Bharati Online 2020';
  public todaydate: string;

  name = new FormControl('Hi');

  // megaBharatiForm = new FormGroup({
  //   name : new FormControl('Vaibhav'),
  //   lastname : new FormControl(''),
  //   age : new FormControl(''),
  //   address : new FormGroup({
  //     street : new FormControl('MH'),
  //     city : new FormControl(''),
  //     state : new FormControl(''),
  //     zipcode : new FormControl('')
  //   })
  // })

  // Using FormBuilder

  megaBharatiForm = this.fb.group({
    name: ['Enter First Name' , [Validators.required, Validators.minLength(4)]],
    lastname: ['Enter Last Name' , [Validators.required, Validators.minLength(4)]],
    ages : [0, [Validators.required, Validators.minLength(4)]],
    address: this.fb.group({
      street: ['MH'],
      city: [''],
      state: [''],
      zipcode: ['']
    })
  });

  ngOnInit() {
    this.todaydate = this.datePipe.transform(Date.now());
  }

  updateName() {
    this.name.setValue(this.changename);
  }

  onSubmit(value) {
     console.log(value);

  }
}
