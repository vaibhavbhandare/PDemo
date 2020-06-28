import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder , Validators} from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  public changename = 'vaibhav';
  public title = 'Maharashtra Mega Bharati Online';

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
    name: ['' , [Validators.required, Validators.minLength(4)]],
    lastname: ['' , Validators.required],
    age : [''],
    address: this.fb.group({
      street: ['MH'],
      city: [''],
      state: [''],
      zipcode: ['']
    })
  });

  ngOnInit() {
  }

  updateName() {
    this.name.setValue(this.changename);
  }

  onSubmit(value) {
     console.log(value);

  }
}
