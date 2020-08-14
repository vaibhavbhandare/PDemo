import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { HeaderAuthService } from '../header.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, ThemePalette, MatCheckboxModule  } from '@angular/material';
import { Router } from '@angular/router';
import { SubmitUserComponent } from './common/submituser.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterContentInit {

  public UN = 'admin';
  public PWD = 'admin';
  public changeColor: boolean;
  public role = '179.54567';
  public stockChangeForm: any;
  public serviceProduct: Array<string>;
  public color: ThemePalette = 'primary';
  public checked: boolean;
  public disabled: boolean;
  public chnagetext: boolean;

  constructor(private auth: HeaderAuthService,
              private fb: FormBuilder, private dialog: MatDialog,
              private router: Router) {
    this.changeColor = false;
    this.serviceProduct = ['Google', 'Facebook', 'MicroSoft', 'BMW'];
  }

  @ViewChild('toggle', {static: true}) toggleRef: any;

  ngOnInit() {
    this.stockChangeForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      selectedProduct: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      text: new FormControl({value: '', disabled: this.chnagetext}, [Validators.required, Validators.maxLength(10)]),
      toggle: new FormControl('', [Validators.required])
    });

    // this.stockChangeForm = this.fb.group({
    //   name: ['', [Validators.required, Validators.minLength(6)]],
    //   selectedProduct: ['', [Validators.required]],
    //   date: ['', Validators.required],
    //   text: ['', [Validators.required, Validators.minLength(10)]]
    // })
  }

  ngAfterContentInit() {
    // console.log(this.toggleRef);
  }

  login() {
    this.auth.setUname(this.UN);
    this.changeColor = false;
  }

  changeHeadingColor() {
    this.changeColor = true;
    this.role = Number(this.role).toFixed(0);
  }

  onSubmit(value) {
    console.log(value);
    const dialogRef = this.dialog.open(SubmitUserComponent, {
      width: '400px', height: '200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      console.log(result);
    });

  }

  onCancel() {
    this.stockChangeForm.reset();
    // this.router.navigate(['/user']);
  }

  openSignUpform() {
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.stockChangeForm.controls[controlName].hasError(errorName);
  }

  toggleChange() {
   console.log(this.stockChangeForm.value.toggle);
   this.chnagetext = this.stockChangeForm.value.toggle;
  }

}
